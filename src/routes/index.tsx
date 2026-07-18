import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Scissors, Sparkles, ArrowRight, Instagram } from "lucide-react";

import heroImg from "@/assets/hero-salon.jpg";
import hairImg from "@/assets/service-hair.jpg";
import facialImg from "@/assets/service-facial.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import groomingImg from "@/assets/service-grooming.jpg";
import logo from "@/assets/logo.jpg.asset.json";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BRAND, WHATSAPP_LINK } from "@/lib/brand";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { title: "Hair & Styling", tagline: "Precision cuts, colour, keratin and hair spa by senior stylists.", price: "from ₹450", image: hairImg, to: "/services" },
  { title: "Nails & Nail Art", tagline: "Extensions, gel polish, custom nail art and spa manicures.", price: "from ₹399", image: facialImg, to: "/services" },
  { title: "Bridal & Makeup", tagline: "Signature bridal, reception, engagement and pre-bridal packages.", price: "from ₹5,999", image: makeupImg, to: "/bridal" },
  { title: "Skin & Grooming", tagline: "Advanced facials, cleanups, waxing and men's grooming rituals.", price: "from ₹499", image: groomingImg, to: "/services" },
];

const testimonials = [
  { name: "Divya R.", text: "The bridal package made my wedding day unforgettable — every detail was perfect.", role: "Bride, Chennai" },
  { name: "Karthik S.", text: "Best fade and beard sculpt in Purasaiwakkam. Warm hospitality every single visit.", role: "Regular guest" },
  { name: "Aisha M.", text: "Loved the nail art and gel extensions — they still look fresh three weeks later!", role: "Nail client" },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />

      {/* HERO */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <img src={heroImg} alt="Interior of Malaysian Lagom Unisex Salon" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold">
              <Sparkles className="h-3.5 w-3.5" />
              A ritual of quiet luxury
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
              Where hair, nails & beauty
              <br />
              <span className="italic text-gold-gradient">become artistry.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
              Malaysian Lagom is Purasaiwakkam's home for luxury unisex hair, nail, bridal and skin
              services — designed around one guest at a time.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/book" className="btn-gold btn-gold-hover">
                Book appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${BRAND.phoneTel}`} className="btn-outline-gold">
                <Phone className="h-4 w-4" />
                {BRAND.phone}
              </a>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex text-gold">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <span className="font-medium text-foreground">{BRAND.rating}</span>
                <span className="text-muted-foreground">· {BRAND.reviewCount}+ Google reviews</span>
              </div>
              <div className="hidden h-6 w-px bg-border sm:block" />
              <div className="text-muted-foreground">
                {BRAND.daysOpen} · <span className="text-foreground">{BRAND.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 text-center md:grid-cols-4">
          {[
            { k: "4.9★", v: "Google rating" },
            { k: "369+", v: "Five-star reviews" },
            { k: "10+", v: "Senior artists" },
            { k: "L'Oréal", v: "Professional partner" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-gold md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-[0.35em] text-gold">The Menu</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Featured services <span className="italic text-gold-gradient">for you</span>.
            </h2>
          </div>
          <Link to="/services" className="btn-outline-gold">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group relative overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={s.image} alt={s.title} width={1200} height={1400} loading="lazy" className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{s.price}</div>
                <h3 className="mt-2 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW / WHY */}
      <section className="relative overflow-hidden border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold">Why Malaysian Lagom</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              A quiet corner of Chennai where <span className="italic text-gold-gradient">you come first</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              "Lagom" — the Malaysian-inspired art of just right. Every service is unhurried,
              considered and crafted by senior artists using only premium professional brands.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Scissors, t: "Senior artists only", d: "Each stylist brings 5+ years of specialised experience." },
                { icon: Sparkles, t: "Premium products", d: "L'Oréal Professionnel, OPI, Olaplex, Wella, O3+ and Cheryl's." },
                { icon: Star, t: "Loved by 369+ guests", d: "Consistently rated 4.9 across Google reviews." },
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

            <div className="mt-10">
              <Link to="/about" className="btn-outline-gold">
                Our story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border border-border">
              <img src={facialImg} alt="Skincare treatment at Malaysian Lagom" width={1200} height={1400} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-6 hidden max-w-xs rounded-lg border border-gold/40 bg-background/95 p-6 shadow-[var(--shadow-gold)] backdrop-blur md:block">
              <div className="flex items-center gap-1 text-gold">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-3 font-display text-lg italic leading-snug text-foreground">
                "Genuinely the best salon experience I've had in Chennai. The team is warm, skilled and unhurried."
              </p>
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">— Priya K., Chennai</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-gold">Kind Words</div>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Loved by <span className="italic text-gold-gradient">369+ guests</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-card/40 p-8">
              <div className="flex text-gold">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 font-display text-lg italic leading-snug text-foreground">"{t.text}"</p>
              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">— {t.name} · {t.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/testimonials" className="btn-outline-gold">Read all reviews</Link>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-[0.35em] text-gold">Gallery</div>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                A glimpse <span className="italic text-gold-gradient">inside</span>.
              </h2>
            </div>
            <Link to="/gallery" className="btn-outline-gold">Open gallery <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[heroImg, hairImg, makeupImg, groomingImg].map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg border border-border">
                <img src={img} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <img src={logo.url} alt="" className="mx-auto h-20 w-20 rounded-full border border-gold/60 object-cover" />
        <h2 className="mt-8 font-display text-4xl leading-tight md:text-6xl">
          Ready for your <span className="italic text-gold-gradient">Lagom moment?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm text-muted-foreground">
          Reserve a slot on WhatsApp, over the phone, or use our booking form. Walk-ins welcome.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/book" className="btn-gold btn-gold-hover">Book appointment <ArrowRight className="h-4 w-4" /></Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">WhatsApp us</a>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="relative border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-gold">Visit</div>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Come as you are. <br /><span className="italic text-gold-gradient">Leave transformed.</span>
            </h2>
            <div className="mt-10 space-y-6 text-sm">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Address</div>
                  <div className="mt-1 text-base leading-relaxed text-foreground">{BRAND.address.line1}<br />{BRAND.address.line2}<br />{BRAND.address.line3}</div>
                  <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-xs uppercase tracking-[0.25em] text-gold hover:underline">Open in Google Maps →</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Reservations</div>
                  <a href={`tel:${BRAND.phoneTel}`} className="mt-1 block font-display text-2xl text-foreground hover:text-gold">{BRAND.phone}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Hours</div>
                  <div className="mt-1 text-foreground">{BRAND.daysOpen} · {BRAND.hours}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="mt-1 h-5 w-5 flex-none text-gold" />
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold">Follow us on Instagram</a>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border">
            <iframe title="Malaysian Lagom on the map" src={BRAND.mapsEmbed} className="h-full min-h-[420px] w-full grayscale-[35%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
