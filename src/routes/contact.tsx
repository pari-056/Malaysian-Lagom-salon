import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle, Instagram, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { BRAND, WHATSAPP_LINK } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malaysian Lagom Unisex Salon, Chennai" },
      { name: "description", content: "Address, phone, hours and directions for Malaysian Lagom Hair & Nail Unisex Salon in Purasaiwakkam, Chennai." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Get in Touch" title="We'd love to" italic="hear from you.">
        Reach us on WhatsApp, over the phone or with a quick message below — we usually reply
        within an hour during salon hours.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Salon Details</div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Visit us in Purasaiwakkam.</h2>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Address</div>
                  <div className="mt-1 text-base leading-relaxed text-foreground">
                    {BRAND.address.line1}<br />{BRAND.address.line2}<br />{BRAND.address.line3}
                  </div>
                  <a href={BRAND.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex text-xs uppercase tracking-[0.25em] text-gold hover:underline">
                    Open in Google Maps →
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Phone</div>
                  <a href={`tel:${BRAND.phoneTel}`} className="mt-1 block font-display text-2xl text-foreground hover:text-gold">{BRAND.phone}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 flex-none text-gold" />
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Hours</div>
                  <div className="mt-1 text-foreground">{BRAND.daysOpen} · {BRAND.hours}</div>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 h-5 w-5 flex-none text-gold" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold">Chat on WhatsApp</a>
              </li>
              <li className="flex gap-4">
                <Instagram className="mt-1 h-5 w-5 flex-none text-gold" />
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card/40 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Send a message</div>
            <h2 className="mt-4 font-display text-3xl">How can we help?</h2>

            {sent ? (
              <div className="mt-10 rounded-md border border-gold/40 bg-background/60 p-6 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
                <p className="mt-4 font-display text-xl">Thank you, {form.name || "friend"}.</p>
                <p className="mt-2 text-sm text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <input required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} />
                <div className="grid gap-5 md:grid-cols-2">
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="Email" className={inputCls} />
                  <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="Phone" className={inputCls} />
                </div>
                <textarea required rows={5} value={form.message} onChange={set("message")} placeholder="Your message" className={inputCls} />
                <button type="submit" className="btn-gold btn-gold-hover w-full justify-center">Send message</button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-lg border border-border">
          <iframe
            title="Malaysian Lagom on the map"
            src={BRAND.mapsEmbed}
            className="h-[480px] w-full grayscale-[35%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";
