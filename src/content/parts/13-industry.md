## Lasers that make things: cutting, welding, engraving and chips

**The short version:** Most of the laser power on Earth goes into heating things up on purpose - melting a slot through steel plate, fusing a battery busbar, burning a code into a surgical tool or turning tin droplets into plasma to print computer chips. Fiber lasers overtook CO2 lasers for sheet-metal cutting in 2015 and have kept climbing in power, while desktop engravers have put Class 4 lasers on kitchen tables and some of them have been turned away at the border. In factories the usual answer to a multi-kilowatt beam is a box with interlocks around it.

### How does a laser cut metal?

Laser cutting is "mainly a thermal process," and it comes in three flavors.[^ind-twi-cutting] In **fusion cutting** the beam melts the metal and a jet of inert gas, usually nitrogen, blows the melt out of the **kerf**, the slot the cut leaves. In **flame cutting** the jet is oxygen, which burns the hot steel and adds heat of its own. In **remote cutting** a high-intensity beam vaporizes thin sheet outright, with no gas at all.[^ind-twi-cutting]

The gas choice shows up on the part. Oxygen leaves an oxidized edge. Nitrogen leaves an oxide-free cut that can go straight to paint or welding without cleaning.[^ind-lfw-fiber]

Lasers have been working in manufacturing since the 1960s.[^ind-twi-cutting] For most of that time the cutting workhorse was the **CO2 laser**, a gas laser at about 10.6 µm (the families are compared under [invention](/invention/)). Fiber, disk and Nd:YAG lasers are solid-state lasers, running at a much shorter wavelength.[^ind-twi-cutting] TWI gives typical laser cut thicknesses of up to 20 mm for carbon-manganese steel, 12 mm for stainless and 10 mm for aluminum.[^ind-twi-cutting]

### Have fiber lasers replaced CO2 lasers for cutting?

On sales, yes. In 2011 fiber lasers were about 5-10% of cutting laser sales. In 2015 they outsold CO2 for the first time.[^ind-lfw-fiber] CO2 cutting sales had clustered at 4-5 kW with some 6 kW machines, and CO2 lasers of 6 kW and up had existed since the 1990s. At Fabtech 2014, fiber systems on the floor ran from 2 kW to 12 kW.[^ind-lfw-fiber]

The speed numbers explain the switch. On quarter-inch mild steel with nitrogen, an Amada America author reported in 2016 that a 4 kW CO2 cut at about 60-80 in/min, a 6 kW CO2 at about 110-120 in/min, and a 6 kW fiber at about 200 in/min.[^ind-lfw-fiber] CO2 still has an edge in thick stock: TWI says it cuts material over 5 mm faster than fiber at the same power.[^ind-twi-cutting]

| | CO2 laser | Fiber laser |
|---|---|---|
| Type | Gas laser | Solid-state (doped optical fiber) |
| Wavelength | about 10.6 µm | - |
| Typical cutting power | 4-5 kW, some 6 kW (reported, 2016) | 2-12 kW at Fabtech 2014; 30 kW called mainstream in China (estimate, 2024) |
| 1/4 in mild steel, nitrogen, 6 kW | about 110-120 in/min | about 200 in/min (reported, 2016) |
| Thick material (over 5 mm) | Faster at equal power | Slower at equal power |
| Share of cutting laser sales | Majority until 2015 | 5-10% in 2011; outsold CO2 from 2015 |
| Operating cost | - | about $1-3 per hour (reported, 2016) |

Sources: TWI[^ind-twi-cutting]; Laser Focus World, 2016[^ind-lfw-fiber]; Tianxia Gongchang, 2026[^ind-txgc-china].

Power has kept going up, especially in China. A 2026 industry report calls 30 kW the mainstream fiber cutting configuration there in 2024, says Chinese brands shipped about 21,000 units of 10 kW and above that year, and repeats Raycus's claim to the first commercial sale of a 200 kW fiber laser in September 2024.[^ind-txgc-china] All three are estimates or company claims with no named dataset behind them, and the same report gives domestic share of the 10 kW-plus market as over 70% "in 2024" in one place and "projected" for 2025 in another.[^ind-txgc-china]

### What does a laser weld?

Batteries and motors, increasingly. In electric vehicles, lasers weld the **busbars** that join battery cells into modules and packs, in like metals (aluminum to aluminum, copper to copper) or mixed (aluminum to copper). They also seal cells gas-tight, weld battery trays and housings, and weld the **hairpin** copper bars of e-motor stators, plus rotor shafts, gears and fuel-cell bipolar plates.[^ind-trumpf-emob]

