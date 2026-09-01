import type { Metadata } from "next";
import { Target, ShieldCheck, Rocket, Users } from "lucide-react";
import { SectionTag } from "@/components/SectionTag";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "DigitalBurj is a UAE-based build partner run by people who build and operate their own ventures — not just client work.",
};

const values = [
  {
    icon: Target,
    title: "Production-shaped, not prototype-shaped",
    description:
      "Every build ships with real auth, real data models, and real admin tooling — because a demo that can't hold real usage isn't actually done.",
  },
  {
    icon: ShieldCheck,
    title: "Fintech-grade rigor by default",
    description:
      "Audit trails, escrow logic, and immutable ledgers aren't reserved for trading platforms — the same discipline shows up in every marketplace and automation we build.",
  },
  {
    icon: Rocket,
    title: "We stay past launch",
    description:
      "Build, Automate, Grow isn't a sales pitch — it's how our own portfolio companies operate, from first commit to daily marketing.",
  },
  {
    icon: Users,
    title: "In-house, accountable team",
    description:
      "No outsourced dev chain and no handoff gaps. The people who scope the project are the people who ship it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-24">
        <GradientBackdrop variant="hero" />
        <div className="container-db">
          <Reveal className="flex justify-center">
            <SectionTag>About DigitalBurj</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-8 max-w-3xl text-center font-display text-4xl font-semibold leading-tight text-fg sm:text-6xl">
              We don&apos;t just build software.{" "}
              <span className="text-gradient-gold">We build ventures.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-fg-muted sm:text-lg">
              DigitalBurj started as the studio behind a portfolio of our own products —
              a freight marketplace, a trading platform, a procurement exchange. That&apos;s
              the standard we bring to every client build: the same rigor we&apos;d want if it
              were our own money on the line.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-db grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-fg sm:text-4xl">
              Why DigitalBurj exists
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-fg-muted">
              <p>
                Most UAE SMEs are stuck choosing between a freelancer who can build fast
                but disappears after launch, and an agency that ships a template site and
                calls it done. Neither leaves the business better equipped to run itself.
              </p>
              <p>
                We built DigitalBurj to close that gap — a single team that can take an
                idea to a full-stack platform, wire in the CRM, ERP, and AI staff that
                keep it running, and then grow it through the website, social, and search
                channels that actually bring customers in.
              </p>
              <p>
                The name is deliberate: <em>Burj</em> means tower — something built to
                stand, on purpose, from a real foundation up. That&apos;s the bar for
                everything we ship, whether it&apos;s our own venture or a client&apos;s.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-glass rounded-3xl p-8">
              <h3 className="font-display text-lg font-semibold text-fg">
                What we&apos;ve proven on ourselves
              </h3>
              <ul className="mt-6 space-y-5">
                {caseStudies.map((c) => (
                  <li key={c.slug} className="flex items-start justify-between gap-4 border-b border-border-soft pb-5 last:border-0 last:pb-0">
                    <div>
                      <p className="font-display text-base font-semibold text-fg">{c.name}</p>
                      <p className="mt-1 text-sm text-fg-muted">{c.tagline}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-fg-faint">
                      {c.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-bg-soft py-20 sm:py-24">
        <div className="container-db">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionTag>How we operate</SectionTag>
            <h2 className="mt-5 font-display text-3xl font-semibold text-fg sm:text-4xl">
              Four principles, no exceptions.
            </h2>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="card-glass flex h-full gap-5 rounded-3xl p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-surface-2 text-gold">
                    <v.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {v.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        eyebrow="Work with us"
        title="Let's find out if we're a fit."
        description="A short call is enough to know whether DigitalBurj is the right build partner for what you're trying to do."
      />
    </>
  );
}
