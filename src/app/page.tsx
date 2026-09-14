import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/lab";
import { Button } from "@/components/Button";
import { HeroMotion, MaskLine } from "@/components/decor";
import { ChapterRail, NextChapter } from "@/components/Journey";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { AcademyLink } from "@/components/AcademyBridge";
import { SERVICES } from "@/content/bank2";

export const metadata: Metadata = {
  title: "DigitalBurj — learn the skills, build the software, verify the people",
  description: "DigitalBurj is a technology company in Dubai. An Academy that ends in assessed work, a Studio that ships MVPs, business automation for Gulf SMEs, and verified talent.",
};

const INDEX = [
  { n: "01", name: "Academy", desc: "Digital skills and workplace programs that end in assessed, showable work.", href: "/academy" },
  { n: "02", name: "Studio", desc: "Founder MVPs: validate in a week, ship the smallest usable version in weeks.", href: "/studio" },
  { n: "03", name: "Business AI", desc: "Websites, CRM pipelines and automation for SMEs that lose enquiries.", href: "/business-ai" },
  { n: "04", name: "Talent", desc: "Certification levels with published criteria and links to the evidence behind each one.", href: "/talent" },
  { n: "05", name: "Jobs & Global", desc: "Supervised client work and employer roles. Readiness, no visa promises.", href: "/jobs" },
];

