import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import heroImg from "@/assets/hero-salon.jpg";
import hairImg from "@/assets/service-hair.jpg";
import facialImg from "@/assets/service-facial.jpg";
import makeupImg from "@/assets/service-makeup.jpg";
import groomingImg from "@/assets/service-grooming.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Malaysian Lagom Unisex Salon" },
      { name: "description", content: "Photos of hair, nail, bridal and beauty work at Malaysian Lagom Unisex Salon, Chennai." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Item = { src: string; alt: string; cat: string };

const ITEMS: Item[] = [
  { src: heroImg, alt: "Salon interior", cat: "Interiors" },
  { src: hairImg, alt: "Hair styling", cat: "Hair" },
  { src: makeupImg, alt: "Bridal look", cat: "Bridal" },
  { src: facialImg, alt: "Facial treatment", cat: "Beauty" },
  { src: groomingImg, alt: "Grooming", cat: "Hair" },
  { src: heroImg, alt: "Salon detail", cat: "Interiors" },
  { src: facialImg, alt: "Nail art detail", cat: "Nails" },
  { src: makeupImg, alt: "Reception makeup", cat: "Bridal" },
  { src: hairImg, alt: "Hair colour transformation", cat: "Transformations" },
  { src: groomingImg, alt: "Skin cleanup", cat: "Beauty" },
  { src: heroImg, alt: "Salon lounge", cat: "Interiors" },
  { src: facialImg, alt: "Manicure", cat: "Nails" },
];

const CATS = ["All", "Hair", "Nails", "Bridal", "Beauty", "Interiors", "Transformations"];

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const filtered = cat === "All" ? ITEMS : ITEMS.filter((i) => i.cat === cat);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Gallery" title="A glimpse of our" italic="craft.">
        Real work by our team — from precise cuts and colours to nail art and bridal moments.
      </PageHero>

      <section className="border-b border-border/60 bg-card/30">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-6 py-6">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                c === cat
                  ? "rounded-full bg-gold px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
                  : "rounded-full border border-border px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-foreground/70 hover:text-gold"
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((it, i) => (
            <button key={i} onClick={() => setOpen(it.src)} className="group relative aspect-square overflow-hidden rounded-lg border border-border">
              <img src={it.src} alt={it.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 text-left text-[10px] uppercase tracking-[0.25em] text-gold">
                {it.cat}
              </div>
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-background/90 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <button className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-gold/60 text-gold" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-full rounded-lg border border-border" />
        </div>
      )}

      <SiteFooter />
    </main>
  );
}
