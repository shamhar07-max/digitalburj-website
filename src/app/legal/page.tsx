import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Legal — Privacy, Terms & Cookies",
  description: "How Digital Burj handles data, engagements and cookies. Plain language first; formal documents on request.",
};

const BLOCKS = [
{ t: "Privacy", d: "We collect only what an enquiry, project or course needs: contact details, project information and learning records. Nothing is sold. Marketing contact happens only with consent, and deletion can be requested anytime at hello@digitalburj.com." },
{ t: "Terms of engagement", d: "Work runs on written scope with deliverables, milestones, acceptance criteria and change control. Client accounts (domain, hosting, cloud, ad platforms) stay client-owned. AI-assisted work is verified by a human before delivery. No guaranteed rankings, jobs, visas or revenues — ever." },
{ t: "Cookies", d: "This site uses minimal analytics to understand which pages help visitors. No advertising trackers, no cross-site profiling. Browser settings fully respected." },
];

export default function Legal() {
  return (
    <>
      <PageHero tag="DB-LEGAL" title={<>Plain rules, kept promises.</>} sub="The short version of how we handle data, engagements and cookies. Formal documents available on request." />
      <section className="container-db max-w-3xl py-12">
        <div className="space-y-4">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.t} delay={i * 0.04}>
              <div className="rounded-2xl border border-hair bg-panel p-6">
                <h2 className="text-xl font-extrabold text-ink" style={{ fontFamily: "var(--font-sora)" }}>{b.t}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
