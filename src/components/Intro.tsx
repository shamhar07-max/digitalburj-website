"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sticker } from "@/components/decor";

const FLAG = "db-intro-seen-v1";
const DURATION = 5200;

const BEATS: [number, string][] = [
  [150, "01 · THE MARK"],
  [1100, "02 · THE NAME"],
  [2000, "03 · THE PROMISE"],
  [2700, "04 · THE PROOF"],
  [3400, "05 · THE DOOR"],
];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
});

function Word({ text, delay, className = "" }: { text: string; delay: number; className?: string }) {
  return (
    <span className={`inline-flex overflow-hidden pb-1 ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: delay + i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
  const [beat, setBeat] = useState(0);

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
    const timers = BEATS.map(([ms,], i) => setTimeout(() => setBeat(i), ms));
    return () => {
      clearTimeout(t);
      timers.forEach(clearTimeout);
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
        className="fixed inset-0 z-[200] overflow-y-auto bg-[#FAF6EE]"
        exit={{ opacity: 0, transition: { duration: 0.45 } }}
        role="dialog"
        aria-label="DigitalBurj intro"
      >
        {/* cinematic bars in brand pine */}
        <motion.div className="absolute inset-x-0 top-0 bg-[#12332A]" initial={{ height: 0 }} animate={{ height: "7vh" }} transition={{ duration: 0.6, ease: "easeOut" }} />
        <motion.div className="absolute inset-x-0 bottom-0 bg-[#12332A]" initial={{ height: 0 }} animate={{ height: "7vh" }} transition={{ duration: 0.6, ease: "easeOut" }} />
        <div className="blueprint absolute inset-0" aria-hidden />

        <div className="relative mx-auto flex min-h-full w-full max-w-3xl flex-col items-center justify-center px-6 py-[10vh] text-center">
          {/* the real site logo, revealed with a cinematic wipe */}
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.4, scale: 0.97 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/db-lockup-blend.svg"
              alt="DigitalBurj — Learn, Build, Work, Grow, Go Global"
              width={520}
              height={156}
              className="h-auto w-[300px] sm:w-[420px]"
              decoding="async"
            />
          </motion.div>

          <motion.h1
            className="font-display mt-7 tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem, 6vw, 3.6rem)", lineHeight: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.3 }}
          >
            <Word text="SKILLS" delay={1.05} />
            <Word text="TODAY." delay={1.3} />
            <span className="block">
              <Word text="OPPORTUNITIES" delay={1.6} />
            </span>
            <span className="font-ed block font-normal italic text-gold-deep">
              <Word text="tomorrow." delay={1.95} />
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
            {...rise(2.55)}
          >
            Most people don&apos;t lack ambition — they lack proof. Learn it, build it,
            prove it — then carry the evidence into real work.
          </motion.p>

          <motion.div className="mt-7 flex flex-wrap items-center justify-center gap-2" {...rise(3.05)}>
            {["ACADEMY", "STUDIO", "TALENT", "JOBS", "JOURNAL"].map((s, i) => (
              <motion.span
                key={s}
                className="rounded-md border border-hair bg-white px-3 py-1.5 font-mono-d text-[11px] font-bold tracking-[0.16em] text-ink-soft shadow-[2px_2px_0_rgba(18,51,42,0.15)]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.1 + i * 0.14, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            {...rise(3.7)}
          >
            <a
              href="/academy"
              onClick={finish}
              className="btn-shine inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-cobalt px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0_#12332A]"
            >
              Start learning →
            </a>
            <a
              href="/contact"
              onClick={finish}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-amberx px-6 py-3 text-sm font-bold text-ink shadow-[4px_4px_0_#12332A]"
            >
              Get something built →
            </a>
          </motion.div>

          <motion.div className="absolute right-6 top-[12vh] hidden sm:block" {...rise(3.3)}>
            <Sticker />
          </motion.div>

          <div className="absolute bottom-[9vh] left-6 sm:left-10" aria-hidden>
            <AnimatePresence mode="wait">
              <motion.p
                key={beat}
                className="font-mono-d text-[11px] font-bold tracking-[0.24em] text-coral"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.3 }}
              >
                {BEATS[beat]?.[1] ?? ""}
              </motion.p>
            </AnimatePresence>
            <div className="mt-2 h-[2px] w-40 overflow-hidden rounded bg-ink/10">
              <motion.div
                className="h-full bg-coral"
                initial={{ width: "0%" }}
                animate={{ width: `${((beat + 1) / BEATS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          <button
            onClick={finish}
            className="font-mono-d absolute bottom-[9vh] right-6 rounded-md border border-hair bg-white px-3 py-1.5 text-[11px] tracking-[0.16em] text-ink-soft transition-colors hover:border-ink hover:text-ink sm:right-10"
          >
            SKIP INTRO →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
