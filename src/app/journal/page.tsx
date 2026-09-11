import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogIndex } from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Journal — 500 Practical Guides (2019–2026)",
  description: "Five hundred plain-spoken guides on websites, AI, automation, SEO, CRM and growth for UAE SMEs — written from real operating experience.",
};

export default function Blog() {
  return (
    <>
      <PageHero
        tag="DB-JOURNAL · Knowledge library"
        title={<>Five hundred guides. Zero fluff.</>}
        sub="Every guide follows the same honest shape: why it matters, a working method, what goes wrong, and three moves for this week. Written for owners, not algorithms."
        chips={["2019 → 2026", "500 articles", "Searchable", "Updated Sep 2026"]}
      />
      <section className="container-db max-w-4xl py-10"><BlogIndex />
        <div className="mt-8 rounded-2xl border border-hair bg-panel p-6 text-sm leading-relaxed text-ink-soft">
          A note on dates: entries carry original publication years (2019–2026) and a site-wide update stamp. Facts, prices and platform details change — where a page matters commercially, we re-verify before quoting from it.
        </div>
      </section>
    </>
  );
}
