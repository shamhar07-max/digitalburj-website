import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { StudioIntakeForm } from "@/components/AcademyBridge";

export const metadata: Metadata = {
  title: "Studio — Start Without Burning Money on Code",
  description: "Startup validation and MVP builds: validate in a week, build the smallest working version in 3–6 weeks, launch, measure, scale only on evidence.",
};

export default function Studio() {
  return (
    <>
      <PageHero tag="studio.digitalburj.com" title={<>An MVP you can hand to real users, without overpaying.</>} sub="We run a fixed-scope validation and MVP flow: a week to check the demand, then a small working version in three to six weeks. The part that matters — deciding what not to build — happens before any code." editorial="Validate first. Build small. Scale on evidence." />
      <section className="container-db grid gap-6 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="card-tower h-full rounded-3xl p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>How a build actually runs</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
              We start from the same content you&apos;ve seen — then do the unglamorous part:
              testing which tools survive contact with reality, reading docs, fixing auth,
              payment states, deployments and audit trails until a two-sided marketplace
              runs end to end: post a job, collect verified bids, hold funds, track delivery,
              release payout. Not a demo click-through — verification gates, dispute freezing,
              and an admin console.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">
              Studio exists so you don&apos;t spend your months doing that full-time. We bring the
              method; you bring the idea and the customers you understand.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-tower h-full rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold text-ink">The process</h2>
            <ol className="mt-4 space-y-3 text-sm text-fg-muted sm:text-base">
              {[["Validate · ~1 week", "Problem, buyer, competitor, MVP scope, explicit no-build list."], ["Build · 3–6 weeks", "Smallest version a stranger can use. Auth, data, admin from day one."], ["Launch", "Low-cost infrastructure, analytics, honest limits stated."], ["Learn → Scale", "Usage decides. Harden, add rails, grow infra only on evidence."]].map(([t, d]) => (
                <li key={t} className="rounded-2xl border border-hair p-4"><span className="font-bold text-ink">{t}</span><br />{d}</li>))}
            </ol>
          </div>
        </Reveal>
      </section>
      <section className="container-db max-w-4xl pb-20">
        <StudioIntakeForm />
        <Reveal>
          <div className="rounded-3xl border border-hair p-7 text-sm leading-relaxed text-fg-muted">
            Plain limits, stated upfront: early builds run at validation scale; payment rails need licensed providers; WhatsApp and maps approvals are external; scope changes are change orders. Engagement: validation sprint (fixed, credited if we continue) → MVP fixed quote 30/40/30 with handover → care plan. Selective revenue-share only with a paid base and written terms.
          </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
           <Button href="/contact">Book a validation call</Button>
           <Button href="/projects" variant="ghost">Read the method</Button>
        </div>
        <div className="mt-10"><CTASection /></div>
      </section>
    </>
  );
}
