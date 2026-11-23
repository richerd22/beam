## The lasers: from gas tubes to diodes

**The short version:** For roughly 30 years a professional laser show meant a tube of ionized argon or krypton that could pull tens of kilowatts from three-phase power, drank gallons of cooling water a minute and gave back well under a tenth of a percent of that energy as light. Green solid-state lasers arrived in the late 1990s, direct diodes took over blue and then green by 2013, and by 2004 a 5 W full-color laser could already run from a standard outlet. Watts are only part of brightness - divergence and wavelength decide what the eye sees - and in the US, federal law lists the safety hardware every Class IIIb and IV projector has to carry.

### What makes laser light different from a light bulb?

A neon sign glows by spontaneous emission: excited atoms drop back to rest and throw off photons at random.[^mac-laserfx-lasers] A laser gets its atoms to copy each other. A passing photon makes an excited electron release a second photon that matches the first in wavelength, direction and phase - **stimulated emission**, the S and E in Light Amplification by Stimulated Emission of Radiation.[^mac-pangolin-light] For that to snowball, more atoms have to be in the excited state than in the ground state, a condition called a **population inversion**.[^mac-laserfx-lasers]

Mirrors at each end of the lasing material send the light back through it until it builds into a beam.[^mac-pangolin-light] In the gas lasers LaserFX described, the rear mirror reflects about 99.9% and the front one, the output coupler, 90 to 97%, so the beam is the 3 to 10% that gets out.[^mac-laserfx-lasers]

What comes out is close to a single wavelength, with its wavefronts lined up in time and space. That **coherence** is why it spreads so little.[^mac-laserfx-lasers]

### Which laser came first in shows?

The first gas laser to run continuously was invisible. Javan, Bennett and Herriott got a helium-neon tube lasing at Bell Labs on December 13, 1960, at 1,153 nm in the infrared; the red 632.8 nm line everyone pictures came from White and Rigden, also at Bell Labs, in 1962.[^mac-hecht-gas] Spectra-Physics, founded in September 1961, was selling an infrared **helium-neon (HeNe)** laser for about $8,000 by March 1962.[^mac-hecht-gas]

Lloyd Cross's 1968 "Sonovision" used a HeNe.[^mac-lfw-2004] After that it settled into a supporting part as the low-power red beam of hobby rigs and small systems, until red diodes displaced it.[^mac-laserfx-lasers]


### Why did old laser shows need three-phase power and a water supply?

William Bridges saw the 488 nm blue line of the **argon-ion laser** at Hughes Research Labs on February 14, 1964, and the show trade ran on that discovery for a generation.[^mac-hecht-gas] Argon gives blue at 488.0 nm and green at 514.5 nm, with weaker lines at 457.9 and 476.5 nm; krypton gives red at 647.1 nm, yellow at 568.2 nm and a deeper red at 676.4 nm.[^mac-sam-ion][^mac-wp-ion] Sam's Laser FAQ sums up the division of labor: "argon for blue, green, and violet, and krypton for red and yellow".[^mac-sam-ion]

Argon was the most common professional show laser, its cyan beam split into blue and green with a dichroic filter or a prism. For full color, a show either paired an argon with a krypton or ran both gases in one tube - the **white-light laser**.[^mac-laserfx-lasers] A Coherent krypton laser was already at work at Mills College in 1969.[^mac-lfw-2004]

The price of those colors was paid at the wall. Jeff Hecht puts ion laser efficiency at about 0.05%.[^mac-hecht-gas] A small air-cooled argon turned 1,000 W of electricity into 100 mW of light, and a Coherent CR-18SG took 27.5 kW - 50 A at 550 V - to make 18 W.[^mac-sam-ion] Large-frame lasers ran on three-phase power, and one above 20 W could need 480 VAC at 50 A.[^mac-sam-ion]

Nearly everything that did not become light became heat, so all but the smallest ion lasers were water-cooled.[^mac-wp-ion] Live Design described the need as "several gallons per minute".[^mac-livedesign-theming] A Lexel 75 wanted 1.5 gallons (5.6 liters) a minute at 15 psi, and losing the water at full power could crack the tube.[^mac-sam-ion]

