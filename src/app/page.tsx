import type { Metadata } from "next";
import { ArrowUpRight, ArrowRight, BadgeCheck } from "lucide-react";
import { SectionHead, Pill } from "@/components/lab";
import { Button } from "@/components/Button";
import { Ticker, Sticker, ConsoleStack, HeroMotion, MaskLine } from "@/components/decor";
import { TiltStage, Magnetic } from "@/components/Stage";
import { Diorama } from "@/components/Diorama";
import { ChapterRail, NextChapter } from "@/components/Journey";
import { Reveal } from "@/components/Reveal";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { AcademyLink } from "@/components/AcademyBridge";
import { SERVICES } from "@/content/bank2";

export const metadata: Metadata = {
  title: "Skills Today. Opportunities Tomorrow.",
  description: "DigitalBurj is a skills, technology and talent practice — Academy courses, startup Studio builds, SME Business AI systems, verified Talent certification and Global career readiness.",
};

const INDEX = [
  { n: "01", name: "Academy", desc: "Digital skills and workplace programs that end in assessed, showable work.", href: "/academy", tag: "LEARN" },
  { n: "02", name: "Studio", desc: "Founder MVPs: validate in a week, ship the smallest usable version in weeks.", href: "/studio", tag: "BUILD" },
  { n: "03", name: "Business AI", desc: "Websites, CRM pipelines and automation for SMEs that lose enquiries.", href: "/business-ai", tag: "SYSTEMISE" },
  { n: "04", name: "Talent", desc: "L1–L5 certification with verifiable IDs and evidence wallets.", href: "/talent", tag: "PROVE" },
  { n: "05", name: "Jobs & Global", desc: "Supervised client work and employer roles. Readiness, no visa promises.", href: "/jobs", tag: "EARN" },
];

