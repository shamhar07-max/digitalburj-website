"use client";

import { useEffect, useRef } from "react";

/**
 * Diorama — layered parallax hero stage + cursor light.
 * One rAF loop, transform-only, desktop pointers, reduced-motion safe.
 * Children declare depth via `data-depth` (px at full deflection).
 */
export function Diorama({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const layers = useRef<HTMLElement[]>([]);
  const light = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    layers.current = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));

    let tx = 0, ty = 0, cx = 0, cy = 0, lx = 0, ly = 0;
    let raf = 0;
    let lxPx = 0, lyPx = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / Math.max(r.width, 1) - 0.5;
      ty = (e.clientY - r.top) / Math.max(r.height, 1) - 0.5;
      lxPx = e.clientX - r.left;
      lyPx = e.clientY - r.top;
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (document.hidden) return;
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      lx += (lxPx - lx) * 0.12;
      ly += (lyPx - ly) * 0.12;
      for (const l of layers.current) {
        const d = Number(l.dataset.depth || 0);
        l.style.transform = `translate3d(${(cx * d).toFixed(2)}px, ${(cy * d).toFixed(2)}px, 0)`;
      }
      if (light.current) {
        light.current.style.background = `radial-gradient(320px circle at ${lx.toFixed(0)}px ${ly.toFixed(0)}px, rgba(18,51,42,0.08), transparent 70%)`;
      }
    };

    raf = requestAnimationFrame(tick);
    el.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ perspective: "1400px" }}>
      <div ref={light} className="pointer-events-none absolute inset-0 z-10" aria-hidden />
      {children}
    </div>
  );
}