In Coherent's 1990s line, argon reached 30 W in the Sabre and 6 W in the Star II, krypton reached 6 W, and mixed-gas white light ran from 1.2 W in the Enterprise II to 13 W in the Sabre.[^mac-livedesign-theming] Tubes wore out. Early ones lasted about 1,500 hours, and Coherent's metal-ceramic Innova tubes, introduced in 1981, got into the 5,000-hour range.[^mac-livedesign-theming] A replacement tube cost "$5,000 or more" and a set of white-light optics about $2,000 at minimum, in Sam's undated figures.[^mac-sam-ion]

### What lit the biggest outdoor shows?

Two pulsed lasers. The **copper vapor laser** fires 5,000 to 30,000 pulses a second from a tube running at about 1,500 C, in green at 510.6 nm and yellow at 578.2 nm, with the green about twice as strong.[^mac-lfw-metal-vapor][^mac-wp-copper-vapor] Commercial units made "ten to hundreds of watts" in 2001, and show people used them for what LaserFX called "emerald green and gold" beams.[^mac-lfw-metal-vapor][^mac-laserfx-lasers]

The other was the frequency-doubled Nd:YAG, a pulsed 532 nm green laser that reached 60 W average at 20 kHz. Laservision's show at the Everland theme park used five.[^mac-livedesign-theming]

### What is a DPSS laser?

A **diode-pumped solid-state (DPSS)** laser makes green in three steps. An 808 nm infrared diode pumps a crystal of Nd:YVO4 or Nd:YAG, the crystal lases at 1064 nm, and a second crystal of KTP doubles that frequency to 532 nm.[^mac-laserfx-lasers][^mac-pangolin-light] Other crystal recipes give 473 and 457 nm blue and 671 nm red.[^mac-wp-projector]

DPSS reached shows in the late 1990s, smaller, more efficient and cheaper than the ion tubes, and by 2004 makers were offering "5-W RGB lasers that can plug into a standard outlet".[^mac-lfw-2004] Laserworld's Norbert Stangl dates the trade's move from gas to affordable solid state to "around 2000", with green DPSS doing the pushing.[^mac-laserworld-stangl]

The technology had its own tempers. The crystals are sensitive to temperature, and low-cost units had trouble with beam profile and with switching on and off cleanly.[^mac-pangolin-light][^mac-laserworld-green]

### Why do diodes run almost everything now?

A **direct diode** laser has no tube and no crystal: current goes straight into a semiconductor chip and light comes out.[^mac-pangolin-light] Pangolin calls pure diode the "gold standard" and says it dominates professional entertainment systems.[^mac-pangolin-projector] A 2026 Kvant projector lists red at 637 to 638 nm, green at 520 to 525 nm and blue at 445 to 455 nm.[^mac-kvant-clubmax10][^mac-kvant-clubmax40]

The colors arrived in an awkward order. Nakamura's group made the first InGaN laser diode, in violet, in 1995 by Laser Focus World's account and about 1996 by Wikipedia's.[^mac-lfw-rudy-2010][^mac-wp-blue] Blue diodes got cheap first, replacing blue DPSS "a couple of years" before green followed.[^mac-laserworld-green] Direct green at 520 to 525 nm was still crossing from the lab into products in mid-2010, and Laserworld dates the show industry's switch to 2013.[^mac-lfw-rudy-2010][^mac-laserworld-green]

A single diode is small - roughly 120 mW to 1.5 W depending on color - so a high-power projector combines many of them, and beam profile and divergence limit how many can be stacked.[^mac-laserworld-green] In return, Laserworld says, the trade got smaller housings, no crystal to keep at temperature, less heat and easier, more linear modulation.[^mac-laserworld-green]


### What is an OPSL, and why do the top projectors use them?

An **optically pumped semiconductor laser (OPSL)** is the diode's well-mannered relative. Diode lasers pump a thin semiconductor gain chip on a heat sink inside a small external cavity, and crystals convert its infrared to visible light. Chip design sets the wavelength, so a maker can hit colors no diode offers.[^mac-coherent-opsl] Coherent shipped its first in 2002 - a 488 nm unit sold as a replacement for the ion laser - and counted more than 150,000 in the field by November 2023.[^mac-coherent-opsl]

