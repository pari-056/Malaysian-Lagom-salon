import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";
import { BRAND } from "@/lib/brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Pricing" },
  { to: "/bridal", label: "Bridal" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Malaysian Lagom logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-gold/60 object-cover"
          />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-foreground">
              Malaysian <span className="italic text-gold">Lagom</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gold/80">
              Hair & Nail · Unisex Salon
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-foreground/70 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/book" className="btn-gold btn-gold-hover hidden md:inline-flex">
            Book Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm uppercase tracking-[0.22em]">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground/80 hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="btn-gold btn-gold-hover mt-4 justify-center"
            >
              Book Now
            </Link>
            <a href={`tel:${BRAND.phoneTel}`} className="mt-3 text-center text-xs text-muted-foreground">
              {BRAND.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
