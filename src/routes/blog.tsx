import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import hairImg from "@/assets/service-hair.jpg";
import facialImg from "@/assets/service-facial.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import groomingImg from "@/assets/service-grooming.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Malaysian Lagom Unisex Salon" },
      { name: "description", content: "Hair care, beauty tips, nail care, bridal advice and product recommendations from Malaysian Lagom Salon, Chennai." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  { cat: "Hair Care", title: "5 daily habits to keep coloured hair vibrant", read: "4 min read", img: hairImg },
  { cat: "Beauty Tips", title: "Chennai humidity-proof skincare: our salon guide", read: "6 min read", img: facialImg },
  { cat: "Bridal Tips", title: "How early to start pre-bridal — a realistic timeline", read: "7 min read", img: makeupImg },
  { cat: "Nail Care", title: "Gel vs acrylic extensions: which is right for you?", read: "5 min read", img: facialImg },
  { cat: "Product Recommendations", title: "The 6 products our stylists actually use daily", read: "5 min read", img: groomingImg },
  { cat: "Hair Care", title: "Keratin vs smoothening vs botox — a clear explainer", read: "8 min read", img: hairImg },
];

const CATS = ["Hair Care", "Beauty Tips", "Nail Care", "Bridal Tips", "Product Recommendations"];

function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Journal" title="Notes from our" italic="studio.">
        Practical hair, nail, skin and bridal wisdom from the artists at Malaysian Lagom.
      </PageHero>

      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6 py-6">
          {CATS.map((c) => (
            <span key={c} className="rounded-full border border-border px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-foreground/70">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-lg border border-border bg-card/40">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.cat}</div>
                <h2 className="mt-3 font-display text-xl leading-snug">{p.title}</h2>
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span>{p.read}</span>
                  <span className="text-gold">Coming soon →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center text-sm text-muted-foreground">
          Full articles arriving soon. Want to be notified? <Link to="/contact" className="text-gold hover:underline">Say hello →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
