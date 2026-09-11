import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/lab";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Work — Loadbyton Case Study",
  description: "How Digital Burj engineered Loadbyton: a logistics marketplace with escrow, verification, disputes and audit — problem, approach, system, result.",
};

const TECH = ["Marketplace engine", "Escrow ledger", "Carrier verification", "Bidding + award", "Dispute freezing", "Payout releases", "Audit trail", "Realtime tracking", "Admin console", "SEO + deployment"];

export default function Work() {
  return (
    <>
      <PageHero tag="DB-WORK · Case study" title={<>Built by Digital Burj: Loadbyton.</>} sub="A logistics technology platform for real commercial transport — engineered from idea to production through an AI-assisted workflow with human review at every money-moving step." chips={["Marketplace + escrow", "Verification-gated", "Audit-trailed"]} />
      <section className="container-db grid gap-6 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="card-tower h-full p-7">
            <p className="font-mono-d text-xs font-bold uppercase tracking-[0.2em] text-coral">The problem</p>
            <h2 className="font-display mt-2 text-2xl font-extrabold text-ink">Freight runs on phone calls.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Shippers post loads into WhatsApp groups. Carriers compete on rumor.
              Prices, reliability and payment terms live in chat history — undiscoverable,
              unverifiable, and gone when phones change.
            </p>
            <p className="font-mono-d mt-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">The business</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              A two-sided marketplace charging a transparent take rate — which only works
              if both sides trust pricing, payment and dispute handling.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="card-tower h-full p-7">
            <p className="font-mono-d text-xs font-bold uppercase tracking-[0.2em] text-cobalt">The challenge</p>
            <h2 className="font-display mt-2 text-2xl font-extrabold text-ink">Money must not move wrong.</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Escrow release, payout timing, unverified carriers bidding, disputed deliveries —
              every one of these is a way for funds or trust to leak. The system had to make
              whole classes of failure structurally impossible, not merely unlikely.
            </p>
            <p className="font-mono-d mt-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">The approach</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Validate the smallest tradable loop first (post → bid → award → escrow → deliver →
              payout), then harden money paths with ledger accounting, atomic state claims and
              adversarial review before any scale work.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="border-y-2 border-ink bg-panel-deep/60">
        <div className="container-db py-12">
          <Reveal>
            <SectionHead index="01" kicker="The system" title={<>What was actually built.</>} />
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-2xl border-2 border-ink bg-panel p-7">
              <div className="flex flex-wrap gap-2">
                {TECH.map((t) => (
                  <span key={t} className="rounded-md border border-hair bg-panel-deep px-2.5 py-1 font-mono-d text-[11px] font-semibold text-ink-soft">{t}</span>
                ))}
              </div>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
                <p><span className="font-bold text-ink">Architecture.</span> Monolith API with clear route/service/repository layers, dual-database design (SQLite dev, Postgres production), background workers for payouts and notifications.</p>
                <p><span className="font-bold text-ink">Money.</span> Double-entry ledger with idempotent transactions and a tamper-evident hash chain; escrow releases claimed atomically so concurrent workers can never double-pay.</p>
                <p><span className="font-bold text-ink">Trust.</span> Server-enforced carrier verification gates, role allow-lists on every route, dispute states that freeze payouts, append-only audit log.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-ink bg-panel p-6 font-mono-d text-[12px] leading-[2]">
                <p className="text-[10px] tracking-[0.2em] text-ink-faint">SIMPLIFIED FLOW</p>
                <p className="mt-2">POST_LOAD → VERIFY_CARRIER</p>
                <p>BID → AWARD → <span className="font-bold text-amber-deep">ESCROW_HOLD</span></p>
                <p>POD_UPLOAD → CONFIRM → <span className="font-bold text-tealx">PAYOUT_RELEASE</span></p>
              </div>
              <div className="rounded-2xl border border-hair bg-panel p-6 text-sm leading-relaxed text-ink-soft">
                <p className="font-mono-d text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">Complexity handled</p>
                <p className="mt-2">52-table schema · 200+ endpoints · 30+ automated tests covering concurrency, idempotency and authorization · dual deploy targets · documented disaster-recovery drills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-db grid gap-6 py-12 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl border border-amberx/40 bg-amberbg p-7">
            <h2 className="font-display text-xl font-extrabold text-ink">Result</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              A working marketplace where strangers can trade freight with escrow protection —
              built at validation-scale cost on free-tier infrastructure, with a priced path to
              licensed payment rails and growth hosting when volume justifies it.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="rounded-2xl border border-hair bg-panel p-7">
            <h2 className="font-display text-xl font-extrabold text-ink">What we learned</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Breadth first, then adversarial review of money paths; prune dead code before it
              becomes load-bearing; document limits honestly. That discipline is now the
              Digital Burj delivery standard — see the Method page.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href="/projects">Read the method</Button>
              <Button href="/contact" variant="outline">Discuss a build</Button>
            </div>
          </div>
        </Reveal>
      </section>
      <section className="container-db max-w-4xl pb-20"><div className="mt-2"><CTASection /></div></section>
    </>
  );
}
