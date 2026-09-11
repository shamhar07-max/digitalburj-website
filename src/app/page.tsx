import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight, BadgeCheck } from "lucide-react";
import { SectionHead, Pill } from "@/components/lab";
import { Button } from "@/components/Button";
import { Ticker, Sticker } from "@/components/decor";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Intelligence. Engineered.",
  description: "Digital Burj is a technology company that understands business problems and builds the technology to solve them — software, AI, automation and digital transformation.",
};

const DOORS = [
  { t: "I need to build something", d: "Websites, apps, software, SaaS, portals, custom systems.", href: "/studio", tag: "BUILD" },
  { t: "I need to automate work", d: "AI, agents, workflows, WhatsApp, CRM, integrations.", href: "/business-ai", tag: "AUTOMATE" },
  { t: "I need to transform my business", d: "Not sure what you need? Start with diagnosis, not software.", href: "/projects", tag: "TRANSFORM" },
];

const PILLARS = [
  { n: "01", t: "Transform", d: "Diagnose the operation, redesign the process, plan the technology.", href: "/services#transform" },
  { n: "02", t: "Build", d: "Software, platforms and digital products, engineered to survive users.", href: "/services#build" },
  { n: "03", t: "Intelligence", d: "AI applied where it creates measurable value — never as decoration.", href: "/services#intelligence" },
  { n: "04", t: "Automate", d: "Remove repetitive manual work across people and systems.", href: "/services#automate" },
  { n: "05", t: "Grow", d: "Visibility, acquisition and customer experience that compound.", href: "/services#grow" },
];

const FLOW = ["Discover", "Audit", "Diagnose", "Design", "Build", "Test", "Launch", "Improve"];

const WHY = [
  ["Business-first", "We understand the operation before recommending technology."],
  ["Engineering-minded", "We build systems, not just interfaces."],
  ["AI-native", "We use AI across discovery, build and operations — where it fits."],
  ["Production-focused", "Security, testing and reliability are non-negotiable."],
  ["Long-term", "We don't disappear after launch. We operate and improve."],
];

