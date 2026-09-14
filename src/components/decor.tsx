"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { cn } from "@/lib/utils";

/** Tabs — program finder pattern. Glass rail, live tab glows cyan. */
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
              ? "bg-cobalt text-[#050810] glow-cy"
              : "text-ink-soft hover:text-ink hover:bg-hair/20"
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

/** Mount entrance — pure CSS hero ramp with film blur. */
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
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [to]);
  return <>{n}</>;
}

/** Glowing horizon orb — the Dubai skyline's energy bead. */
export function OrbitHero({ className = "" }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none select-none", className)} aria-hidden>
      <div className="relative mx-auto h-full w-full">
        <div
          className="absolute inset-0 rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(77,232,255,0.5), transparent 42%), radial-gradient(circle at 65% 70%, rgba(255,200,87,0.42), transparent 45%), radial-gradient(circle at 50% 50%, rgba(10,18,38,0.9), transparent 70%)",
            filter: "blur(14px)",
          }}
        />
        <div
          className="absolute inset-[16%] rounded-full border border-hair"
          style={{ boxShadow: "0 0 30px rgba(77,232,255,0.35), inset 0 0 26px rgba(255,200,87,0.14)" }}
        />
        <div className="absolute inset-[42%] rounded-full bg-cobalt/60 blur-md" style={{ animation: "pulseRing 3.2s ease-out infinite" }} />
      </div>
    </div>
  );
}

/** Cinematic ticker — duplicated for a seamless loop. */
export function Marquee({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const items = children ? <>{children}</> : null;
  return (
    <div className={cn("marquee-mask overflow-hidden", className)}>
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{items}</div>
        <div className="flex shrink-0 items-center" aria-hidden>{items}</div>
      </div>
    </div>
  );
}

/** 3D hover tilt for glass panels — mild cinematic parallax. */
export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tf, setTf] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTf(`perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-2px)`);
  }
  function onLeave() {
    setTf("perspective(900px) rotateX(0deg) rotateY(0deg)");
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ transform: tf, transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </motion.div>
  );
}