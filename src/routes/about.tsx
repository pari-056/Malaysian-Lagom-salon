import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Heart, Award, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import heroImg from "@/assets/hero-salon.jpg";
import facialImg from "@/assets/service-facial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Malaysian Lagom Unisex Salon, Chennai" },
      { name: "description", content: "Our story, mission and team at Malaysian Lagom Hair & Nail Unisex Salon in Anna Nagar, Chennai." },
      { property: "og:title", content: "About Malaysian Lagom Unisex Salon" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Heart, t: "Customer-first philosophy", d: "Every appointment is unhurried, private and shaped around your comfort." },
  { icon: Award, t: "Professional expertise", d: "Senior artists trained with L'Oréal, Wella and international academies." },
  { icon: Sparkles, t: "Premium products", d: "Only globally trusted brands — Olaplex, OPI, O3+, Cheryl's, Wella." },
  { icon: Users, t: "Unisex, always welcoming", d: "A safe, luxurious space designed for every guest, every look, every mood." },
];

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Our Story" title="Beauty, refined into" italic="an art of just right.">
        Malaysian Lagom brings the Malaysian-inspired philosophy of <em>lagom</em> — not too much,
        not too little — into every hair, nail and skin ritual we offer in Chennai.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border border-border">
            <img src={heroImg} alt="Interior of Malaysian Lagom" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">The Brand Story</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">A salon built around a single idea.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Malaysian Lagom Hair & Nail Unisex Salon was founded to bring a calmer, more considered
              luxury experience to Anna Nagar. We believe great beauty isn't rushed — it's the
              result of listening, precise technique and time spent on the finest details.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From your very first consultation, we design every service around <em>you</em> — your
              lifestyle, your face shape, your hair texture, your celebrations. That's what has
              earned us 4.9 stars across 369+ Google reviews.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Our Mission</div>
              <h3 className="mt-4 font-display text-3xl">Make every guest feel effortlessly extraordinary.</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                To create a warm, unisex sanctuary where world-class hair, nail and beauty artistry
                meets genuine hospitality — accessible to everyone in Chennai.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Our Vision</div>
              <h3 className="mt-4 font-display text-3xl">The most-loved salon in South India.</h3>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                To be recognised as the benchmark for luxurious, ethical, expert unisex beauty —
                setting standards for education, hygiene and guest care across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Why guests choose us</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Four promises, <span className="italic text-gold-gradient">every visit</span>.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.t} className="rounded-lg border border-border bg-card/40 p-8">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/50 text-gold">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative overflow-hidden rounded-lg border border-border md:order-2">
            <img src={facialImg} alt="Malaysian Lagom team" className="h-full w-full object-cover" />
          </div>
          <div className="md:order-1">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">The Team</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Senior artists who love what they do.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our stylists, colourists, nail technicians and makeup artists have a minimum of five
              years of specialised experience. Many are graduates of the L'Oréal Academy, Wella
              Studio and leading bridal makeup programs in India.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Continuous education is part of who we are — every quarter, our team attends workshops
              on new techniques, trends and hygiene standards, so you always receive current,
              expert care.
            </p>
            <div className="mt-8">
              <Link to="/book" className="btn-gold btn-gold-hover">Book a consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
