## The lasers you use every day

**The short version:** Most of the lasers in your life are hidden and small, and they mostly measure, read or carry light rather than cut anything. A red helium-neon beam rang up the first barcode in 1974, a shrinking wavelength is what took discs from CD to Blu-ray, and glass fiber lit by lasers carries the bulk of the data that crosses oceans. The same trick of timing a light pulse runs a robotaxi's roof sensor, the depth camera in a phone and a police speed gun.

### What was the first thing ever scanned with a barcode?

A 10-pack of Wrigley's Juicy Fruit gum, priced at 67 cents, at a Marsh Supermarket in Troy, Ohio, on June 26, 1974.[^day-gs1] The cashier was Sharon Buchanan. The customer was Clyde Dawson, Marsh's own director of research and development, so the first shopper in barcode history was a man checking his company's homework.[^day-gs1] He kept the gum. It never went to the Smithsonian, though the scanner did.[^day-si-scanner]

That scanner was a Spectra-Physics "model A price scanner", one of the first 10 installed at the store, wired to a computerized NCR register.[^day-si-scanner] Inside, a **helium-neon laser** - a gas laser with a red beam - bounced off a spinning mirror and came up through a glass plate in the counter. Light reflected off the bars hit a **photodiode**, a sensor that turns light into an electrical signal, and the register matched that signal against a stored product list.[^day-si-scanner]

The code itself came from a committee: the Ad Hoc Committee of the Grocery Industry, organized by McKinsey & Co. in 1970.[^day-si-scanner] The spinning mirror is the part worth remembering. It sweeps one beam into a pattern of lines, so the cashier does not have to line the code up perfectly. Show lasers do the same job with galvo mirrors, a cousin of the trick explained in [scanning](/scanning/).

### Why does a Blu-ray hold more than a DVD?

Because its laser is bluer. The whole history of the optical disc is one number going down.

| Format | Laser wavelength | Color | Capacity (format spec, as reported) |
|---|---|---|---|
| CD | 780 nm | near infrared | about 700 MB, about 80 minutes of audio |
| DVD | 650 nm | red | 4.7 GB single layer, 8.5 GB dual layer |
| Blu-ray | 405 nm | blue-violet | 25 GB single layer, 50 GB dual layer |
| BDXL | 405 nm | blue-violet | 100 GB (3 layers), 128 GB (4 layers) |

Sources: wavelengths and CD, DVD and Blu-ray capacities[^day-ebsco]; BDXL[^day-lfw-storage].

Philips and Sony agreed to develop the CD together in 1980.[^day-ebsco] A disc stores bits as **pits**, tiny pressed marks that reflect light differently from the flat surface around them.[^day-ebsco] The player's laser bounces off the spiral track, photodiodes turn the reflections into a signal, and servos keep the spot focused on the track as the disc spins.[^day-ebsco]

The limit is the spot. A lens cannot focus light into a dot much smaller than its wavelength - the **diffraction limit** - so a shorter wavelength reads a smaller pit, and more pits fit on the disc.[^day-lfw-storage] Blu-ray pairs its 405 nm laser with a lens of **numerical aperture** 0.85 (how wide a cone of light the lens gathers; wider means a smaller spot) and a **track pitch**, the gap between neighboring turns of the spiral, of around 320 nm.[^day-lfw-storage] Put 25 GB against 700 MB and a single-layer Blu-ray holds roughly 35 times what a CD does, from a laser about half the wavelength.

### How does a laser printer work?

It started as a copier with a laser bolted to the front. Gary Starkweather began working on the idea at Xerox in Webster, New York, then moved to Xerox PARC in 1971, where he built SLOT - the Scanning Laser Output Terminal - on the base of a Xerox 7000 copier.[^day-ieee-printer] SLOT grew into the EARS printing system, and that same year PARC researchers showed laser printing working on a copier that turned out one page per second.[^day-ieee-printer]

The principle is a relay. A laser beam carries the digital page, writing it as a pattern of light, and the copier's ordinary xerographic process develops that pattern into toner on paper.[^day-ieee-printer][^day-nihf] Xerox launched the 9700 laser printer in 1977, and it became one of the company's best-selling products.[^day-ieee-printer] The IEEE now marks 1971 to 1977 as a milestone in engineering history.[^day-ieee-printer]

Starkweather, born January 9, 1938, held US Patent 3,970,359 and was inducted into the National Inventors Hall of Fame in 2012. He died on December 26, 2019.[^day-nihf]

### Is there really a laser in my mouse?

In many of them, yes, and the first arrived on September 1, 2004: the Logitech MX 1000 cordless mouse, built around a laser sensor from Agilent.[^day-agilent] An optical mouse is a tiny camera pointed at the desk. It photographs the surface over and over and works out motion from how the texture shifts. The older kind lit the desk with an LED. The laser version lights it with a laser, which Agilent said shows surface structure an LED cannot.[^day-agilent]

Agilent's launch numbers, all company claims from 2004: 20 times the surface tracking of an LED optical mouse, 800 counts per inch, and 5.8 megapixels per second of image processing.[^day-agilent] It also tracked on glossy photo paper, frosted glass and polished wood grain.[^day-agilent]

### How do lasers carry the internet across oceans?

