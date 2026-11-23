## Why lasers can hurt you, and how shows are made safe

**The short version:** A visible laser beam passes through the front of the eye and is focused onto the retina, so a few milliwatts in the wrong place can do damage that a far brighter lamp cannot. The exposure limit for a visible beam assumes a blink or a turned head within a quarter of a second, and it works out to about 2.5 mW/cm2. Show safety is the work of keeping every beam a person could meet under that limit - with distance, a wider beam, a moving beam and a fast cutoff when something fails.

### How does a laser beam injure an eye?

Visible and near-infrared light, roughly 380 to 1,400 nm, goes straight through the cornea and lens and is focused on the retina, which is where the damage happens.[^saf-muslubas] The medical literature names three mechanisms - thermal (cooking), photochemical and ablative - and severity climbs with exposure time, energy and short pulses.[^saf-muslubas]

A lamp throws light in every direction, so an eye across the room collects a sliver of it and images the lamp as a small patch. A laser beam is narrow and close to parallel. If it is thinner than a pupil, the whole beam can enter the eye, and the eye's own lens concentrates it onto a point on the retina. The optics that let a person read small print are the hazard.

### What does a quarter of a second have to do with it?

The limit for a visible continuous beam is built on a reflex. It assumes a person hit by bright light blinks or turns away within 0.25 seconds, the **aversion response**.[^saf-lps-irradiance]

**Maximum Permissible Exposure (MPE)** is the highest level of laser light a standard treats as acceptable for an eye or skin over a given time.[^saf-ilda-audscan] For a visible beam and that quarter second it is about 2.5 mW/cm2. The number comes from a widely used laser safety reference site, since the standards that define it, ANSI Z136.1 and IEC 60825-1, are sold rather than posted.[^saf-lps-irradiance] Calculators show 2.54 or 2.55 mW/cm2 because of small differences in constants, and the FAA's air traffic order rounds up to 2.6 mW/cm2, so three versions of one limit are in circulation.[^saf-lps-irradiance][^saf-faa-7400] A 1998 UK doctoral thesis gives it in energy terms, 6.36 J/m2 for an accidental 0.25 s exposure, and says the visible-light value had not changed since the British standard of 1983.[^saf-ohagan-ch2]

Longer looks get a lower ceiling: the same reference lists 1.80 mW/cm2 at 1 second and 1.01 mW/cm2 at 10 seconds, against 5.69 mW/cm2 at a hundredth of a second.[^saf-lps-irradiance]

The International Laser Display Association (ILDA), the trade body, says the limits are essentially the same worldwide. What differs between countries is enforcement.[^saf-ilda-audscan]

### How far away is far enough?

**Irradiance** is power spread over area, and it falls with distance because every beam widens as it travels. **Divergence** is how fast it widens. The **Nominal Ocular Hazard Distance (NOHD)** is the point where the beam has spread enough for its irradiance to drop to the MPE, and it depends on two things only: power and divergence.[^saf-lps-irradiance]

The arithmetic is lopsided. Doubling the divergence halves the hazard distance. Cutting the power 100 times shortens it only 10 times, because the relationship follows a square root.[^saf-lps-irradiance] Widening the beam shortens the hazard distance faster than weakening it does.

### Why does it matter that the beam is moving?

A [scanned beam](/scanning/) crosses any one eye for a very short time. If the scanner slows or stops, the same light becomes a parked beam. The FDA's 1985 compliance guide, as the O'Hagan thesis summarizes it, said scanned beams with a peak power above 5 mW pose an acute risk of injury if the scan slows or stops, and treated the safeguard against that as a critical feature.[^saf-ohagan-ch2]

That safeguard is written into US law. Under 21 CFR 1040.10(f)(9), a laser product that emits scanned radiation must have a **scanning safeguard**, so that a scan failure cannot expose people above the applicable limits.[^saf-cfr-1040-10]

### What do the laser classes mean?

Two systems are in use. The international one is the standard IEC 60825-1, adopted as BS EN 60825-1 in the UK, DIN EN 60825-1 in Germany, JIS C 6802 in Japan and CAN/CSA E60825-1 in Canada.[^saf-ukhsa][^saf-jis][^saf-hc-guidance] The US one is law: 21 CFR 1040.10(b) defines each class by the emission-limit table a product's accessible radiation exceeds.[^saf-cfr-1040-10] The FDA publishes its own mapping between the two.[^saf-fda-products]

