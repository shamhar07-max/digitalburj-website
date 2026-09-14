"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  { id: "top", label: "Overview" },
  { id: "doors", label: "Practices" },
  { id: "levels", label: "Certification" },
  { id: "work", label: "Proof" },
  { id: "faq", label: "Answers" },
];

/** Chapter rail — orientation dots for the premiere walk. Desktop only. */
export function ChapterRail() {
  const [active, setActive] = useState("prologue");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    const els = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <nav aria-label="Chapters" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
      {CHAPTERS.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          aria-label={c.label}
          aria-current={active === c.id ? "true" : undefined}
          className="group flex items-center justify-end gap-2"
        >
          <span className={cn(
            "text-[11px] font-semibold opacity-0 transition-opacity group-hover:opacity-100",
            active === c.id ? "text-ink opacity-100" : "text-ink-faint"
          )}>
            {c.label}
          </span>
          <span className={cn(
            "block rounded-full transition-all",
            active === c.id ? "h-2.5 w-2.5 bg-coral" : "h-1.5 w-1.5 bg-ink/25 group-hover:bg-ink/60"
          )} />
        </a>
      ))}
    </nav>
  );
}

/** Forward door between acts. */
export function NextChapter({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-10 flex justify-center">
      <a
        href={href}
        className="group inline-flex items-center gap-2 rounded-full border border-hair bg-panel px-5 py-2.5 text-xs font-bold text-ink-soft transition-all hover:-translate-y-0.5 hover:border-ink hover:text-ink"
      >
        Next — {label}
        <span className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
      </a>
    </div>
  );
}
