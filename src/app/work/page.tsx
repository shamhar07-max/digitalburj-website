import type { Metadata } from "next";
import { SectionTag } from "@/components/SectionTag";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from DigitalBurj: Loadbyton, VelozTrade, UPEX, ImamCollective, Skill Bridge, and AttestChain — real platforms built end-to-end.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-24">
        <GradientBackdrop variant="hero" />
        <div className="container-db">
          <Reveal className="flex justify-center">
            <SectionTag>Our work</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-8 max-w-3xl text-center font-display text-4xl font-semibold leading-tight text-fg sm:text-6xl">
              Platforms we&apos;ve taken from{" "}
              <span className="text-gradient-gold">idea to production.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base text-fg-muted sm:text-lg">
              A logistics marketplace, a CFD trading platform, a procurement exchange, an
              e-commerce and affiliate platform, and two ventures in active development —
              each built with real infrastructure, not throwaway demos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-db">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <CaseStudyCard study={study} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        eyebrow="Your venture next"
        title="Ready to see your idea on this page?"
        description="We take on a limited number of builds at a time so every one gets the same level of attention as these."
      />
    </>
  );
}
