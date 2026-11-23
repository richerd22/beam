## What a laser show is

**The short version:** A laser show is a narrow beam of colored light, steered by two small mirrors fast enough that your eye reads the moving dot as lines, fans, tunnels or cartoons. In the air it needs haze to be seen at all; on a wall it draws like a pen. Plenty of things with "laser" on the box are something else - video projectors, star projectors, searchlights, stage "holograms" - and the difference comes down to whether a raw beam leaves the machine.

### What is a laser show?

A laser show has no pixels and no screen of its own. The projector puts out one thin beam, two mirrors aim it, and all of the light sits in a single moving point.[^bas-pangolin-projector][^bas-wp-laser-projector] Move that point through hazy air and it leaves shapes hanging over the crowd; move it across a wall, a dome or a building and it writes logos, text and animation.[^bas-pangolin-types] The beam retraces its path so quickly that the eye sees a steady line, and one maker puts the threshold at more than 20 passes per second.[^bas-kvant-basics]

The format is older than most of the music it gets set to. Laserium opened at Griffith Observatory in Los Angeles on November 19, 1973, and ran there for nearly three decades.[^bas-timeout-laserium] US regulations file the whole business under a flat name: a laser made or promoted for entertainment, display or art is a "demonstration laser product".[^bas-cfr-1040-10] How the format got from a planetarium dome to a stadium is in [/history/](/history/).

### How is a laser different from an ordinary light or an LED?

A neon sign glows by spontaneous emission: excited atoms release photons at random, in no agreed direction, with their waves out of step.[^bas-laserfx-lasers] A bulb or an LED is no more orderly. A laser forces the issue. "LASER" stands for light amplification by stimulated emission of radiation: a passing photon makes an excited atom release a second photon that matches the first in wavelength, direction and phase, and mirrors at each end of the laser send that light back through until it builds into a beam.[^bas-pangolin-laser-light][^bas-laserfx-lasers]

Two things follow, and a show depends on both.

- **One color.** Laser light is essentially a single wavelength, which is why laser red and laser green look so saturated.[^bas-laserfx-lasers][^bas-pangolin-laser-light]
- **A beam that stays narrow.** The waves are **coherent** - lined up in time and space - so the light spreads far less than ordinary light.[^bas-laserfx-lasers] A flashlight opens into a wide cone within a few feet; a laser stays close to the same width over long distances.[^bas-pangolin-laser-light]

Narrow is still not perfectly parallel. The spread is called **divergence** and is measured in milliradians (mrad): at 1 mrad a beam grows 1 cm wider for every 10 m it travels.[^bas-steinigke] ILDA, the International Laser Display Association, calls anything under 1 mrad "an especially narrow beam" and gives the example of a spot 1.5 cm across at 25 m.[^bas-ilda-specs] A 5 mW pointer has widened about 100 times by the 100 m mark, and by one physicist's 2018 calculation would still look about as bright as a quarter moon from an aircraft at 40,000 ft in clear air.[^bas-aip-distance]

### Why can you only see the beam in fog or haze?

Light traveling past you is invisible. You see a beam from the side only when something in the air - dust, mist, smoke - knocks a little of it toward your eye, and in clean air all you get is the spot where it lands.[^bas-edmund-side] ILDA is blunt about it: "It is not possible to do an effective laser beam show in clear air."[^bas-ilda-haze]

So shows bring their own air. **Haze** is a very fine mist that spreads evenly and gives smooth cones and sheets of light; **fog** is thicker, billows, and shows up as swirls inside the beams.[^bas-ilda-haze] Haze is the less likely of the two to trip an ionization smoke detector, but enough of it can set off a photoelectric one, which is why venues that isolate their detection for a show assign a person to watch for fire while it is off.[^bas-ilda-haze]

None of this applies to graphics. A beam hitting a wall or a screen shows up in any air, because the surface does the scattering.

### Why does green look brightest?

Human vision is most sensitive in the green, so a milliwatt of green registers far more strongly than a milliwatt of red or blue: a 1 mW green pointer looks about 30 times as bright as a 1 mW red one, by a popular-science estimate from 2011 that the trade press was still repeating in 2023.[^bas-scifocus-green][^bas-photonics-green] Green also scatters more in air, so the beam itself shows up better from the side.[^bas-scifocus-green]

