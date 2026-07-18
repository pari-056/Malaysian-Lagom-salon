import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Malaysian Lagom Unisex Salon, Chennai" },
      { name: "description", content: "Full menu of hair, nail, beauty and bridal services at Malaysian Lagom Unisex Salon in Purasaiwakkam, Chennai." },
      { property: "og:title", content: "Services — Malaysian Lagom Unisex Salon" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = { name: string; desc: string; benefits: string; duration: string; from: string };
type Category = { id: string; title: string; blurb: string; services: Service[] };

const CATEGORIES: Category[] = [
  {
    id: "hair",
    title: "Hair",
    blurb: "Cuts, colour and care crafted by senior stylists using L'Oréal Professionnel, Wella and Olaplex.",
    services: [
      { name: "Haircuts", desc: "Consultation-led precision cuts for every face shape and lifestyle.", benefits: "Face-flattering shape, easy maintenance.", duration: "45–60 min", from: "₹450" },
      { name: "Hair Styling", desc: "Blow-dry, curls, waves and up-styles for events and occasions.", duration: "45 min", benefits: "Long-lasting, camera-ready finish.", from: "₹599" },
      { name: "Hair Colour", desc: "Global colour with ammonia-free, professional brands.", duration: "90–150 min", benefits: "Rich tone, shine, minimal damage.", from: "₹1,999" },
      { name: "Highlights", desc: "Balayage, foils, babylights and money-piece highlights.", duration: "150–210 min", benefits: "Dimension, brightness, sun-kissed depth.", from: "₹3,499" },
      { name: "Hair Spa", desc: "Deep-conditioning rituals with scalp massage.", duration: "60 min", benefits: "Hydration, softness, scalp relief.", from: "₹899" },
      { name: "Keratin Treatment", desc: "Frizz-free, glossy hair for up to 6 months.", duration: "180 min", benefits: "Smooth, low-maintenance styling.", from: "₹4,500" },
      { name: "Smoothening", desc: "Sleek, straight finish with premium products.", duration: "180 min", benefits: "Straight, manageable hair.", from: "₹3,999" },
      { name: "Hair Botox", desc: "Damage-repair treatment for over-processed hair.", duration: "120 min", benefits: "Repair, shine, elasticity.", from: "₹3,999" },
      { name: "Rebonding", desc: "Permanent straightening with professional care.", duration: "240 min", benefits: "Poker-straight, mirror-smooth.", from: "₹5,499" },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    blurb: "OPI-approved technicians for extensions, gel finishes and hand-painted art.",
    services: [
      { name: "Nail Extensions", desc: "Acrylic and gel extensions in your chosen length and shape.", duration: "90 min", benefits: "Long, sculpted, chip-free.", from: "₹1,499" },
      { name: "Gel Polish", desc: "OPI/DND gel polish with 2–3 weeks of high-shine wear.", duration: "45 min", benefits: "Chip-free, glossy finish.", from: "₹699" },
      { name: "Nail Art", desc: "Custom hand-painted art, chrome, French, jewels and more.", duration: "60–90 min", benefits: "One-of-a-kind expression.", from: "₹499" },
      { name: "Manicure", desc: "Classic and spa manicures with cuticle care and massage.", duration: "45 min", benefits: "Neat, moisturised, cared-for hands.", from: "₹399" },
      { name: "Pedicure", desc: "Detox, spa and luxury pedicures with foot mask and massage.", duration: "60 min", benefits: "Soft, smooth, refreshed feet.", from: "₹599" },
    ],
  },
  {
    id: "beauty",
    title: "Beauty",
    blurb: "Skin and grooming rituals with O3+, Cheryl's and premium dermatology-backed brands.",
    services: [
      { name: "Facials", desc: "Radiance, anti-ageing, hydration and de-tan facial rituals.", duration: "60–75 min", benefits: "Glow, hydration, even tone.", from: "₹899" },
      { name: "Cleanup", desc: "Deep-cleansing routine for clear, refreshed skin.", duration: "45 min", benefits: "Deep clean, unclogged pores.", from: "₹599" },
      { name: "Waxing", desc: "Regular, honey, chocolate and rica wax options.", duration: "30–60 min", benefits: "Smooth, comfortable finish.", from: "₹299" },
      { name: "Threading", desc: "Precision brow and facial threading.", duration: "15 min", benefits: "Sharp, symmetrical shaping.", from: "₹80" },
      { name: "Skin Treatments", desc: "Targeted treatments for pigmentation, acne and dullness.", duration: "60 min", benefits: "Visible clarity and glow.", from: "₹1,499" },
    ],
  },
  {
    id: "bridal",
    title: "Bridal",
    blurb: "Bridal, reception, engagement and pre-bridal packages designed for your big day.",
    services: [
      { name: "Bridal Makeup", desc: "HD/airbrush bridal makeup, hair styling and draping.", duration: "180 min", benefits: "Camera-ready, long-lasting look.", from: "₹8,999" },
      { name: "Reception Makeup", desc: "Modern reception glam with hair styling.", duration: "120 min", benefits: "Glow that lasts all night.", from: "₹6,999" },
      { name: "Engagement Makeup", desc: "Fresh, romantic makeup for your engagement day.", duration: "120 min", benefits: "Soft, radiant finish.", from: "₹5,999" },
      { name: "Pre-Bridal Packages", desc: "4–6 week glow-up plans covering hair, skin and nails.", duration: "Multi-session", benefits: "Wedding-day-ready confidence.", from: "₹9,999" },
    ],
  },
];

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="The Menu" title="Every service, crafted with" italic="quiet luxury.">
        A complete look at everything we offer — from an everyday trim to your wedding day.
      </PageHero>

      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6 py-6">
          {CATEGORIES.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="btn-outline-gold !py-2 !px-5 !text-[10px]">
              {c.title}
            </a>
          ))}
        </div>
      </section>

      {CATEGORIES.map((cat, idx) => (
        <section key={cat.id} id={cat.id} className={idx % 2 === 1 ? "border-y border-border/60 bg-card/30" : ""}>
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.35em] text-gold">Category</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{cat.title}</h2>
              <p className="mt-4 text-muted-foreground">{cat.blurb}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cat.services.map((s) => (
                <article key={s.name} className="flex flex-col rounded-lg border border-border bg-card/40 p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl">{s.name}</h3>
                    <div className="font-display text-lg text-gold">{s.from}</div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">Benefits</div>
                  <p className="mt-1 text-sm text-foreground/80">{s.benefits}</p>
                  <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    {s.duration}
                  </div>
                  <Link to="/book" className="btn-outline-gold mt-6 justify-center">
                    Book appointment <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <SiteFooter />
    </main>
  );
}