export default function Home() {
  return (
    <>
      {/* 01 HERO */}
      <section className="aurora relative overflow-hidden border-b border-hair">
        <div className="blueprint absolute inset-0" aria-hidden />
        <div className="noise-overlay absolute inset-0 opacity-60" aria-hidden />
        <div className="container-db relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="font-mono-d text-xs font-semibold tracking-[0.24em] text-ink-faint">DIGITAL BURJ</p>
            <h1 className="mt-5 text-balance leading-[0.94] tracking-tight text-ink" style={{ fontFamily: "var(--font-black)", fontSize: "clamp(2.6rem, 6.6vw, 5.2rem)" }}>
              BUILD WHAT&apos;S <span className="text-foil-gold">NEXT.</span>
            </h1>
            <p className="font-mono-d mt-6 text-xs font-semibold tracking-[0.2em] text-ink-soft sm:text-sm">
              AI · SOFTWARE · AUTOMATION · DIGITAL TRANSFORMATION
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              We build intelligent digital systems for businesses ready for what comes next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Start a project</Button>
              <Button href="/#work" variant="dark">Explore Digital Burj</Button>
            </div>
            <p className="font-mono-d mt-8 text-[11px] tracking-[0.16em] text-ink-faint">
              SOFTWARE · AI · AUTOMATION · BUSINESS SYSTEMS · DIGITAL TRANSFORMATION
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="card-tower relative overflow-hidden p-6">
              <div className="flex items-center justify-between font-mono-d text-[11px] tracking-[0.18em] text-ink-faint">
                <span>DB-SYS // LIVE</span>
                <span className="inline-flex items-center gap-1.5 text-tealx"><span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-current" />OPERATIONAL</span>
              </div>
              <div className="mt-4 space-y-2.5 font-mono-d text-[12px]">
                {[
                  ["PROBLEM", "Manual ops, leaking leads", "text-coral"],
                  ["SYSTEM", "CRM + automation + AI", "text-cyanx"],
                  ["OUTCOME", "Hours returned weekly", "text-tealx"],
                ].map(([k, v, c]) => (
                  <div key={k} className="flex items-center justify-between gap-3 rounded-xl border border-hair bg-void/60 px-4 py-3">
                    <span className="tracking-[0.16em] text-ink-faint">{k}</span>
                    <span className={`text-right font-semibold ${c}`}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-hair pt-4 text-center font-mono-d">
                {[["500+", "guides"], ["15", "capabilities"], ["L5", "certified"]].map(([v, k]) => (
                  <div key={k} className="rounded-lg border border-hair bg-void/40 py-2.5">
                    <p className="text-lg font-bold text-ink">{v}</p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-ink-faint">{k}</p>
                  </div>
                ))}
              </div>
            </div>
            <Sticker className="absolute -right-4 -top-8 sm:-right-8" />
          </div>
        </div>
      </section>

      <Ticker items={["Transform", "Build", "Intelligence", "Automate", "Grow", "Operate", "Learn — Build — Verify — Work"]} />

      {/* 02 WHAT IS DIGITAL BURJ */}
      <section className="container-db cv-auto py-14 sm:py-20">
        <Reveal>
          <SectionHead index="01" kicker="What is Digital Burj" title={<>A technology company, not a service list.</>} />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl" style={{ fontFamily: "var(--font-sora)" }}>
            A business comes to us with a problem. We figure out what is actually wrong,
            design the right system, build it, connect it, automate it, deploy it, measure
            it — <span className="text-cyanx">and keep improving it.</span>
          </p>
          <p className="font-ed mt-6 max-w-2xl text-lg italic leading-relaxed text-ink-soft">
            “Technology should solve a business problem, not create another one. We don&apos;t
            start with technology. We start with the problem.”
          </p>
        </Reveal>
      </section>

      {/* 03 THREE DOORS */}
      <section className="border-y border-hair bg-panel-deep/50">
        <div className="container-db cv-auto py-14 sm:py-20">
          <Reveal>
            <SectionHead index="02" kicker="Start here" title={<>What are you trying to achieve?</>} lede="Tell us the problem in your words. We'll map it to the right path — you don't need to know which technology you need." />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {DOORS.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.05}>
                <a href={d.href} className="group flex h-full flex-col rounded-2xl border border-hair bg-panel p-7 transition-all duration-200 hover:-translate-y-1 hover:border-cobalt/60 hover:shadow-[0_18px_50px_-14px_rgba(77,107,255,0.5)]">
                  <span className="font-mono-d rounded-md bg-cobalt/15 px-2.5 py-1 text-[11px] font-bold tracking-[0.14em] text-[#9db1ff] w-fit">{d.tag}</span>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>{d.t}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{d.d}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-cyanx">Enter <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" /></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 WHAT WE DO */}
      <section id="what-we-do" className="container-db cv-auto scroll-mt-24 py-14 sm:py-20">
        <Reveal>
          <SectionHead index="03" kicker="What we do" title={<>Five moves. One system.</>} />
        </Reveal>
        <div className="mt-10 overflow-hidden rounded-2xl border border-hair">
          {PILLARS.map((p, i) => (
            <a key={p.n} href="/services" className="group grid gap-1 border-b border-hair bg-panel px-6 py-6 transition-colors last:border-b-0 hover:bg-white/[0.03] sm:grid-cols-[64px_220px_1fr_auto] sm:items-center sm:gap-6">
              <span className="font-mono-d text-sm font-semibold text-ink-faint group-hover:text-amberx">{p.n}</span>
              <span className="text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>{p.t}</span>
              <span className="max-w-xl text-sm text-ink-soft">{p.d}</span>
              <ArrowRight size={20} className="hidden text-ink-faint transition-all group-hover:translate-x-1 group-hover:text-cyanx sm:block" />
            </a>
          ))}
        </div>
      </section>

      {/* 05 HOW WE WORK */}
      <section id="how-we-work" className="scroll-mt-24 border-y border-hair bg-panel-deep/50">
        <div className="container-db cv-auto py-14 sm:py-20">
          <Reveal>
            <SectionHead index="04" kicker="How we work" title={<>From problem to system.</>} lede="Not 'give us requirements and we'll code.' We understand the business first — then design, build, test and improve." />
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((s, i) => (
              <div key={s} className="bg-panel p-5">
                <p className="font-mono-d text-[11px] font-semibold tracking-[0.16em] text-cyanx">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1.5 font-bold text-ink">{s}</p>
              </div>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-center text-sm text-ink-soft">Full operating method with gates and outputs → <a href="/projects" className="font-bold text-cyanx hover:text-ink">the Method page</a></p>
          </Reveal>
        </div>
      </section>

      {/* 06 SYSTEM VISUAL */}
      <section className="container-db cv-auto py-14 sm:py-20">
        <Reveal>
          <SectionHead index="05" kicker="The system" title={<>Business in. Capability out.</>} />
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-hair bg-panel p-6 sm:p-10">
            <div className="flex flex-col items-stretch gap-2 text-center font-mono-d text-xs font-bold tracking-[0.12em]">
              <div className="rounded-xl border border-hair bg-void/60 px-4 py-4 text-ink">BUSINESS + PROBLEM</div>
              <div className="text-ink-faint">▼</div>
              <div className="grid gap-2 sm:grid-cols-3">
                {["SOFTWARE", "AI", "AUTOMATION"].map((t) => (
                  <div key={t} className="rounded-xl border border-cobalt/40 bg-cobalt/[0.08] px-4 py-4 text-[#9db1ff]">{t}</div>
                ))}
              </div>
              <div className="text-ink-faint">▼</div>
              <div className="rounded-xl border border-hair bg-void/60 px-4 py-4 text-ink">INTEGRATION → SYSTEM → GROWTH</div>
            </div>
            <p className="mt-6 text-center text-sm text-ink-soft">Software, intelligence and automation converge into one operating system — then it compounds.</p>
          </div>
        </Reveal>
      </section>

      {/* 07 PROOF */}
      <section id="work" className="scroll-mt-24 border-y border-hair bg-panel-deep/50">
        <div className="container-db cv-auto py-14 sm:py-20">
          <Reveal>
            <SectionHead index="06" kicker="Built by Digital Burj" title={<>Loadbyton: idea → production.</>} lede="A logistics technology platform built for real-world commercial transport — the system we point to when asked what we can actually build." />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <div className="rounded-2xl border border-hair bg-panel p-7">
                <p className="font-mono-d text-[11px] tracking-[0.2em] text-amberx">CASE.DB-001 · MARKETPLACE + ESCROW</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Marketplace", "Jobs", "Bidding", "Payments", "Documents", "Compliance", "Tracking", "Disputes", "Financial workflows", "Automation"].map((t) => (
                    <span key={t} className="rounded-md border border-hair bg-void/50 px-2.5 py-1 font-mono-d text-[11px] text-ink-soft">{t}</span>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  Shippers post loads. Verified carriers bid. Escrow holds funds through pickup,
                  transit and delivery — releasing on confirmation or timed auto-release, with
                  dispute freezing and a full admin console.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href="/contact">Discuss a build like this</Button>
                </div>
              </div>
              <div className="rounded-2xl border border-hair bg-void/60 p-7 font-mono-d text-[12px] leading-[2] text-ink-soft">
                <p className="text-[10px] tracking-[0.2em] text-ink-faint">SIMPLIFIED FLOW</p>
                <p className="mt-3">POST_LOAD → VERIFY_CARRIER</p>
                <p>BID → AWARD → <span className="text-amberx">ESCROW_HOLD</span></p>
                <p>POD_UPLOAD → CONFIRM → <span className="text-tealx">PAYOUT_RELEASE</span></p>
                <p className="mt-4 text-[10px] tracking-[0.2em] text-ink-faint">EVERY STEP AUDITED · EVERY ROLE GATED</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 WHY */}
      <section className="container-db cv-auto py-14 sm:py-20">
        <Reveal>
          <SectionHead index="07" kicker="Why Digital Burj" title={<>Specific reasons. Not adjectives.</>} />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 0.04}>
              <div className="kpi-edge h-full rounded-2xl border border-hair bg-panel p-6">
                <p className="font-mono-d text-xs font-bold text-cobalt">0{i + 1}</p>
                <h3 className="mt-2 font-bold text-ink">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.08}>
            <a href="/contact" className="flex h-full flex-col justify-between rounded-2xl border border-cobalt/40 bg-cobalt/[0.07] p-6 transition-all hover:-translate-y-0.5">
              <p className="font-mono-d text-[11px] tracking-[0.2em] text-cyanx">DB-M-2026 · METHOD</p>
              <p className="mt-3 text-xl font-extrabold leading-snug text-ink" style={{ fontFamily: "var(--font-sora)" }}>Small first. Measured. Then bigger — only on evidence.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyanx">Read the method <ArrowUpRight size={15} /></span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* 09 STUDIO */}
      <section className="border-y border-hair bg-panel-deep/50">
        <div className="container-db cv-auto grid items-center gap-8 py-14 lg:grid-cols-2">
          <div>
            <SectionHead index="08" kicker="Digital Burj Studio" title={<>From idea to working product.</>} lede="Validate in a week. Ship the smallest usable version in weeks. Scale only when users prove it." />
            <div className="mt-6"><Button href="/studio">Enter the Studio</Button></div>
          </div>
          <div className="font-mono-d rounded-2xl border border-hair bg-panel p-6 text-[13px] leading-[2.2]">
            {["IDEA", "VALIDATE", "DESIGN", "BUILD", "LAUNCH", "GROW"].map((s, i, a) => (
              <span key={s}>
                <span className="rounded-md border border-hair bg-void/50 px-2.5 py-1.5 font-semibold text-ink">{s}</span>
                {i < a.length - 1 && <span className="mx-1.5 text-ink-faint">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10 ACADEMY */}
      <section className="container-db cv-auto grid items-center gap-8 py-14 sm:py-20 lg:grid-cols-2">
        <div className="rounded-2xl border border-amberx/40 bg-amberbg p-7">
          <p className="font-mono-d text-[11px] tracking-[0.2em] text-amberx">DB-AC-2026 · SPECIMEN</p>
          <p className="mt-2 font-bold text-ink">DBJ-L3-2026-0142 · Certified</p>
          <div className="barcode mt-3 h-9 w-40 text-ink-soft" aria-hidden />
          <p className="font-mono-d mt-2 text-[10px] text-ink-faint">talent.digitalburj.com/verify/…</p>
        </div>
        <div>
          <SectionHead index="09" kicker="Digital Burj Academy" title={<>Build the people who build the future.</>} lede="Learn → Build → Break → Fix → Prove → Work. Twenty-three courses, one evidence wallet, verified capability — not watch history." />
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/academy">Explore Academy</Button>
            <Button href="/talent" variant="outline">See Talent</Button>
          </div>
        </div>
      </section>

      {/* 11 ECOSYSTEM */}
      <section className="border-t border-hair bg-void/40">
        <div className="container-db py-10">
          <p className="font-mono-d text-center text-[11px] tracking-[0.22em] text-ink-faint">ONE ECOSYSTEM · ACADEMY → TALENT → JOBS</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[
              ["digitalburj.com", "Umbrella"],
              ["academy", "Learning"],
              ["studio", "Product builds"],
              ["business", "SME systems"],
              ["talent", "Verification"],
              ["jobs", "Opportunities"],
            ].map(([d, r]) => (
              <div key={d} className="rounded-xl border border-hair bg-panel px-3 py-3 text-center">
                <p className="font-mono-d text-[11px] font-bold leading-snug text-ink">{d}</p>
                <p className="mt-1 text-xs text-ink-soft">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 FINAL CTA */}
      <section className="container-db max-w-4xl py-14 sm:py-20">
        <Reveal>
          <SectionHead index="10" kicker="Final word" title={<>Ready to build what&apos;s next?</>} />
        </Reveal>
        <div className="mt-8"><CTASection eyebrow="Start" title="Tell us the problem. We'll engineer the system." description="Fixed scope, written quote, reply within 24 hours. No hype, no 50-service menu." /></div>
        <div className="mt-12"><Faq /></div>
      </section>
    </>
  );
}
