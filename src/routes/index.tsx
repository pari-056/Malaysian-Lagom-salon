import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Scissors, Sparkles, Instagram, ArrowRight } from "lucide-react";

import heroImg from "@/assets/hero-salon.jpg";
import hairImg from "@/assets/service-hair.jpg";
import facialImg from "@/assets/service-facial.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import groomingImg from "@/assets/service-grooming.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "086676 71547";
const PHONE_TEL = "+918667671547";
const ADDRESS_LINE_1 = "2nd Floor, 386/129, Purasaivakkam High Rd";
const ADDRESS_LINE_2 = "Kellys, Lumbini Square, Purasaiwakkam";
const ADDRESS_LINE_3 = "Chennai, Tamil Nadu 600010";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Pyaar+Unisex+Salon+Purasaiwakkam+Chennai";

const services = [
  {
    title: "Hair & Styling",
    tagline: "Precision cuts, colour and keratin care by senior stylists.",
    price: "from ₹450",
    image: hairImg,
  },
  {
    title: "Bridal & Makeup",
    tagline: "Signature bridal looks, HD makeup and pre-wedding packages.",
    price: "from ₹5,999",
    image: makeupImg,
  },
  {
    title: "Skin & Facials",
    tagline: "Advanced facials, clean-ups and radiance treatments.",
    price: "from ₹899",
    image: facialImg,
  },
  {
    title: "Men's Grooming",
    tagline: "Sculpted beards, hot-towel shaves and modern fades.",
    price: "from ₹350",
    image: groomingImg,
  },
];

