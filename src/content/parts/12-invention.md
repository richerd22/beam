## How a laser works, and who invented it

**The short version:** A laser is a light amplifier with a mirror at each end, and what leaks out of it is a narrow, single-color beam whose waves move in step. Einstein described the effect behind it in 1917, Charles Townes built a microwave version in the 1950s and Theodore Maiman made the first one that worked with light in May 1960. The question of who deserved the credit kept a patent fight going for 30 years.

### How does a laser actually work?

Start with the rule that atoms are fussy about energy. An atom or molecule can hold only certain set amounts, its **energy levels**, and the lowest is the **ground state**. When an excited electron drops to a lower level, the difference comes out as light.[^inv-brit-principles] Usually that happens on its own, in a random direction, which is **spontaneous emission** and is roughly how a light bulb glows.[^inv-brit-principles]

The laser trick is **stimulated emission**: a passing photon with the right energy makes an excited atom release a second photon that matches it in direction, frequency and phase.[^inv-aps-2005] The catch is that in any normal material, more atoms sit in the lower state than the upper one, so a passing photon is more likely to be absorbed than copied.[^inv-brit-principles] To win, you need a **population inversion** - more atoms up than down - and heat cannot produce one. The atoms have to be selectively excited, or **pumped**, usually with light or electricity.[^inv-brit-principles][^inv-coherent-glossary]

So every laser has three parts. The **gain medium** is where the inversion happens: a gas, a crystal, a dye, a fiber or a semiconductor. The **pump** feeds it energy. The **resonant cavity**, usually two facing mirrors, sends light back through the medium again and again, and the beam leaves through the partly reflective one, the **output coupler**.[^inv-coherent-glossary] The mirrors are what turn an amplifier into an oscillator.[^inv-brit-principles]

How the levels are arranged matters. A three-level laser such as ruby has to build its inversion against a full ground state, so it usually pulses; a four-level laser empties its lower level fast and can run a steady beam.[^inv-brit-principles]

### Why is laser light different from a flashlight?

Three properties fall out of the mechanism. The light is **coherent** because each stimulated photon copies the phase, wavelength and direction of the one that triggered it, and the cavity keeps reinforcing that.[^inv-brit-principles] It is close to **monochromatic** because only wavelengths whose round trip fits the cavity a whole number of times can build up; these are the **longitudinal modes**, and a laser runs on a few of them within about 0.1% of each other.[^inv-brit-principles] And it is narrow because the cavity confines the light along the mirror axis.

How narrow depends on the laser. A helium-neon beam typically spreads about 1 milliradian, while a semiconductor laser can diverge 20 degrees or more.[^inv-brit-principles]

### What is the difference between continuous, Q-switched and mode-locked lasers?

A **continuous-wave (CW)** laser puts out a steady beam; a pulsed laser fires flashes.[^inv-rp-pulsed] Two tricks make the pulses short and hard:

- **Q-switching** holds lasing back while the gain builds, then releases it as one intense pulse, typically nanoseconds long, at around 10 Hz to 100 kHz.[^inv-rp-pulsed] Hellwarth proposed it in March 1961, and he and McClung demonstrated it in 1962.[^inv-photonics-timeline]
- **Mode-locking** locks the cavity's modes in phase so they add up into a train of picosecond or femtosecond pulses at MHz to GHz rates.[^inv-rp-pulsed] Hargrove, Fork and Pollack first showed it in a helium-neon laser in 1963.[^inv-photonics-timeline]

### What does "laser" stand for, and who came up with the word?

**Laser** is short for light amplification by stimulated emission of radiation, and the first recorded use of the acronym is in Gordon Gould's notebook of November 13, 1957, headed "Some rough calculations on the feasibility of a LASER."[^inv-wiki-gould][^inv-photonics-timeline] The word went public at a conference in 1959, and Arthur Schawlow and colleagues resisted it; Bell Labs' term was **optical maser**.[^inv-wiki-gould][^inv-brit-history]

