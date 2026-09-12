"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** TiltStage — pointer-driven 3D tilt for hero collages. Desktop pointers only. */
export function TiltStage({ children, className = "", max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg)");

  function onMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT(`perspective(1200px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onMouseLeave={() => setT("perspective(1200px) rotateX(0deg) rotateY(0deg)")}
      className={cn("[transform-style:preserve-3d]", className)}
      style={{ transform: t, transition: "transform 0.25s ease-out" }}
    >
      {children}
    </div>
  );
}

/** Magnetic — primary CTA follows the cursor slightly. */
export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState("translate(0px, 0px)");

  function onMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.12;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.18;
    setT(`translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`);
  }

  return (
    <div ref={ref} onPointerMove={onMove} onMouseLeave={() => setT("translate(0px, 0px)")}
      className={cn("inline-block", className)} style={{ transform: t, transition: "transform 0.2s ease-out" }}>
      {children}
    </div>
  );
}
