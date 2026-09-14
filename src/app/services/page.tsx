import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/lab";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Capabilities — Transform, Build, Intelligence, Automate, Grow, Operate",
  description: "Seven capability groups, one operating method. Digital Burj diagnoses, builds, automates and operates — outcomes, not activities.",
};

const GROUPS: { id: string; n: string; t: string; lede: string; items: string[] }[] = [
{ id: "transform", n: "01", t: "Transform", lede: "Business diagnosis, process redesign, technology strategy. We find what is actually wrong before proposing anything.", items: ["Digital health check", "Automation audit", "Maturity assessment", "Transformation roadmap"] },
{ id: "build", n: "02", t: "Build", lede: "Websites, web apps, mobile apps, SaaS, portals and custom software — engineered to survive users.", items: ["Corporate + service websites", "Web applications & dashboards", "Android / iOS / cross-platform", "SaaS & MVPs", "Legacy modernization"] },
{ id: "intelligence", n: "03", t: "Intelligence", lede: "AI where it creates measurable value. Chatbots to RAG to governed agents — never decoration.", items: ["Website + WhatsApp assistants", "Sales & support agents", "Document intelligence", "Private knowledge (RAG)", "AI governance & evaluation"] },
{ id: "automate", n: "04", t: "Automate", lede: "Automation first; AI where it improves the workflow. Trigger → validate → execute → verify.", items: ["Workflow automation", "API & webhook integrations", "CRM/ERP automation", "Document + approval flows"] },
{ id: "grow", n: "05", t: "Grow", lede: "Search, content and lead systems that compound — SEO, AEO, GEO, social, funnels.", items: ["Technical + local SEO", "Answer-engine visibility", "Content systems", "Lead capture → CRM → follow-up"] },
{ id: "operate", n: "06", t: "Operate", lede: "Maintenance, monitoring, optimization. We don't disappear after launch.", items: ["Managed websites & software", "Managed automation & AI", "Managed CRM/ERP", "Measure → improve → report"] },
{ id: "business-systems", n: "07", t: "Business systems", lede: "CRM, ERP and HRM mapped around how the business actually works.", items: ["Sales pipelines that match reality", "Inventory, purchasing, finance", "Onboarding, leave, documents"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero tag="Capabilities" title={<>Seven groups. One method.</>} sub="Not thirty competing services. Each group below is a doorway into the same operating system: discover → diagnose → design → build → test → launch → improve." chips={["Fixed scope", "Acceptance criteria", "Measured outcomes"]} />
      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="scroll-mt-24 border-b border-hair last:border-b-0">
          <div className="container-db grid gap-6 py-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <Reveal>
              <p className="font-mono-d text-xs font-semibold text-ink-faint">{g.n}</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl" style={{ fontFamily: "var(--font-sora)" }}>
                <a href={`/services/${g.id}`} className="transition-colors hover:text-cobalt">{g.t} →</a>
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">{g.lede}</p>
              <a href={`/services/${g.id}`} className="mt-3 inline-block text-xs font-bold text-cobalt hover:underline">Open detail page →</a>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {g.items.map((item) => (
                <div key={item} className="rounded-xl border border-hair bg-panel px-4 py-3.5 text-sm font-semibold text-ink-soft transition-colors hover:border-cobalt/50 hover:text-ink">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="container-db max-w-4xl pb-20">
        <Reveal>
            <SectionHead index="08" kicker="Not sure which door?" title={<>Start with the problem, not the category.</>} />
        </Reveal>
        <div className="mt-8"><CTASection eyebrow="Discovery" title="Tell us what's wrong. We'll map the rest." description="A short call is enough to route you to Transform, Build, Automate or Grow." /></div>
      </section>
    </>
  );
}
