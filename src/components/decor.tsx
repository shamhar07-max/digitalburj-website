"use client";

import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/** Capability ticker band. */
export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("overflow-hidden border-y-2 border-ink bg-cobalt py-2.5", className)} aria-hidden>
      <div className="animate-marquee-x flex w-max items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-mono-d text-xs font-semibold uppercase tracking-[0.2em] text-white">
            {t} <span className="text-amberx">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Rotating stamp badge — evidence seal. */
export function Sticker({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative h-28 w-28", className)} aria-hidden>
      <svg viewBox="0 0 112 112" className="animate-spin-slower h-full w-full">
        <defs>
          <path id="sticker-circle" d="M56,56 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
        </defs>
        <circle cx="56" cy="56" r="54" fill="#12332A" />
        <circle cx="56" cy="56" r="54" fill="none" stroke="#E8721C" strokeWidth="1.5" strokeDasharray="4 3" />
        <text fontSize="11.5" fontWeight="700" letterSpacing="2.5" fill="#FAF6EE" fontFamily="monospace">
          <textPath href="#sticker-circle">EVIDENCE FIRST • DB-LAB • DUBAI •</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <BadgeCheck size={30} className="text-[#E8721C]" />
      </div>
    </div>
  );
}

/** Hero console stack: specimen ticket + system status + sign-off, taped and tilted. */
export function ConsoleStack() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] pb-10 pr-4 pt-6">
      <div className="animate-floaty-late absolute right-0 top-0 w-[62%] rounded-2xl border-2 border-ink bg-white p-4 shadow-[6px_6px_0_rgba(18,51,42,0.18)]" style={{ "--tilt": "3deg", transform: "rotate(3deg)" } as React.CSSProperties}>
        <p className="font-mono-d text-[10px] tracking-[0.2em] text-ink-faint">FIG.01 — LIVE SYSTEM</p>
        <div className="mt-2 space-y-1.5">
          {[
            ["ACADEMY", "12 programs live", "bg-tealx"],
            ["STUDIO", "3 builds in motion", "bg-amberx"],
            ["TALENT", "L1–L5 verifying", "bg-cobalt"],
          ].map(([t, d, dot]) => (
            <div key={t as string} className="flex items-center justify-between gap-2 rounded-lg border border-hair bg-lab px-2.5 py-1.5">
              <span className="font-mono-d text-[10px] font-bold tracking-[0.12em] text-ink">{t}</span>
              <span className="flex items-center gap-1.5 text-[10px] text-ink-soft">
                <span className={`kpi-dot inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
                {d}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between font-mono-d text-[10px] text-ink-faint"><span>5 TRACKS</span><span className="font-semibold text-tealx">● SYNCED</span></div>
      </div>
      <div className="animate-floaty relative w-[82%] rounded-2xl border-2 border-ink bg-white shadow-[8px_8px_0_#12332A]" style={{ "--tilt": "-2deg", transform: "rotate(-2deg)" } as React.CSSProperties}>
        <div className="tape absolute -top-3 left-8 h-6 w-20 -rotate-6" aria-hidden />
        <div className="flex items-center justify-between rounded-t-[14px] bg-amberx px-5 py-2.5">
          <span className="font-mono-d text-[11px] font-bold tracking-[0.18em] text-[#171204]">SPECIMEN · L3 CERTIFIED</span>
          <BadgeCheck size={17} className="text-[#171204]" />
        </div>
        <div className="px-5 py-4">
          <p className="font-mono-d text-[11px] text-ink-faint">CREDENTIAL NO.</p>
          <p className="font-display text-xl font-extrabold tracking-tight text-ink">DBJ-L3-2026-0142</p>
          <div className="mt-3 space-y-1.5 text-[13px] text-ink-soft">
            <p>— Simulation recorded &amp; graded</p>
            <p>— Task file + supervisor sign-off</p>
          </div>
          <div className="mt-4 flex items-end justify-between gap-4 border-t-2 border-dashed border-hair pt-3">
            <div className="barcode h-9 w-36 text-ink" aria-hidden />
            <span className="font-mono-d text-[10px] font-semibold text-tealx">● VERIFIED</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-6 rounded-xl border-2 border-ink bg-tealx px-4 py-2.5 text-white shadow-[4px_4px_0_#12332A]" style={{ transform: "rotate(2deg)" }}>
        <p className="font-mono-d text-[10px] tracking-[0.16em] opacity-80">ASSESSMENT QUEUE</p>
        <p className="font-display text-sm font-extrabold">14 graded this week</p>
      </div>
      <div className="animate-floaty absolute -bottom-4 left-2 w-[58%] rounded-xl border-2 border-ink bg-white px-4 py-3 shadow-[5px_5px_0_rgba(217,72,28,0.35)]" style={{ "--tilt": "-3deg", transform: "rotate(-3deg)" } as React.CSSProperties}>
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono-d text-[10px] tracking-[0.16em] text-ink-faint">REVIEWER SIGN-OFF</p>
          <span className="font-mono-d rounded-full bg-tealx/15 px-2 py-0.5 text-[10px] font-bold text-tealx">● APPROVED</span>
        </div>
        <p className="mt-1.5 text-[13px] font-bold text-ink">“Solid reasoning. Authz correctly placed.”</p>
        <div className="mt-2 flex items-center justify-between border-t border-dashed border-hair pt-2">
          <span className="font-mono-d text-[10px] text-ink-faint">R. AHMED · REVIEWER</span>
          <span className="font-display text-sm font-extrabold text-ink">88<span className="text-ink-faint">/100</span></span>
        </div>
      </div>
      <Sticker className="absolute -left-2 -top-4" />
    </div>
  );
}

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
            active === t.id ? "bg-cobalt text-white shadow-[0_4px_16px_-4px_rgba(11,107,79,0.7)]" : "text-ink-soft hover:text-ink"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** Credential chip with barcode — evidence artifact. */
export function CredChip() {
  return (
    <div className="overflow-hidden rounded-2xl border border-hair bg-panel">
      <div className="flex items-center justify-between bg-amberx px-5 py-2.5">
        <span className="font-mono-d text-[11px] font-bold tracking-[0.18em] text-[#171204]">SPECIMEN · L3 CERTIFIED</span>
        <BadgeCheck size={17} className="text-[#171204]" />
      </div>
      <div className="px-5 py-4">
        <p className="font-mono-d text-[11px] text-ink-faint">CREDENTIAL NO.</p>
        <p className="font-display text-xl font-extrabold tracking-tight text-ink">DBJ-L3-2026-0142</p>
        <div className="mt-3 flex items-end justify-between gap-4 border-t border-dashed border-hair pt-3">
          <div className="barcode h-9 w-36 text-ink-soft" aria-hidden />
          <span className="font-mono-d text-[10px] font-semibold text-tealx">● VERIFIED</span>
        </div>
      </div>
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

/** Static orbit visual (retired) — kept for API compat. */
export function OrbitHero({ className = "" }: { className?: string }) {
  return <div className={className} aria-hidden />;
}