Shows want them for the beam. Coherent's Taipan HD is specified with a beam quality figure under 1.2 and comes in 460, 480, 488, 532, 577 and 590 nm at 1 to 5 W each.[^mac-coherent-taipan] ILDA puts OPSL and fiber lasers at about 0.2 mrad of divergence, against 1 to 3 mrad for typical diode and DPSS units.[^mac-ilda-specs] Kvant's 2023 Spectrum line adds OPSL yellow at 577 nm or orange at 590 nm to diode red, green and blue.[^mac-kvant-catalogue] ILDA also warns that overdriving lasers "such as OPSLs" shortens their life.[^mac-ilda-specs]

[[MODULE:types]]

### How many watts does a show laser have?

"A 3W laser is plenty for a 500-person room," in Pangolin's words.[^mac-pangolin-specs] Its rough bands, as published in 2026, run 500 mW to 3 W for small and medium clubs, 3 to 12 W for large indoor rooms and outdoor beams at night, and 15 to 40 W and up for stadiums and festivals.[^mac-pangolin-projector]

The ceiling is a long way above that. Kvant's 2023 catalog runs from the Clubmax at 3 to 40 W through the 58 W Atom to the Epic at 100 to 270 W, which weighs 89 kg, and its Architect sky beams, which do not scan, reach 270 to 900 W.[^mac-kvant-catalogue] Pangolin mentions sky lasers up to 1,000 W.[^mac-pangolin-types]

Nearly all of this sits in the top two laser classes. Class 3B covers 5 to 500 mW and Class 4 is everything above 500 mW, and professional show projectors are one or the other.[^mac-ilda-specs]

### What does a laser show projector cost?

In 2000 a single 150 mW laser from Kvant cost about EUR 10,000, the company says.[^mac-kvant-about] In November 2026 a US dealer listed Kvant's 10 W Clubmax 10 FB4 at $10,298, the smaller Clubmax 3000 at $6,018 and the 40 W, weather-sealed Clubmax 40 FB4 IP65 at $23,269.[^mac-nlfx-clubmax10] Kvant's own pages say "price on request", though the page data carried EUR 8,582 for the 10 W unit and EUR 15,672 for the 40 W that month.[^mac-kvant-clubmax10][^mac-kvant-clubmax40]

Those are list and dealer prices from one maker's range. The trade itself has been small: Laser Focus World put laser display and entertainment at "about $10 million in sales annually" in 2004.[^mac-lfw-2004]


### Why is a 10 W laser not always brighter than a 5 W one?

Start with where the watts were counted. ILDA says power should be quoted at the output window, and that 15 to 30% is typically lost between the laser modules and that window.[^mac-ilda-specs]

Then the beam's spread. **Divergence** is how fast a beam widens, measured in milliradians: 1 mrad means 1 cm wider for every 10 m traveled.[^mac-steinigke] ILDA calls anything under 1 mrad "an especially narrow beam" and warns that makers quote the figure as either half-angle or full-angle, so two numbers only compare if they are the same kind.[^mac-ilda-specs] Kvant lists its 10 W Clubmax at 0.9 mrad full angle from a 5 x 4.5 mm beam.[^mac-kvant-clubmax10] More power spread over a wider beam does not mean more brightness at a distance.[^mac-kvant-learn] ILDA's guidance adds that the concentration that makes a tight beam look bright also makes it the greater hazard at equal power, and that ILDA does not certify any maker's power or divergence claims.[^mac-ilda-specs]

Then color. The eye is most sensitive to green at 555 nm, and the falloff toward the ends of the spectrum is steep: at equal power a 633 nm red looks about eight times brighter than a 670 nm red, and 638 nm about three times brighter than 655 nm.[^mac-ilda-specs] So the split between colors matters more than the total. Pangolin suggests 20 to 30% red, 30 to 40% green and 40 to 50% blue by power for a good white, and says budget units load up on blue to inflate the headline wattage.[^mac-pangolin-specs] Many white-light ion tubes were aimed at about 60:20:20 red to green to blue.[^mac-sam-ion]

### What safety hardware is built into a laser projector?

The US list is law. 21 CFR 1040.10(f) sets the features a laser product must have by class, and it calls a laser made or promoted for entertainment, display or art a "demonstration laser product".[^mac-cfr-1040-10] For the classes show projectors fall into, the regulation requires:

