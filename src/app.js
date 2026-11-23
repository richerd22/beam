(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var all = function (sel, root) { return [].slice.call((root || document).querySelectorAll(sel)); };
  var norm = function (s) { return (s || "").normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase(); };
  function readJSON(id) { try { return JSON.parse($(id).textContent); } catch (e) { return null; } }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* theme: system by default, remembered per viewer */
  var tb = $("theme-btn"), root = document.documentElement;
  function isDark() { var t = root.dataset.theme; return t ? t === "dark" : !window.matchMedia("(prefers-color-scheme: light)").matches; }
  function label() { if (tb) tb.textContent = isDark() ? "House lights" : "Lights down"; }
  if (tb) { label(); tb.addEventListener("click", function () { var n = isDark() ? "light" : "dark"; root.dataset.theme = n; store("beam-theme", n); label(); }); }

  /* reading progress */
  var pr = $("progress");
  if (pr) window.addEventListener("scroll", function () {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    pr.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
  }, { passive: true });

  /* footnotes: hover or focus shows the source title */
  all("sup.fn a").forEach(function (a) {
    var li = $("src-" + a.dataset.n); if (li) a.title = li.textContent.trim();
  });

  /* chip groups + search filter helper */
  function filter(input, chipsSel, items, attrS, attrK) {
    var q = $(input), k = "", chips = all(chipsSel);
    function go() {
      var t = norm(q ? q.value.trim() : ""), n = 0;
      items.forEach(function (el) {
        var m = (!t || norm(el.dataset[attrS] || el.textContent).indexOf(t) > -1) && (!k || el.dataset[attrK] === k);
        el.classList.toggle("hide", !m); if (m) n++;
      });
      return n;
    }
    chips.forEach(function (b) { b.addEventListener("click", function () { k = b.dataset[attrK]; chips.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); after(go()); }); });
    var cnt = null, after = function (n) { if (cnt) cnt.textContent = n + " of " + items.length; };
    if (q) q.addEventListener("input", function () { after(go()); });
    return function (c) { cnt = c; after(go()); };
  }
  [["ty", "#types"], ["ru", "#rules"], ["lm", "#landmarks"]].forEach(function (t) {
    var rows = all("#" + t[0] + "-list tr");
    if (rows.length) filter(t[0] + "-q", t[1] + " .chips button", rows, "s", "k")($(t[0] + "-cnt"));
  });
  var gl = all("#gl-list li");
  if (gl.length) filter("gl-q", "#glossary .chips button", gl, "s", "x")(null);
  var tl = all("#tl-list li");
  if (tl.length) filter(null, "#timeline .chips button", tl, "s", "era")(null);

  /* the console: two oscillators and a phase knob, drawn the way an analog laser console drew them */
  var cv = $("dome");
  if (cv && cv.getContext) {
    var ctx = cv.getContext("2d"), kx = $("k-x"), ky = $("k-y"), kp = $("k-p"), mode = "liss", col = { r: 0, g: 1, b: 0 }, ph = 0, W = 0, H = 0;
    var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches, seen = true;
    function size() { var r = cv.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1); W = cv.width = Math.max(2, Math.round(r.width * d)); H = cv.height = Math.max(2, Math.round(r.height * d)); }
    function ink(a) { return "rgba(" + (col.r ? 255 : 30) + "," + (col.g ? 255 : 40) + "," + (col.b ? 255 : 60) + "," + a + ")"; }
    function draw(fade) {
      var a = +kx.value, b = +ky.value, cx = W / 2, cy = H / 2, R = Math.min(W, H) * .42, i, t, x, y, n;
      ctx.globalCompositeOperation = "source-over"; ctx.shadowBlur = 0; ctx.fillStyle = "rgba(5,7,11," + fade + ")"; ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter"; ctx.lineWidth = Math.max(1, W / 520); ctx.shadowColor = ink(.9); ctx.shadowBlur = W / 60;
      if (mode === "fan") {
        n = a + b + 3; ctx.shadowBlur = W / 90;
        for (i = 0; i < n; i++) {
          t = (i / (n - 1) - .5) * 1.5 + Math.sin(ph * (1 + i % 3) + i) * .09 * a / 3;
          x = cx + Math.sin(t) * H * 1.5; y = H - Math.cos(t) * H * 1.5;
          var g = ctx.createLinearGradient(cx, H, x, y); g.addColorStop(0, ink(.75)); g.addColorStop(.55, ink(.18)); g.addColorStop(1, ink(0));
          ctx.strokeStyle = g; ctx.beginPath(); ctx.moveTo(cx, H * 1.02); ctx.lineTo(x, y); ctx.stroke();
        }
        return;
      }
      ctx.strokeStyle = ink(still ? .9 : .55); ctx.beginPath();
      for (i = 0; i <= 720; i++) {
        t = i / 720 * Math.PI * 2;
        if (mode === "liss") { x = Math.sin(a * t + ph); y = Math.sin(b * t); }
        else { var k = .5 + .12 * b; x = (Math.cos(t) + k * Math.cos((a + 2) * t + ph)) / (1 + k); y = (Math.sin(t) - k * Math.sin((a + 2) * t + ph)) / (1 + k); }
        if (i) ctx.lineTo(cx + x * R * 1.25, cy + y * R); else ctx.moveTo(cx + x * R * 1.25, cy + y * R);
      }
      ctx.stroke();
    }
    function frame() {
      if (seen && !document.hidden) { ph += (+kp.value) / 2600; draw(.2); }
      requestAnimationFrame(frame);
    }
    function once() { ph = .6; draw(1); }
    size(); window.addEventListener("resize", function () { size(); if (still) once(); });
    all(".keys button[data-m]").forEach(function (b) { b.addEventListener("click", function () { mode = b.dataset.m; all(".keys button[data-m]").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); if (still) once(); }); });
    all(".keys button.c").forEach(function (b) { b.addEventListener("click", function () {
      var c = b.dataset.c; col[c] = col[c] ? 0 : 1; if (!col.r && !col.g && !col.b) col[c] = 1;
      all(".keys button.c").forEach(function (x) { x.setAttribute("aria-pressed", col[x.dataset.c] ? "true" : "false"); }); if (still) once();
    }); });
    [kx, ky, kp].forEach(function (k) { k.addEventListener("input", function () { if (still) once(); }); });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { seen = e[0].isIntersecting; }).observe(cv);
    if (still) once(); else { ctx.fillStyle = "#05070b"; ctx.fillRect(0, 0, W, H); requestAnimationFrame(frame); }
  }

  /* quiz */
  var qd = readJSON("quiz-data"), qz = $("quiz");
  if (qd && qz) {
    var score = 0, done = 0;
    qd.forEach(function (q, i) {
      var d = document.createElement("div"); d.className = "q";
      d.innerHTML = "<p><b>" + (i + 1) + ".</b> " + q.q.replace(/</g, "&lt;") + "</p>";
      q.options.forEach(function (o, j) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = o;
        b.addEventListener("click", function () {
          if (d.dataset.done) return; d.dataset.done = 1; done++;
          if (j === q.answer) { score++; b.classList.add("right"); } else { b.classList.add("wrong"); d.querySelectorAll("button")[q.answer].classList.add("right"); }
          var w = document.createElement("p"); w.className = "why";
          w.innerHTML = q.why.replace(/</g, "&lt;") + (q.section ? ' <a href="/' + q.section + '/">Read more</a>' : "") + (done === qd.length ? " <b>Score: " + score + " of " + qd.length + ".</b>" : "");
          d.appendChild(w);
        });
        d.appendChild(b);
      });
      qz.appendChild(d);
    });
  }
})();