The exact multiple depends on which red and which green you compare. Small shifts in wavelength matter a great deal at the edges of vision: at equal power a 633 nm red looks about eight times brighter than a 670 nm red, and 638 nm about three times brighter than 655 nm.[^bas-ilda-specs] Green pointers typically sit around 532 nm, and the green diodes in current show projectors around 520 to 525 nm.[^bas-photonics-green][^bas-kvant-clubmax10]

The same quirk shapes how a full-color projector is built. One ILDA member's suggestion for white is 1.4 units of 637 nm red and 1.6 units of 450 nm blue for every 1 unit of 532 nm green - the green needs the least power to hold its own.[^bas-ilda-specs]

### What is the difference between a beam show, a graphics show and abstracts?

They are three uses of the same machine.[^bas-pangolin-types]

| Kind | Where you look | What you see | Needs haze? |
|---|---|---|---|
| **Beam show** | Up, into the air | Beams, fans, cones, tunnels and flat sheets of light | Yes |
| **Graphics show** | At a surface - screen, wall, dome, building | Logos, text and animation drawn in outline | No |
| **Abstracts** | Wherever they land | Moving patterns that represent nothing in particular | Not on a surface |

In a beam show the projector scans simple shapes and the haze turns them into architecture: a scanned circle becomes a cone or a tunnel, a scanned line becomes a fan, and a wide flat plane can form a false ceiling over the audience.[^bas-laserfx-glossary][^bas-pangolin-types] When fog swirls visibly inside one of those sheets, laserists call it "liquid sky".[^bas-laserfx-glossary]

A graphics show asks more of the hardware. The mirrors have to trace every outline and get back to the start before the eye lets the first part fade; when they cannot, the image **flickers**.[^bas-laserfx-glossary] That is why laser cartoons are line drawings, and why detailed ones are harder than they look.

Abstracts need no drawing at all. A **lumia**, a soft, gauze-like drifting pattern, is made by sending the beam through rippled glass or plastic.[^bas-laserfx-glossary]

### What are the main parts of a laser show system?

Five things, one of which is a person.

| Part | What it does | More |
|---|---|---|
| **Source** | Makes the light. A modern full-color projector overlaps separate red, green and blue lasers into one beam with **dichroic** mirrors, which pass one color and reflect the others. Red plus green gives yellow, green plus blue cyan, red plus blue magenta, all three white.[^bas-wp-laser-projector][^bas-pangolin-projector][^bas-kvant-basics] | [/lasers/](/lasers/) |
| **Scanners** | Two **galvos** - small motors, each with a mirror on its shaft - steer the beam, one side to side and one up and down.[^bas-pangolin-projector] Their speed is rated in thousands of points per second (kpps).[^bas-ilda-specs] | [/scanning/](/scanning/) |
| **Controller** | Software and an interface that feed the projector a stream of **points**. A point is the smallest thing the software controls: a horizontal position, a vertical position, on or off, and usually a color.[^bas-laserfx-glossary] | [/programming/](/programming/) |
| **Haze** | Makes beams visible in the air. No particles, no beam show.[^bas-ilda-haze] | - |
| **Operator** | The laserist, who programs and runs the show. ILDA's Lasershow Operator course runs four hours plus a 45-minute test (2025).[^bas-ilda-lso] | - |

