## Lasers in big science: from LIGO to fusion

**The short version:** Some of the biggest experiments of the last 30 years run on lasers. LIGO used laser light to hear two black holes merge in 2015, the National Ignition Facility fired 192 beams to get more fusion energy out of a target than went in, and laser-cooled atoms now keep time to better than one part in 10^18. Lasers also measure the distance to the Moon, sharpen telescopes, talk to spacecraft beyond Mars and hold living cells in place.

### How does LIGO detect gravitational waves with lasers?

By splitting a laser beam and watching for a stretch smaller than a proton. Each LIGO detector is an L-shaped **Michelson interferometer**: a laser beam is split in two and sent down two arms, each 4 km long, where mirrors bounce the light back and forth hundreds of times before the halves meet again.[^day-pt-ligo] They are set to cancel, so the photodetector at the output stays dark. A passing gravitational wave stretches one arm relative to the other, the cancellation slips, and light leaks through.[^day-pt-ligo] The detectors are most sensitive from 20 to 2000 Hz.[^day-pt-ligo]

On September 14, 2015, at 5:51 a.m. EDT (09:51 UTC), both detectors - in Livingston, Louisiana and Hanford, Washington - caught the last fraction of a second of two black holes merging into one larger spinning black hole.[^day-ligo] The pair weighed 36 and 29 solar masses and sat about 1.3 billion light-years away.[^day-pt-ligo] The signal climbed from 35 Hz to 150 Hz in 0.2 s, a chirp that ended in a merger.[^day-pt-ligo]

The size of the effect is the reason for the lasers. The **strain**, the fractional change in length, was 10^-21: about one proton's radius across the beams' folded path of roughly 1000 km.[^day-pt-ligo] To see it, the 2010 to 2015 Advanced LIGO upgrade raised the laser power from 10 W to 200 W and swapped 11 kg mirrors for 40 kg ones.[^day-pt-ligo] Weiss, Barish and Thorne shared the Nobel Prize in Physics for it, announced October 3, 2017.[^day-pt-ligo]

### Did the National Ignition Facility produce net energy?

At the target, yes. For the building, no. On December 5, 2022, NIF fired 2.05 MJ of laser energy and got 3.15 MJ of fusion energy back, the first **ignition**: a fusion shot that releases more energy than the laser delivered to the target (official LLNL figures).[^day-llnl] That is a target gain of about 1.5.[^day-pt-nif] Each shot also draws about 300 MJ from the grid, so 3.15 MJ is around 1 percent of what the facility used.[^day-pt-nif] The result was announced December 13, 2022, before peer review.[^day-pt-nif]

The method is called indirect drive. Up to 192 laser beams fire into a **hohlraum**, a gold-walled cylinder about a centimeter long. The laser light turns into a bath of x-rays, which blasts the surface off a peppercorn-sized fuel capsule inside; the recoil crushes the capsule and heats the hydrogen isotopes at its center until they fuse.[^day-llnl] The lasers never touch the fuel.

Since then the shots have kept coming, on LLNL's official list:[^day-llnl]

| Date | Fusion yield | Laser energy | Notes |
|---|---|---|---|
| 2022-12-05 | 3.15 MJ | 2.05 MJ | first ignition |
| 2023-07-30 | 3.88 MJ | 2.05 MJ | |
| 2023-10-08 | 2.4 MJ | | |
| 2023-10-30 | 3.4 MJ | 2.2 MJ | |
| 2024-02-12 | about 5.2 MJ (estimate) | | |
| 2024-11-18 | 4.1 MJ | | sixth ignition |
| 2025-02-23 | 5.0 MJ | | gain 2.44, seventh |
| 2025-04-07 | 8.6 MJ (plus or minus 0.45) | 2.08 MJ | gain 4.13, eighth, record |
| 2025-06-22 | 2.4 MJ | | Los Alamos-led burning-plasma shot |
| 2025-10-01 | 3.5 MJ | | gain 1.74, tenth |
| 2026-06-20 | 7.9 MJ | | gain about 3.8, 11th |
| 2026-10-18 | 2.2 MJ | | gain above 1, 12th |

The April 2025 record put out about four times the laser energy that went in.[^day-llnl]

### How do lasers cool atoms, and what does that have to do with clocks?

Light carries momentum, so a stream of photons can push. Tune a laser slightly below the frequency an atom absorbs, and only atoms moving toward the beam see it shifted into resonance; they absorb, get kicked backward and slow down.[^day-nobel-1997] Six beams in three opposing pairs make **optical molasses**, a patch of light atoms wade through as if through syrup. Add magnetic coils and you have a magneto-optical trap, first built in 1987.[^day-nobel-1997]

The temperatures are absurd. Sodium was cooled to about 240 µK, the Doppler limit; in 1988 Phillips reached about 40 µK through Sisyphus cooling; cesium reached about 2 µK, and helium about 0.18 µK, where atoms drift at about 2 cm/s.[^day-nobel-1997] Chu, Cohen-Tannoudji and Phillips shared the 1997 Nobel Prize in Physics "for development of methods to cool and trap atoms with laser light".[^day-nobel-1997] The same release pointed to Chu's atomic fountain of laser-cooled atoms as a route to clocks a hundredfold more precise.[^day-nobel-1997]

