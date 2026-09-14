import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/lab";
import { Button } from "@/components/Button";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { CAPABILITIES } from "@/lib/capabilities";

export async function generateStaticParams() {
  return CAPABILITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CAPABILITIES.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: `${c.t} — Digital Burj Capabilities`, description: c.lede };
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CAPABILITIES.find((x) => x.slug === slug);
  if (!c) return <div className="container-db py-20">Not found.</div>;
  const others = CAPABILITIES.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero tag="Services" title={<>{c.t}.</>} sub={c.lede} chips={["Fixed scope", "Acceptance criteria", "Measured outcomes"]} />
      <section className="container-db py-12">
        <Reveal>
          <SectionHead index="01" kicker="What's included" title={<>Stated work. Nothing vague.</>} />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {c.includes.map((item, i) => (
            <div key={item.t} className="kpi-edge rounded-2xl border border-hair bg-panel p-6">
              <p className="font-mono-d text-xs font-bold text-cobalt">{c.n}.{i + 1}</p>
              <h2 className="mt-1.5 text-lg font-extrabold text-ink" style={{ fontFamily: "var(--font-sora)" }}>{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="border-y border-hair bg-panel-deep/60">
        <div className="container-db grid gap-6 py-12 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-ink bg-panel p-7">
            <h2 className="font-display text-xl font-extrabold text-ink">What changes afterwards</h2>
            <ul className="mt-4 space-y-2.5">
              {c.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-sm text-ink-soft"><span className="font-bold text-tealx">✓</span>{o}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-hair bg-panel p-7">
            <h2 className="font-display text-xl font-extrabold text-ink">Fair questions</h2>
            <div className="mt-4 space-y-4">
              {c.faq.map(([q, a]) => (
                <div key={q}>
                  <p className="font-bold text-ink">{q}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container-db py-12">
        <Reveal>
          <SectionHead index="02" kicker="Keep exploring" title={<>Adjacent capabilities.</>} />
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-3">
          {others.map((o) => (
            <a key={o.slug} href={`/services/${o.slug}`} className="rounded-xl border border-hair bg-panel px-5 py-3 text-sm font-bold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-cobalt hover:text-ink">
              {o.n} · {o.t} →
            </a>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">Scope this for us</Button>
        </div>
        <div className="mt-10"><Faq /></div>
        <div className="mt-4"><CTASection /></div>
      </section>
    </>
  );
}
