import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SectionHead, Pill, SpecRow } from "@/components/lab";
import { Reveal } from "@/components/Reveal";
import { LIFECYCLE, PRINCIPLES } from "@/content/bank2";

export const metadata: Metadata = {
  title: "Method — How Engagements Run",
  description: "The DigitalBurj operating method: validate, build small, launch, learn, scale. Fixed scopes, staged payments, honest limits, written handover.",
};

const STAGES = [
  { n: "S.01", t: "Validate", w: "1 week", d: "Buyer, problem, competitor, smallest usable scope, and a written not-to-build list. Fixed fee, credited toward a build if we continue.", out: "Scope document + fixed quote" },
  { n: "S.02", t: "Build", w: "3–6 weeks", d: "Auth, data model, core workflow and admin from day one. Weekly demos against the scope document.", out: "Working system + demo log" },
  { n: "S.03", t: "Launch", w: "Week 1 live", d: "Low-cost infrastructure, analytics, access register, stated limits. You own the accounts and keys.", out: "Live URL + handover pack" },
  { n: "S.04", t: "Learn", w: "30 days", d: "Usage decides what survives. We instrument the one action that matters and review it together.", out: "Evidence review + decision" },
  { n: "S.05", t: "Scale", w: "On evidence", d: "Hardening backlog, licensed rails, bigger infrastructure — purchased only when usage justifies it.", out: "Priced backlog, in order" },
];

export default function Projects() {
  return (
    <>
      <PageHero tag="Method" title={<>How an engagement runs, in writing.</>} sub="The same loop for a startup MVP and an SME fix. Fixed scopes, staged payments, and limits stated before money moves." chips={["Fixed quotes", "30 / 40 / 30 milestones", "You own the accounts", "Change orders in writing"]} />
      <section className="container-db py-12">
        <SectionHead index="01" kicker="The five stages" title={<>Validate → Build → Launch → Learn → Scale.</>} />
        <div className="mt-8 overflow-hidden rounded-2xl border border-hair bg-panel">
          {STAGES.map((s) => (
            <div key={s.n} className="grid gap-2 border-b border-hair px-6 py-6 last:border-b-0 sm:grid-cols-[88px_1fr_1fr] sm:gap-6">
              <span className="font-mono-d text-xs font-semibold text-cobalt">{s.n}<br /><span className="text-ink-faint">{s.w}</span></span>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>{s.t}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </div>
              <p className="font-mono-d text-xs leading-relaxed text-ink-faint sm:pt-8"><span className="font-semibold text-ink-soft">Output — </span>{s.out}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-db grid gap-6 pb-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-hair bg-panel p-7">
          <Pill color="amber">Commercial terms</Pill>
          <dl className="mt-4">
            <SpecRow k="Validation" v="Fixed fee · 1 week" />
            <SpecRow k="Build" v="Fixed quote · 30/40/30" />
            <SpecRow k="Care plans" v="Starter / Growth · monthly" />
            <SpecRow k="Infrastructure" v="Client-owned + setup fee" />
          </dl>
        </div>
        <div className="rounded-2xl border border-hair bg-panel p-7">
          <Pill color="teal">Limits, stated upfront</Pill>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-soft">
            <li>— Early builds run at validation scale; growth infra is a separate purchase.</li>
            <li>— Payments run on licensed rails; internal modes are for testing only.</li>
            <li>— WhatsApp, maps and store approvals are external dependencies.</li>
            <li>— Anything outside the scope document is a written change order.</li>
          </ul>
        </div>
      </section>
      <section className="border-y border-hair bg-panel-deep/50">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="02" kicker="Agency lifecycle" title={<>Twelve gates. No skipping.</>} lede="We sell outcomes, not activities. Each gate needs its artifact before the next opens — for example, we identify and automate the workflows consuming your team's time, then prove the hours returned." />
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LIFECYCLE.map(([t, d, exit], i) => (
              <Reveal key={t} delay={(i % 3) * 0.03}>
                <div className="kpi-edge h-full rounded-2xl border border-hair bg-panel p-5">
                  <p className="font-mono-d text-xs font-semibold text-cobalt">0{i + 1}</p>
                  <h3 className="mt-1.5 font-bold text-ink">{t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{d}</p>
                  <p className="font-mono-d mt-3 border-t border-hair pt-2.5 text-[11px] leading-relaxed text-ink-faint"><span className="font-semibold text-ink-soft">Exit — </span>{exit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="container-db py-12">
        <Reveal>
          <SectionHead index="03" kicker="Operating principles" title={<>Behaves like a 50-person agency.</>} lede="Sixteen rules. Every one is a scar — something that cost real money once, written down so it costs nobody twice." />
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {PRINCIPLES.map((p, i) => (
            <div key={p} className="flex items-baseline gap-3 rounded-xl border border-hair bg-panel px-4 py-3.5">
              <span className="font-mono-d text-xs font-semibold text-amberx">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold text-ink">{p}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container-db max-w-4xl pb-20"><div className="mt-8"><CTASection /></div></section>
    </>
  );
}
