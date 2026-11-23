## Programming and running a show

**The short version:** A laser image is a list of points that two mirrors chase tens of thousands of times a second, with the beam switched off between shapes. Software arranges those points into cues or a timeline, a converter box turns them into voltages, and a trained operator stays at the controls with an emergency stop in reach. Most of the vocabulary a newcomer meets - ILDA cable, test pattern, zones, timecode, busking - names one link in that chain.

### Where did laser show programming start?

At a console somebody played. Laserium's operators sat at the Laserium Light Synthesizer, a desk with more than 150 controls for image size, motor speeds, brightness, shape and color, by former laserist Glenn Thomas's count.[^pro-thomas-laserist] "It's kind of like an old-fashioned analog synthesizer, only it does it with light," laserist Tim Barrett told the Daily Bruin in 1997.[^pro-dailybruin-griffith] The music and a data track synced to it handled some image types, beam on/off and sizing. The laserist performed the rest, which Thomas puts at 90% of each show - his own estimate, never measured.[^pro-thomas-laserist] The [planetarium](/planetarium/) and [history](/history/) chapters tell that story in full.

The trade later sorted consoles into two families: "real-time performance consoles", generally analog, and "button box consoles", generally digital, which depend on a computer and recall pre-programmed sequences.[^pro-laserfx-works4] The show LaserFX's history counts as the first automated one was "Lovelight", on February 4, 1977. Its images were drawn on a digitizing pad and stored in PROM chips, with control tracks recorded on an 8-track instrumentation recorder.[^pro-laserfx-history]

### How is a laser image stored?

As a list of points. Each **frame** is one complete list for one image. Digital-to-analog converters turn each point into voltages for two mirrors mounted at right angles, and the list is redrawn many times a second so the eye reads a moving dot as a steady line.[^pro-laserfx-works5] The producer of the Stone Mountain Lasershow in Georgia compared the laser to a pencil drawing on the mountain: more than 1,000 points per image, at about 30,000 points per second (reported, undated).[^pro-11alive-stone-mountain]

Mirrors have mass, and the data has to admit it. Pangolin's BEYOND manual separates a **point**, which becomes exactly one output sample, from a **vector**, where the software places samples along long lines and at corners on its own.[^pro-pangolin-wiki-vectors] Extra points stacked on one spot, called **anchor points**, give the scanners time to stop and start. Too few and the line cuts the corner or overshoots; too many and the end of the line shows as a bright dot.[^pro-pangolin-wiki-vectors] **Blanking** hides the beam while the mirrors travel between objects, and a blanked anchor at the end of a line keeps a "tear" from trailing after it.[^pro-pangolin-wiki-vectors] Points spaced too far apart make the beam curve where a straight line was intended.[^pro-pangolin-wiki-vectors]

### Why can't a laser projector play video?

A TV picture is a **raster**: closely spaced horizontal lines, which takes very high bandwidth. Scanner mirrors move mechanically and cannot keep up, so laser systems store **vector** images - endpoints and changes of direction - and draw mostly outlines.[^pro-laserfx-works5] Laser raster exists, but LaserFX, writing between 1996 and 2008, put the ceiling at about 60 to 80 lines, which means small, coarse pictures.[^pro-laserfx-works5]

The same limit explains flicker. In BEYOND, frames per second equals the projector's sample rate divided by the number of samples in the frame.[^pro-pangolin-wiki-vectors] A 1,500-sample frame at 30,000 samples per second redraws 20 times a second, inside the 18 to 22 Hz LaserFX gives as typical.[^pro-laserfx-works5] Add detail and the redraw rate falls until the image strobes. Raising the sample rate helps at a price: each sample gets a smaller slice of the beam's time, so it is dimmer, and past a certain rate the path bends because the beam cannot reach the next point before it is told to leave.[^pro-pangolin-wiki-vectors] How fast the mirrors can go is in the [scanning chapter](/scanning/).

### What is an ILDA cable?

The International Laser Display Association, whose first meetings date to 1986, publishes four technical standards.[^pro-ilda-history][^pro-ilda-technical]

