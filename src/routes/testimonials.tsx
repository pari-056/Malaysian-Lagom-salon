import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { BRAND } from "@/lib/brand";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Malaysian Lagom Unisex Salon, Chennai" },
      { name: "description", content: "Real Google reviews and testimonials from guests of Malaysian Lagom Hair & Nail Unisex Salon, Anna Nagar." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

const REVIEWS = [
  { name: "Divya R.", role: "Bride, Chennai", text: "The bridal package made my wedding day unforgettable. Every detail — from my trial to draping — was perfect. My family still talks about how radiant I looked." },
  { name: "Karthik S.", role: "Regular guest", text: "The best fade and beard sculpt in Anna Nagar, hands down. The team is warm, precise and always on time." },
  { name: "Aisha M.", role: "Nail client", text: "Loved my nail art and gel extensions — they still look fresh three weeks later. The nail studio is spotless." },
  { name: "Priya K.", role: "Colour client", text: "Genuinely the best salon experience I've had in Chennai. My balayage turned out exactly like the reference, and my hair still feels healthy." },
  { name: "Nikhil V.", role: "First-time visitor", text: "Walked in for a keratin treatment on a friend's recommendation. Incredible service, professional products and the ambience is very calming." },
  { name: "Sneha P.", role: "Facial regular", text: "Their Gold Radiance Facial is my monthly ritual. My skin has genuinely transformed in three months." },
];

function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Kind Words" title="Loved by 369+" italic="happy guests.">
        A snapshot of what our regulars and first-time visitors have shared on Google.
      </PageHero>

      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-12 text-center">
          <div className="flex text-gold">{[0,1,2,3,4].map((i) => <Star key={i} className="h-6 w-6 fill-current" />)}</div>
          <div className="mt-4 font-display text-6xl text-gold-gradient">{BRAND.rating}</div>
          <div className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Google Rating · {BRAND.reviewCount}+ reviews
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <div key={r.name} className="relative rounded-lg border border-border bg-card/40 p-8">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-gold/30" />
              <div className="flex text-gold">{[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 font-display text-lg italic leading-snug">"{r.text}"</p>
              <div className="mt-6 border-t border-border/60 pt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                — {r.name} · {r.role}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/book" className="btn-gold btn-gold-hover">Book your visit</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
