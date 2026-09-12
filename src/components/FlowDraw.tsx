"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * FlowDraw — the proof flow draws itself once when visible.
 * The single sanctioned scroll-triggered moment on the site.
 */
const LINES = [
  "M8 14 H232",
  "M8 52 H140",
  "M8 90 H200",
  "M8 128 H110",
];

export function FlowDraw() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 240 142" className="h-auto w-full" fill="none" aria-hidden>
      {LINES.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke={i === 1 ? "#D9481C" : i === 2 ? "#0B6B4F" : "#0E7C6B"}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 5"
          initial={reduce ? false : { pathLength: 0, opacity: 0.2 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.3 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      {[
        [232, 14], [140, 52], [200, 90], [110, 128],
      ].map(([x, y], i) => (
        <motion.circle
          key={`${x}-${y}`}
          cx={x} cy={y} r="4"
          fill={i === 1 ? "#D9481C" : i === 2 ? "#0B6B4F" : "#0E7C6B"}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 1.2 + i * 0.35, duration: 0.35 }}
          style={{ transformOrigin: `${x}px ${y}px` }}
        />
      ))}
    </svg>
  );
}