It copied an older acronym. **Maser** - microwave amplification by stimulated emission of radiation - was named by Townes over lunch in a Columbia cafeteria in April 1954, after he turned down names ending in "-tron."[^inv-gordon-opn]

### What did Einstein have to do with it?

He supplied the physics 43 years early. In 1917, in a paper on the quantum theory of radiation published in Physikalische Zeitschrift (vol. 18, p. 121), Einstein described three ways light and matter trade energy: absorption, spontaneous emission and stimulated emission, which the surrounding radiation triggers. He used the three to derive Planck's radiation law.[^inv-ball-2017] Nobody put stimulated emission to work until the 1940s and 1950s.[^inv-aps-2005]

### Who built the maser, and when?

Townes conceived the idea on April 26, 1951.[^inv-photonics-timeline] He built it at Columbia with James Gordon and Herbert Zeiger in 1953-1954: an ammonia maser.[^inv-wiki-zeiger] The date it first worked moves with the source. Britannica gives the end of 1953, APS News 1953, Photonics Spectra 1954 and a 2017 Physics World piece 1955.[^inv-brit-history][^inv-aps-townes-schawlow][^inv-photonics-timeline][^inv-ball-2017] The full paper, "The Maser - New Type of Microwave Amplifier, Frequency Standard, and Spectrometer," appeared in Physical Review on August 15, 1955.[^inv-gordon-opn][^inv-wiki-zeiger]

In Moscow, Basov and Prokhorov at the Lebedev Institute worked out the theory of maser operation independently.[^inv-brit-history] They proposed a pumping method in 1955, and Bloembergen developed the solid-state maser in 1956.[^inv-photonics-timeline]

### What was the 1958 Schawlow and Townes paper?

It was the blueprint. In 1957 Townes suggested to Schawlow, then at Bell Labs, that they push maser action up to infrared and visible light, and their "optical maser" paper ran in Physical Review on December 15, 1958 (vol. 112, pp. 1940-1949).[^inv-brit-history][^inv-aps-townes-schawlow] Schawlow's contribution was putting mirrors at each end of the cavity.[^inv-aps-2005] They published before building anything.[^inv-aps-2005]

Bell Labs filed the patent in July or August 1958, depending on the source, and US 2,929,922 was granted on March 22, 1960 - two months before anyone had a working laser.[^inv-wiki-gould][^inv-aip-masers][^inv-photonics-timeline] In September 1959 Schawlow argued in public that pink ruby could not work as a laser.[^inv-rigby-2010]

### What happened with Gordon Gould and the laser patent?

Gould was a Columbia graduate student when he wrote his nine-page notebook in November 1957 and had it notarized at a neighborhood candy store.[^inv-innovateli-2021][^inv-hintze-2006] Townes had told him to write the ideas down and get them notarized.[^inv-brit-gould] In March 1958 Gould left Columbia without finishing his PhD to join a company called TRG, and in April 1959 Gould and TRG filed patent applications, eight or nine months after Bell Labs.[^inv-aip-masers][^inv-photonics-timeline]

Once the Schawlow-Townes patent issued in 1960, Gould challenged it, starting a dispute that ran 30 years.[^inv-photonics-timeline] He lost the main priority fight, largely because his notebook did not say outright that the laser's sidewalls were transparent.[^inv-wiki-gould] He did better on the patents that followed.

