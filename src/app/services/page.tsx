import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionTag } from "@/components/SectionTag";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { iconMap } from "@/components/icon-map";
import { pillars, services, type Pillar } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack product development, fintech & trading platforms, SME automation, AI agents, and growth marketing — everything a UAE SME needs, under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-24">
        <GradientBackdrop variant="hero" />
        <div className="container-db">
          <Reveal className="flex justify-center">
            <SectionTag>Services</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-8 max-w-3xl text-center font-display text-4xl font-semibold leading-tight text-fg sm:text-6xl">
              Everything an idea needs to become{" "}
              <span className="text-gradient-gold">a running business.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base text-fg-muted sm:text-lg">
              We organize what we do into three pillars — Build, Automate, Grow — because
              that&apos;s the order a real business actually needs them in.
            </p>
          </Reveal>
        </div>
      </section>

      {(["Build", "Automate", "Grow"] as Pillar[]).map((pillarName, pIndex) => {
        const pillar = pillars.find((p) => p.name === pillarName)!;
        const pillarServices = services.filter((s) => s.pillar === pillarName);
        return (
          <section
            key={pillarName}
            className={cn(
              "py-20 sm:py-24",
              pIndex % 2 === 1 && "border-y border-border bg-bg-soft"
            )}
          >
            <div className="container-db">
              <Reveal className="mb-14 max-w-2xl">
                <span className="font-display text-6xl font-bold text-border">
                  0{pIndex + 1}
                </span>
                <h2 className="mt-4 font-display text-3xl font-semibold text-fg sm:text-4xl">
                  {pillar.name}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">
                  {pillar.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-fg-muted">
                  {pillar.description}
                </p>
              </Reveal>

              <div className="grid gap-8 lg:grid-cols-2">
                {pillarServices.map((service) => {
                  const Icon = iconMap[service.icon];
                  return (
                    <Reveal key={service.slug}>
                      <div
                        id={service.slug}
                        className="card-glass scroll-mt-24 rounded-3xl p-8"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-surface-2 text-gold">
                            {Icon && <Icon size={22} />}
                          </span>
                          <h3 className="font-display text-xl font-semibold text-fg">
                            {service.title}
                          </h3>
                        </div>
                        <p className="mt-5 text-sm leading-relaxed text-fg-muted">
                          {service.description}
                        </p>
                        <ul className="mt-6 space-y-3">
                          {service.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2.5 text-sm text-fg-muted"
                            >
                              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us what's slowing the business down."
        description="Whether it's a product that needs building or an operation that needs automating, we'll map it to the right service line — free of charge."
      />
    </>
  );
}
