## Steering the beam: scanners, color and effects

**The short version:** A laser show picture is one dot, moved so fast by two small mirrors that the eye joins it into lines. The mirrors ride on galvanometers rated in points per second, and "30K at 8 degrees" means the pair can draw ILDA's standard test pattern correctly at 30,000 points per second when the pattern is 8 degrees wide. Color comes from switching and dimming the lasers themselves, a job a crystal modulator did in the gas era, and a good share of classic effects never touch a scanner at all.

### How does a laser draw a picture?

The picture is a single point of light that never stops moving. A **galvanometer scanner**, or galvo, is a limited-rotation motor with a small mirror on its shaft. A projector has two, one swinging the beam left and right (X) and one up and down (Y).[^mac-lfw-perry-2016][^mac-pangolin-projector] The beam retraces the same path fast enough that persistence of vision turns the moving dot into a steady line; Kvant puts the threshold at "more than 20 times per second".[^mac-kvant-learn][^mac-pangolin-types]

The motor typically turns about 20 degrees either side of center. Because a mirror turns a reflected beam through twice its own angle, that gives up to about 80 degrees of sweep, peak to peak.[^mac-lfw-perry-2016]

A television draws a **raster**, hundreds of closely spaced horizontal lines. Mirrors with mass cannot move fast enough for that, so laser images are **vector** drawings, mostly outlines.[^mac-laserfx-graphics] Each image, or **frame**, is a list of **points**. A point is the smallest thing the software controls - an X position, a Y position, on or off, and usually a color.[^mac-laserfx-glossary] Digital-to-analog converters turn the list into voltages for the two galvos.[^mac-laserfx-graphics] One show producer describes it as drawing with a pencil of light: more than 1,000 points an image, about 30,000 points a second.[^mac-11alive-stone-mountain]

The parts are older than the software. Honeywell x-y galvanometers were in use by 1969.[^mac-lfw-2004] Early scanners were moving-iron designs; the moving-magnet motor was patented in 1976 and only became practical with neodymium magnets in the late 1980s, reaching production in 1992.[^mac-lfw-perry-2016] A good modern galvo can return to the same spot within 5 microradians, which is 5 mm at a distance of 1 km.[^mac-lfw-perry-2016]

### What does "closed loop" mean on a scanner?

A **closed-loop** galvo checks its own work. A position detector inside each one reports where the mirror is, and a servo amplifier compares that with where the mirror was told to be and corrects the difference.[^mac-wp-projector][^mac-lfw-perry-2016] It is the common type. Open-loop scanners have no position feedback, though in the 1990s they could still reach the 12K standard with amplifiers that fed back acceleration instead.[^mac-laserfx-tuning]

The feedback signal has a second use. A scan-fail circuit, one of the protections in [/safety/](/safety/), can read it to tell whether the beam is still moving, and cut the light if it is not.[^mac-pangolin-scanfail]

### What does "30K at 8 degrees" mean?

Scanner speed is rated in **points per second** - pps, or **kpps** for thousands - and ratings in circulation include 8k, 12k, 20k, 30k, 35k, 50k and 60k.[^mac-wp-projector] The number alone says little, so the trade agreed on a picture to measure it with.

The **ILDA test pattern** was adopted on June 24, 1992, and the published document is revision 002 of October 1995.[^mac-laserfx-tuning][^mac-ilda-test-pattern] Among its elements is a circle drawn inside a square. The software sends the pattern at exactly 12,000 or 30,000 points per second, within 1%. On correctly tuned scanners the circle stays round and touches the midpoints of the square's sides. If the circle bulges outside the square, the scanners are faster than the rating needs; if it shrinks inside, they are too slow for that rate.[^mac-ilda-test-pattern][^mac-pangolin-test-pattern]

So "30K at 8 degrees" means this scanner draws that pattern correctly at 30,000 points per second when the pattern is 8 degrees wide, measured optically.[^mac-ilda-test-pattern] At 8 degrees the pattern is about one seventh as wide as the distance to the screen.[^mac-laserfx-60k][^mac-pangolin-test-pattern] The older 12K standard is measured at up to 15 degrees.[^mac-ilda-test-pattern]

The angle is half the rating. "It is impossible to scan both fast and wide," as Pangolin puts it, and a claim such as "30K at 4 degrees" is not a true 30K rating.[^mac-pangolin-test-pattern][^mac-ilda-specs] In the 1990s a General Scanning G-120 managed about 40 degrees at 12K and about 25 degrees at 30K.[^mac-laserfx-tuning] The rate is also a reference for tuning, and the standard says it applies only during adjustment; artwork can be played slower or faster.[^mac-ilda-test-pattern] Faster is not always better either, since some projectors use slower scanners with bigger mirrors to get the most light out.[^mac-ilda-specs]