- **1968:** his first laser patent, for generating X-rays with a laser.[^inv-wiki-gould]
- **1970:** he bought his patent rights back from Control Data, which had acquired TRG. Wikipedia puts the price at $1,000 plus a small share of future profits; the Photonics Spectra timeline says $1 plus 10% of future proceeds.[^inv-wiki-gould][^inv-photonics-timeline]
- **1973:** the US Court of Customs and Patent Appeals ruled the Schawlow-Townes patent too general.[^inv-aps-townes-schawlow]
- **1977:** US 4,053,845, on optically pumped laser amplifiers, issued on October 11.[^inv-photonics-timeline][^inv-wiki-gould]
- **1979:** US 4,161,436, covering uses including welding, cutting, drilling, distance measurement, communications and laser fusion. Gould and his backers formed Patlex to hold and enforce the patents.[^inv-wiki-gould]
- **1985:** a federal court ordered the Patent Office to issue his gas-discharge amplifier patent, US 4,704,583.[^inv-wiki-gould] An appeal from the same year, Patlex Corp. v. Mossinghoff, lists Patlex and Gould against the Commissioner of Patents.[^inv-leagle-patlex]
- **1987:** Gould prevailed in the struggle over royalties after Patlex won its first decisive enforcement case.[^inv-brit-gould][^inv-wiki-gould]
- **1988:** his fourth and last basic laser patent was approved in April, and royalties began.[^inv-hintze-2006][^inv-aps-townes-schawlow][^inv-photonics-timeline] By then, Electronic Design reported, his amplifier patents covered 80% of US-made lasers in a market worth over $500 million a year.[^inv-hintze-2006]


The money is reported two ways. In 1989 Gould, then 68, expected close to $2 million a year once every licensee signed; Patlex owned 64% of the patent income, Gould 20% and Refac Technology Development Corp. the rest, and many laser makers said the fees were too high.[^inv-deseret-1989] Over his lifetime he signed away 80% of the proceeds to pay for the litigation and still earned several million dollars; Innovate Long Island puts the eventual payday at $30 million, an estimate, against about $100,000 had he been granted the patent promptly.[^inv-wiki-gould][^inv-innovateli-2021] He held 48 patents, entered the National Inventors Hall of Fame in 1991 and died in New York on September 16, 2005, aged 85.[^inv-wiki-gould][^inv-hintze-2006]

### Who built the first laser that worked?

Theodore Maiman, with a ruby crystal about 1 by 2 cm. On May 16, 1960, at Hughes Research Laboratories, he and his assistant Irnee d'Haenens drove the spiral flash lamp wrapped around it past 950 V and saw the first sign of laser action.[^inv-rigby-2010] The proof was not a bright beam but spectral narrowing above threshold, measured later that month.[^inv-rigby-2010][^inv-townes-2003] Townes later wrote that the pulsed lamp emptied the ruby's ground state enough for stimulated emission, which he called unexpected.[^inv-townes-2003] The line sits at 694.3 nm, deep red.[^inv-rp-lines]

Then the journals turned him down. Physical Review Letters rejected his report in late June 1960.[^inv-aip-masers] The story usually told is that it was dismissed as one more maser paper in a flood of them; Townes, who called that explanation a common belief, put the decision on editor Simon Pasternack, who judged it "simply more of the same" as a ruby paper Maiman had published that June.[^inv-rigby-2010][^inv-townes-2003] Maiman sent a shorter letter, "Stimulated optical radiation in ruby," to Nature, which printed it on August 6, 1960 (vol. 187, p. 493).[^inv-rigby-2010][^inv-maglab-maiman]

Hughes had already called a press conference on July 7. The photo it handed out showed a later prototype, not the first laser, papers ran "death ray" angles, and some scientists were skeptical because the Nature paper was not out yet.[^inv-rigby-2010][^inv-townes-2003] Bell Labs showed a pencil beam from its own ruby device on August 1 and published in October.[^inv-rigby-2010][^inv-aip-masers]

### Who made the first helium-neon laser?

Ali Javan, William Bennett Jr. and Donald Herriott at Bell Labs, in December 1960. It was the first gas laser and the first with a continuous beam.[^inv-brit-history] Javan had published the gas-laser idea in 1959. He saw the beam on December 12; the next day the team carried a telephone call over it, and their letter appeared on January 30, 1961.[^inv-lemelson-javan]

