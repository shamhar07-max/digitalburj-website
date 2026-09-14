import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Community — Build In Public",
  description: "Free workshops, build logs, proof posts and hiring calls. The top of the flywheel.",
};

export default function Community() {
  return (
    <>
      <PageHero tag="Community" title={<>Open workshops, build logs, and proof done in public.</>} sub="Weekly build logs, SME before-and-afters, method breakdowns, and open workshops. Free to join; getting noticed takes shown work." />
      <section className="container-db grid gap-6 py-12 md:grid-cols-3">
        {[["Teach", "Short skill tutorials you can apply the same day."], ["Build in public", "What broke, what we changed, what shipped — with the reasoning attached."], ["Opportunities", "Workshops, supervised tasks, hiring calls. Performance-gated."]].map(([t, d]) => (
          <Reveal key={t}><div className="card-tower rounded-3xl p-7"><h2 className="font-display text-xl font-bold text-ink">{t}</h2><p className="mt-2 text-sm text-fg-muted">{d}</p></div></Reveal>
        ))}
      </section>
    </>
  );
}
