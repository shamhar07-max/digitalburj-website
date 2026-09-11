import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { ProgramFinder } from "@/components/ProgramFinder";
import { CTASection } from "@/components/CTASection";
import { SectionHead } from "@/components/lab";
import { PROGRAMS } from "@/content/bank2";
import { LEVELS, PATHWAYS, MISSION_STEPS, DIFFICULTY, UNIVERSE, LOOP } from "@/content/academy";

export const metadata: Metadata = {
  title: "Academy — Digital & Real-World Job Skills",
  description: "Two schools: Digital & AI (automation, sites, marketing, SEO/GEO, CRM, agents, MVPs) and Workplace (sales, admin, customer service). Every program ends in assessed, evidenced work.",
};

export default function Academy() {
  return (
    <>
      <PageHero tag="academy.digitalburj.com" title={<>Don&apos;t just learn. Prove it.</>} sub="Two schools, one rule: every program ends with work you can show — a pipeline, a site, a handled customer, a report. Taught in plain human language." editorial="Skills today. Opportunities tomorrow." chips={["Fixed duration", "Live assessment", "Evidence wallet", "L1–L3 in-course"]} />
      <section id="digital" className="container-db scroll-mt-24 py-12">
        <Reveal>
          <SectionHead index="01" kicker="Program finder" title={<>Pick a track. See the exact shape.</>} lede="Duration, level and format are printed on every program — no vague syllabi." />
        </Reveal>
        <div className="mt-8"><ProgramFinder /></div>
      </section>
      <section id="workplace" className="scroll-mt-24 border-y border-hair bg-panel-deep/50">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="02" kicker="Workplace operating system" title={<>How workplaces actually operate.</>} lede="The eighteen topics every junior hire is secretly expected to know on day one — taught explicitly, practised live." />
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {["Professional communication", "Email writing", "Phone etiquette", "Customer handling", "Excel / Google Sheets", "CRM usage", "Workplace English", "Interview skills", "CV / resume preparation", "LinkedIn", "Workplace culture", "Time management", "Reporting", "Basic business terminology", "Meeting discipline", "Handover notes", "Confidentiality basics", "Probation survival"].map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 0.03}>
                <div className="flex items-baseline gap-3 rounded-xl border border-hair bg-panel px-4 py-3.5">
                  <span className="font-mono-d text-xs font-semibold text-cyanx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm font-bold text-ink">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-hair">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="03" kicker="Flagship: Sales Academy" title={<>Eight weeks. Then a real campaign.</>} lede="Nobody hires 'course completed'. Our sales track ends with supervised work on a live lead-generation campaign — training plus assessment plus evidence." />
          </Reveal>
          {(() => {
            const sales = PROGRAMS.find((p) => p.slug === "sales-executive");
            if (!sales) return null;
            return (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {sales.modules.map((m, i) => (
                  <div key={m} className="flex items-baseline gap-3 rounded-xl border border-hair bg-panel px-4 py-3.5">
                    <span className="font-mono-d text-xs font-semibold text-cobalt">W{i + 1}</span>
                    <span className="text-sm font-semibold text-ink">{m.replace(/^W\d+\s*/, "")}</span>
                  </div>
                ))}
              </div>
            );
          })()}
          <Reveal>
            <p className="mt-6 rounded-2xl border border-hair bg-panel p-5 text-sm leading-relaxed text-ink-soft">
              Practical experience means structured, supervised, permissioned work — real campaigns with privacy rules and supervisor sign-off. The graduate leaves with sales training, a practical assessment result, and documented project experience. Not a watch-history.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-hair bg-panel-deep/50">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="04" kicker="The learning loop" title={<>Never a technology before its reason.</>} lede="No 'today we learn APIs'. Instead: two systems can't talk — fix it. Then APIs. Every mission runs the same loop:" />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {LOOP.map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                <span className="rounded-lg border border-hair bg-panel px-3 py-2 font-mono-d text-[11px] font-bold uppercase tracking-[0.1em] text-ink">{s}</span>
                {i < LOOP.length - 1 && <span className="text-cyanx">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="container-db py-12">
        <Reveal>
          <SectionHead index="05" kicker="Pathways, not courses" title={<>Pick a destination. The route is mapped.</>} lede="Six tracks from complete beginner to professional operator. Every step lists its code, so progress is unambiguous." />
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-2xl border border-hair bg-panel">
          <div className="hidden grid-cols-[88px_1fr_1.2fr_1fr] gap-4 border-b-2 border-ink bg-panel-deep/60 px-5 py-3 font-mono-d text-[11px] font-bold uppercase tracking-[0.14em] text-ink-faint sm:grid" aria-hidden>
            <span>Track</span><span>Destination</span><span>Route</span><span>Outcome</span>
          </div>
          {PATHWAYS.map((p) => (
            <div key={p.code} className="grid gap-1.5 border-b border-hair px-5 py-4 last:border-b-0 sm:grid-cols-[88px_1fr_1.2fr_1fr] sm:items-baseline sm:gap-4">
              <span className="font-mono-d text-xs font-bold text-cobalt">TRACK {p.code}</span>
              <span className="font-bold text-ink">{p.name}</span>
              <span className="font-mono-d text-[11px] leading-relaxed text-ink-faint">{p.path}</span>
              <span className="text-sm text-ink-soft">{p.out}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-hair bg-panel-deep/50">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="06" kicker="Full curriculum · DB-00 → DB-22" title={<>Twenty-three courses. One language.</>} lede="Every course: mission briefs, build labs, break labs, client simulations, and a portfolio artifact. Open any course for its modules." />
          </Reveal>
          <div className="mt-8 space-y-8">
            {LEVELS.map((lv) => (
              <div key={lv.name}>
                <h3 className="font-mono-d text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">{lv.name} · {lv.courses.length} courses</h3>
                <div className="mt-3 space-y-3">
                  {lv.courses.map((c) => (
                    <details key={c.code} className="group overflow-hidden rounded-2xl border border-hair bg-panel">
                      <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] [&::-webkit-details-marker]:hidden">
                        <span className="font-mono-d rounded-md bg-cobalt/10 px-2.5 py-1 text-xs font-bold text-cobalt">{c.code}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-bold text-ink">{c.name}</span>
                          <span className="mt-0.5 block line-clamp-2 text-[13px] leading-snug text-ink-soft">{c.outcome}</span>
                        </span>
                        <span className="font-mono-d hidden rounded-full border border-hair px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-ink-faint sm:inline">{c.level}</span>
                        <span className="text-xl font-bold leading-none text-cyanx transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <ul className="grid gap-x-8 border-t border-dashed border-hair px-5 py-4 sm:grid-cols-2">
                        {c.modules.map((m) => (
                          <li key={m} className="flex gap-2 border-b border-hair/60 py-2 text-sm text-ink-soft last:border-b-0"><span className="text-tealx">—</span>{m}</li>
                        ))}
                      </ul>
                      {(c.project || c.simulation) && (
                        <div className="grid gap-3 border-t border-hair bg-panel-deep/50 px-5 py-4 sm:grid-cols-2">
                          {c.project && <p className="text-[13px] leading-relaxed text-ink-soft"><span className="font-mono-d mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-amber-deep">Project</span>{c.project}</p>}
                          {c.simulation && <p className="text-[13px] leading-relaxed text-ink-soft"><span className="font-mono-d mr-2 text-[10px] font-bold uppercase tracking-[0.12em] text-coral">Simulation</span>{c.simulation}</p>}
                        </div>
                      )}
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-db grid gap-6 py-12 lg:grid-cols-2">
        <div className="rounded-2xl border border-hair bg-panel p-7">
          <h3 className="text-xl font-extrabold text-ink" style={{ fontFamily: "var(--font-sora)" }}>Every mission, same 13 steps</h3>
          <ol className="mt-4 space-y-2">
            {MISSION_STEPS.map(([t, d], i) => (
              <li key={t} className="flex items-baseline gap-3 text-sm">
                <span className="font-mono-d text-xs font-bold text-amberx">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-bold text-ink">{t}</span>
                <span className="text-ink-soft">— {d}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-hair bg-panel p-7">
            <h3 className="text-xl font-extrabold text-ink" style={{ fontFamily: "var(--font-sora)" }}>Difficulty, calibrated</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border border-hair bg-panel">
              {DIFFICULTY.map(([t, d], i) => (
                <p key={t} className={`px-5 py-3 text-sm leading-relaxed ${i > 0 ? "border-t border-hair" : ""}`}>
                  <span className="font-mono-d whitespace-nowrap text-xs font-bold text-cobalt">{t}</span>
                  <span className="text-ink-faint"> — </span>
                  <span className="font-semibold text-ink">{d}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-hair bg-panel p-7">
            <h3 className="text-xl font-extrabold text-ink" style={{ fontFamily: "var(--font-sora)" }}>One universe of companies</h3>
            <p className="mt-2 text-sm text-ink-soft">Same fictional firms across every course — so databases, agents and security drills share continuity.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {UNIVERSE.map(([n, d]) => (
                <span key={n} title={d} className="rounded-lg border border-hair bg-panel-deep px-3 py-1.5 font-mono-d text-[11px] font-semibold text-ink-soft">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-hair bg-panel-deep/60">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="07" kicker="Platform blueprint" title={<>Where this becomes software.</>} lede="The Academy is being engineered as a learning + building + assessment platform — not a video library. Five engines, six phases, one standard: verified capability." />
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["Learning", "Courses, lessons, missions"],
              ["Build", "Projects, labs, sandboxes"],
              ["Assessment", "Tests, reviews, defenses"],
              ["Evidence", "Proof of capability"],
              ["Capability", "Verified record"],
            ].map(([t, d], i) => (
              <div key={t} className="kpi-edge rounded-2xl border border-hair bg-panel p-5">
                <p className="font-mono-d text-xs font-bold text-cobalt">E.{i + 1}</p>
                <h3 className="mt-1.5 font-bold text-ink">{t}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-hair bg-panel">
            {[
              ["Foundation", "Auth, dashboards, RBAC, courses, enrollment, progress."],
              ["Learning engine", "Quizzes, Decision Labs, missions, rubrics, feedback."],
              ["Builder", "Projects, code submission, sandbox tests, automated grading."],
              ["Capability", "Evidence Wallet, skill engine, capability record, portfolio."],
              ["Advanced", "Incident Room, Break Lab, AI Judgment Lab, client simulation."],
              ["Network", "Professional Challenge, Talent + Jobs integration."],
            ].map(([t, d], i) => (
              <div key={t} className="flex flex-col gap-1 border-b border-hair px-5 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-mono-d shrink-0 text-xs font-bold text-amberx">P.{i + 1}</span>
                <span className="font-bold text-ink">{t}</span>
                <span className="text-sm text-ink-soft">{d}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-soft">Full engineering spec — state machines, RBAC matrix, sandbox rules, 10/10 checklist — lives in our build docs. First slice first: registration → lesson → mission → submission → grading → review → evidence.</p>
        </div>
      </section>
      <section className="container-db max-w-4xl pb-20">
        <Reveal>
          <div className="rounded-2xl border border-amberx/40 bg-amberbg p-7 text-sm leading-relaxed text-ink-soft">
            How assessment works: knowledge check → realistic simulation (calls, inbox, CRM) → supervisor review → L1–L3 certificate with verifiable ID. L4–L5 only after supervised project work. Certificates never imply government accreditation, licensing, or visa eligibility.
          </div>
        </Reveal>
        <div className="mt-8 flex justify-center"><Button href="/talent">See certification levels</Button></div>
        <div className="mt-10"><CTASection /></div>
      </section>
    </>
  );
}
