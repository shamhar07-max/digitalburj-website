import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { AcademyLink } from "@/components/AcademyBridge";

export const metadata: Metadata = {
  title: "Jobs — Real Work, Earned",
  description: "Client projects and employer roles. Candidates never pay for jobs. Shortlists carry verified evidence. No placement guarantees.",
};

export default function Jobs() {
  return (
    <>
      <PageHero tag="jobs.digitalburj.com" title={<>Opportunity meets demonstrated capability.</>} sub="Two boards: supervised Client Projects from our Studio, and External Jobs clearly labelled by employer. Performance decides eligibility." />
      <section className="container-db grid gap-6 py-12 md:grid-cols-2">
        <Reveal>
          <div className="card-tower rounded-3xl p-8"><h2 className="font-display text-xl font-bold text-ink">Client Projects</h2><p className="mt-2 text-sm text-fg-muted">Paid tasks from Studio/Business delivery — site fixes, automation ops, lead-gen support. Contracted, supervised, reviewed. Best performers graduate to L5 and retainers.</p></div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="card-tower rounded-3xl p-8"><h2 className="font-display text-xl font-bold text-ink">External Jobs + Global</h2><p className="mt-2 text-sm text-fg-muted">Employer roles with evidence packs attached. Global readiness grads get interview prep, not visa promises. <a className="text-amberx underline" href="/global-careers">Read the Global track →</a></p></div>
        </Reveal>
      </section>
      <section className="container-db max-w-4xl pb-20">
        <div className="mb-8 flex justify-center">
          <AcademyLink path="/jobs" className="inline-flex items-center rounded-xl bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-paper">Open the live jobs board →</AcademyLink>
        </div>
        <CTASection />
      </section>
    </>
  );
}
