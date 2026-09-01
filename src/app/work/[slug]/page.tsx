import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: study.name,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-14 sm:pt-24">
        <GradientBackdrop variant="hero" />
        <div className="container-db">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-fg"
            >
              <ArrowLeft size={16} />
              All work
            </Link>
          </Reveal>

          <Reveal delay={0.06} className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-fg-muted">
              {study.category}
            </span>
            <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
              {study.status}
            </span>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-fg sm:text-6xl">
              {study.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-fg-muted">{study.tagline}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-fg-faint">
              <MapPin size={15} />
              {study.region}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div
              className={cn(
                "relative mt-12 h-56 w-full overflow-hidden rounded-[2rem] bg-gradient-to-br sm:h-72",
                study.color
              )}
            >
              <div className="grid-fade absolute inset-0 opacity-40" />
              <div className="absolute inset-0 bg-bg/25" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-db grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-fg">Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">{study.summary}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-fg">The problem</h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">{study.problem}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-fg">Our approach</h2>
              <p className="mt-4 text-base leading-relaxed text-fg-muted">{study.approach}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-fg">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {study.highlights.map((h) => (
                  <li
                    key={h}
                    className="card-glass rounded-2xl p-4 text-sm leading-relaxed text-fg-muted"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="card-glass rounded-3xl p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
                Tech stack
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border-soft bg-surface-2 px-3 py-1.5 text-xs font-medium text-fg-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-border pt-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  Category
                </h3>
                <p className="mt-2 text-sm text-fg">{study.category}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
                  Region
                </h3>
                <p className="mt-2 text-sm text-fg">{study.region}</p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-deep px-6 py-3 text-sm font-semibold text-[#14100a] transition-transform hover:-translate-y-0.5"
              >
                Build something like this
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-bg-soft py-20 sm:py-24">
        <div className="container-db">
          <Reveal className="mb-10">
            <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">
              More from our portfolio
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {otherStudies.map((s) => (
              <Reveal key={s.slug}>
                <Link
                  href={`/work/${s.slug}`}
                  className="card-glass group block rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-gold/40"
                >
                  <span
                    className={cn(
                      "block h-2 w-10 rounded-full bg-gradient-to-r",
                      s.color
                    )}
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted">{s.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