Copper is awkward to weld, and TRUMPF markets a green-wavelength disk laser that it says welds copper contacts "practically without any spatter," without giving the wavelength.[^ind-trumpf-emob]

OSHA's list of industrial laser jobs puts welding alongside cutting, drilling, soldering, heat treating, annealing, scribing, sealing, marking and balancing.[^ind-osha-otm]


### Why do medical devices carry laser-marked codes?

Because the FDA wants the code to survive the autoclave. Under 21 CFR 801.45, a device that must carry a **Unique Device Identifier (UDI)** on its label must also carry a permanent UDI on the device itself if it is meant to be used more than once and reprocessed before each use.[^ind-cfr-801-45] The mark can be plain text, **AIDC** (automatic identification and data capture, such as a 2D code) or both. Exceptions cover cases where marking would harm the device's safety or effectiveness, or isn't technologically feasible, and the labeler has to document the reason in its design files.[^ind-cfr-801-45]

The rule names no marking method; a laser is one way to make the mark permanent, and the choice is the manufacturer's.


### What are desktop laser engravers, and what class are they?

They are the reason a Class 4 laser can now ship in a box addressed to an apartment. The category took off around 2021, when the Makeblock spin-out xTool launched its D1 engraver.[^ind-krasia-xtool]

The money got large fast. xTool's Hong Kong listing application went public on January 1, 2026. A write-up of the prospectus reports revenue of RMB 1,456.6 million in 2023, RMB 2,475.9 million in 2024 (up 70%), and RMB 1,776.7 million for the first nine months of 2025 (up 18.6%), with more than 405,000 connected machines deployed as of September 30, 2025.[^ind-makers101-xtool] KrASIA, reporting from 36Kr in November 2026, put full-year 2025 growth above 30%, first-half 2026 revenue up roughly 80-90%, and annual revenue around RMB 2 billion - a figure that sits below the prospectus's 2024 number.[^ind-krasia-xtool] A former employee told the outlet the category had become saturated by 2024. Ortur, AtomStack and Hingin are named as earlier, slower-growing entrants, and Bambu Lab's R1 laser cutter starts at US$2,499 against about US$3,000 for comparable xTool products (reported, 2026).[^ind-krasia-xtool]

Glowforge, founded in Seattle in 2015, took $27.9 million in sales in a 30-day crowdfunding campaign that October and raised about $183 million in total.[^ind-geekwire-glowforge] In 2025 it restructured through an **Assignment for the Benefit of Creditors (ABC)**, a state-law alternative to bankruptcy. After a sale process drew no bidders, co-founders Dan Shapiro and Mark Gosselin bought the brand, platforms and Seattle manufacturing rights. The Seattle production facility closed in September 2025, and the restarted company supports about 20 former employees, down from a little over 90 early that year.[^ind-geekwire-glowforge]

The engineering lives in the laser class. In Bambu Lab's safety document for the H2D, the laser module is 10 W ± 1 W, emitting at 455 nm (blue) and 850 nm (infrared), with the 40 W spec listed as "(To be updated)." The module alone is **Class 4**. The whole machine is **Class 1** only "when the printer's protection is complete and properly working."[^ind-bambu-h2d] That protection is a stack of interlocks on the door, top glass and window, plus module detection, flame and temperature detection and a safety key. The document also tells owners to watch basswood and acrylic for open flames, keep a CO2 extinguisher, never leave the machine running unattended, vent through a 100 mm exhaust and never cut PVC.[^ind-bambu-h2d] An open-frame engraver has no such box around its beam. How the classes are defined is covered under [safety](/safety/).

### What have regulators found?

In the UK, the Office for Product Safety and Standards (OPSS) has acted on two engraver cases.

In August 2024 it reported on the Creality **Falcon2**, a 22 W Class 4 laser engraver marketed for consumer use. OPSS found the laser "excessively strong" for non-professional use and found that the supplied goggles did not give the required protection. It rated the risk serious ("damage to sight"), found the product failed the Supply of Machinery (Safety) Regulations 2008 and PPE Regulation (EU) 2016/425, and the import was rejected at the border.[^ind-opss-falcon2]

In October 2022 OPSS recorded a recall of **Vevor** laser engraving machines (models L3040, XTS05, S3018 Pro and S3018 Pro Max). That finding was electrical, not optical: the plug pins were narrower than the 6.22 mm minimum, creating an electric shock risk, and safety instructions were missing. The risk was rated serious. The machines were recalled from end users and imports were rejected and destroyed.[^ind-opss-vevor]

