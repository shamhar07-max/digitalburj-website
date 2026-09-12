"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sticker } from "@/components/decor";

const FLAG = "db-intro-seen-v1";
const DURATION = 3400;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
});

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
            {...rise(0.9)}
          >
            SKILLS TODAY.
            <span className="block">
              OPPORTUNITIES{" "}
              <span className="font-ed font-normal italic text-gold-deep">tomorrow.</span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
            {...rise(1.15)}
          >
            Most people don&apos;t lack ambition — they lack proof. Learn it, build it,
            prove it — then carry the evidence into real work.
          </motion.p>

          <motion.div className="mt-7 flex flex-wrap items-center justify-center gap-2" {...rise(1.35)}>
            {["ACADEMY", "STUDIO", "TALENT", "JOBS", "JOURNAL"].map((s) => (
              <span
                key={s}
                className="rounded-md border border-hair bg-white px-3 py-1.5 font-mono-d text-[11px] font-bold tracking-[0.16em] text-ink-soft shadow-[2px_2px_0_rgba(18,51,42,0.15)]"
              >
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            {...rise(1.55)}
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

          <motion.div className="absolute right-6 top-[12vh] hidden sm:block" {...rise(1.2)}>
            <Sticker />
          </motion.div>

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