Those clocks arrived. In an **optical lattice clock**, standing waves of laser light hold about 40,000 strontium-87 atoms chilled to a few hundred nanokelvin, and a stabilized clock laser probes a very narrow optical transition.[^day-opn-clock] In 2024 Jun Ye's group at JILA and the University of Delaware published a systematic uncertainty of 8.1 x 10^-19, beating the previous NIST record of 9.4 x 10^-19.[^day-opn-clock] The best cesium microwave clocks reach about one part in 10^16; optical clocks reach at least 10^-18, and scientists want to redefine the SI second on an optical transition.[^day-opn-clock]

### Can you bounce a laser off the Moon?

Yes, and the mirrors have been waiting since 1969. Apollo 11 left the first laser ranging retroreflector: a 46 cm aluminum panel holding 100 fused-silica corner cubes, each 3.8 cm across.[^day-jpl-llr] A **corner cube** is a three-mirror prism that sends light straight back where it came from, and it needs no power. Two more reflectors went up on later Apollo missions, and a French-built one rode on the Soviet Lunokhod 2.[^day-jpl-llr]

The beam spreads to about a mile wide by the time it reaches the Moon, and under good conditions about one photon comes back every few seconds.[^day-jpl-llr] Stations that do this include McDonald Observatory in Texas and the Observatoire de la Cote d'Azur in Grasse, France.[^day-jpl-llr]

NASA's own pages give two numbers for its accuracy. JPL put it at about 2 cm in 1999; NASA Goddard's eclipse site said "about 3 centimeters" in 2005.[^day-jpl-llr][^day-gsfc-llr] They agree on the headline result: the Moon is drifting away from Earth by about 3.8 cm (1.5 in) a year.[^day-jpl-llr][^day-gsfc-llr] Ranging has also confirmed predictions of Einstein's relativity.[^day-jpl-llr]

### Why do observatories shine yellow lasers into the sky?

To make a star where they need one. A **laser guide star** is an artificial star: a laser tuned to the sodium line excites sodium atoms in the mesosphere about 90 km up, and they glow.[^day-eso] The telescope's **adaptive optics** measures how the atmosphere smears that point of light, 1000 times a second, and a deformable mirror reshapes itself to cancel the blur, giving images "as sharp as if the telescope were in space".[^day-eso]

At Paranal, ESO's Very Large Telescope Unit Telescope 4, Yepun, uses the 4 Laser Guide Star Facility, with four laser units of 22 W each; the test laser was 20 W (official ESO figures, 2018).[^day-eso] ESO ordered the same TOPTICA-MPBC lasers for its Extremely Large Telescope.[^day-eso]

### How does NASA talk to a spacecraft with a laser?

Deep Space Optical Communications (DSOC) flew on the Psyche spacecraft, launched in 2023, and set up its first laser link with Earth about a month later.[^day-nasa-dsoc] On December 11, 2023, it peaked at 267 Mbit/s, streaming ultra-high-definition video home.[^day-nasa-dsoc] Its farthest link came on December 3, 2024, from 307 million miles; its final pass was from 218 million miles. Across 65 passes it brought down 13.6 terabits (official NASA figures).[^day-nasa-dsoc]

Aiming is the hard part. A 3 kW uplink laser at JPL's Table Mountain Facility sends a beacon so the spacecraft knows where to point its own laser back.[^day-nasa-dsoc] Caltech's 200-inch telescope at Palomar was the main receiver, its detector array counting individual faint photons; a 1 m telescope at Table Mountain and a hybrid radio-optical antenna at Goldstone also caught the signal.[^day-nasa-dsoc]

### How do the most extreme lasers reach petawatts?

At ELI-NP in Magurele, Romania, the first 10 petawatt pulses fired in March 2019, after the system had held 7 PW for more than four hours.[^day-optics-eli] A **petawatt** is 10^15 watts, and it lasts only femtoseconds: ELI-NP's pulses are 25 fs long at 820 nm, focused to intensities up to 10^23 W/cm².[^day-optics-eli] Thales built the system and started installing it in late 2016.[^day-optics-eli] ELI has three sites - ELI-NP in Romania, ELI Beamlines in the Czech Republic and the ELI Attosecond Light Pulse Source in Hungary - and uses include physics under extreme conditions and accelerating electrons past 10 GeV.[^day-optics-eli]

None of this works without **chirped pulse amplification (CPA)**, published by Mourou and Strickland in 1985. CPA stretches a short pulse out in time, amplifies the longer and gentler version, then squeezes it back into an ultrashort, ultra-intense pulse.[^day-nobel-2018] The stretch keeps the amplifier from destroying itself. CPA earned a share of the 2018 Nobel Prize in Physics and also underpins "millions of corrective eye surgeries" a year.[^day-nobel-2018] Where the laser itself came from is in [invention](/invention/).

### What are optical tweezers?

A focused laser beam that can grab something. Arthur Ashkin's **optical tweezers** use the push of tightly focused light to hold and move particles, atoms, viruses and living cells.[^day-nobel-2018] In 1987 he trapped living bacteria with them, unharmed.[^day-nobel-2018] Ashkin shared the 2018 Nobel Prize in Physics, announced October 2, 2018, "for groundbreaking inventions in the field of laser physics", alongside Mourou and Strickland.[^day-nobel-2018]