- a **protective housing**, with **safety interlocks** on any removable panel;
- a **remote interlock connector** - Class IIIb and IV systems "shall incorporate a readily available remote interlock connector";
- a **key control**: "the laser shall not be operable when the key is removed";
- an **emission indicator**, seen or heard, that comes on before the light does;
- a **beam attenuator**, a permanently attached way of blocking the beam other than the power switch or key;
- a **scanning safeguard**, so that a failure changing the scan's speed or size cannot expose anyone to more than the product's class allows;
- a **manual reset** on Class IV systems made after August 20, 1986, after an interlock trips or power is lost for more than 5 seconds.[^mac-cfr-1040-10]

On a 2026 projector those clauses become parts with names. Kvant's Clubmax spec lists a keyed interlock, a magnetic interlock, an emission delay, scan-fail safety, an electromechanical shutter that reacts in under 20 ms, an adjustable masking plate at the aperture and an emergency stop with a keyed remote and manual restart.[^mac-kvant-clubmax10][^mac-kvant-clubmax40]

The **shutter** is the beam attenuator: a mechanical flag in the beam path ahead of the scanners, built in older designs to fall closed by gravity or a spring when power goes.[^mac-laserfx-projectors][^mac-pangolin-definitions] **Scan-fail** is the scanning safeguard: a circuit that notices the beam has stopped moving and blanks it. ILDA's guidance is that an ideal one acts in 1 millisecond and many act in about 20, which it calls "OK, and is much better than nothing"; it adds that a simple circuit can miss a beam hopping between two fixed dots.[^mac-ilda-audience-tips] A digital version reads the position signals from the scanners (see [/scanning/](/scanning/)), works out how fast the beam is moving and cuts the output if it stays under a set speed for longer than a set time.[^mac-pangolin-scanfail]

The **E-stop** is a remote kill switch on the interlock loop, and several projectors can be chained to one button.[^mac-pangolin-projector] Pangolin describes it as "required by law in the US"; the regulation's own wording names the remote interlock connector the button plugs into.[^mac-pangolin-projector][^mac-cfr-1040-10] The **masking plate** is the bluntest device of the lot: metal at the aperture that cuts off any light below or outside a set line, whatever the software sends.[^mac-pangolin-projector][^mac-kvant-catalogue] How these parts are used around an audience is in [/safety/](/safety/).


### Who makes laser show projectors?

Some of the names on the spec sheets, alphabetically:

- **Coherent** (US) supplied ion lasers to the show trade and now makes the Taipan OPSL sources.[^mac-livedesign-theming][^mac-coherent-taipan]
- **Kvant Lasers** (Bratislava, Slovakia) began in 1995 with laser teaching aids, did its first show in 1996, built its own modules from 2007 and a 300 W sky laser in 2019.[^mac-kvant-about]
- **LaserAnimation Sollinger** (Berlin, Germany) builds its modules in Berlin. Laserworld has distributed its PHAENON accurate line, which includes a 7 W RGB unit, since February 2019.[^mac-rp-sollinger][^mac-laserworld-phaenon]
- **Laserworld Group** (Lengwil, Switzerland), founded at the end of 2007, sells the Laserworld, tarm and RTI brands from entry level to high end, with about 80 staff by its own count.[^mac-laserworld-group] tarm, linked to the TARM Centre club in Bochum, was announced as joining in March 2016.[^mac-lsi-tarm]
- **LOBO** (Aalen, Germany), founded by Lothar Bopp in 1982, built its own systems from 1984 and dates its first multicolor laser moving head, the ZAPHIR, to 2004.[^mac-lobo-history]
- **Pangolin Laser Systems** (Orlando, Florida) makes control software and hardware, and the ScannerMAX galvanometers inside other makers' projectors.[^mac-lfw-perry-2016][^mac-kvant-clubmax10]
- **X-Laser** (Laurel, Maryland) became known for laser fixtures run from a [lighting console](https://showfile.cold.fyi/) and for packaging the US variance paperwork with the product.[^mac-plsn-fixtures] Elation Lighting has since acquired the brand and assets and operates it as X-Laser USA.[^mac-livedesign-xlaser]