A sixth row could go to the parts that exist to stop the show: the key switch, the shutter, the emergency stop and the circuit that cuts the beam if the mirrors stop moving. For where the laser rig sits next to the lighting and video desks at a concert, see [how a dance music show is built](https://showfile.cold.fyi/).


### What is not a show laser?

The word "laser" sells things, so it turns up on machines that never send a beam into the room, and goes missing from a few that do.

| Thing | Laser inside? | Raw beam comes out? | What it really is |
|---|---|---|---|
| Laser video projector | Yes | No | A video projector with a laser for a lamp |
| "Laser" moving head | Yes | Yes | A show laser in a lighting fixture's body |
| Searchlight sky beam | Sometimes | Sometimes | Traditionally a xenon lamp; a few are true lasers |
| Star, galaxy or garden projector | Yes, low power | Yes, split into weak dots | A small diode behind a grating |
| Lidar | Yes | Yes, built to be eye-safe | A range finder |
| Stage "hologram" | Not required | No | A reflection of a 2D projection |

**Laser video projectors.** In a laser-phosphor projector, blue laser diodes hit a spinning yellow phosphor wheel, the resulting light is split into primaries, and an imaging chip forms the picture.[^bas-barco-phosphor][^bas-cj-rgb-phosphor] The pricier RGB kind lights the chips with separate red, green and blue lasers instead.[^bas-cj-rgb-phosphor] Either way the laser is only the lamp. The light is spread across a full frame of pixels and nothing is steered. By 2026 trade estimates the phosphor type lasts 20,000 to 30,000 hours and RGB 30,000 to 50,000 or more, at over twice the upfront price.[^bas-cj-rgb-phosphor]

**"Laser" moving heads.** The German maker LOBO dates its first multicolor laser moving head, the ZAPHIR, to 2004, and the lighting trade press has described a push to make scanned lasers behave like ordinary fixtures, run from a standard lighting console with pan, tilt and gobo-style controls.[^bas-lobo-history][^bas-plsn-fixtures] They are true lasers, and the same safety rules apply.[^bas-plsn-fixtures]

**Searchlight sky beams.** The classic sweeping searchlight is a xenon lamp in a reflector. When Claypaky launched its Skylos searchlight in 2023, with a 300 W white laser source and a beam adjustable from 0.5 to 5 degrees, the maker's selling point was output equal to a 4,000 W xenon lamp.[^bas-lsi-skylos] True laser sky beams do exist: Kvant's 2023 catalog lists static units of 270 to 900 W built for the job.[^bas-kvant-catalogue]

**Star and galaxy projectors.** The box that covers a bedroom ceiling or a garden hedge in green dots is a low-power diode shining through a grating or an effects wheel, which splits one beam into many weak ones; there are no scanners in it.[^bas-bax-danger] A German retailer's buying guide describes Class 2 and 2M units, at most 1 mW per beam, as typically "star or cluster effect lasers".[^bas-steinigke]

**Lidar.** The spinning or flashing unit on a car roof is a scanning laser used to measure distance. It is designed to be eye-safe, though at close range one has burned pixels in a phone camera, and Volvo's support page tells owners: "Do not point a camera directly at the lidar."[^bas-android-lidar]

**Stage "holograms".** A true hologram "records the full wavefield of light falling upon it" and replays a three-dimensional image, one you can look around, when lit by a laser.[^bas-conversation-tupac] The Tupac Shakur appearance at Coachella in April 2012 was a flat projection bounced off a slanted transparent film - the **Pepper's ghost** illusion.[^bas-conversation-tupac] The vendor's own chief executive said so at the time: "it's not 3D and it's not holographic".[^bas-conversation-tupac]

### Do a laser pointer and a show laser work the same way?

Yes, in the physics: both make light by stimulated emission, and current show projectors are built on diode lasers, in which current through a semiconductor chip produces the beam directly.[^bas-pangolin-projector][^bas-pangolin-laser-light] What separates them is power and what happens to the beam afterward.

| | Laser pointer | Show projector |
|---|---|---|
| Power | In the US, 5 mW of visible light is the ceiling for a demonstration laser without special federal permission[^bas-fda-shows] | Class 3B (5 to 500 mW) or Class 4 (over 500 mW)[^bas-ilda-specs] |
| Typical size | - | One software maker's 2026 guidance: 0.5 to 3 W for clubs, 3 to 12 W for large rooms, 15 to 40 W and up for stadiums and festivals[^bas-pangolin-projector] |
| Beam | Fixed, wherever your hand points | Steered by scanners, switched and colored many thousands of times a second[^bas-ilda-specs] |
| Built-in safeguards | - | Key, interlocks, shutter, emergency stop |

A 10 W projector puts out 2,000 times the power of a 5 mW pointer. The label on a pointer is not always the truth, either: the UK Health Security Agency notes that pointers sold as Class 2 have measured as Class 3B or 4.[^bas-ukhsa]

The paperwork differs too. In the US, show equipment above 5 mW needs an FDA approval called a variance "before sale or use"; in the UK, Class 3B and 4 lasers "are not suitable for general consumer use".[^bas-fda-shows][^bas-ukhsa] Who can buy and run what, country by country, is in [/rules/](/rules/).

### Is it safe to watch a laser show?

The official answers describe how a properly run show is arranged. The US Food and Drug Administration says compliant shows "keep hazardous lasers away from the audience", and lists the risks of badly handled ones as eye injury, skin burns, fire and distraction of pilots and drivers.[^bas-fda-shows] Britain's Health and Safety Executive says display lasers from roughly 200 mW up need controls against significant eye injury, and names the usual ones: scan-failure safety systems, emergency stops, barriers and competent operators.[^bas-hse-displays] What those controls are, how exposure limits work and what the medical record shows when they fail are in [/safety/](/safety/); what is new this year is in [/now/](/now/).