Through glass. In 1966 Charles Kao worked out that light could travel more than 100 km through glass fiber if the glass were pure enough. The fibers of the 1960s carried light about 20 meters.[^day-nobel-2009] The first ultrapure fiber was made in 1970, and Kao shared the 2009 Nobel Prize in Physics "for groundbreaking achievements concerning the transmission of light in fibers for optical communication".[^day-nobel-2009] By the Nobel committee's 2009 estimate, the world had laid over one billion km of glass fiber, enough to wrap the globe more than 25,000 times, and was adding thousands of km every hour.[^day-nobel-2009]

Undersea, the clever part is the amplifier. The first all-fiber transatlantic cable, TAT-8, ran in the 1980s at 1310 nm and 280 Mbit/s per fiber pair; the second generation moved to 1550 nm at 560 Mbit/s.[^day-lfw-edfa] Then came the **erbium-doped fiber amplifier (EDFA)**: a few meters of fiber laced with erbium and pumped by a diode laser at 980 or 1480 nm, which boosts 1550 nm signals by about 12 to 16 dB.[^day-lfw-edfa] The signal stays light from one shore to the other, with no stop to be turned into electronics in the repeaters, which sit about 75 to 90 km apart.[^day-lfw-edfa] In 1997 TAT-12/13, APCN, Africa ONE and FLAG were being built on EDFAs at 5 Gbit/s, and **WDM** - several closely spaced laser colors on one fiber - was the next step to multiply capacity.[^day-lfw-edfa]

### Do undersea cables really carry 99 percent of the world's data?

The phrase you will see is "over 99% of intercontinental data". TeleGeography, which maps the cable industry, looked into it in 2023 and answered: "We can confirm that this is true."[^day-telegeo] It added that an exact sum is impossible without traffic data from satellite operators.[^day-telegeo]

The hard number underneath is the FCC's. Satellites carried 0.37 percent of US international capacity, in 2013 data the FCC released in 2015 (official).[^day-telegeo] That figure covers the US only, so the global 99 percent is a well-supported estimate, and 0.37 percent is the measured slice behind it.

### How does lidar work in a car or a phone?

**Lidar** - light detection and ranging - fires laser pulses and times the echo. Distance is half the round-trip time multiplied by the speed of light, a method called **time of flight**.[^day-digikey] Light covers about 30 cm in a nanosecond, so the electronics count in fractions of a billionth of a second.

On a robotaxi, it is the thing on the roof. Waymo's fifth-generation Driver, announced March 4, 2020, carries a 360-degree lidar that "paints a 3D picture" of its surroundings and, by the company's 2020 figure, sees objects more than 300 meters away.[^day-waymo] Four short-range perimeter lidars around the sides cover tight gaps and blind spots.[^day-waymo]

In a phone, it is a speck beside the camera lenses. Apple announced the iPhone 12 Pro and Pro Max with a LiDAR Scanner in October 2020, pitching it for augmented reality, low-light autofocus up to six times faster, and Night mode portraits.[^day-optics-iphone] The emitters are **VCSELs** (vertical-cavity surface-emitting lasers), tiny chip lasers that shine from their top surface, in the iPhone 12 Pro, 12 Pro Max and iPad Pro, measuring depth out to about 5 meters (as reported in 2022).[^day-digikey] Same physics as the roof sensor, scaled from 300 meters to your living room.

### Are police laser speed guns accepted in court?

In Chicago, after a wobble, yes. In 2009 Chicago Traffic Court threw out many laser speeding tickets because the devices had not been shown to be scientifically reliable at a **Frye hearing**, the US hearing on whether a scientific method is generally accepted before its evidence comes in.[^day-lfw-lidar-court] On February 10, 2010, Judge Eileen Burke ruled lidar evidence admissible.[^day-lfw-lidar-court] She applied an Illinois Appellate Court (2nd District) decision upholding a DuPage County ruling, which found that lidar rests on "generally accepted scientific principles".[^day-lfw-lidar-court]

That is one city's traffic court applying one appellate district's ruling, and nothing here is legal advice. The wider run of laser cases lives in [cases](/cases/).

### What do regulators say about laser pointers and cat toys?

"Laser cat toys" appear on the US FDA's list of laser toys as an example, though the agency gives no pet-specific guidance.[^day-fda] It wants toy lasers within IEC Class 1, the lowest hazard class, carrying a "Class 1 Laser Product" label.[^day-fda] It tells consumers not to buy or use a laser over 5 mW, or one that does not state its power on the label.[^day-fda] It notes that laser eye injuries "often do not cause immediate pain", and that aiming a laser at an aircraft is a federal crime.[^day-fda]

The American Academy of Ophthalmology explains the 5 mW line. Below it, a person can usually blink or look away before injury; above it, the eye's reflexes are too slow.[^day-aao] Labels are not always honest: many pointers tested ran stronger than stated, sometimes tens or hundreds of mW.[^day-aao] Blue and violet beams carry extra risk because people react to them more slowly.[^day-aao] In one Saudi case series covering January 2012 to January 2013, 14 males aged 11 to 30 each injured one eye; four had full-thickness macular holes, and 10 of the 14 eyes needed treatment.[^day-aao]

This is general information, not medical or safety advice. Why governments draw these lines, and how the classes work, is in [regulation](/regulation/).
