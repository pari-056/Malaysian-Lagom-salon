import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, Camera, Calendar } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import makeupImg from "@/assets/service-makeup.jpg";
import facialImg from "@/assets/service-facial.jpg";
import hairImg from "@/assets/service-hair.jpg";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Studio — Malaysian Lagom, Chennai" },
      { name: "description", content: "Bridal, reception, engagement and pre-bridal packages at Malaysian Lagom Unisex Salon, Purasaiwakkam, Chennai." },
      { property: "og:url", content: "/bridal" },
    ],
    links: [{ rel: "canonical", href: "/bridal" }],
  }),
  component: BridalPage,
});

const PACKAGES = [
  { name: "Bridal Signature", price: "₹18,999", includes: ["HD bridal makeup", "Bridal hair styling", "Saree/lehenga draping", "Trial session"], icon: Heart },
  { name: "Bridal Luxe", price: "₹28,999", includes: ["Airbrush bridal makeup", "Bridal + engagement makeup", "Hair styling for both", "Pre-bridal facial & mani-pedi"], icon: Sparkles },
  { name: "Complete Wedding", price: "₹49,999", includes: ["Bridal + reception + engagement", "Full pre-bridal glow-up", "Family makeup discount", "Personal makeup artist on call"], icon: Camera },
];

const FAQ = [
  { q: "Do you offer bridal trial sessions?", a: "Yes — every bridal package includes at least one trial where we design your look, test products and finalise every detail." },
  { q: "Can you travel to my venue?", a: "Yes, we offer on-location bridal services within Chennai. Travel and setup charges apply based on distance." },
  { q: "How early should I book?", a: "For peak wedding season (Nov–Feb, Apr–Jun), we recommend booking 3–6 months in advance. Other months, 4–6 weeks is usually sufficient." },
  { q: "What products do you use?", a: "Only luxury professional brands — MAC, Huda Beauty, Bobbi Brown, Charlotte Tilbury, Kryolan HD and Temptu airbrush systems." },
];

function BridalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Bridal Studio" title="Your wedding day," italic="beautifully composed.">
        A dedicated bridal atelier for makeup, hair and pre-bridal care — designed for the most
        important moments of your life.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img src={makeupImg} alt="Bridal makeup at Malaysian Lagom" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">The Experience</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">A calm, private studio just for the bride.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From your first consultation to the final touch on your big day, our lead bridal
              artists design a look inspired by <em>you</em> — your saree, jewellery, palette, skin
              and vision. Trials, timing and travel are all handled so you can simply enjoy the day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="btn-gold btn-gold-hover">Book consultation</Link>
              <Link to="/gallery" className="btn-outline-gold">Bridal gallery</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Packages</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Curated bridal <span className="italic text-gold-gradient">packages</span>.</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <div key={p.name} className="flex flex-col rounded-lg border border-gold/40 bg-background/60 p-8 shadow-[var(--shadow-gold)]">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/60 text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.name}</h3>
                <div className="mt-2 font-display text-3xl text-gold-gradient">{p.price}</div>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-3">
                      <Sparkles className="mt-0.5 h-4 w-4 flex-none text-gold" />
                      {i}
                    </li>
                  ))}
                </ul>
                <Link to="/book" className="btn-outline-gold mt-8 justify-center">
                  <Calendar className="h-4 w-4" />
                  Reserve this
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Portfolio</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Recent bridal <span className="italic text-gold-gradient">moments</span>.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[makeupImg, facialImg, hairImg, hairImg, makeupImg, facialImg].map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg border border-border">
              <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">FAQ</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Questions, answered.</h2>
          </div>
          <div className="mt-12 divide-y divide-border rounded-lg border border-border bg-background/60">
            {FAQ.map((f) => (
              <details key={f.q} className="group px-6 py-5">
                <summary className="flex cursor-pointer items-center justify-between font-display text-xl text-foreground marker:content-['']">
                  {f.q}
                  <span className="text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
