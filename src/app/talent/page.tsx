import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Talent — Prove What You Can Do",
  description: "L1 Foundation to L5 Professional certification with verifiable IDs, evidence wallets, supervised projects. Eligible for opportunities by performance — never sold.",
};

const LEVELS = [
  ["L1 — Foundation", "Understands fundamentals. Quiz + vocabulary passed."],
  ["L2 — Job Ready", "Performs defined tasks in realistic scenarios. Simulation graded."],
  ["L3 — Certified Professional", "Passes a published Digital Burj assessment. ID verifiable online."],
  ["L4 — Project Experience", "Completes supervised project work. Supervisor sign-off, dates, tasks on record."],
  ["L5 — Digital Burj Professional", "Consistent delivery and professionalism across real work. Invited to lead."],
];

export default function Talent() {
  return (
    <>
      <PageHero tag="talent.digitalburj.com" title={<>Capability backed by evidence.</>} sub="Certificates here describe exactly what was assessed — with an ID anyone can verify. Experience records only cover supervised work actually completed." />
      <section className="container-db grid gap-5 py-12 md:grid-cols-2 lg:grid-cols-3">
        {LEVELS.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.05}>
            <div className="card-tower h-full rounded-3xl p-7">
              <h2 className="font-display text-xl font-bold text-ink">{t}</h2>
              <p className="mt-2 text-sm text-fg-muted">{d}</p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-amberx/40 bg-amberbg p-7">
            <h2 className="font-display text-xl font-bold text-ink">Verify an ID</h2>
            <p className="mt-2 text-sm text-fg-muted">Employers check <span className="font-mono text-amberx">talent.digitalburj.com/verify/[id]</span>. No ID, no claim.</p>
          </div>
        </Reveal>
      </section>
      <section className="container-db max-w-4xl pb-20">
        <Reveal>
          <div className="rounded-3xl border border-hair p-7 text-sm leading-relaxed text-fg-muted">
            Policy in plain words: training completion and competency certification are different documents. We never sell experience letters, licences, visa eligibility, or job guarantees. Wording used: <em>eligible for consideration for Digital Burj projects based on performance and availability.</em>
          </div>
        </Reveal>
        <div className="mt-8 flex justify-center"> <Button href="/academy">Earn it in the Academy</Button></div>
        <div className="mt-10"><CTASection /></div>
      </section>
    </>
  );
}