### How fast can scanners go?

Cambridge Technology's 6800 arrived in 1992 rated at 24K and was tuned to 30K.[^mac-lfw-2004][^mac-laserfx-60k] By the summer of 1999 Pangolin was showing a modified 6800 drawing the test pattern at 52,083 points per second at 6 degrees, and a Cambridge 6210 measured about 60 kpps at about 4 degrees - numbers that come with their smaller angles attached.[^mac-laserfx-60k] The Cambridge 6215H reached 60 kpps at 7.5 degrees by 2004.[^mac-lfw-2004] For the budget end, a complete MediaLas 30K scanner set retailed at $1,000 in 1999.[^mac-laserfx-60k]

Maker specifications from 2023 to 2026 sit in the same range. Kvant lists ScannerMAX Compact 506 scanners at 40 kpps at 8 degrees with a 60-degree maximum, the Saturn 5 at 48 kpps at 7 degrees and the Saturn 1 at 60 kpps at 7 degrees.[^mac-kvant-clubmax10][^mac-kvant-catalogue] Its 40 W unit uses a slower set, 30 kpps at 8 degrees.[^mac-kvant-clubmax40]

What speed buys depends on the show. Pangolin's guide is 30K for beams and basic text, 40 to 50K for sharper graphics and 60K for high-fidelity work.[^mac-pangolin-projector] A German retailer's rule of thumb is 25 kpps at 8 degrees for simple shapes and 40 kpps for complex graphics.[^mac-steinigke]

### Why do complicated laser graphics flicker?

Because the dot has a budget. **Flicker** appears when the scanner cannot finish the path before persistence of vision lets the start of it fade.[^mac-laserfx-glossary] The redraw rate is the point rate divided by the number of points in the frame, so every point added to a drawing slows all of it down.[^mac-pangolin-wiki-vectors]

ILDA's test pattern has 1,192 points, and a 30K scanner draws it about 25.2 times a second. A scanner that manages only 16 redraws of the same frame is working at about 19K.[^mac-ilda-specs] A frame of 1,500 points at 30,000 points per second comes around 20 times a second, right at the edge; LaserFX gave 18 to 22 redraws a second as typical.[^mac-laserfx-graphics]

The budget is spent on more than the visible lines. Mirrors have inertia, so the software parks extra points at each corner to give them time to stop and start. Too few and the line cuts the corner or overshoots; too many and the corner shows up as a bright dot.[^mac-pangolin-wiki-vectors] The jumps between separate shapes cost points too, and the ILDA pattern includes corner and blanking tests for this reason.[^mac-ilda-test-pattern][^mac-laserfx-tuning]

Raising the point rate is not a free fix. Each point gets a smaller share of the light, and past the scanners' limit the beam cannot reach the next point in time, so straight lines start to bend.[^mac-pangolin-wiki-vectors] A logo is easy. A cartoon character with a face and 10 fingers is where the arithmetic bites.

### How does the beam switch off between letters?

**Blanking** is turning the beam fully off while the mirrors travel between parts of an image, so that no line joins one letter to the next.[^mac-pangolin-definitions] The LaserFX glossary defines it as switching the beam on and off "with precise control".[^mac-laserfx-glossary] Precision is the hard part, because the light has to change at the moment the mirrors arrive, and the mirrors lag. A blank point at the end of a line gives the scanner time to stop; without one a "tear" can trail after the line.[^mac-pangolin-wiki-vectors] The ILDA pattern has a section for tuning this, in which a row of lines should converge on a mark with the fifth dot barely visible and the sixth fully dark.[^mac-ilda-test-pattern]

In the gas era the switching happened outside the laser. Early projectors used a third galvo to swing the beam aside, which threw away about 50% of the light even when the beam was "on".[^mac-makhov-pcaom]

### How did gas-laser shows change color?

Slowly, at first. The **color box** held three actuators carrying cyan, magenta and yellow dichroic filters, which subtracted from a white-light beam to give seven colors. It was cheap, mechanical and slow.[^mac-laserfx-projectors][^mac-makhov-pcaom]

The **polychromatic acousto-optic modulator (PCAOM)**, introduced in 1992, replaced the color box, the three-cell modulators that preceded it and the blanking galvo in one part under 2 inches a side.[^mac-lfw-2004][^mac-makhov-pcaom] It is a crystal of tellurium dioxide driven by radio-frequency signals. Each radio frequency diffracts one laser line out of the beam, and the strength of that signal sets how bright the line is.[^mac-makhov-pcaom]

