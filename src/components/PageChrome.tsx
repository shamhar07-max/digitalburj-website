"use client";
import { motion, useScroll, useSpring } from "motion/react";

export function PageChrome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[90] h-[2.5px] origin-left bg-gradient-to-r from-cobalt via-viol to-gold"
        style={{ scaleX, boxShadow: "0 0 18px rgba(77,232,255,0.6)" }}
      />
      <div aria-hidden className="film-grain z-[80]" style={{ position: "fixed", inset: 0 }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[1] bg-cy-glow opacity-60" />
    </>
  );
}