| Standard | Current revision (official) | What it covers |
|---|---|---|
| ILDA Standard Projector (ISP) | Rev. 002, July 1999 | The projector itself, including the DB-25 connector |
| Test Pattern | Rev. 002, October 1995 | A frame for tuning scanners and blanking |
| Image Data Transfer Format (IDTF, .ild) | Rev. 011, November 16, 2014 | Exchanging frames and files between systems |
| IDN Stream | Rev. 002, July 2025 | Laser data over a network |

The one people touch is **ISP-DB25**, the 25-pin connector used with almost every laser projector, which superseded a 1989 DB-25 specification.[^pro-ilda-idn-stream][^pro-ilda-isp-rev002] It is an analog cable. Pin pairs carry X and Y position, red, green and blue, an intensity signal and an interlock loop, with four pairs left to the user and a single pin for the shutter.[^pro-laserfx-isp-db25] X and Y swing 10 V peak to peak; each color runs 0 to +5 V; the shutter is closed at 0 V and open at +5 V.[^pro-ilda-isp-rev002] The interlock loop is tied together at the signal source, and a projector that finds it broken is required to close a shutter or turn off the laser. That also keeps a projector dark when it is plugged into a DB-25 port that has nothing to do with lasers.[^pro-ilda-isp-rev002] Pangolin's glossary puts the practical cable run at about 150 ft (vendor guidance, undated).[^pro-pangolin-definitions]

### What is the ILDA test pattern for?

Tuning. It is a standard frame used to align and calibrate galvanometer projectors and playback equipment, output at 12,000 or 30,000 points per second, within 1%.[^pro-ilda-test-pattern] The rate is a calibration reference, applied during adjustment only.[^pro-ilda-test-pattern]

The part everyone recognizes is a circle inside a square. On a properly tuned projector the circle is round and touches the square at four points. A circle sitting inside the square means the servo gain goes up; a circle bulging outside means it comes down.[^pro-ilda-test-pattern] A separate section checks blanking timing: a row of lines should converge on a mark, with the fifth dot barely visible and the sixth fully dark.[^pro-ilda-test-pattern]

### What are .ild files and IDN?

**IDTF**, behind the .ild extension, is ILDA's format for exchanging laser show frames and files between systems.[^pro-ilda-technical]


**IDN**, the ILDA Digital Network, moves the projector connection from the electrical level of the DB-25 to a network protocol. ILDA members voted to adopt its Stream specification in Dubai in 2015, and the association now lists a second revision from July 2025.[^pro-ilda-idn-stream][^pro-ilda-technical] In the 2015 text, IDN carries laser graphics either as a continuous stream of samples or as frames that repeat until replaced, along with laser effects and DMX512 data, on up to 64 channels per device, at a default sampling rate of 100 kHz.[^pro-ilda-idn-stream] It also adds metadata so that artwork can "describe itself instead of being bound to specific environments".[^pro-ilda-idn-stream] The companion pieces - IDN-Hello, a file transfer format and session maintenance - are still listed as in development.[^pro-ilda-technical]

### What software and controllers do laser shows use?

A laser controller has two halves: software that builds the points, and a **DAC** (digital-to-analog converter) that turns them into the voltages a projector takes.[^pro-pangolin-definitions] In BEYOND, the PC does all the laser calculations and the output board handles color conversion and final output.[^pro-pangolin-wiki-intro] Pangolin's About page says the company was founded in 1986 by William R. Benner Jr. and Patrick Murphy; its innovation page says "since 1985".[^pro-pangolin-about][^pro-pangolin-innovation]

