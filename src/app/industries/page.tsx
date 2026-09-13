import type { Metadata } from "next";
import { Store, Truck, GraduationCap, Briefcase } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sectors DigitalBurj serves: SME operations, logistics and marketplaces, education and training, professional services — with real operating proof, not stock claims.",
};

const sectors = [
  {
    icon: Store,
    title: "SME operations",
    problems: ["Manual WhatsApp-and-spreadsheet workflows", "No CRM, no pipeline visibility", "Website that doesn't bring work"],
    proof: "Business AI systems, CRM builds, automation playbooks in the Journal.",
    href: "/services/automate",
  },
  {
    icon: Truck,
    title: "Logistics & marketplaces",
    problems: ["Quote-to-cash without a system", "Settlement disputes with no evidence trail", "Marketplace trust and compliance"],
    proof: "Loadbyton — our own freight marketplace with escrow ledger and hash-chained audit trail.",
    href: "/work",
  },
  {
    icon: GraduationCap,
    title: "Education & training",
    problems: ["Courses that teach but never verify", "No proof-of-work for employers", "Training disconnected from real jobs"],
    proof: "DigitalBurj Academy — build-break-verify loop with evidence records and talent export.",
    href: "/academy",
  },
  {
    icon: Briefcase,
    title: "Professional services",
    problems: ["Proposals based on guesses, not diagnosis", "Delivery with no acceptance criteria", "No operating visibility for clients"],
    proof: "Our process page documents exactly how engagements run before you sign anything.",
    href: "/process",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero tag="Industries" title={<>Sectors we&apos;ve operated in, <span className="text-foil-gold">not just sold into.</span></>}
        sub="Every sector below connects to something real — a product we run, a platform we operate, or a documented method. No logo walls, no borrowed credibility."
        chips={["Real products", "No logo walls", "Proof linked"]} />

      <section className="container-db py-12">
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {sectors.map((s) => (
            <RevealItem key={s.title}>
              <div className="rounded-2xl border-2 border-ink bg-panel p-7">
              <s.icon size={28} className="text-gold" aria-hidden />
              <h2 className="mt-4 font-display text-2xl font-bold text-ink">{s.title}</h2>
              <ul className="mt-4 space-y-2">
                {s.problems.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-ink-soft">→ {p}</li>
                ))}
              </ul>
              <p className="mt-4 border-t border-ink/10 pt-4 text-sm font-semibold text-ink">{s.proof}</p>
              <a href={s.href} className="mt-2 inline-block text-sm font-bold uppercase tracking-[0.08em] text-cobalt underline-offset-4 hover:underline">
                See the proof →
              </a>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <CTASection
        eyebrow="Your sector"
        title="Don't see your industry? Start with a diagnosis."
        description="If your problem is operational — messy process, missing system, unverified software — the sector matters less than the method. Tell us what's actually happening."
      />
    </>
  );
}