| IEC 60825-1 (standard) | US, 21 CFR 1040.10 (law) | Output power | What the class means |
|---|---|---|---|
| Class 1 | Class I | - | Safe in normal use, long direct viewing included; covers fully enclosed high-power lasers |
| Class 1M | Class I | - | Safe for the naked eye, can harm through magnifying optics |
| Class 1C | none in the FDA's mapping | - | Skin-contact medical and cosmetic devices, with eye exposure prevented by engineering |
| Class 2 | Class IIa, II | - | Visible only (400-700 nm); safe for brief exposure because people turn from bright light; hazardous if stared into |
| Class 2M | Class IIa, II | - | As Class 2 with a large beam; harmful through magnifiers |
| Class 3R | Class IIIa | up to 5 mW | Can injure with direct viewing; risk generally low, rising with time |
| Class 3B | Class IIIb | up to 500 mW | Hazardous even for brief accidental direct exposure; diffuse reflections normally safe |
| Class 4 | Class IV | above 500 mW | Hazardous to eyes and skin, often a fire hazard |

The IEC descriptions are the UK Health Security Agency's, updated in March 2025.[^saf-ukhsa] The US rule counts Class IIIa visible output across 400 to 710 nm.[^saf-fda-shows]

Show projectors live at the bottom of that table. The FDA lists "laser light show projectors" as examples of both Class IIIb and Class IV, and the UK's Health and Safety Executive (HSE) puts display lasers at about 200 mW to 40 W or more.[^saf-fda-products][^saf-hse] ILDA's 2022 draft standard draws the visible line at 5 mW to 499.9 mW for Class 3B and 500 mW and up for Class 4.[^saf-ilda-cat-a]

Class also sets the hardware. In the US, 21 CFR 1040.10(f) requires a protective housing and safety interlocks, from Class II up an emission indicator and a beam attenuator, for Class IIIb and IV a remote interlock connector and a key control, and, for Class IV systems made after August 20, 1986, a manual reset.[^saf-cfr-1040-10]

### What can a Class 4 beam do besides hurt eyes?

The FDA describes Class IIIb as an immediate skin hazard from the direct beam and an immediate eye hazard when viewed directly. For Class IV it is blunter: "Immediate skin hazard and eye hazard from exposure to either the direct or reflected beam", with a possible fire hazard.[^saf-fda-products] Reflections count.

HSE says display lasers are a significant eye-injury risk, above about 500 mW they may also burn skin and start fires, and outdoors they can dazzle drivers and pilots.[^saf-hse] The FDA's public summary lists the same four - eye injury, skin burns, fire, and distracting or temporarily blinding pilots and drivers.[^saf-fda-shows]

The beam is not the whole risk. A database of 330 laser incidents from 1964 to 1996, compiled by Rockwell and cited by O'Hagan, recorded 24 fires and 12 electric shocks, five of them fatal.[^saf-ohagan-thesis]

### What is audience scanning?

**Audience scanning** is beams deliberately swept through the crowd, at levels meant to stay within the exposure limit. A sheet or tunnel of light passes through the people watching instead of over their heads.

In the US the default answer is no. The standard conditions printed on the FDA's [variance application](/rules/) say scanning, projection or reflection into audiences or accessible uncontrolled areas "will not be permitted except for diffuse reflections produced by the atmosphere", by added scattering media and by target screens, and the same form keeps laser light above Class I limits at least 3.0 meters above and 2.5 meters to the side of or below anywhere the public may be.[^saf-fda-3147] These are conditions attached to an approval, binding on whoever holds it. The form does list "Audience scanning" among the effects an applicant can declare, which is the route to a specific approval, and the FDA excludes audience scanning variances from its streamlined renewal process.[^saf-fda-3147][^saf-fda-ln55]


Germany shows the other approach. The exposure limit is the same, and the question the statutory accident insurers' guidance asks is whether that limit holds in the audience area for the whole show. A beam in the audience space is not banned outright; it may be treated as safe only if it is attenuated, widened, split or moved fast enough that the limits are not exceeded.[^saf-dguv] ILDA's country list adds permit regimes on top of that test in Sweden, Switzerland and Austria, though ILDA labels the list unofficial.[^saf-ilda-list]

### What is ILDA's position on audience scanning?

