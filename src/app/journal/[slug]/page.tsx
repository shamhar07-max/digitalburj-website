import type { Metadata } from "next";
import { BLOG } from "@/content/compose";
import { DocShell, Para, FaqBlock } from "@/components/Article";

export async function generateStaticParams() {
  return BLOG.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = BLOG.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    keywords: p.keywords,
    openGraph: { title: p.title, description: p.excerpt, type: "article", publishedTime: p.date, modifiedTime: p.updated },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = BLOG.find((x) => x.slug === slug);
  if (!p) return <div className="container-db py-20">Not found.</div>;
  return (
    <DocShell
      crumb={[["Home", "/"], ["Journal", "/journal"], [p.cat, `/journal`]]}
      pills={[p.cat, `${p.reading} min`, p.date.slice(0, 4)]}
      title={p.title}
      excerpt={p.excerpt}
      date={p.date}
      updated={p.updated}
      reading={p.reading}
      related={p.related.map((r) => ({ ...r, base: "/journal" }))}
      jsonld={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            headline: p.title, description: p.excerpt, datePublished: p.date, dateModified: p.updated,
            keywords: p.keywords.join(", "),
            speakableSpecification: { "@type": "SpeakableSpecification", cssSelector: ["#short-answer"] },
            author: { "@type": "Organization", name: "DigitalBurj", url: "https://digitalburj.com" },
          },
          {
            "@type": "FAQPage",
            mainEntity: p.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
          },
        ],
      }}
    >
      <div id="short-answer" className="rounded-2xl border-2 border-ink bg-amberbg p-5 text-[16px] font-semibold leading-relaxed text-ink">
        <span className="mb-2 block text-[11px] font-bold uppercase text-amber-deep">Short answer</span>
        {p.answer}
      </div>
      {p.intro.map((t, i) => <Para key={`i${i}`}>{t}</Para>)}
      {p.why.map((t, i) => <Para key={`w${i}`}>{t}</Para>)}
      <h2 className="pt-2 text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>The working method</h2>
      {p.steps.map((t, i) => <Para key={`s${i}`}>{t}</Para>)}
      <h2 className="pt-2 text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>What usually goes wrong</h2>
      {p.mistakes.map((t, i) => <Para key={`m${i}`}>{t}</Para>)}
      <h2 className="pt-2 text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>Your week, in three moves</h2>
      {p.week.map((t, i) => <Para key={`k${i}`}>{t}</Para>)}
      <h2 className="pt-2 text-2xl font-extrabold tracking-tight text-ink" style={{ fontFamily: "var(--font-sora)" }}>Questions we hear</h2>
      <FaqBlock faq={p.faq} />
    </DocShell>
  );
}