In the US, the paperwork changed at the end of 2024 (the wider rules are under [regulation](/regulation/)). The FDA withdrew Laser Notice No. 50 on December 31, 2024, and manufacturers moved to **Laser Notice No. 56**, issued May 8, 2019, which lets them certify using parts of IEC 60825-1 Ed. 3 (and IEC 60601-2-22 Ed. 3.1 for medical lasers) in place of some parts of 21 CFR 1040.10 and 1040.11.[^ind-fda-ln56] Bambu's H2D certification line cites exactly that notice.[^ind-bambu-h2d]


### Can a laser really strip rust and paint?

Yes, by blowing the top layer off. **Laser cleaning** fires a very brief, high-power pulse that ablates the surface; part of it vaporizes and part becomes particulate dust a filter can catch.[^ind-twi-cleaning] TWI describes two modes. In coating removal, paint, rubber or insulation absorbs the beam and the metal underneath is left alone. In surface decontamination the whole top layer comes off - for example radioactive concrete, a job called "scabbling."[^ind-twi-cleaning]

Uses include cleaning electronics contacts and tire molds, and stripping paint from buildings, bridges, aircraft and ships where solvents are restricted. It is non-contact, uses no chemicals and can run remotely down a fiber.[^ind-twi-cleaning] China's laser cleaning market was about RMB 1.96 billion in 2024, an estimate with no named source.[^ind-txgc-china]

### How does a laser 3D print metal?

One micro-thin layer at a time. In **laser powder bed fusion** (GE calls it DMLM; others say DMLS or SLM), a laser fully melts metal powder into small liquid pools, tracing each layer from a CAD file. Materials include titanium, cobalt-chrome and aluminum alloys.[^ind-ge-am] Binder jetting, by contrast, glues powder and sinters it in a separate furnace step.[^ind-ge-am]

The poster child is GE's LEAP jet-engine fuel nozzle. GE started developing it in 2004 and bought Morris Technologies and RQM in November 2012. The printed nozzle consolidated about 20 parts into one, came out 25% lighter and had a reported fivefold life improvement. It was built in cobalt-chrome on an EOS M270, with a plan for more than 25,000 parts a year rising to more than 40,000 a year by 2018 (company figures, 2013).[^ind-lfw-ge-aviation] The same GE engineers listed the catch: subsurface porosity and rough down-facing surfaces of about 1,000 µin Ra, dealt with through stress relief, **hot isostatic pressing (HIP)** and solution heat treatment.[^ind-lfw-ge-aviation]

### What lasers are inside chip making?

Two very different ones. **DUV** lithography runs on **excimer lasers**, ultraviolet gas lasers. Krypton fluoride (KrF) at 248 nm came first; argon fluoride (ArF) at 193 nm enabled features as small as 38 nm.[^ind-asml-light] **EUV** lithography uses 13.5 nm light, which ASML describes as more than 14 times shorter than DUV.[^ind-asml-light]

No laser emits at 13.5 nm directly in these machines. A generator fires molten tin droplets about 25 µm across at 70 m/s. A low-intensity pulse flattens each droplet, and a stronger pulse vaporizes it into a plasma that emits EUV, 50,000 times a second.[^ind-asml-light]

The laser doing the hitting is a CO2 laser - the old cutting workhorse, rebuilt. TRUMPF's drive laser takes seed pulses of a few watts, pre-amplifies them to 100 W and then amplifies them to 40 kW, with peak power in the megawatt range, total gain above 10,000x and a beam path of up to 30 m to the droplet chamber. ASML, ZEISS and TRUMPF are the partners.[^ind-trumpf-euv] A 2018 TRUMPF article described five amplifier stages and a mean pulse power above 30 kW, against the 40 kW on the current product page.[^ind-trumpf-flashes] All that to deliver a few hundred watts of EUV; the droplet is smaller than the focus and never takes the full beam.[^ind-trumpf-flashes]

On the DUV side, ASML agreed on October 17, 2012 to buy Cymer, the San Diego excimer source maker, for about EUR 1.95 billion (about US$2.6 billion) in cash and stock. Cymer had started as a four-person company that built the first excimer laser made only as a semiconductor light source. At the time its EUV sources had exposed wafers at up to 11 W at customers and reached a sustained 30 W in the lab (reported, 2012).[^ind-lfw-cymer]