ILDA supports the MPE and defends the effect. Its own estimate is that over about three decades some 110 billion laser pulses have entered audience eyes with "essentially no injuries" from continuous-wave shows.[^saf-ilda-audscan] It follows that with a warning: "Just because a show is legal, or is not stopped, does not necessarily mean that it is safe."[^saf-ilda-audscan]

Its recommended ceilings, measured as a static beam at the closest audience position, are 2.5 mW/cm2 for static beams and 10 mW/cm2 for continuously scanned beams, the second being ILDA's reading of the single-pulse limit. It has also proposed a "Level 2" of up to 100 mW/cm2 under special conditions, and says plainly that this is its own proposal and not law anywhere it knows of.[^saf-ilda-audscan] ILDA members affirm that pulsed lasers should never be used for audience scanning,[^saf-ilda-list] and since the 2017 ILDA Awards, entries with human exposure must include measurements taken at the time.[^saf-ilda-audscan]

Not everyone has been persuaded. O'Hagan's 1998 thesis, the deepest free study of UK show-laser risk, concluded that audience scanning was "not acceptable in its current form" and that assessing a scanned display is complex.[^saf-ohagan-thesis] ILDA's own draft baseline standard for ordinary shows, Category A, prohibits audience scanning, lighting up people, unterminated beams, pulsed lasers and bounce mirrors, to keep the category easy to check.[^saf-ilda-cat-a]

### How is a beam kept within the limit when it does reach people?

ILDA describes the principles in general terms:[^saf-ilda-audscan]

- **A wider beam.** A lens that increases divergence puts the same power over more area.
- **Less power near people.** Filters, beam splitters or a software attenuation map dim the part of the scan field that reaches the crowd.
- **A cutoff if the scan fails.** ILDA's target for the safeguard is shut-off within 10 ms, preferably 1 ms.
- **Measurement.** Irradiance is checked at the nearest audience position with every color at full show level.
- **A trained person watching.** An operator with an emergency stop watches the whole time.

### Has anyone been hurt at a laser show?

Yes, and the best-known case is still argued over. At the Aquamarine Open Air Festival in Kirzhach, Russia, in July 2008, attendees said heavy rain pushed organizers to put up large tents, and beams meant for the sky reached the crowd.[^saf-nbc-reuters] The newspaper Kommersant, relayed by Reuters, quoted a treating ophthalmologist: "They all have retinal burns, scarring is visible on them."[^saf-nbc-reuters]

Almost every other detail comes in two versions. Reuters dated the event July 5 and put Kirzhach 50 miles northeast of Moscow; Photonics.com, citing Kommersant, gave July 6 and about 100 miles.[^saf-nbc-reuters][^saf-photonics-1] Reuters counted 12 patients confirmed by Moscow health officials at one clinic plus 17 more that Kommersant reported at a city hospital, 29 in all; Photonics.com reported more than 30, aged 16 to 30.[^saf-nbc-reuters][^saf-photonics-1] By July 16, Photonics.com reported, Kommersant had revised its count to 12, all with hemorrhages around the retina.[^saf-photonics-2] A 2020 editorial in a retina trade journal put it at about 30 people seeking care and 12 cases of laser retinopathy reported by the Moscow Health Department.[^saf-retinal-physician]

Russian officials said a laser aimed into the audience several times, against safety rules, was the possible cause. Some Moscow ophthalmologists questioned the laser explanation, with an alternative theory the follow-up report called unproven.[^saf-photonics-2] A regional government representative told the Associated Press the festival lacked proper permits, while an organizer said the hired laser company held safety certificates.[^saf-photonics-1] The 2020 editorial says high-powered pulsed lasers were used; that detail rests on the editorial alone.[^saf-retinal-physician] None of the coverage cites an official technical finding on the lasers.

The medical journals hold smaller cases. In South Korea in 2014, two 20-year-old women lost vision to 20/800 after a laser show at the same club on consecutive days; both had surgery and recovered 20/20. The device was reported as a 510 nm green diode laser labeled 2 mW, Class 3R, the operators denied modifying it, and the authors suggested repeated exposure over hours as a factor.[^saf-jeon-lee] A 2016 Turkish paper described three macular injuries from non-medical lasers - at a wedding, at a hotel (a 9-year-old) and at an entertainment venue. Two recovered near-normal vision after surgery, one was left with permanent loss, and the laser types and powers were never established.[^saf-muslubas]

