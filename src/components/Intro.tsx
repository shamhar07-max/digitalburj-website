"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const FLAG = "db-intro-seen-v1";
const SERVICES = ["ACADEMY", "STUDIO", "TALENT", "JOBS", "JOURNAL"];
const DURATION = 4600;

function Emblem() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: (d: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { pathLength: { duration: 1.1, delay: d, ease: [0.22, 1, 0.36, 1] as const }, opacity: { duration: 0.2, delay: d } },
    }),
  };
  return (
    <svg viewBox="0 0 140 140" className="h-24 w-24 sm:h-28 sm:w-28" fill="none" aria-hidden>
      <motion.rect x="4" y="4" width="132" height="132" rx="30"
        stroke="#D4AF37" strokeWidth="1.5" opacity="0.7"
        variants={draw} initial="hidden" animate="show" custom={0.15} />
      <motion.path d="M42 30 C54 28, 80 32, 98 52 C114 70, 115 92, 100 108 C86 120, 58 120, 42 114"
        stroke="url(#introInk)" strokeWidth="5" strokeLinecap="round"
        variants={draw} initial="hidden" animate="show" custom={0.35} />
      <motion.path d="M64 34 L64 108 M58 52 L70 52 M60 74 L68 74 M61 94 L67 94"
        stroke="#FAF6EE" strokeWidth="3" strokeLinecap="round"
        variants={draw} initial="hidden" animate="show" custom={0.7} />
      <motion.ellipse cx="70" cy="72" rx="52" ry="17" stroke="#D9481C" strokeWidth="1.6"
        transform="rotate(-18 70 72)" variants={draw} initial="hidden" animate="show" custom={1.0} />
      <motion.circle cx="70" cy="30" r="3.5" fill="#D9481C"
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }} style={{ transformOrigin: "70px 30px" }} />
      <defs>
        <linearGradient id="introInk" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FAF6EE" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Word({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: delay + i * 0.045, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </span>
  );
}

export function Intro() {
  const reduce = useReducedMotion();
  const [state, setState] = useState<"checking" | "show" | "hide">("checking");

  useEffect(() => {
    if (reduce) { setState("hide"); return; }
    let seen = null;
    try { seen = localStorage.getItem(FLAG); } catch { /* private mode */ }
    const force = window.location.search.includes("intro=1");
    setState(!seen || force ? "show" : "hide");
  }, [reduce]);

  useEffect(() => {
    if (state !== "show") return;
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(finish, DURATION);
    return () => {
      clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function finish() {
    try { localStorage.setItem(FLAG, "1"); } catch { /* ignore */ }
    document.documentElement.style.overflow = "";
    setState("hide");
  }

  if (state !== "show") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#05070A]"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        role="dialog"
        aria-label="DigitalBurj intro"
      >
        {/* letterbox bars */}
        <motion.div className="absolute inset-x-0 top-0 bg-black" initial={{ height: 0 }} animate={{ height: "9vh" }} transition={{ duration: 0.7, ease: "easeOut" }} />
        <motion.div className="absolute inset-x-0 bottom-0 bg-black" initial={{ height: 0 }} animate={{ height: "9vh" }} transition={{ duration: 0.7, ease: "easeOut" }} />
        {/* faint grid */}
        <div className="blueprint absolute inset-0 opacity-60" aria-hidden />

        <Emblem />

        <h1 className="mt-6 text-center leading-none tracking-tight text-white" style={{ fontFamily: "var(--font-black)", fontSize: "clamp(2rem, 7vw, 4.2rem)" }}>
          <Word text="DIGITAL" delay={1.15} />
          <span className="inline-block w-3 sm:w-5" />
          <Word text="BURJ" delay={1.5} className="text-gradient-gold" />
        </h1>

        <motion.p
          className="font-mono-d mt-4 text-[11px] tracking-[0.3em] text-white/55"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.6 }}
        >
          LEARN · BUILD · WORK · GROW · GO GLOBAL
        </motion.p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 px-6">
          {SERVICES.map((s, i) => (
            <motion.span
              key={s}
              className="rounded-md border border-white/20 bg-white/[0.05] px-3 py-1.5 font-mono-d text-[11px] font-bold tracking-[0.18em] text-white/85 backdrop-blur"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 + i * 0.16, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {s}
            </motion.span>
          ))}
        </div>

        {/* light sweep */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
          initial={{ x: "-120%" }}
          animate={{ x: "420%" }}
          transition={{ delay: 2.8, duration: 1.1, ease: "easeInOut" }}
          aria-hidden
        />

        <button
          onClick={finish}
          className="font-mono-d absolute bottom-[11vh] right-6 rounded-md border border-white/25 px-3 py-1.5 text-[11px] tracking-[0.16em] text-white/70 transition-colors hover:border-white/60 hover:text-white sm:right-10"
        >
          SKIP INTRO →
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
