import { createFileRoute } from "@tanstack/react-router";
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Phone, MessageCircle, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { BRAND, WHATSAPP_LINK } from "@/lib/brand";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Malaysian Lagom Unisex Salon" },
      { name: "description", content: "Reserve an appointment at Malaysian Lagom Hair & Nail Unisex Salon in Purasaiwakkam, Chennai." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const SERVICES = [
  "Haircut", "Hair Styling", "Hair Colour", "Highlights", "Hair Spa", "Keratin", "Smoothening",
  "Nail Extensions", "Gel Polish", "Nail Art", "Manicure", "Pedicure",
  "Facial", "Cleanup", "Waxing", "Threading",
  "Bridal Makeup", "Reception Makeup", "Engagement Makeup", "Pre-Bridal Package",
];

const TIMES = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

function BookPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ service: "", date: "", time: "", name: "", phone: "", email: "", notes: "" });
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <PageHero eyebrow="Reserve" title="Book your" italic="Lagom appointment.">
        Fill in your details, message us on WhatsApp, or call directly — whichever is easiest.
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div className="rounded-lg border border-border bg-card/40 p-8 md:p-10">
            {done ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
                <h2 className="mt-6 font-display text-3xl">Appointment request sent.</h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you, {form.name || "friend"} — our team will confirm your slot on {form.date || "your chosen date"} at {form.time || "your chosen time"} shortly on {form.phone || "your phone"}.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold btn-gold-hover">
                    <MessageCircle className="h-4 w-4" /> Message on WhatsApp
                  </a>
                  <a href={`tel:${BRAND.phoneTel}`} className="btn-outline-gold">
                    <Phone className="h-4 w-4" /> Call {BRAND.phone}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-8">
                <Stepper step={step} />

                {step === 1 && (
                  <Field label="Select service">
                    <select required value={form.service} onChange={set("service")} className={inputCls}>
                      <option value="">Choose a service…</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </Field>
                )}

                {step === 2 && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Preferred date">
                      <input required type="date" min={today} value={form.date} onChange={set("date")} className={inputCls} />
                    </Field>
                    <Field label="Preferred time">
                      <select required value={form.time} onChange={set("time")} className={inputCls}>
                        <option value="">Choose a time…</option>
                        {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </Field>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field label="Your name">
                        <input required value={form.name} onChange={set("name")} className={inputCls} placeholder="Full name" />
                      </Field>
                      <Field label="Phone">
                        <input required type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91…" />
                      </Field>
                    </div>
                    <Field label="Email (optional)">
                      <input type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@example.com" />
                    </Field>
                    <Field label="Notes (optional)">
                      <textarea rows={4} value={form.notes} onChange={set("notes")} className={inputCls} placeholder="Anything we should know? Preferred artist, hair length, allergies, etc." />
                    </Field>
                  </div>
                )}

                {step === 4 && (
                  <div className="rounded-lg border border-gold/40 bg-background/60 p-6">
                    <h3 className="font-display text-xl">Confirm your details</h3>
                    <dl className="mt-4 grid gap-3 text-sm">
                      <Row k="Service" v={form.service} />
                      <Row k="Date" v={form.date} />
                      <Row k="Time" v={form.time} />
                      <Row k="Name" v={form.name} />
                      <Row k="Phone" v={form.phone} />
                      {form.email && <Row k="Email" v={form.email} />}
                      {form.notes && <Row k="Notes" v={form.notes} />}
                    </dl>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  {step > 1 ? (
                    <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-outline-gold">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  ) : <span />}
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (step === 1 && !form.service) return;
                        if (step === 2 && (!form.date || !form.time)) return;
                        if (step === 3 && (!form.name || !form.phone)) return;
                        setStep((s) => s + 1);
                      }}
                      className="btn-gold btn-gold-hover"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button type="submit" className="btn-gold btn-gold-hover">
                      Confirm booking <CheckCircle2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border border-gold/40 bg-card/40 p-6 transition hover:border-gold">
              <MessageCircle className="h-6 w-6 text-gold" />
              <div>
                <div className="font-display text-lg">WhatsApp us</div>
                <div className="text-xs text-muted-foreground">Instant chat with our reception</div>
              </div>
            </a>
            <a href={`tel:${BRAND.phoneTel}`} className="flex items-center gap-4 rounded-lg border border-gold/40 bg-card/40 p-6 transition hover:border-gold">
              <Phone className="h-6 w-6 text-gold" />
              <div>
                <div className="font-display text-lg">Call {BRAND.phone}</div>
                <div className="text-xs text-muted-foreground">{BRAND.daysOpen} · {BRAND.hours}</div>
              </div>
            </a>
            <div className="rounded-lg border border-border bg-card/40 p-6 text-sm text-muted-foreground">
              <div className="font-display text-lg text-foreground">Salon hours</div>
              <div className="mt-2">{BRAND.daysOpen}<br />{BRAND.hours}</div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

const inputCls =
  "w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold">{label}</div>
      {children}
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4">
      <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
      <dd className="text-foreground">{v}</dd>
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["Service", "Date & time", "Your details", "Confirm"];
  return (
    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em]">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div key={l} className="flex items-center gap-3">
            <div className={`grid h-7 w-7 place-items-center rounded-full border ${active ? "border-gold text-gold" : done ? "border-gold bg-gold text-primary-foreground" : "border-border text-muted-foreground"}`}>
              {n}
            </div>
            <span className={active ? "text-gold" : "text-muted-foreground"}>{l}</span>
            {n < labels.length && <span className="h-px w-6 bg-border" />}
          </div>
        );
      })}
    </div>
  );
}
