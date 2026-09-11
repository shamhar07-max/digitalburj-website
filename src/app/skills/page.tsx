import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/content/bank2";

export const metadata: Metadata = {
  title: "Skills Index — Everything We Teach and Ship",
  description: "Websites, AI agents, automation, SEO/AEO/AIO/GEO, social, CRM/ERP/HRM, lead gen, apps, MVPs, transformation. One vocabulary across Academy, Studio and Talent.",
};

export default function Skills() {
  return (
    <>
      <PageHero tag="Index" title={<>Everything we teach. Everything we ship.</>} sub="One vocabulary across Academy, Studio and Talent — so a skill learned is a skill billable. Open any card for its fixed deliverables." chips={["15 capabilities", "Fixed deliverables", "No hourly fog"]} />
      <section className="container-db grid gap-5 py-12 md:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 0.04}>
            <a href="/services" className="group block h-full rounded-2xl border border-hair bg-panel p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyanx/50">
              <div className="flex items-center justify-between">
                <span className="font-mono-d text-xs font-semibold text-ink-faint">CAP.{String(i + 1).padStart(2, "0")}</span>
                <span className="font-mono-d rounded bg-cobalt/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-cobalt">Teach + Ship</span>
              </div>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink group-hover:text-cyanx" style={{ fontFamily: "var(--font-sora)" }}>{s.name}</h2>
              <p className="mt-1.5 text-sm text-ink-soft">{s.tagline}</p>
              <ul className="mt-4 space-y-1.5 border-t border-hair pt-4 text-[13px] text-ink-soft">
                {s.deliverables.map((d) => <li key={d} className="flex gap-2"><span className="text-tealx">—</span>{d}</li>)}
              </ul>
            </a>
          </Reveal>
        ))}
      </section>
      <section className="container-db max-w-4xl pb-20"><div className="mt-2"><CTASection /></div></section>
    </>
  );
}