That first beam was invisible, at 1.15 micrometers in the infrared. The red 632.8 nm line that became the classroom laser came a few weeks later from Alan White and Dane Rigden at Bell Labs.[^inv-ethw-white] In between, in November 1960, Sorokin and Stevenson at IBM ran a uranium-doped calcium fluoride laser, the second solid-state laser.[^inv-photonics-timeline][^inv-aip-masers]

### When were the first semiconductor lasers made?

In a three-way race in autumn 1962. At General Electric, Robert Hall's team got gallium arsenide diode L-52 to lase on Sunday, September 16, when Gunther Fenner pulsed it above 12 A; they submitted to Physical Review Letters on September 24 and published on November 1.[^inv-hecht-2020] Marshall Nathan's team at IBM published in Applied Physics Letters the same day, and MIT Lincoln Laboratory (Quist, Keyes and Rediker) followed on December 1. An MIT spokesperson told the New York Times that GE got there "a couple days or a week" earlier, and an IEEE Milestone credits all three.[^inv-spectrum-2024] Those first diodes ran in liquid nitrogen.[^inv-spectrum-2024]

Nick Holonyak at GE Syracuse published a visible red gallium arsenide phosphide diode in October 1962. Continuous room-temperature diodes took until spring 1970, from Alferov's group in the USSR and from Panish and Hayashi at Bell Labs.[^inv-photonics-timeline]

### Who invented the CO2 laser?

Kumar Patel at Bell Labs. He found laser action in carbon dioxide in 1963, getting tens of milliwatts at 10.6 micrometers on the first try; adding nitrogen pushed it to 10 W.[^inv-spie-2009] The nitrogen-CO2 laser of 1964 was, in Lemelson-MIT's description, the first gas laser to produce high power continuously.[^inv-lemelson-patel] Classified work scaled it fast: Gerry and Kantrowitz at Avco Everett showed a gas-dynamic CO2 laser in 1966, kept classified until 1970, by which time such lasers reportedly reached 100 kW.[^inv-spie-2009] Patel received the National Medal of Science in 1996.[^inv-lemelson-patel]

### Who invented the Nd:YAG laser?

A Bell Labs team in 1964, though the roster varies. SPIE names Geusic, Marcus and Van Uitert, who first ran neodymium-doped yttrium aluminum garnet at 1.06 micrometers; the Photonics Spectra timeline credits "Geusic and Smith."[^inv-spie-2009][^inv-photonics-timeline] Its 1064 nm line can be doubled to 532 nm green, tripled to 355 nm and quadrupled to 266 nm.[^inv-rp-lines]

The rest of the family followed quickly. Sorokin and Lankard at IBM showed liquid dye lasers in 1966, and Bernard Soffer and McFarland made one tunable in March 1967.[^inv-spie-2009][^inv-photonics-timeline] The first excimer laser, a xenon dimer pumped by an electron beam, ran at the Lebedev Institute in Moscow in 1970, fulfilling a Basov prediction.[^inv-zvorykin-2023]

### Who called the laser "a solution looking for a problem"?

Britannica gives the joke to Irnee d'Haenens, Maiman's young colleague.[^inv-brit-history] Townes wrote that many people, himself included, called the laser that, partly as a joke and partly as a challenge, and named no originator.[^inv-townes-2003] The problems did not take long to arrive: the first medical laser treatment of a human patient was in December 1961, and Leith and Upatnieks at the University of Michigan made the first laser holograms in late 1963.[^inv-photonics-timeline][^inv-brit-history]

### Which Nobel Prizes have been given for lasers?

Townes and Schawlow each won one; Gould and Maiman did not.

