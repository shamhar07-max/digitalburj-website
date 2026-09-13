import type { Metadata } from "next";
import { Target, ShieldCheck, Rocket, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTag } from "@/components/SectionTag";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

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
      <PageHero tag="About DigitalBurj" title={<>We don&apos;t just build software. <span className="text-foil-gold">We build ventures.</span></>}
        sub="DigitalBurj started as the studio behind a portfolio of our own products — a freight marketplace, a trading platform, a procurement exchange. That's the standard we bring to every client build: the same rigor we'd want if it were our own money on the line."
        chips={["Operators, not just builders", "Real products", "Evidence over claims"]} />

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
            <div className="rounded-2xl border border-hair bg-panel p-8">
              <h3 className="text-lg font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>
                What the practice covers
              </h3>
              <ul className="mt-6 space-y-0">
                {[
                  ["Marketplaces & escrow logic", "Two-sided matching, verification, holds and releases"],
                  ["Business systems", "CRM, operations dashboards, messaging pipelines"],
                  ["Search visibility", "SEO plus answer- and generative-engine coverage"],
                  ["Workplace programs", "Sales, admin and service tracks with live assessment"],
                ].map(([t, d]) => (
                  <li key={t} className="flex items-start justify-between gap-4 border-b border-hair py-4 last:border-0 last:pb-0">
                    <div>
                      <p className="text-[15px] font-bold text-ink">{t}</p>
                      <p className="mt-1 text-sm text-ink-soft">{d}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-hair bg-panel-deep px-3 py-1 font-mono-d text-[10px] font-semibold uppercase tracking-wide text-ink-faint">
                      In scope
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

      <section className="border-b border-hair">
        <div className="container-db grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <SectionTag>Central career message</SectionTag>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl" style={{ fontFamily: "var(--font-sora)" }}>
              AI made code cheaper. It didn&apos;t make judgment unnecessary.
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Anyone can ask AI to build an application. The valuable person is the one who can carry it
              from understanding to operation. That list — not a certificate — is what we train:
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["understand the business", "research unknown tech", "architect the system", "identify failure modes", "choose infrastructure", "build", "test", "attack", "debug", "secure", "deploy", "operate", "improve"].map((c) => (
                <span key={c} className="rounded-lg border border-hair bg-panel px-3 py-1.5 font-mono-d text-[11px] font-medium text-ink-soft">{c}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-amberx/40 bg-amberbg p-7">
            <h3 className="font-bold text-ink">A reality check we print about ourselves</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Practical proof is our strength — and its boundary. We don&apos;t claim what we can&apos;t evidence:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              {["10 years of professional engineering", "Senior engineering status or formal architecture certification", "Large-scale production experience at 100,000 users", "Certified cybersecurity or regulated expertise", "Guaranteed scalability, SEO, or business results"].map((x) => (
                <li key={x} className="flex gap-2"><span className="font-bold text-coral">×</span>{x}</li>
              ))}
            </ul>
            <p className="mt-4 border-t border-hair pt-4 text-sm font-semibold text-ink">
              What we do claim: AI-assisted builds, tested and operated in the open — and the evidence to show for it.
            </p>
          </div>
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