export default function Home() {
  return (
    <>
      <Ticker items={["Academy", "Studio", "Business AI", "Talent", "Jobs & Global", "Journal", "Learn — Build — Work — Grow"]} />

      {/* PROLOGUE */}
      <ChapterRail />
      <section id="prologue" className="aurora relative overflow-hidden border-b border-hair scroll-mt-24">
        <div className="blueprint absolute inset-0" aria-hidden />
        <div className="grain pointer-events-none absolute inset-0" aria-hidden />
        <Diorama className="container-db relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="absolute inset-0 flex items-stretch justify-end overflow-hidden" aria-hidden>
            <div className="mr-[-40px] hidden w-[38%] flex-col justify-center gap-2 border-l-2 border-dashed border-hair pl-6 font-mono-d text-[10px] leading-[2.2] tracking-[0.14em] text-ink-faint lg:flex">
              <span>SYS.DB-2026 // NOMINAL</span>
              <span>TRACKS ............ 05/05</span>
              <span>PROGRAMS ......... 12 LIVE</span>
              <span>CERT ............. L1–L5</span>
              <span>REPLY ............ ≤24H</span>
            </div>
          </div>
          <div data-depth="10">
            <HeroMotion delay={0.05}>
            <h1 className="font-display mt-2 tracking-tight text-ink" style={{ fontSize: "clamp(2.6rem, 6.4vw, 5rem)", lineHeight: 0.98 }}>
              <MaskLine>SKILLS TODAY.</MaskLine>
              <MaskLine delay={0.12}>OPPORTUNITIES <span className="font-ed font-normal italic text-gold-deep">tomorrow.</span></MaskLine>
            </h1>
            </HeroMotion>
            <HeroMotion delay={0.25}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Most people don&apos;t lack ambition — they lack <span className="marker-amber px-1 font-semibold text-ink">proof</span>. We teach practical skills,
              build real products alongside you, test what you can actually do, and introduce
              capable people to real work. Plain terms, written criteria, stated limits.
            </p>
            </HeroMotion>
            <HeroMotion delay={0.33}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic><Button href="/academy" className="cta-glow">Start learning</Button></Magnetic>
              <Magnetic><Button href="/contact" variant="gold">Get something built</Button></Magnetic>
            </div>
            </HeroMotion>
            <HeroMotion delay={0.41}>
            <dl className="mt-9 grid max-w-xl grid-cols-3 divide-x divide-hair border-y border-hair font-mono-d">
              {[["12", "Role programs"], ["L1–L5", "Cert levels"], ["24h", "First reply"]].map(([v, k]) => (
                <div key={k} className="px-4 py-3.5 first:pl-0">
                  <dd className="font-display text-2xl font-extrabold text-ink">{v}</dd>
                  <dt className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-ink-faint">{k}</dt>
                </div>
              ))}
            </dl>
            </HeroMotion>
          </div>
          <div data-depth="28">
          <TiltStage className="relative">
            <ConsoleStack />
          </TiltStage>
          </div>
        </Diorama>
      </section>

      {/* ACT I — DOORS */}
      <section id="doors" className="container-db scroll-mt-24 py-14 sm:py-20">
        <Reveal>
          <SectionHead index="01" kicker="Index — what we do" title={<>Five doors. One record of proof.</>} lede="Every track feeds the same evidence wallet: what you learned, what you built, what was verified." />
        </Reveal>
        <div className="mt-8 border-t-2 border-ink">
          {INDEX.map((r) => (
            <a key={r.n} href={r.href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b-2 border-ink py-5 transition-colors hover:bg-panel-deep sm:gap-8 sm:py-6">
              <span className="font-mono-d pl-1 text-sm font-semibold text-coral">{r.n}</span>
              <span className="min-w-0">
                <span className="font-display block text-balance text-2xl font-extrabold tracking-tight text-ink group-hover:text-cobalt sm:text-4xl">
                  {r.name} <span className="font-ed ml-2 align-middle text-lg font-normal italic text-gold-deep sm:text-2xl">{r.tag}</span>
                </span>
                <span className="mt-1 block max-w-xl text-sm text-ink-soft">{r.desc}</span>
              </span>
              <ArrowRight size={26} className="shrink-0 text-ink transition-all group-hover:translate-x-1 group-hover:text-coral" />
            </a>
          ))}
        </div>
        <NextChapter href="#levels" label="Certification" />
      </section>

      {/* ECOSYSTEM — live doors into the platform */}
      <section className="border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db py-10">
          <p className="font-mono-d text-center text-[11px] tracking-[0.22em] text-ink-faint">ONE ECOSYSTEM · ENTER THROUGH ANY DOOR</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
            <AcademyLink path="/courses" className="kpi-edge group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="font-mono-d text-[11px] font-bold leading-snug text-ink group-hover:text-cobalt">Learn →</p>
              <p className="mt-1 text-xs text-ink-soft">Courses & missions</p>
            </AcademyLink>
            <AcademyLink path="/talent" className="kpi-edge group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="font-mono-d text-[11px] font-bold leading-snug text-ink group-hover:text-cobalt">Prove →</p>
              <p className="mt-1 text-xs text-ink-soft">Verified talent</p>
            </AcademyLink>
            <AcademyLink path="/jobs" className="kpi-edge group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="font-mono-d text-[11px] font-bold leading-snug text-ink group-hover:text-cobalt">Earn →</p>
              <p className="mt-1 text-xs text-ink-soft">Live jobs board</p>
            </AcademyLink>
            <a href="/studio" className="kpi-edge group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="font-mono-d text-[11px] font-bold leading-snug text-ink group-hover:text-cobalt">Build →</p>
              <p className="mt-1 text-xs text-ink-soft">Studio intake</p>
            </a>
            <AcademyLink path="/projects" className="kpi-edge group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="font-mono-d text-[11px] font-bold leading-snug text-ink group-hover:text-cobalt">Run →</p>
              <p className="mt-1 text-xs text-ink-soft">Client portal</p>
            </AcademyLink>
            <a href="/journal" className="kpi-edge group rounded-xl border border-hair bg-panel px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-cobalt">
              <p className="font-mono-d text-[11px] font-bold leading-snug text-ink group-hover:text-cobalt">Read →</p>
              <p className="mt-1 text-xs text-ink-soft">500 field guides</p>
            </a>
          </div>
          <p className="mt-4 text-center text-sm text-ink-soft">Learn → Build → Work → Grow → Go Global. One login across courses, missions and evidence — <AcademyLink path="/register" className="font-bold text-cobalt hover:underline">create it here</AcademyLink>.</p>
        </div>
      </section>

      {/* ACT II — LEVELS */}
      <section id="levels" className="scroll-mt-24 border-b-2 border-ink bg-amberbg/70">
        <div className="container-db grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <SectionHead index="02" kicker="Certification" accent="text-amber-deep" title={<>A certificate that lists what was tested.</>} lede="Five levels with published criteria. Experience records only for supervised work actually completed — dates, tasks, supervisor on file." />
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/talent" variant="dark">How certification works</Button>
              <Button href="/academy" variant="outline">Browse programs</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[8px_8px_0_#12332A]">
            <div className="flex items-center justify-between bg-amberx px-5 py-2.5">
              <span className="font-mono-d text-[11px] font-bold tracking-[0.18em] text-ink">SPECIMEN · L3 CERTIFIED</span>
              <BadgeCheck size={17} className="text-ink" />
            </div>
            <div className="px-5 py-4">
              <p className="font-mono-d text-[11px] text-ink-faint">CREDENTIAL NO.</p>
              <p className="font-display text-xl font-extrabold tracking-tight text-ink">DBJ-L3-2026-0142</p>
              <div className="mt-3 flex items-end justify-between gap-4 border-t-2 border-dashed border-hair pt-3">
                <div className="barcode h-9 w-36 text-ink" aria-hidden />
                <span className="font-mono-d text-[10px] font-semibold text-tealx">● VERIFIED</span>
              </div>
            </div>
          </div>
          <NextChapter href="#work" label="The proof" />
        </div>
      </section>

      {/* SKILLS */}
      <section className="container-db py-14 sm:py-20">
        <Reveal>
          <SectionHead index="03" kicker="What we teach & ship" title={<>Fifteen capabilities. Each one billable.</>} lede="One vocabulary across Academy, Studio and Talent — a skill learned here is a skill delivered here." />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.04}>
              <a href="/services" className="group block h-full rounded-2xl border border-hair bg-panel p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyanx hover:shadow-[0_16px_40px_-16px_rgba(217,72,28,0.4)]">
                <p className="font-mono-d text-[11px] tracking-[0.18em] text-ink-faint">CAP.{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-2 text-xl font-extrabold tracking-tight text-ink group-hover:text-cobalt">{s.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{s.tagline}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center text-sm text-ink-soft">Plus workplace tracks — sales, service, admin, hospitality, retail, logistics and more. <a href="/academy" className="font-bold text-cobalt hover:underline">See the Academy →</a></p>
        </Reveal>
      </section>

      {/* PROOF */}
      <section id="work" className="scroll-mt-24 border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db grid gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="font-mono-d text-xs font-semibold uppercase tracking-[0.24em] text-coral">04 / From idea → production</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.98] tracking-tight text-ink sm:text-5xl">
              Proof, not promises: <span className="font-ed font-normal italic text-gold-deep">Loadbyton.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
              A logistics technology platform engineered from the ground up. Shippers post loads.
              Verified carriers bid. Escrow holds the money through pickup, transit and delivery —
              releasing on confirmation or timed auto-release, with dispute freezing and a full
              admin console standard.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Marketplace", "Escrow ledger", "Verification", "Disputes", "Realtime", "Admin console", "Database", "Cloud", "Testing"].map((t) => (
                <span key={t} className="rounded-md border border-hair bg-panel px-2.5 py-1 font-mono-d text-[11px] text-ink-soft">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border-2 border-ink bg-panel p-7 shadow-[6px_6px_0_#12332A]">
            <p className="font-mono-d text-[10px] tracking-[0.2em] text-ink-faint">SIMPLIFIED FLOW</p>
            <div className="mt-2 font-mono-d text-[12px] leading-[2] text-ink-soft">
              <p>POST_LOAD <span className="text-ink-faint">→</span> VERIFY_CARRIER</p>
              <p>BID <span className="text-ink-faint">→</span> AWARD <span className="text-ink-faint">→</span> <span className="font-bold text-amber-deep">ESCROW_HOLD</span></p>
              <p>PICKUP <span className="text-ink-faint">→</span> TRANSIT <span className="text-ink-faint">→</span> POD_UPLOAD</p>
              <p>CONFIRM <span className="text-ink-faint">→</span> <span className="font-semibold text-tealx">PAYOUT_RELEASE</span> <span className="text-ink-faint">/</span> DISPUTE_FREEZE</p>
            </div>
            <p className="font-mono-d mt-4 text-[10px] tracking-[0.2em] text-ink-faint">EVERY STEP AUDITED · EVERY ROLE GATED</p>
          </div>
        </div>
      </section>

      {/* LAB */}
      <section className="container-db py-14 sm:py-20">
        <Reveal>
          <SectionHead index="04" kicker="Digital Burj Lab" title={<>Company + lab + studio.</>} lede="Experiments running inside the practice. Active systems ship to clients; experimental ones stay in the lab until they earn it." />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="overflow-hidden rounded-2xl border-2 border-ink bg-panel">
            {[["AI Agents", "ACTIVE", "text-tealx"], ["Automation Engine", "ACTIVE", "text-tealx"], ["Vision System", "EXPERIMENTAL", "text-amber-deep"], ["Voice Interface", "EXPERIMENTAL", "text-amber-deep"], ["Business OS", "RESEARCH", "text-cobalt"]].map(([t, s, c]) => (
              <div key={t as string} className="flex items-center justify-between gap-4 border-b border-hair px-5 py-4 last:border-b-0">
                <span className="font-bold text-ink">{t}</span>
                <span className={`font-mono-d rounded-full border border-hair px-3 py-1 text-[11px] font-bold ${c}`}>● {s}</span>
              </div>
            ))}
          </div>
          <div className="grid content-start gap-5 sm:grid-cols-3">
            {[
              ["500", "+", "Journal guides", "2019 → 2026, maintained"],
              ["15", "", "Capabilities", "Each teachable + billable"],
              ["05", "", "Cert levels", "L1–L5, written criteria"],
            ].map(([v, s, k, d]) => (
              <div key={k as string} className="kpi-edge rounded-2xl border border-hair bg-panel p-6">
                <p className="font-display leading-none text-ink" style={{ fontSize: "clamp(2rem, 3.4vw, 2.6rem)" }}>{v}<span className="text-foil-gold">{s}</span></p>
                <p className="mt-2 text-sm font-bold text-ink">{k}</p>
                <p className="mt-1 text-[13px] text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="/contact" className="btn-shine inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-cobalt px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0_#12332A] transition-all duration-200 hover:-translate-y-0.5">
              Put us to the test <span aria-hidden>→</span>
            </a>
            <NextChapter href="#finale" label="Answers" />
          </div>
        </div>
      </section>

      {/* PRACTICE NOTE */}
      <section className="border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db grid gap-6 py-12 lg:grid-cols-[auto_1fr] lg:items-center">
          <span className="font-mono-d inline-flex w-fit rounded-lg bg-coral px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">Practice note</span>
          <div>
            <p className="font-ed max-w-3xl text-xl italic leading-snug text-ink sm:text-2xl">
              “AI-assisted. Human-directed. Engineered for reality — most ideas don&apos;t die from
              lack of code, they die from building the wrong thing at full price.”
            </p>
            <p className="font-mono-d mt-3 text-xs uppercase tracking-[0.18em] text-ink-faint">— DigitalBurj operating principle · Dubai</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="finale" className="container-db max-w-4xl scroll-mt-24 py-14 sm:py-20">
        <Reveal>
          <SectionHead index="05" kicker="Straight answers" title={<>Asked often, answered plainly.</>} />
        </Reveal>
        <div className="mt-8"><Faq /></div>
        <div className="mt-12"><CTASection /></div>
      </section>
    </>
  );
}