| Product | Maker | What it is | Date | Whose date |
|---|---|---|---|---|
| Laser PC | Pangolin | First product on the company timeline | 1986 | maker[^pro-pangolin-about] |
| Lasershow Designer 2000 (LD2000) with QM2000 | Pangolin | Show software and its hardware | 1995 | maker[^pro-pangolin-about] |
| Showtime | Pangolin | Timeline programming for LD2000 | 2004 | maker[^pro-pangolin-about] |
| QM2000.NET, Flashback 3 SE | Pangolin | Network control for QM2000; Flashback 3 SE hardware | 2006 | maker[^pro-pangolin-about] |
| QuickShow with FB3QS | Pangolin | Show software with a USB DAC | 2008 | maker[^pro-pangolin-about][^pro-pangolin-definitions] |
| BEYOND | Pangolin | Show software; the PC does the laser calculations | 2011 | maker[^pro-pangolin-about] |
| FB4 | Pangolin | Network DAC, external or built into the projector; can run shows with no control station | 2014 | maker[^pro-pangolin-about][^pro-pangolin-definitions] |
| Phoenix Showcontroller | German-developed | LIVE and PRO versions; PRO for time-synchronized laser, DMX, audio and video | development began 1995 | press[^pro-livedesign-phoenix] |
| Showcontroller with ShowNET | Laserworld Group | Suite with live, timeline, drawing and tracing tools; ShowNET network interfaces | no date given | maker[^pro-laserworld-showcontroller] |
| Lasergraph DSP | LaserAnimation Sollinger | Standalone controller with its own system software; the processing sits in the controller, so each unit runs without a permanent connection to a control computer | "more than 25 years ago" on an undated distributor page; distributed by Laserworld from April 2016 | distributor, press[^pro-laserworld-lasergraph][^pro-lsi-lasergraph] |
| Mamba 2.0 | maker not named | Timeline with up to 512 DMX channels, show error check, LAN interface | July 2009 | press[^pro-lsi-mamba] |
| Ether Dream 4 | Jacob B. Potter; distributed by X-Laser | Ethernet DAC, 16-bit X/Y, eight 10-bit color and aux channels | spec sheet March 2023 | maker[^pro-xlaser-etherdream4] |
| Helios | open source | Low-cost USB DAC for ISP-DB25; license bars selling manufactured units | no date given | maker[^pro-github-helios] |
| MadLaser | garageCube (MadMapper) | Real-time vectorizing of video, laser shaders, masks, ILDA import and export | beta October 28, 2021 | press[^pro-cdm-madlaser] |
| TouchDesigner laser operators | Derivative | Shapes to sample streams for Ether Dream, Helios or ShowNET, or out through BEYOND | no date given | maker[^pro-derivative-lasers] |
| Liberation | Seb Lee | Built on his open-source ofxLaser; made to be played like an instrument from an APC40 Mk2 | back story published March 13, 2023 | maker[^pro-liberation-backstory] |
| LaserOS | Wicked Lasers / Laserdock | Free cross-platform software for LaserCube, with timeline and ILDA/SVG import | no date given | maker[^pro-appstore-laseros] |

### How are lasers controlled inside a bigger production?

Pangolin describes four ways to run a live show: from a PC or touchscreen; from a MIDI or DMX controller driving the PC; from a lighting console driving the PC; and from a lighting console alone, with content saved onto FB4 hardware. It names grandMA, ChamSys, Hog and Avolites desks, and says the last route is popular with lighting designers.[^pro-pangolin-live-shows]

On that route **DMX** mainly triggers stored laser content, and **Art-Net** is DMX carried over a network (the maker's glossary).[^pro-pangolin-definitions] An FB4 presents a 39-channel DMX profile and ships with more than 3,500 cues on its SD card. From the desk a programmer adjusts size, position, rotation, effects, color and geometric correction (maker's figures, undated).[^pro-pangolin-console-mode] Going the other way, BEYOND can appear to the console as a fixture. A 16-channel profile lets the desk drive it much as a MIDI controller would, and in DMX Server mode each projection zone becomes a fixture of 16, 32 or 50 channels, a setup the manual associates with rigs of more than 40 projectors.[^pro-pangolin-wiki-artnet] Art-Net and sACN are both supported, on a separate network by the manual's advice, because Art-Net traffic can interfere with FB4 data.[^pro-pangolin-wiki-artnet] The same glossary lists OSC as a networking protocol for show control.[^pro-pangolin-definitions]


On Beartooth's 2024 tour, eight X-Laser Skywriter fixtures in 5 W and 10 W versions were programmed by the lighting designer as part of a timecoded show on a grandMA2.[^pro-tpi-beartooth] "The true advantage is being able to integrate lasers with standard lights," that designer, Ben Jarrett, told TPi.[^pro-tpi-beartooth] How the desk, the video and the clock fit together around the lasers is the subject of [Showfile](https://showfile.cold.fyi/).

### What is the difference between busking and a time-coded show?

**Busking** is running cues live to the music. A **time-coded** show plays back a programmed timeline locked to a clock signal that lights, video and audio also follow.[^pro-pangolin-veld][^pro-pangolin-wiki-timecode]

