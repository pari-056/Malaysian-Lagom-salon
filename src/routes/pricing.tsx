import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Malaysian Lagom Unisex Salon, Chennai" },
      { name: "description", content: "Transparent pricing for hair, nail, beauty and bridal services at Malaysian Lagom Unisex Salon, Purasaiwakkam." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

type Row = { name: string; duration: string; price: string };
type Group = { title: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: "Hair",
    rows: [
      { name: "Haircut — Women", duration: "45–60 min", price: "₹650" },
      { name: "Haircut — Men", duration: "30 min", price: "₹450" },
      { name: "Hair Styling / Blow-dry", duration: "45 min", price: "₹599" },
      { name: "Global Hair Colour", duration: "120 min", price: "₹1,999" },
      { name: "Highlights (Balayage)", duration: "180 min", price: "₹3,499" },
      { name: "Hair Spa", duration: "60 min", price: "₹899" },
      { name: "Keratin Treatment", duration: "180 min", price: "₹4,500" },
      { name: "Hair Smoothening", duration: "180 min", price: "₹3,999" },
      { name: "Hair Botox", duration: "120 min", price: "₹3,999" },
      { name: "Hair Rebonding", duration: "240 min", price: "₹5,499" },
    ],
  },
  {
    title: "Nails",
    rows: [
      { name: "Classic Manicure", duration: "45 min", price: "₹399" },
      { name: "Spa Pedicure", duration: "60 min", price: "₹599" },
      { name: "Gel Polish", duration: "45 min", price: "₹699" },
      { name: "Nail Extensions", duration: "90 min", price: "₹1,499" },
      { name: "Nail Art (per nail)", duration: "5 min", price: "₹99" },
    ],
  },
  {
    title: "Beauty",
    rows: [
      { name: "Signature Facial", duration: "60 min", price: "₹899" },
      { name: "Gold Radiance Facial", duration: "75 min", price: "₹1,499" },
      { name: "Cleanup", duration: "45 min", price: "₹599" },
      { name: "Full Face Threading", duration: "20 min", price: "₹250" },
      { name: "Full Body Wax (Rica)", duration: "60 min", price: "₹1,999" },
      { name: "Pigmentation Treatment", duration: "60 min", price: "₹1,499" },
    ],
  },
  {
    title: "Bridal",
    rows: [
      { name: "Bridal Makeup (HD)", duration: "180 min", price: "₹8,999" },
      { name: "Reception Makeup", duration: "120 min", price: "₹6,999" },
      { name: "Engagement Makeup", duration: "120 min", price: "₹5,999" },
      { name: "Pre-Bridal Package", duration: "Multi-session", price: "₹9,999" },
    ],
  },
];

function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Signature Rates" title="Transparent, honest" italic="pricing.">
        Starting prices for our most-loved services. Ask us at the salon for the full menu and
        custom packages.
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="space-y-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-3xl md:text-4xl">{g.title}</h2>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Starting from</div>
              </div>
              <div className="mt-6 divide-y divide-border rounded-lg border border-border bg-card/40">
                {g.rows.map((r) => (
                  <div key={r.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-6 px-6 py-5">
                    <div>
                      <div className="font-display text-xl">{r.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{r.duration}</div>
                    </div>
                    <div className="font-display text-xl text-gold">{r.price}</div>
                    <Link to="/book" className="btn-outline-gold !py-2 !px-4 !text-[10px]">Book</Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          * Final price varies with hair length, product choice and additional services.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
