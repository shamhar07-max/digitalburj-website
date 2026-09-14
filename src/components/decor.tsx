"use client";

import { cn } from "@/lib/utils";

/** Still useful primitives. Fake-ticket, console-stack and marquee decorations have been removed. */

/** Tabs — program finder pattern. */
export function Tabs<T extends string>({ tabs, active, onChange }: { tabs: { id: T; label: string }[]; active: T; onChange: (t: T) => void }) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-xl border border-hair bg-panel-deep p-1" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          onClick={() => onChange(t.id)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold transition-colors",
            active === t.id ? "bg-cobalt text-white" : "text-ink-soft hover:text-ink"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** Mount entrance — pure CSS, paints with first frame, zero JS cost. */
export function HeroMotion({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="hero-in" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

/** Mask-line reveal for display titles — CSS only. */
export function MaskLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span className={cn("block overflow-hidden pb-[0.09em] -mb-[0.09em]", className)}>
      <span className="mask-line-inner block" style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

/** Solid counter — final number rendered, tabular. Zero JS. */
export function Counter({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  return (
    <span className={cn("tabular-nums", className)}>
      {value}
      <span className="text-foil-gold">{suffix}</span>
    </span>
  );
}

/** Retired decorative visual — kept for API compat, renders nothing. */
export function OrbitHero({ className = "" }: { className?: string }) {
  return <div className={className} aria-hidden />;
}