Excimers also make phone screens. **Excimer laser annealing (ELA)** melts a thin film of amorphous silicon and lets it recrystallize as **low-temperature polysilicon (LTPS)**, with electron mobility up to 200 times higher. The UV is absorbed in the silicon and barely reaches the glass or polyimide below, avoiding the roughly 600°C conventional processing would need. The beam is shaped into a line about as wide as the panel and scanned across mother glass, usually 1.5 x 1.85 m (Gen 6.5).[^ind-coherent-ela] Coherent says ELA is the only method for making LTPS for AMOLED phone displays and that its LineBeam systems are used by every major display maker - company claims - in an industry it puts at about 1.5 billion phones a year.[^ind-coherent-ela]

### Who makes industrial lasers, and how big is the business?

Two of the best-known Western names shrank in 2024-25. IPG Photonics reported 2024 revenue of US$977.1 million, down 24% from $1,287.4 million in 2023, with materials processing at 85% of fourth-quarter revenue and fourth-quarter China sales down 22% year on year.[^ind-ipg-q4-2024] It was IPG's first year under $1 billion in a decade (2022 was $1.43 billion), the year included a write-down of nearly $200 million tied to exiting Russia, and its lower-cost YLS-RI fiber laser was pitched against Chinese competition in cutting.[^ind-optics-ipg]

TRUMPF's preliminary figures for the year to June 30, 2025 showed sales of €4.3 billion, down about 17% from €5.2 billion, orders of €4.2 billion and 17,750 employees; the CEO said "the lowest point has been reached."[^ind-optics-trumpf] Its next fiscal-year figures put 2025/26 order intake at €4.5 billion, up 7%, and mention an EUV laser being assembled for ASML.[^ind-trumpf-fy]

Raycus, based in Wuhan's Optics Valley of China cluster of more than 200 laser companies, launched four cutting, welding and additive lasers at the CIIF fair in Shanghai in September 2025 and sells in more than 80 countries.[^ind-chinadaily-raycus]

The market-size figures are softer. One Chinese aggregator, citing no named sources, estimates Raycus at about 27% of China's fiber laser market, IPG's global fiber share falling from about 70% in the early 2010s to about 30-40% in 2024, and China's 2024 laser market at about RMB 50 billion.[^ind-txgc-china] Grand View Research, in a paid-report press release, estimates the global laser processing market at US$42.73 billion by 2030, growing 10.0% a year from 2025, with gas lasers taking more than 65% of 2024 revenue.[^ind-gvr-market]

| Figure | Value | Year | Status |
|---|---|---|---|
| IPG Photonics revenue | US$977.1M (-24%) | 2024 | Official |
| TRUMPF sales | €4.3B (-17%) | FY2024/25 | Preliminary, reported |
| TRUMPF order intake | €4.5B (+7%) | FY2025/26 | Official |
| xTool revenue | RMB 2,475.9M (+70%) | 2024 | Reported from prospectus |
| China laser market | about RMB 50B | 2024 | Estimate, unnamed sources |
| Global laser processing market | US$42.73B | by 2030 | Paid-report estimate |


### How do factories keep multi-kilowatt lasers safe?

Mostly by putting them in a box. OSHA has no standalone laser standard in the US; it reaches laser hazards through general-industry rules on personal protective equipment (29 CFR 1910.132) and eye and face protection (1910.133), and it points to **ANSI Z136.1**, the voluntary consensus standard for safe laser use, as guidance that is "not OSHA regulations."[^ind-osha-standards]

The most common **Class 1** design is a high-power laser fully enclosed in an interlocked, labeled housing, which meets Class 1 with no extra operator controls.[^ind-osha-otm] The **embedded laser** inside keeps its own class, so servicing with panels off may need controls for that class, and walk-in housings need a way to stop the laser running with someone inside. Many materials-processing stations use a "limited open beam path," with a gap of less than about 1/4 in under the enclosure, assessed by a **Laser Safety Officer (LSO)**.[^ind-osha-otm]

The beam is only part of it. OSHA's manual says fumes and vapors from cutting and welding must stay below ACGIH threshold limit values or OSHA permissible exposure limits. It also lists lamp explosion, UV from welding plasmas, radio-frequency energy and X-rays from excimer power supplies, and warns that enclosure materials hit by more than 10 W/cm² can ignite, with fire a hazard for Class IV systems.[^ind-osha-otm] Its bibliography includes studies on by-products from laser processing of Kevlar, plastics and welding, and ANSI Z136.3, the health-care standard, puts "major emphasis" on plume.[^ind-osha-otm]

