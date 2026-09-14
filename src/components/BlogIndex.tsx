"use client";

import { useMemo, useState } from "react";
import { BLOG } from "@/content/compose";

// Unique photo per article — deterministic seed, lazy-loaded.
const imgFor = (slug: string) => `https://picsum.photos/seed/db-${slug}/400/300`;

export function BlogIndex() {
  const [q, setQ] = useState("");
  const [year, setYear] = useState("all");
  const years = useMemo(() => [...new Set(BLOG.map((p) => p.date.slice(0, 4)))].sort().reverse(), []);
  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return BLOG.filter((p) =>
      (year === "all" || p.date.startsWith(year)) &&
      (!needle || `${p.title} ${p.excerpt} ${p.cat}`.toLowerCase().includes(needle))
    ).sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [q, year]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search 500 guides — try 'WhatsApp', 'pricing', 'SEO'…"
          className="w-full rounded-xl border border-hair bg-panel px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-cobalt focus:outline-none"
          aria-label="Search articles"
        />
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-xl border border-hair bg-panel px-4 py-3 text-sm font-semibold text-ink focus:border-cobalt focus:outline-none"
          aria-label="Filter by year"
        >
          <option value="all">All years (2019–2026)</option>
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>
      <p className="mt-4 text-xs text-ink-faint">{list.length} articles</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {list.map((p) => (
          <a key={p.slug} href={`/journal/${p.slug}`} className="group flex gap-4 rounded-2xl border border-hair bg-panel p-3 transition-all hover:-translate-y-0.5 hover:border-cobalt hover:shadow-[0_14px_36px_-18px_rgba(27,77,143,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgFor(p.slug)}
              alt=""
              loading="lazy"
              decoding="async"
              width={400}
              height={300}
              className="h-24 w-24 shrink-0 rounded-xl border border-hair bg-panel-deep object-cover sm:h-28 sm:w-28"
            />
            <span className="flex min-w-0 flex-col">
              <span className="flex flex-wrap items-center gap-x-2 text-[11px] text-ink-faint">
                <span className="font-semibold text-cobalt">{p.cat}</span>
                <span>{p.date}</span><span>·</span><span>{p.reading} min</span>
              </span>
              <span className="mt-1 line-clamp-2 font-bold leading-snug text-ink group-hover:text-cobalt">{p.title}</span>
              <span className="mt-1 hidden line-clamp-2 text-[13px] leading-snug text-ink-soft sm:block">{p.excerpt}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
