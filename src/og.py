"""OG image + touch icon for The Beam: a fan of beams in haze over a dark dome, drawn in code. No brand marks."""
import math, os, sys
from PIL import Image, ImageDraw, ImageFont, ImageFilter
H = os.path.dirname(os.path.abspath(__file__))
OUT = os.environ.get("BEAM_OUT", "/home/claude/beam")
T = lambda n, s: ImageFont.truetype(f"{H}/ttf/{n}.ttf", s)
W, Hh = 1200, 630
BG, INK, GREEN, MUTED = (4, 6, 10), (230, 235, 238), (45, 255, 122), (141, 152, 164)


def beams(size, origin, n, spread, length, width):
    layer = Image.new("RGB", size, (0, 0, 0))
    d = ImageDraw.Draw(layer)
    ox, oy = origin
    for i in range(n):
        a = -math.pi / 2 + (i / (n - 1) - .5) * spread
        d.line([(ox, oy), (ox + math.cos(a) * length, oy + math.sin(a) * length)], fill=GREEN, width=width)
    return layer


im = Image.new("RGB", (W, Hh), BG)
glow = beams((W, Hh), (880, 700), 11, 1.5, 1100, 9).filter(ImageFilter.GaussianBlur(16))
core = beams((W, Hh), (880, 700), 11, 1.5, 1100, 2)
from PIL import ImageChops
im = ImageChops.add(im, Image.eval(glow, lambda v: int(v * .55)))
im = ImageChops.add(im, core)
# haze falloff toward the top, and room for the words on the left
fade = Image.new("L", (W, Hh), 0)
fd = ImageDraw.Draw(fade)
for x in range(W):
    fd.line([(x, 0), (x, Hh)], fill=int(235 * max(0, 1 - x / 640) ** 1.4))
im = Image.composite(Image.new("RGB", (W, Hh), BG), im, fade)
d = ImageDraw.Draw(im)
n_src = sys.argv[1] if len(sys.argv) > 1 else ""
d.text((60, 92), "COLD.FYI DEEP DIVE NO. 12", font=T("ibm-plex-mono-latin-600-normal", 20), fill=MUTED)
d.text((56, 138), "THE", font=T("michroma-latin-400-normal", 104), fill=INK)
tg = Image.new("RGB", (W, Hh), (0, 0, 0)); ImageDraw.Draw(tg).text((56, 262), "BEAM", font=T("michroma-latin-400-normal", 104), fill=GREEN)
im = ImageChops.add(im, Image.eval(tg.filter(ImageFilter.GaussianBlur(14)), lambda v: int(v * .6)))
d = ImageDraw.Draw(im)
d.text((56, 262), "BEAM", font=T("michroma-latin-400-normal", 104), fill=GREEN)
d.text((60, 432), "How laser shows work: the planetarium", font=T("source-serif-4-latin-400-italic", 30), fill=INK)
d.text((60, 472), "years, the machines and the rules.", font=T("source-serif-4-latin-400-italic", 30), fill=INK)
d.text((60, 552), "BEAM.COLD.FYI" + (f"  ·  {n_src} SOURCES" if n_src else ""), font=T("ibm-plex-mono-latin-600-normal", 20), fill=MUTED)
d.rectangle([0, Hh - 4, W, Hh], fill=GREEN)
im.save(f"{OUT}/og.png", optimize=True)
ic = Image.new("RGB", (180, 180), BG)
ic = ImageChops.add(ic, Image.eval(beams((180, 180), (90, 168), 5, 1.3, 220, 8).filter(ImageFilter.GaussianBlur(5)), lambda v: int(v * .6)))
ic = ImageChops.add(ic, beams((180, 180), (90, 168), 5, 1.3, 220, 3))
ImageDraw.Draw(ic).ellipse([80, 158, 100, 178], fill=GREEN)
ic.save(f"{OUT}/apple-touch-icon.png")
print("og ok")
