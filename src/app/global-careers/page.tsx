import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Global Careers — Ready For Anywhere",
  description: "Workplace readiness for international roles: English, email/phone, Excel, CRM, CV/LinkedIn, interviews, culture. Preparation only — hiring and visas belong to employers and governments.",
};

export default function Global() {
  return (
    <>
      <PageHero tag="jobs.digitalburj.com/global" title={<>Become useful <span className="text-foil-gold">in any country.</span></>} sub="For 12th-pass and degree holders with no experience: learn how real workplaces operate, practise it, and carry evidence — so you're hireable locally and abroad." editorial="Preparation we control. Visas employers and governments decide." />
      <section className="container-db grid gap-6 py-12 md:grid-cols-2">
        <Reveal>
          <div className="card-tower h-full rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold text-ink">What readiness covers</h2>
            <ul className="mt-4 space-y-2 text-sm text-fg-muted sm:text-base">
              {["Professional communication and workplace English", "Email writing, phone etiquette, customer handling", "Excel and Sheets, CRM usage, reporting", "CV, LinkedIn, interview practice, time management", "Culture: attendance, escalation, teamwork"].map((x) => (
                <li key={x} className="flex gap-2"><span className="text-amberx">-</span><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-tower h-full rounded-3xl p-8">
            <h2 className="font-display text-2xl font-bold text-ink">How jobs connect</h2>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted sm:text-base">Client Projects (supervised, contracted) and External Jobs (clearly labelled employer roles). Candidates never pay for a job. Shortlists go out with evidence packs — assessment scores, practical recordings, supervisor notes — so an employer sees ability, not just a certificate.</p>
            <div className="mt-6"> <Button href="/jobs">Browse opportunities</Button></div>
          </div>
        </Reveal>
      </section>
      <section className="container-db max-w-4xl pb-20"><div className="mt-2"><CTASection /></div></section>
    </>
  );
}
