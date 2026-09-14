"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { cn } from "@/lib/utils";

/** Tabs — program finder pattern. Glass rail, live tab burns ember. */
export function Tabs<T extends string>({ tabs, active, onChange }: { tabs: { id: T; label: string }[]; active: T; onChange: (t: T) => void }) {
  return (
    <div className="inline-flex flex-wrap gap-1 rounded-xl border border-hair bg-panel-deep/85 p-1 backdrop-blur-sm" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          onClick={() => onChange(t.id)}
          className={cn(
            "rounded-lg px-4 py-2 text-sm font-bold transition-all duration-200",
            active === t.id
              ? "bg-cobalt text-[#1a1510]"
              : "text-ink-soft hover:text-ink hover:bg-hair/20"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** Mount entrance — pure CSS rise ramp, no blur. */
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

/** Counts up when it enters the frame — tabular, gold suffix. */
export function Counter({ value, suffix = "", className = "" }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {inView ? (
        <CountUp to={value} />
      ) : (
        <span className="opacity-0">0</span>
      )}
      <span className="text-foil-gold">{suffix}</span>
    </span>
  );
}

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [to]);
  return <>{n}</>;
}

/** Solar rig — slow ember bead on a dashed orbit, no glow orbs. */
export function OrbitHero({ className = "" }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none select-none", className)} aria-hidden>
      <div className="relative mx-auto h-full w-full">
        <div className="absolute inset-0 rounded-full bg-horizon opacity-60" />
        <div className="absolute inset-[14%] rounded-full border border-hair/70" />
        <div className="absolute inset-[26%] rounded-full border border-hair-soft" />
        <div className="absolute inset-[40%] rounded-full bg-cobalt/10" />
        <div className="animate-bead absolute inset-[26%] rounded-full">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt shadow-[0_0_12px_rgba(255,107,61,0.55)]" />
        </div>
      </div>
    </div>
  );
}