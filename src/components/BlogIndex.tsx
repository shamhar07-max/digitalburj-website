"use client";

import { useMemo, useState } from "react";
import { BLOG } from "@/content/compose";

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
      <p className="font-mono-d mt-4 text-xs uppercase tracking-[0.14em] text-ink-faint">{list.length} articles</p>
      <div className="mt-4 grid gap-3">
        {list.map((p) => (
          <a key={p.slug} href={`/journal/${p.slug}`} className="group rounded-xl border border-hair bg-panel p-4 transition-all hover:-translate-y-0.5 hover:border-cobalt">
            <div className="flex flex-wrap items-center gap-2 font-mono-d text-[11px] uppercase tracking-[0.12em] text-ink-faint">
              <span className="font-semibold text-cobalt">{p.cat}</span>
              <span>{p.date}</span><span>·</span><span>{p.reading} min</span>
            </div>
            <h2 className="mt-1.5 font-bold leading-snug text-ink group-hover:text-cobalt">{p.title}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-ink-soft">{p.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