For a timeline show, the music is loaded into the software, effects are laid against the waveform, and the saved show is then triggered from a PC, MIDI, DMX, a lighting console or SMPTE timecode.[^pro-pangolin-preprogrammed] BEYOND accepts MIDI timecode, SMPTE through a reader, Art-Net timecode and Synchronorm, one type at a time. An armed show waits with a flashing "TC" and stops after 1 second without signal unless it has been set to keep running.[^pro-pangolin-wiki-timecode] A$AP Rocky's Don't Be Dumb Tour used timeline programming to tie every laser effect to the video content, lighting and music, by Pangolin's account.[^pro-pangolin-asap] Designer Corbin Sharpe gave EDM Identity the aim in 2026: "I want the lasers to look like they're being controlled by the music."[^pro-edmidentity-sharpe]

The main stage at VELD Festival 2026 was busked: 12 projectors of 40 W each, with built-in FB4s, ran from one BEYOND workstation and no timecode, with cues previsualized in Depence R4 (vendor case study).[^pro-pangolin-veld] "For busking and live operation, I like to reserve lasers for big moments," said the operator quoted there, identified only as Danny of DC Lasers.[^pro-pangolin-veld] Live sync aids include tap BPM, automatic BPM detection from an audio input, and DJ-software plugins that report tempo and track position.[^pro-pangolin-sync-music]

### Where does programming meet safety?

In the zone settings. A **projection zone** is a named output area with its own geometry. BEYOND handles what its manual calls a virtually unlimited number of them from up to 40 projectors per computer, and content addressed to a zone name that does not exist is blocked.[^pro-pangolin-wiki-zones] **Geometric correction** warps the output to fit the target, with sliders or a mesh that steps from 1x1 to 9x9.[^pro-pangolin-wiki-zones] The **Beam Attenuation Map** is a 64 by 64 grid laid over a zone, each cell set from 0 to 100%, used to block or dim output in parts of the picture. The manual's example is keeping beams off the sky or windows.[^pro-pangolin-wiki-zones] Pangolin calls BAM patented and standard in QuickShow, BEYOND and LD2000, and says its PASS product (Professional Audience Scanning Safety System) is considered a standard for audience scanning in the US. Both descriptions are the maker's own.[^pro-pangolin-safety-products]

Software is one layer of several. Laser safety officer Roberta McHatton, writing for the Event Safety Alliance in 2024, treats zoning as an engineering control, with the operator still watching the beams for hazards such as balloons or crowd surfing after the zones are locked.[^pro-esa-mchatton] ILDA's one-page safety overview asks for a plan to validate zones before the show.[^pro-ilda-safety-one-page] Exposure limits are in the [safety](/safety/) chapter, and which authority enforces what is in [rules](/rules/).

### How do you map lasers onto a building, a mountain or a dome?

**Laser mapping**, in Pangolin's definition, is an effect that accentuates specific features of an object, such as tracing a building's edges.[^pro-pangolin-laser-mapping] ILDA gives it an awards category of its own, A01 in the 2026 rules, for shows where outlines fitted to buildings or 3D objects are the main focus.[^pro-ilda-rules-2026]

The mountain is Stone Mountain, Georgia, where a Lasershow began in 1983. Three high-powered projectors treated the mountain face as a screen about 400 ft square, and because the carved relief varies in depth by about 50 ft, calibration mattered (reported, undated).[^pro-11alive-stone-mountain] A later upgrade added video projection mapping, with six Barco FLM HD20 projectors laying a "virtual skin" over the granite from three Axon media servers and a Road Hog Full Boar console.[^pro-livedesign-stone-mountain] The classic show ended its 40-year run in spring 2023, replaced by one with lasers, fireworks and drones.[^pro-axios-stone-mountain]

Steam came early as a screen. "Icarus", in summer 1978, put laser images on steam screens over Washington DC.[^pro-laserfx-history] Domes keep their own awards category, and entries must be filmed inside one.[^pro-ilda-rules-2026]

### Who does what on a show day?

ILDA's safety overview sets the terms: "All laser light shows must be under the direct and personal control of a trained, competent operator." That operator has to see every beam path or use a spotter.[^pro-ilda-safety-one-page]

