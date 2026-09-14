import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/lab";
import { Button } from "@/components/Button";
import { HeroMotion, MaskLine, OrbitHero, Counter, Marquee } from "@/components/decor";
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

const TICKER = ["Academy", "Studio", "Business AI", "Talent", "Jobs & Global", "Certification", "Verified work", "Journal"];

export default function Home() {
  return (
    <>
      <ChapterRail />

      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b border-hair">
        <div aria-hidden className="bg-horizon pointer-events-none absolute inset-0" />
        <div aria-hidden className="blueprint absolute inset-0" />
        <div aria-hidden className="bg-cy-glow pointer-events-none absolute inset-0 opacity-80" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/70 to-transparent" />
        <div className="container-db relative flex items-center justify-between gap-4 border-b border-hair/80 py-2.5 font-mono-d text-[11px] uppercase tracking-[0.2em] text-ink-faint">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cobalt" style={{ boxShadow: "0 0 8px rgba(77,232,255,0.8)" }} />
            DigitalBurj // Dubai, UAE
          </span>
          <span className="hidden sm:inline">Est. 2019 · Teach — Build — Verify</span>
        </div>

        <div className="container-db relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <HeroMotion delay={0.05}>
              <p className="font-mono-d text-[12px] font-semibold uppercase tracking-[0.16em] text-cobalt">
                Technology company <span className="text-ink-faint">///</span> Dubai
              </p>
            </HeroMotion>
            <HeroMotion delay={0.12}>
              <h1 className="font-display mt-5 text-balance text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-[4.2rem]">
                <MaskLine>We teach the skills,</MaskLine>
                <MaskLine delay={0.1}>build the software,</MaskLine>
                <MaskLine delay={0.2}>
                  <span className="text-foil-gold">and verify the people.</span>
                </MaskLine>
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
                <Button href="/academy" className="px-8">Start in the Academy</Button>
                <Button href="/contact" variant="outline">Tell us what you&apos;re building</Button>
              </div>
            </HeroMotion>
            <HeroMotion delay={0.5}>
              <dl className="mt-9 grid max-w-xl grid-cols-3 divide-x divide-hair border-y border-hair/80">
                <div className="px-4 py-3.5 first:pl-0">
                  <dd className="font-display text-2xl font-extrabold text-ink"><Counter value={12} /></dd>
                  <dt className="mt-0.5 text-[13px] text-ink-faint">Role programs</dt>
                </div>
                <div className="px-4 py-3.5">
                  <dd className="font-display text-2xl font-extrabold text-ink"><Counter value={5} /></dd>
                  <dt className="mt-0.5 text-[13px] text-ink-faint">Cert levels</dt>
                </div>
                <div className="px-4 py-3.5">
                  <dd className="font-display text-2xl font-extrabold text-ink">24h</dd>
                  <dt className="mt-0.5 text-[13px] text-ink-faint">First reply</dt>
                </div>
              </dl>
            </HeroMotion>
          </div>

          <div className="relative">
            <HeroMotion delay={0.35}>
              <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none lg:aspect-[5/4]">
                <OrbitHero className="absolute inset-0" />
              </div>
            </HeroMotion>
            <HeroMotion delay={0.45}>
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-hair bg-panel/80 p-6 backdrop-blur-md lg:mt-0">
                <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />
                <p className="font-mono-d text-[11px] font-semibold uppercase tracking-[0.16em] text-cobalt">// Course terminal</p>
                <h2 className="font-display mt-3 text-xl font-extrabold text-ink">What a course ends with</h2>
                <ul className="mt-4 space-y-3.5 text-[15px] leading-relaxed text-ink-soft">
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" style={{ boxShadow: "0 0 8px rgba(77,232,255,0.8)" }} />A project you built and can explain, not a quiz you passed.</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" style={{ boxShadow: "0 0 8px rgba(77,232,255,0.8)" }} />A task file and supervisor sign-off on record.</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" style={{ boxShadow: "0 0 8px rgba(77,232,255,0.8)" }} />A credential that lists the exact capabilities tested.</li>
                  <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" style={{ boxShadow: "0 0 8px rgba(77,232,255,0.8)" }} />One login across courses, missions, evidence and projects.</li>
                </ul>
                <AcademyLink path="/register" className="mt-6 inline-block font-bold text-cobalt transition-colors hover:text-ink hover:underline">Create your account — it takes two minutes</AcademyLink>
              </div>
            </HeroMotion>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div aria-hidden className="marquee-mask overflow-hidden border-b border-hair bg-[#050810]/70 py-3">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {TICKER.map((t) => (
                <span key={dup + t} className="flex items-center gap-5 px-5 font-mono-d text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-faint">
                  {t} <span className="text-cobalt/70">▪</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WHAT WE DO */}
      <section id="doors" className="container-db scroll-mt-24 py-14 sm:py-20">
        <Reveal>
          <SectionHead index="01" kicker="What we do" title={<>Five practices, one shared system of record.</>} lede="Every track writes into the same place: what you learned, what you built, and what was independently verified." />
        </Reveal>
        <div className="mt-9 overflow-hidden rounded-2xl border border-hair">
          {INDEX.map((r, i) => (
            <a key={r.n} href={r.href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-hair bg-panel/40 px-5 py-5 backdrop-blur-sm transition-all hover:bg-panel/90 sm:gap-8 sm:px-7 sm:py-6 last:border-b-0">
              <span className="font-mono-d pl-1 text-sm font-semibold text-cobalt">{r.n}</span>
              <span className="min-w-0">
                <span className="font-display block text-balance text-2xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-cobalt sm:text-4xl">
                  {r.name}
                </span>
                <span className="mt-1 block max-w-xl text-sm text-ink-soft">{r.desc}</span>
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hair transition-all group-hover:border-cobalt group-hover:glow-cy">
                <ArrowRight size={20} className="text-ink transition-colors group-hover:text-cobalt" />
              </span>
            </a>
          ))}
        </div>
        <NextChapter href="#levels" label="Certification" />
      </section>

      {/* LIVE PLATFORM */}
      <section className="relative border-y border-hair bg-panel-deep/50">
        <div aria-hidden className="blueprint absolute inset-0 opacity-60" />
        <div className="container-db relative py-10">
          <p className="text-center text-sm font-semibold text-ink-soft">One login across course, mission, evidence and client projects</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Courses & missions", hrefPath: "/courses", via: "academy" as const },
              { label: "Verified talent", hrefPath: "/talent", via: "academy" as const },
              { label: "Live jobs board", hrefPath: "/jobs", via: "academy" as const },
              { label: "Client portal", hrefPath: "/projects", via: "academy" as const },
            ].map((c) => (
              <AcademyLink key={c.hrefPath} path={c.hrefPath} className="group rounded-xl border border-hair bg-panel/80 px-3 py-3 text-center backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cobalt hover:glow-cy">
                <p className="text-sm font-bold leading-snug text-ink group-hover:text-cobalt">{c.label}</p>
                <p className="mt-1 font-mono-d text-[11px] text-ink-faint">{c.hrefPath}</p>
              </AcademyLink>
            ))}
            <a href="/studio" className="group rounded-xl border border-hair bg-panel/80 px-3 py-3 text-center backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cobalt hover:glow-cy">
              <p className="text-sm font-bold leading-snug text-ink group-hover:text-cobalt">Studio intake</p>
              <p className="mt-1 font-mono-d text-[11px] text-ink-faint">/studio</p>
            </a>
            <a href="/journal" className="group rounded-xl border border-hair bg-panel/80 px-3 py-3 text-center backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-cobalt hover:glow-cy">
              <p className="text-sm font-bold leading-snug text-ink group-hover:text-cobalt">Field guides</p>
              <p className="mt-1 font-mono-d text-[11px] text-ink-faint">/journal</p>
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section id="levels" className="relative scroll-mt-24 border-b border-hair bg-amberbg/60">
        <div aria-hidden className="bg-horizon pointer-events-none absolute inset-0 opacity-60" />
        <div className="container-db relative grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <SectionHead index="02" kicker="Certification" accent="text-gold" title={<>A certificate that lists what was tested.</>} lede="Five levels with published criteria. Experience records only for supervised work actually completed — dates, tasks, supervisor on file." />
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/talent" variant="gold">How certification works</Button>
              <Button href="/academy" variant="outline">Browse programs</Button>
            </div>
          </div>
          <div className="relative rounded-2xl border border-hair bg-panel/80 p-6 backdrop-blur-sm">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <p className="font-mono-d text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">// Credential record</p>
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
              <a href={`/services/${s.slug}`} className="group block h-full card-tower p-6">
                <span className="font-mono-d text-[11px] font-semibold uppercase tracking-wider text-ink-faint">{String(s.slug).toUpperCase()}</span>
                <h3 className="font-display mt-2 text-xl font-extrabold tracking-tight text-ink transition-colors group-hover:text-cobalt">{s.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-cobalt opacity-0 transition-opacity group-hover:opacity-100">Open <ArrowRight size={14} /></span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm text-ink-soft">Plus workplace tracks — sales, service, admin, hospitality, retail, logistics and more. <a href="/academy" className="font-bold text-cobalt transition-colors hover:text-ink hover:underline">See the Academy</a></p>
        </Reveal>
      </section>

      {/* PROOF */}
      <section id="work" className="relative scroll-mt-24 border-y border-hair bg-panel-deep/50">
        <div aria-hidden className="blueprint absolute inset-0 opacity-50" />
        <div className="container-db relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="font-mono-d text-[12px] font-semibold uppercase tracking-[0.16em] text-coral">// Proof, by example</p>
            <h2 className="font-display mt-4 text-4xl leading-[1.02] tracking-tight text-ink sm:text-5xl">
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
                <span key={t} className="rounded-md border border-hair bg-panel/70 px-2.5 py-1 font-mono-d text-[11px] uppercase tracking-wider text-ink-soft">{t}</span>
              ))}
            </div>
          </div>
          <div className="card-tower p-7">
            <p className="font-mono-d text-[11px] font-semibold uppercase tracking-[0.16em] text-cobalt">// How the money moves</p>
            <p className="mt-3 text-lg font-bold text-ink">Escrow, step by step</p>
            <ol className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-soft">
              <li className="flex gap-3"><span className="font-mono-d font-bold text-cobalt">01</span>Shippers post a load with terms.</li>
              <li className="flex gap-3"><span className="font-mono-d font-bold text-cobalt">02</span>Verified carriers bid; the shipper awards.</li>
              <li className="flex gap-3"><span className="font-mono-d font-bold text-cobalt">03</span>Escrow holds the funds before pickup.</li>
              <li className="flex gap-3"><span className="font-mono-d font-bold text-cobalt">04</span>Carrier uploads proof of delivery.</li>
              <li className="flex gap-3"><span className="font-mono-d font-bold text-cobalt">05</span>Shippers confirm and funds release — or both sides open a dispute, which freezes the money.</li>
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
          <div className="overflow-hidden rounded-2xl border border-hair bg-panel/50 backdrop-blur-sm">
            {[["AI agents for client work", "Active"], ["Business automation engine", "Active"], ["Vision system", "Experimental"], ["Voice interface", "Experimental"], ["Business operating system", "Research"]].map(([t, s]) => (
              <div key={t as string} className="flex items-center justify-between gap-4 border-b border-hair px-5 py-4 last:border-b-0">
                <span className="flex items-center gap-3 font-semibold text-ink">
                  <span className={s === "Active" ? "h-1.5 w-1.5 rounded-full bg-cobalt" : "h-1.5 w-1.5 rounded-full bg-ink/30"} style={s === "Active" ? {} : undefined} />
                  {t}
                </span>
                <span className={s === "Active"
                  ? "rounded-full border border-cobalt/40 bg-cobalt/10 px-3 py-1 font-mono-d text-[11px] font-semibold uppercase tracking-wider text-cobalt"
                  : "rounded-full border border-hair px-3 py-1 font-mono-d text-[11px] font-semibold uppercase tracking-wider text-ink-faint"}>
                  {s}
                </span>
              </div>
            ))}
          </div>
          <div className="grid content-start gap-5 sm:grid-cols-3">
            {[
              ["500", "+", "Journal guides", "Written since 2019, kept current"],
              ["15", "", "Capabilities", "Each one taught and billable"],
              ["5", "", "Cert levels", "L1–L5 with written criteria"],
            ].map(([v, s, k, d]) => (
              <div key={k as string} className="card-tower p-6">
                <p className="font-display leading-none text-ink" style={{ fontSize: "clamp(2rem, 3.4vw, 2.6rem)" }}>
                  <Counter value={Number(v)} suffix={s as string} />
                </p>
                <p className="mt-2 text-sm font-bold text-ink">{k}</p>
                <p className="mt-1 text-[13px] text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-shine inline-flex items-center gap-2 rounded-lg bg-cobalt px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:glow-cy">
              Tell us the system you need built <span aria-hidden>→</span>
            </a>
            <NextChapter href="#faq" label="Answers" />
          </div>
        </div>
      </section>

      {/* HONESTY NOTE */}
      <section className="relative border-y border-hair bg-panel-deep/50">
        <div aria-hidden className="bg-horizon pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-db py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono-d text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">What we will and won&apos;t claim</p>
            <p className="mt-4 text-2xl leading-snug text-ink sm:text-3xl [text-shadow:0_0_34px_rgba(255,200,87,0.18)]">
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