| Year | Physics laureates | For |
|---|---|---|
| 1964 | Charles Townes (1/2); Basov and Prokhorov (1/4 each) | quantum electronics leading to oscillators and amplifiers on the maser-laser principle[^inv-nobel-1964] |
| 1966 | Kastler | optical pumping methods[^inv-optica-nobel] |
| 1971 | Gabor | holography[^inv-optica-nobel] |
| 1981 | Bloembergen and Arthur Schawlow (1/4 each); Kai Siegbahn (1/2, electron spectroscopy) | laser spectroscopy[^inv-nobel-1981] |
| 1997 | Chu, Cohen-Tannoudji, Phillips | cooling and trapping atoms with laser light[^inv-nobel-1997] |
| 2005 | Hall and Hänsch | laser precision spectroscopy, including the frequency comb[^inv-optica-nobel] |
| 2018 | Arthur Ashkin (1/2); Gérard Mourou and Donna Strickland (1/4 each) | optical tweezers; chirped pulse amplification[^inv-nobel-2018] |
| 2023 | Agostini, Krausz, L'Huillier | attosecond pulses of light for studying electrons in matter[^inv-nobel-2023] |

The 2018 prize reaches into everyday life. **Chirped pulse amplification** stretches a pulse, amplifies it and squeezes it back down, from a 1985 paper by Mourou and Strickland, and the Nobel committee says it is now used in millions of eye operations a year.[^inv-nobel-2018] Ashkin's **optical tweezers** held living bacteria in 1987.[^inv-nobel-2018] For the 2023 prize, Krausz had isolated a single 650-attosecond pulse in 2001.[^inv-nobel-2023]

### What are the main kinds of laser?

Lasers are sorted by gain medium. The wavelengths below are the reference lines, and the last column links to where each family gets used.

| Family | Gain medium | Main wavelengths | Notes | More |
|---|---|---|---|---|
| Helium-neon | gas mix | 632.8 nm red; also 543.5, 594.1, 611.8 nm; 1.15 and 3.39 micrometers[^inv-rp-lines] | first continuous laser, 1960[^inv-brit-history] | [everyday](/everyday/), [science](/science/) |
| Argon and krypton ion | ionized gas | argon 351, 457.9, 488.0, 514.5 nm; krypton 647.1 nm[^inv-rp-lines] | pulsed argon first shown at Hughes, March 1964[^inv-photonics-timeline] | [show lasers](/lasers/) |
| CO2 | carbon dioxide gas | 9.4 and 10.6 micrometers[^inv-rp-lines] | most powerful continuous gas laser, kilowatt outputs[^inv-brit-principles] | [industry](/industry/), [medicine](/medicine/), [defense](/defense/) |
| Excimer | rare-gas halide gas | ArF 193 nm, KrF 248 nm, XeCl 308 nm, XeF 351 nm[^inv-rp-lines] | ultraviolet; first excimer 1970[^inv-zvorykin-2023] | [medicine](/medicine/), [industry](/industry/) |
| Solid-state crystal and glass | doped crystal or glass | ruby 694.3 nm; Nd:YAG 1064 nm (532, 355, 266 nm harmonics); Yb:YAG 1030 nm; Er:YAG 2940 nm; Ti:sapphire tunable[^inv-rp-lines] | ruby was the first laser, 1960[^inv-rigby-2010] | [industry](/industry/), [medicine](/medicine/), [science](/science/) |
| Fiber | erbium- or ytterbium-doped fiber | set by the dopant | diode-pumped[^inv-coherent-glossary] | [industry](/industry/), [everyday](/everyday/) |
| Semiconductor diode | p-n junction | visible or infrared, set by the compound | pumped by current; edge emitters and VCSELs[^inv-coherent-glossary][^inv-brit-principles] | [everyday](/everyday/), [show lasers](/lasers/) |
| Dye | organic dye in liquid | tunable across a range[^inv-brit-principles] | first shown 1966[^inv-spie-2009] | [science](/science/) |
| Chemical | gases reacting | varies | powered by a chemical reaction, high power[^inv-brit-principles] | [defense](/defense/) |
| Free-electron | electrons in a periodic magnetic field | widely tunable | some specialists question whether it counts as a laser[^inv-brit-principles] | [science](/science/) |

