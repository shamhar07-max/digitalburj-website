import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Business AI — Turn Operations Into Systems",
  description: "SME transformation: websites, technical SEO + AEO/GEO/AIO, WhatsApp + CRM pipelines, HRM/inventory/invoicing systems, AI staff and growth retainers.",
};

const PACKS = [
  ["SME Launch", "Site + Google profile + analytics + speed + contact/WhatsApp + basic CRM. Be findable and reachable in weeks."],
  ["Pipeline", "Lead capture → CRM → WhatsApp follow-up → reminders → owner dashboard. Stop losing enquiries."],
  ["Operations", "HRM, inventory, orders, invoicing, roles. One system instead of five spreadsheets."],
  ["Growth", "Content, social, SEO/GEO visibility, automation and monthly reporting. No rank guarantees — real numbers."],
];

export default function BusinessAI() {
  return (
    <>
      <PageHero tag="Business AI" title={<>Systems that stop money leaking out of your day.</>} sub="We start where revenue actually goes missing — missed calls, slow follow-ups, manual paperwork — and replace it with systems your team will actually use." />
      <section className="container-db grid gap-6 py-12 md:grid-cols-2">
        {PACKS.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.06}>
            <div className="card-tower h-full rounded-3xl p-8">
              <div className="text-xs font-bold text-ink-faint">Pack {i + 1}</div>
              <h2 className="font-display mt-2 text-2xl font-bold text-ink">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted sm:text-base">{d}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="container-db max-w-4xl pb-20">
        <div className="flex justify-center"> <Button href="/contact">Fix my busiest bottleneck</Button></div>
        <div className="mt-10"><CTASection /></div>
      </section>
    </>
  );
}