const priceList = [
  { name: "Signature Haircut", detail: "Wash, cut & blow-dry", price: "₹650" },
  { name: "Global Hair Colour", detail: "Ammonia-free, premium brands", price: "₹3,200" },
  { name: "Keratin Treatment", detail: "Frizz-free for up to 6 months", price: "₹4,500" },
  { name: "Bridal Makeup", detail: "HD + hair styling + draping", price: "₹8,999" },
  { name: "Gold Radiance Facial", detail: "70 min · glow & de-tan", price: "₹1,499" },
  { name: "Beard Sculpt & Shave", detail: "Hot towel + massage", price: "₹499" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-gold/60">
              <span className="font-display text-lg italic text-gold">P</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl tracking-wide text-foreground">Pyaar</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Unisex Salon</div>
            </div>
          </a>
          <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.25em] text-foreground/70 md:flex">
            <a href="#services" className="transition hover:text-gold">Services</a>
            <a href="#experience" className="transition hover:text-gold">Experience</a>
            <a href="#pricing" className="transition hover:text-gold">Pricing</a>
            <a href="#visit" className="transition hover:text-gold">Visit</a>
          </nav>
          <a href={`tel:${PHONE_TEL}`} className="btn-gold btn-gold-hover hidden md:inline-flex">
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Interior of Pyaar Unisex Salon in Chennai — ornate gold-framed mirrors and marble"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              Your journey to elegance
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
              We're here to make you
              <br />
              <span className="italic text-gold-gradient">look extraordinary.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              Purasaiwakkam's premier unisex salon for precision hair, bridal beauty, skin and
              grooming — crafted by senior artists who treat every guest like the only one.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#services" className="btn-gold btn-gold-hover">
                Discover services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-outline-gold">
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
            </div>

            <div className="mt-14 flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-gold">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-foreground">4.9</span>
                <span className="text-muted-foreground">· 3,222 reviews</span>
              </div>
              <div className="hidden h-6 w-px bg-border sm:block" />
              <div className="hidden text-muted-foreground sm:block">
                Open today · <span className="text-foreground">10:00 – 21:30</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / CREDS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 text-center md:grid-cols-4">
          {[
            { k: "3,200+", v: "Five-star reviews" },
            { k: "12+", v: "Senior artists" },
            { k: "45k", v: "Guests styled" },
            { k: "L'Oréal", v: "Professional partner" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-gold md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.35em] text-gold">The Menu</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Services crafted with <span className="italic text-gold-gradient">care</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            From an everyday trim to your wedding day — every appointment at Pyaar is a private,
            unhurried ritual. Explore the menu below.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{s.price}</div>
                <h3 className="mt-2 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.tagline}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative overflow-hidden border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold">The Pyaar Experience</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A quiet corner of Chennai where <span className="italic text-gold-gradient">you come first</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Behind the ornate doors on Purasaivakkam High Road, Pyaar is a hush of gold, marble
              and warm light. Our senior stylists trained with L'Oréal and Wella work with only the
              finest professional brands — because your hair, skin and confidence deserve nothing
              less.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Scissors, t: "Senior artists only", d: "Every service is done by a stylist with 5+ years of experience." },
                { icon: Sparkles, t: "Premium products", d: "L'Oréal Professionnel, Olaplex, Wella, Cheryl's & O3+." },
                { icon: Star, t: "Loved by 3,200+ guests", d: "Consistently rated 4.9 across Google reviews." },
              ].map((f) => (
                <li key={f.t} className="flex gap-4">
                  <div className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-full border border-gold/50 text-gold">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-foreground">{f.t}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border border-border">
              <img
                src={facialImg}
                alt="Skincare treatment at Pyaar Salon"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden max-w-xs rounded-lg border border-gold/40 bg-background/95 p-6 shadow-[var(--shadow-gold)] backdrop-blur md:block">
              <div className="flex items-center gap-1 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 font-display text-lg italic leading-snug text-foreground">
                "Best salon in Purasaiwakkam — hands down. The bridal package made my wedding day
                unforgettable."
              </p>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                — Divya R., Chennai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-gold">Signature Rates</div>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Transparent, <span className="italic text-gold-gradient">honest pricing</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            A glimpse of our most-loved services. Ask us for the full menu when you visit.
          </p>
        </div>

        <div className="mt-14 divide-y divide-border rounded-lg border border-border bg-card/40">
          {priceList.map((p) => (
            <div key={p.name} className="flex items-baseline justify-between gap-6 px-6 py-6">
              <div>
                <div className="font-display text-xl text-foreground">{p.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.detail}</div>
              </div>
              <div className="flex-1 border-b border-dashed border-border/60" />
              <div className="font-display text-xl text-gold">{p.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={`tel:${PHONE_TEL}`} className="btn-gold btn-gold-hover">
            Book an appointment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* VISIT / CONTACT */}
      <section id="visit" className="relative border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold">Visit Pyaar</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Come as you are.
              <br />
              <span className="italic text-gold-gradient">Leave transformed.</span>
            </h2>

            <div className="mt-10 space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Address
                  </div>
                  <div className="mt-1 text-base leading-relaxed text-foreground">
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                    <br />
                    {ADDRESS_LINE_3}
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex text-xs uppercase tracking-[0.25em] text-gold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Reservations
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-1 block font-display text-2xl text-foreground hover:text-gold"
                  >
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Hours
                  </div>
                  <div className="mt-1 grid grid-cols-2 gap-x-8 gap-y-1 text-foreground">
                    <span>Mon – Fri</span><span>10:00 – 21:30</span>
                    <span>Saturday</span><span>09:00 – 22:00</span>
                    <span>Sunday</span><span>09:00 – 21:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border">
            <iframe
              title="Pyaar Unisex Salon on the map"
              src="https://www.google.com/maps?q=Purasaivakkam+High+Rd,+Kellys,+Lumbini+Square,+Purasaiwakkam,+Chennai,+Tamil+Nadu+600010&output=embed"
              className="h-full min-h-[420px] w-full grayscale-[35%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="font-display text-3xl italic text-gold-gradient">Pyaar</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Unisex Salon · Chennai
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-muted-foreground transition hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={`tel:${PHONE_TEL}`} className="btn-outline-gold">
                <Phone className="h-4 w-4" />
                Book
              </a>
            </div>
          </div>
          <div className="divider-gold mt-10" />
          <div className="mt-6 flex flex-col justify-between gap-2 text-xs text-muted-foreground md:flex-row">
            <div>© {new Date().getFullYear()} Pyaar Unisex Salon. All rights reserved.</div>
            <div>Crafted with love in Chennai</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
