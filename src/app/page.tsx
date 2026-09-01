import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionTag } from "@/components/SectionTag";
import { GradientBackdrop, Skyline } from "@/components/GradientBackdrop";
import { Marquee } from "@/components/Marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { caseStudies, pillars, process, services, stats } from "@/lib/data";

const ventureNames = caseStudies.map((c) => c.name);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 sm:pt-24">
        <GradientBackdrop variant="hero" />

        <div className="container-db relative">
          <Reveal className="flex justify-center">
            <SectionTag>UAE-based · Idea to full-stack platform</SectionTag>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-8 max-w-4xl text-center font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              We build. We automate.{" "}
              <span className="text-gradient-gold">We grow.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-fg-muted sm:text-lg">
              DigitalBurj takes founders from a raw idea to a full-stack platform — fintech
              engines, marketplaces, and SME automation — then runs the CRM, AI staff, and
              growth marketing that keeps it moving.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" className="px-8 py-3.5 text-base">
                Start a project
              </Button>
              <Button href="/work" variant="secondary" className="px-8 py-3.5 text-base">
                See our work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="relative mx-auto mt-20 h-[180px] max-w-4xl sm:h-[260px]">
              <Skyline />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* VENTURES MARQUEE */}
      <section className="border-y border-border bg-bg-soft py-8">
        <div className="container-db mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-fg-faint">
          Ventures we&apos;ve built end-to-end
        </div>
        <Marquee items={ventureNames} />
      </section>

      {/* PILLARS */}
      <section className="relative py-24 sm:py-32">
        <GradientBackdrop variant="section" />
        <div className="container-db">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>How we work</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-fg sm:text-5xl">
              One roof. Every stage of the business.
            </h2>
            <p className="mt-4 text-base text-fg-muted sm:text-lg">
              Most agencies build a site and hand it back. We stay through the parts that
              actually move revenue.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <RevealItem key={p.name}>
                <div className="card-glass relative flex h-full flex-col rounded-3xl p-8">
                  <span className="font-display text-5xl font-bold text-border">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-fg">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gold">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                    {p.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 sm:py-32">
        <div className="container-db">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionTag>What we do</SectionTag>
              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold text-fg sm:text-5xl">
                Nine service lines. One accountable team.
              </h2>
            </div>
            <Button href="/services" variant="secondary">
              All services
            </Button>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} big={i === 0} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="relative border-t border-border bg-bg-soft py-24 sm:py-32">
        <div className="container-db">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionTag>Selected work</SectionTag>
              <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold text-fg sm:text-5xl">
                Platforms we&apos;ve built from zero.
              </h2>
              <p className="mt-4 max-w-lg text-fg-muted">
                Real ledgers, real escrow, real admin consoles — not landing-page demos.
              </p>
            </div>
            <Button href="/work" variant="secondary">
              View all case studies
            </Button>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 sm:py-32">
        <div className="container-db">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>Our process</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-fg sm:text-5xl">
              From idea to growth, in five stages.
            </h2>
          </Reveal>

          <div className="relative mt-16 grid gap-8 md:grid-cols-5">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08} className="relative flex flex-col items-start">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-bg font-display text-sm font-bold text-gold">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + WHY US */}
      <section className="relative overflow-hidden border-t border-border bg-bg-soft py-24 sm:py-32">
        <GradientBackdrop variant="section" />
        <div className="container-db grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTag>Why DigitalBurj</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-fg sm:text-5xl">
              We build what we&apos;d be proud to run ourselves.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
              Every venture in our portfolio is engineered with production-shaped
              foundations — real authentication, real audit trails, real admin tooling —
              because we hold ourselves to the same bar we&apos;d expect from a platform
              handling other people&apos;s money and data.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "In-house engineering — no outsourced dev chain",
                "Fintech-grade rigor: ledgers, escrow, and audit trails by default",
                "We stay for automation and growth, not just launch day",
                "On-the-ground understanding of UAE SME operations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-fg-muted sm:text-base">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="secondary">
                More about DigitalBurj
              </Button>
            </div>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-8 rounded-3xl border border-border bg-surface/40 p-8 sm:p-10">
            {stats.map((stat) => (
              <RevealItem key={stat.label}>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection />
    </>
  );
}