For scale, the Rockwell database counted 241 eye incidents across all laser uses from 1964 to 1996, of which 16 involved spectators and 11 involved laser show operators. O'Hagan noted that no dedicated incident data existed for entertainment lasers.[^saf-ohagan-thesis]

### Can a laser show damage a phone or camera?

Yes. The eye limit does not protect cameras: no MPE has been written for camera sensors, a camera lens can gather more light than an eye and focus it to a finer point, and ILDA's summary is that sensors "are, in general, more susceptible to damage than the human eye."[^saf-ilda-camera] Damage runs from a few dead pixels to dead rows and columns to burned-in patterns.[^saf-ilda-camera]

ILDA reports thresholds from a March 2017 paper in Optical Engineering: roughly 40,000 to 60,000 W/cm2 for color CMOS sensors, about 16,000 W/cm2 for CCDs at short exposures, and about 19,000 W/cm2 for the mirror chips in video projectors.[^saf-ilda-camera] Its case list includes Canon 5D Mark II and HP Photosmart 945 sensors, and 12 video projectors worth over $100,000 damaged when a truss was not raised to height.[^saf-ilda-camera] Camera damage was reported at Aquamarine too.[^saf-photonics-2]

A concertgoer's phone camera was left with permanent black lines after a beam entered the lens at a show in Naples, Italy, on April 19, 2023, PetaPixel reported; the same piece quotes Sony's 2021 notice for its cameras: "Do not directly expose the Lens to beams such as laser beams."[^saf-petapixel-2023] A leaked Apple repair guide from September 2014 listed laser contact with the camera as damage outside warranty.[^saf-lps-camera]

The highest risk is a beam straight into the lens. ILDA says shots of beams in mid-air or of graphics on a screen should not cause damage, that producers "cannot be responsible for audience-member damage to cameras", and that for fixed cameras the laser operator should keep beams off the lens.[^saf-ilda-camera]

### Who is responsible on site?

In the US, the person holding the variance. The FDA's position since 1977 is that assembling a show from an existing laser makes a new product, so the show producer is legally a manufacturer.[^saf-fda-shows] The variance conditions then require an operator who directly controls the show and can stop it at once if conditions become unsafe.[^saf-fda-3147]

The **Laser Safety Officer (LSO)** is the named person responsible for laser safety. State rules in New York, Texas, Massachusetts and Illinois require or name one, and in Massachusetts the officer is responsible for shutting the laser down if conditions turn unsafe.[^saf-ny-rule50][^saf-tx-289][^saf-ma-121][^saf-il-315] Germany requires a Laserschutzbeauftragter, appointed in writing, before Class 3R, 3B or 4 lasers are operated, unless the employer has the required expertise personally.[^saf-de-ostrv] ILDA's 2025 survey of requirements says the US federal variance form mentions an LSO only where audience scanning is approved, and that the UK has no formal qualification.[^saf-ilda-lso]

Standards and trade practice fill in the rest. ANSI Z136.1 is the general US standard for safe laser use, and Z136.10 covers entertainment, display and exhibition settings.[^saf-z136] ILDA's draft Category A standard defines four roles - Employer, Laser Safety Officer, Laser Operator and Laser Spotter - and its one-page US overview describes a trained operator who can see every beam path or uses a spotter, with emergency stops within reach.[^saf-ilda-cat-a][^saf-ilda-overview] Outdoors, the FAA's advisory circular describes a safety observer who can terminate the beam immediately.[^saf-faa-ac70]

### Are laser shows safe to watch?

The regulators' answer is that a compliant show is designed so the audience never meets a hazardous beam. The FDA says shows "keep hazardous lasers away from the audience", and that where a beam could fall on the crowd, power is kept below hazardous levels.[^saf-fda-shows] HSE says display lasers need controls against significant eye injury, and lists scan-failure safety systems, emergency stops, barriers and competent operators.[^saf-hse]

The record backs that up without making it a guarantee. Sixteen spectator eye incidents in a 32-year database and ILDA's "essentially no injuries" estimate sit beside Kirzhach, a Seoul club and three Turkish cases.[^saf-ohagan-thesis][^saf-ilda-audscan][^saf-nbc-reuters][^saf-jeon-lee][^saf-muslubas] No dedicated count of show injuries existed when O'Hagan went looking in 1998, so nobody can put a rate on it.[^saf-ohagan-thesis]