Titles blur. A **laserist** was the player of an analog console, and the word survives for anyone who performs a show.[^pro-thomas-laserist] Modern credits split the work between designers or programmers, who build the show, and operators, who run it.[^pro-plsn-lasers-2023] The operator is usually also the on-site **laser safety officer** (LSO).[^pro-esa-mchatton] ILDA's overview has that person inspecting and testing shutters, interlocks and emergency stops before use, keeping written procedures and a checklist, and briefing crew and performers on where the beams will be.[^pro-ilda-safety-one-page] McHatton calls setup the riskiest phase, because riggers and stagehands are moving through beam paths, and describes alignment and zoning done at the lowest practical power.[^pro-esa-mchatton] During the show the emergency stop stays within reach, and anything that went wrong goes into the checklist afterward.[^pro-ilda-safety-one-page]

Whether an LSO is a legal requirement depends on the country. In Germany it is law: the OStrV regulation, section 5(2), has the employer appoint one in writing for Class 3R, 3B or 4 lasers unless the employer has the expertise. In the US the ANSI Z136.1 standard calls for a designated LSO for Class 3B and 4, while FDA variance letters, which set conditions, mention LSOs only for audience scanning. The UK has no formal LSO qualification (ILDA's 2025 summary).[^pro-ilda-lso-requirements] The UK regulator's guidance asks for competent operators, appropriate supervision, emergency stop functions and handover arrangements between installer and operator.[^pro-hse-indg224]

Crew size tracks rig size. One country tour credited a designer/programmer, an operator and a technician; one festival deployment used more than 430 lasers with a pyro and special-effects team of 49 (reported, 2023).[^pro-plsn-lasers-2023] The A$AP Rocky tour credits list a laser operator/programmer, two laser designers, an SFX crew chief and four SFX technicians.[^pro-pangolin-asap]

### How long does it take to program a laser show?

The rule of thumb that circulates comes from a single thread on Pangolin's user forum, dated October 25, 2011. One user gave about 4 hours per program minute for beam shows and about 8 hours per minute for graphics shows, for seasoned programmers. A Pangolin staff member in the same thread reckoned one to two hours of work for 15 seconds of show.[^pro-pangolin-forum-beam-show] On those rates a 3-minute time-coded beam show comes to somewhere between 12 and 24 hours and a 3-minute graphics show to about 24 (estimated; arithmetic from the quoted rates). At tour scale, Sharpe reported roughly three to four weeks programming one tour's laser show (2026, reported).[^pro-edmidentity-sharpe]

### How do people learn to run laser shows?

Mostly by standing next to someone who already does. Sharpe, 24 when interviewed, credits shadowing an established operator in 2020 and 2021, then building a home studio of four 5 W lasers and recording timecode shows from July 2023.[^pro-edmidentity-sharpe] The analog era worked the same way. Laserium's chief laserist Danny Neilson started in 1986, learned under the founder and a producer, and had to win approval before playing public shows.[^pro-mel-laser-focus] The choreography came first and the improvising was earned: "You can't jam all the time," he told MEL Magazine in 2016.[^pro-mel-laser-focus]

Formal courses are short. ILDA's 2025 listing has its own "Lasershow Operator" course at 4.75 hours with a test and "Laser Safety Officer for Lasershows" at about 9 hours, alongside ER Productions' two-day "Safe Working with Display Lasers" and Laserworld Academy LSO training.[^pro-ilda-lso-requirements]

### What are the ILDA Awards?

The trade's own prizes, running since 1988. Artistic categories award first, second and third place. Since 2018, ILDA members have judged entry videos online, three judges to a category; before that a three-judge panel did it.[^pro-ilda-awards] The Career Achievement Award is the highest honor, voted by members since about 2012, and went ungiven between 1994 and 2003.[^pro-ilda-awards]

The 2026 rules list 20 artistic categories, among them Laser Mapping, Planetarium Show, Graphics Show, Abstract Show, three Beams/Atmospherics categories, Fine Art Laser Display and a new Sporting Show. Videos run 4 minutes or less, with up to three entries per category, and the prizes are presented at the 2026 ILDA Conference in Salzburg, Austria.[^pro-ilda-rules-2026] The Live "Laser Jockey" Performance category is played in person at the conference and judged by the people in the room.[^pro-ilda-rules-2026] Technical work gets the Fenning Technical Achievement Awards, which exclude concepts and basic research and include an IDN Standards category open to non-members.[^pro-ilda-rules-2026]
