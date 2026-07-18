import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";
import { BRAND, WHATSAPP_LINK } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" width={48} height={48} className="h-12 w-12 rounded-full border border-gold/60 object-cover" />
              <div>
                <div className="font-display text-2xl italic text-gold-gradient">Malaysian Lagom</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Hair & Nail Unisex Salon · Chennai
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              A quiet corner of Purasaiwakkam devoted to hair, nails, skin and bridal beauty —
              crafted by senior artists with only premium professional brands.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition hover:text-gold">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Explore</div>
            <ul className="mt-5 space-y-3 text-sm text-foreground/80">
              {[
                ["/services", "Services"],
                ["/pricing", "Pricing"],
                ["/gallery", "Gallery"],
                ["/bridal", "Bridal Studio"],
                ["/book", "Book Appointment"],
                ["/blog", "Blog"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-gold">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Visit</div>
            <ul className="mt-5 space-y-4 text-sm text-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span className="leading-relaxed">{BRAND.address.line1}<br />{BRAND.address.line2}<br />{BRAND.address.line3}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <a href={`tel:${BRAND.phoneTel}`} className="hover:text-gold">{BRAND.phone}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <span>{BRAND.daysOpen}<br />{BRAND.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/60 pt-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} {BRAND.fullName}. Crafted with care in Chennai.
        </div>
      </div>
    </footer>
  );
}