export default function Home() {
  return (
    <>
      <ChapterRail />

      {/* HERO */}
      <section id="top" className="border-b border-hair">
        <div className="container-db grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <HeroMotion delay={0.05}>
              <p className="text-sm font-semibold text-cobalt">Technology company · Dubai, UAE</p>
            </HeroMotion>
            <HeroMotion delay={0.12}>
              <h1 className="font-display mt-4 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">
                <MaskLine>We teach the skills,</MaskLine>
                <MaskLine delay={0.1}>build the software,</MaskLine>
                <MaskLine delay={0.2}>and verify the people.</MaskLine>
              </h1>
            </HeroMotion>
            <HeroMotion delay={0.3}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                DigitalBurj runs three connected practices in one company. An Academy where you
                learn by building and defending real work. A Studio that ships founding teams&apos;
                first versions. A business-automation unit for SMEs in the Gulf. Plain criteria,
                tested output, stated limits.
              </p>
            </HeroMotion>
            <HeroMotion delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/academy">Start in the Academy</Button>
                <Button href="/contact" variant="outline">Tell us what you&apos;re building</Button>
              </div>
            </HeroMotion>
            <HeroMotion delay={0.5}>
              <dl className="mt-9 grid max-w-xl grid-cols-3 divide-x divide-hair border-y border-hair">
                {[["12", "Role programs"], ["5", "Cert levels"], ["24h", "First reply"]].map(([v, k]) => (
                  <div key={k as string} className="px-4 py-3.5 first:pl-0">
                    <dd className="font-display text-2xl font-extrabold text-ink">{v}</dd>
                    <dt className="mt-0.5 text-[13px] text-ink-faint">{k}</dt>
                  </div>
                ))}
              </dl>
            </HeroMotion>
          </div>
          <div className="rounded-xl border border-hair bg-panel p-6">
            <h2 className="font-display text-xl font-extrabold text-ink">What a course ends with</h2>
            <ul className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-ink-soft">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />A project you built and can explain, not a quiz you passed.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />A task file and supervisor sign-off on record.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />A credential that lists the exact capabilities tested.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />One login across courses, missions, evidence and projects.</li>
            </ul>
            <AcademyLink path="/register" className="mt-6 inline-block font-bold text-cobalt hover:underline">Create your account — it takes two minutes</AcademyLink>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="doors" className="container-db scroll-mt-24 py-14 sm:py-20">
        <Reveal>
          <SectionHead index="01" kicker="What we do" title={<>Five practices, one shared system of record.</>} lede="Every track writes into the same place: what you learned, what you built, and what was independently verified." />
        </Reveal>
        <div className="mt-8 border-t-2 border-ink">
          {INDEX.map((r) => (
            <a key={r.n} href={r.href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b-2 border-ink py-5 transition-colors hover:bg-panel-deep sm:gap-8 sm:py-6">
              <span className="pl-1 text-sm font-semibold text-ink-faint">{r.n}</span>
              <span className="min-w-0">
                <span className="font-display block text-balance text-2xl font-extrabold tracking-tight text-ink group-hover:text-cobalt sm:text-4xl">
                  {r.name}
                </span>
                <span className="mt-1 block max-w-xl text-sm text-ink-soft">{r.desc}</span>
              </span>
              <ArrowRight size={26} className="shrink-0 text-ink transition-all group-hover:translate-x-1 group-hover:text-cobalt" />
            </a>
          ))}
        </div>
        <NextChapter href="#levels" label="Certification" />
      </section>

      {/* LIVE PLATFORM */}
      <section className="border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db py-10">
          <p className="text-center text-sm font-semibold text-ink-soft">One login across course, mission, evidence and client projects</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Courses & missions", hrefPath: "/courses", via: "academy" as const },
              { label: "Verified talent", hrefPath: "/talent", via: "academy" as const },
              { label: "Live jobs board", hrefPath: "/jobs", via: "academy" as const },
              { label: "Client portal", hrefPath: "/projects", via: "academy" as const },
            ].map((c) => (
              <AcademyLink key={c.hrefPath} path={c.hrefPath} className="group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
                <p className="text-sm font-bold leading-snug text-ink group-hover:text-cobalt">{c.label}</p>
                <p className="mt-1 font-mono-d text-[11px] text-ink-faint">{c.hrefPath}</p>
              </AcademyLink>
            ))}
            <a href="/studio" className="group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="text-sm font-bold leading-snug text-ink group-hover:text-cobalt">Studio intake</p>
              <p className="mt-1 font-mono-d text-[11px] text-ink-faint">/studio</p>
            </a>
            <a href="/journal" className="group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="text-sm font-bold leading-snug text-ink group-hover:text-cobalt">Field guides</p>
              <p className="mt-1 font-mono-d text-[11px] text-ink-faint">/journal</p>
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section id="levels" className="scroll-mt-24 border-b-2 border-ink bg-amberbg/70">
        <div className="container-db grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <SectionHead index="02" kicker="Certification" accent="text-amber-deep" title={<>A certificate that lists what was tested.</>} lede="Five levels with published criteria. Experience records only for supervised work actually completed — dates, tasks, supervisor on file." />
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/talent" variant="dark">How certification works</Button>
              <Button href="/academy" variant="outline">Browse programs</Button>
            </div>
          </div>
          <div className="rounded-xl border-2 border-ink bg-panel p-6">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-faint">What a credential page records</p>
            <dl className="mt-4 space-y-3 text-[15px]">
              {[
                ["Name and level", "L1 to L5, matching published criteria for that level."],
                ["Capabilities tested", "The exact list the assessor worked through."],
                ["Supervised work", "Dates, tasks performed, supervisor name on file."],
                ["Evidence link", "The work itself, stored where anyone with the link can check it."],
              ].map(([k, v]) => (
                <div key={k as string} className="flex flex-col gap-1 border-b border-hair pb-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="shrink-0 font-semibold text-ink">{k}</dt>
                  <dd className="text-sm leading-relaxed text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <NextChapter href="#work" label="The proof" />
        </div>
      </section>

      {/* SKILLS */}
      <section className="container-db py-14 sm:py-20">
        <Reveal>
          <SectionHead index="03" kicker="What we teach and ship" title={<>Fifteen capabilities. Each one taught and billable.</>} lede="One vocabulary across Academy, Studio and Talent — a skill learned here is a skill delivered here." />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Reveal key={s.slug}>
              <a href={`/services/${s.slug}`} className="group block h-full rounded-xl border border-hair bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cobalt">
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-cobalt">{s.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm text-ink-soft">Plus workplace tracks — sales, service, admin, hospitality, retail, logistics and more. <a href="/academy" className="font-bold text-cobalt hover:underline">See the Academy</a></p>
        </Reveal>
      </section>

      {/* PROOF */}
      <section id="work" className="scroll-mt-24 border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db grid gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-coral">Proof, by example</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.98] tracking-tight text-ink sm:text-5xl">
              Loadbyton: built, shipped, operating.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              A logistics technology platform built in-house, end to end. Shippers post loads.
              Verified carriers bid. Escrow holds the money through pickup, transit and delivery —
              releasing on confirmation or timed auto-release, with dispute freezing and a full
              admin console.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Marketplace", "Escrow ledger", "Carrier verification", "Disputes", "Realtime updates", "Admin console", "Database", "Cloud", "Testing"].map((t) => (
                <span key={t} className="rounded-md border border-hair bg-panel px-2.5 py-1 text-xs text-ink-soft">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border-2 border-ink bg-panel p-7">
            <p className="text-sm font-bold text-ink">How the money moves</p>
            <ol className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
              <li>1. Shippers post a load with terms.</li>
              <li>2. Verified carriers bid; the shipper awards.</li>
              <li>3. Escrow holds the funds before pickup.</li>
              <li>4. Carrier uploads proof of delivery.</li>
              <li>5. Shippers confirm and funds release — or both sides open a dispute, which freezes the money.</li>
            </ol>
            <p className="mt-5 border-t border-hair pt-4 text-sm text-ink-soft">Every step is audited and every role access-controlled. The full codebase is lesson material inside the Academy.</p>
          </div>
        </div>
      </section>

      {/* LAB */}
      <section className="container-db py-14 sm:py-20">
        <Reveal>
          <SectionHead index="04" kicker="Internal work" title={<>What we are building now.</>} lede="A short list of the running systems. Active ones ship to clients; experimental ones stay internal until they earn their place." />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="overflow-hidden rounded-xl border-2 border-ink bg-panel">
            {[["AI agents for client work", "Active"], ["Business automation engine", "Active"], ["Vision system", "Experimental"], ["Voice interface", "Experimental"], ["Business operating system", "Research"]].map(([t, s]) => (
              <div key={t as string} className="flex items-center justify-between gap-4 border-b border-hair px-5 py-4 last:border-b-0">
                <span className="font-semibold text-ink">{t}</span>
                <span className="rounded-full border border-hair px-3 py-1 text-xs font-semibold text-ink-soft">{s}</span>
              </div>
            ))}
          </div>
          <div className="grid content-start gap-5 sm:grid-cols-3">
            {[
              ["500", "+", "Journal guides", "Written since 2019, kept current"],
              ["15", "", "Capabilities", "Each one taught and billable"],
              ["5", "", "Cert levels", "L1–L5 with written criteria"],
            ].map(([v, s, k, d]) => (
              <div key={k as string} className="rounded-xl border border-hair bg-panel p-6">
                <p className="font-display leading-none text-ink" style={{ fontSize: "clamp(2rem, 3.4vw, 2.6rem)" }}>{v}{s}</p>
                <p className="mt-2 text-sm font-bold text-ink">{k}</p>
                <p className="mt-1 text-[13px] text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-cobalt px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5">
              Tell us the system you need built <span aria-hidden>→</span>
            </a>
            <NextChapter href="#faq" label="Answers" />
          </div>
        </div>
      </section>

      {/* HONESTY NOTE */}
      <section className="border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db py-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-wide text-ink-faint">What we will and won&apos;t claim</p>
            <p className="mt-4 text-xl leading-snug text-ink sm:text-2xl">
              Most ideas don&apos;t die from a lack of code. They die from building the wrong thing
              at full price. We build fast, we write everything down, and we tell you when an idea
              shouldn&apos;t be built at all.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-db max-w-4xl scroll-mt-24 py-14 sm:py-20">
        <Reveal>
          <SectionHead index="05" kicker="Straight answers" title={<>Asked often, answered plainly.</>} />
        </Reveal>
        <div className="mt-8"><Faq /></div>
        <div className="mt-12"><CTASection /></div>
      </section>
    </>
  );
}