Greg Makhov's 1993 description put it at more than 300,000 changes of color or intensity per second, up to six wavelengths at once, over 90% efficiency in blue and 80 to 85% in red. Extinction was about -50 dB, meaning a 20 W laser leaked about 0.2 mW when "off".[^mac-makhov-pcaom] LaserFX credited the device with 16.7 million colors or more.[^mac-laserfx-projectors] Gas-laser beams could also be sent down optical fiber to remote projection heads, with the PCAOM placed ahead of the fiber.[^mac-makhov-pcaom]

### How does a diode projector make its colors?

By turning its lasers up and down. Diode and DPSS modules (see [/lasers/](/lasers/)) are modulated directly, so blanking is built in and no PCAOM is needed.[^mac-laserfx-lasers]

There are two grades. With **analog modulation** each laser's brightness varies continuously, usually in 256 steps a color, for about 16.7 million combinations.[^mac-ilda-specs] With **TTL** each laser is only on or off, which gives seven colors - eight by ILDA's count, which includes black - and no fades.[^mac-pangolin-specs][^mac-ilda-specs] Real modules are not perfectly linear. Brightness can hold flat and then drop, and a mixed color can drift as it dims; software color balancing corrects for it.[^mac-ilda-specs]

The red, green and blue beams are merged into one with **dichroic** mirrors, each of which passes one color and reflects the others.[^mac-wp-projector][^mac-pangolin-projector] Red and green make yellow, green and blue make cyan, red and blue make magenta, and all three make white.[^mac-kvant-learn] The beams have to match in size as well as in aim, or mixed colors show halos at the edges.[^mac-kvant-learn]

### Which laser effects need no scanner at all?

Some of the oldest effects in the trade are a beam and a piece of glass.

A **diffraction grating** is material ruled with microscopic lines that splits one beam into many copies; the common kind makes a grid.[^mac-laserfx-glossary] ILDA's Standard Projector specified, as its default first effect, an eight-point burst grating on a 100 mm rotating disk.[^mac-isp-effects] The cheap club and DJ "grating laser" works the same way, with a low-power diode shining through an effects wheel to scatter moving dots over walls and floor.[^mac-bax-tech-talk]

**Lumia** is the soft, gauze-like drifting pattern made by sending a beam through rippled glass or plastic, and the Standard Projector called for at least one rotating lumia, independent of the scanners.[^mac-laserfx-glossary][^mac-isp-effects]

Aerial beams came from a **beam table**. An **actuator** is a limited-rotation motor that swings a mirror into the beam at 45 degrees and sends it off at 90, and a row of them makes what LaserFX called a "digital beam switching device".[^mac-laserfx-projectors] Four positions was typical and large projectors had up to 16. Each position was aimed at a **bounce mirror** fixed somewhere in the venue, and every bounce reads as another beam: with 50/50 beamsplitters a four-position table gives eight beams, and bounced once they look like 16.[^mac-laserfx-projectors] Chase through the positions 15 to 20 times a second and they all appear lit, which is the scanner's trick again, played with fewer notes.[^mac-laserfx-projectors]

### What are tunnels, fans and "liquid sky"?

They are simple drawings seen from the side, and none of them exists in clean air. In ILDA's words "there must be particles in the air", and indoors that means haze or fog.[^mac-ilda-haze] Haze is a very fine mist that spreads evenly and gives smooth cones and sheets. Fog is thicker and billows.[^mac-ilda-haze]

Scan a circle and the haze turns it into a cone, or from inside, a **tunnel**. Scan a line and it hangs in the air as a **fan**. Spread the line wide and flat and it becomes a **sheet**, which can form a false ceiling over an audience.[^mac-laserfx-glossary][^mac-pangolin-types] **Liquid sky** is what happens when the air inside a sheet is uneven: the haze or fog visibly swirls through the plane of light.[^mac-laserfx-glossary][^mac-pangolin-types]

This is the split between a **beam show** and a **graphics show** drawn in [/basics/](/basics/). In the first the shapes are scanned through haze and watched in mid-air; in the second the laser draws logos, text and animation on a surface.[^mac-pangolin-types] A circle or a line takes far fewer points than a cartoon, so beam effects sit well inside the flicker budget.

### How does a laser harp work?

Laser harps are thinly documented. The fullest account is a Wikipedia article that flags its own missing citations, and it describes two designs. A framed harp puts a sensor at the far end of each beam and registers a note when a hand blocks the light. An unframed, or open, harp fans a single beam upward and watches for light scattered back off the player's hand, using timing to tell which beam was touched; light-colored gloves strengthen the signal.[^mac-wp-harp]

The same article credits Bernard Szajner with a French patent application in 1981, records Geoffrey Rose's claim to a UK provisional patent from 1975-76, and says Jean-Michel Jarre has played one in concert since 1981.[^mac-wp-harp]
