import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { AcademyLink } from "@/components/AcademyBridge";

export const metadata: Metadata = {
  title: "Talent — Prove What You Can Do",
  description: "L1 Foundation to L5 Professional certification with verifiable IDs, evidence wallets, supervised projects. Eligible for opportunities by performance — never sold.",
};

export default function Talent() {
  return (
    <>
      <PageHero tag="talent.digitalburj.com" title={<>Capability backed by evidence.</>} sub="Certificates here describe exactly what was assessed — with an ID anyone can verify. Experience records only cover supervised work actually completed." />
      <section className="container-db py-12">
        <div className="overflow-hidden rounded-2xl border border-hair bg-panel">
          <div className="hidden grid-cols-[190px_1fr_1.2fr] gap-4 border-b-2 border-ink bg-panel-deep/60 px-5 py-3 text-[11px] font-bold text-ink-faint sm:grid" aria-hidden>
            <span>Level</span><span>Demonstrates</span><span>Evidence required</span>
          </div>
          {[
            ["L1 · Foundation", "Understands fundamentals.", "Quiz + vocabulary passed, recorded."],
            ["L2 · Job Ready", "Performs defined tasks in realistic scenarios.", "Graded simulation + task file."],
            ["L3 · Certified Professional", "Passes a published assessment.", "Assessment record + verifiable ID."],
            ["L4 · Project Experience", "Completes supervised project work.", "Supervisor sign-off, dates, tasks on record."],
            ["L5 · Digital Burj Professional", "Delivers consistently on real work.", "Delivery history + invitation to lead."],
          ].map(([t, d, e]) => (
            <div key={t} className="grid gap-1.5 border-b border-hair px-5 py-4 last:border-b-0 sm:grid-cols-[190px_1fr_1.2fr] sm:items-baseline sm:gap-4">
              <span className="font-bold text-ink">{t}</span>
              <span className="text-sm text-ink-soft">{d}</span>
              <span className="font-mono-d text-xs leading-relaxed text-ink-faint">{e}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-amberx/40 bg-amberbg p-6">
          <h2 className="font-display text-lg font-bold text-ink">Verify an ID</h2>
          <p className="mt-2 text-sm text-ink-soft">Employers check <span className="font-mono-d text-amber-deep">talent.digitalburj.com/verify/[id]</span>. No ID, no claim.</p>
        </div>
      </section>
      <section className="container-db max-w-4xl pb-20">
        <Reveal>
          <div className="rounded-3xl border border-hair p-7 text-sm leading-relaxed text-fg-muted">
            Policy in plain words: training completion and competency certification are different documents. We never sell experience letters, licences, visa eligibility, or job guarantees. Wording used: <em>eligible for consideration for Digital Burj projects based on performance and availability.</em>
          </div>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/academy">Earn it in the Academy</Button>
          <AcademyLink path="/talent" className="inline-flex items-center rounded-xl border-2 border-ink px-6 py-3 text-sm font-bold text-ink">Open the live directory →</AcademyLink>
        </div>
        <div className="mt-10"><CTASection /></div>
      </section>
    </>
  );
}
