import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  italic,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-card/30">
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</div>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
          {title}
          {italic && (
            <>
              {" "}
              <span className="italic text-gold-gradient">{italic}</span>
            </>
          )}
        </h1>
        {children && (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
