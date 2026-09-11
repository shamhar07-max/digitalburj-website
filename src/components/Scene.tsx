"use client";

import { cn } from "@/lib/utils";

/**
 * Cinematic venue scenes — inline SVG, zero network requests, transform-only
 * ambient motion. Used behind heroes: skyline silhouette, orbit ring,
 * twinkling data-points, drifting aurora orbs.
 */
export function VenueScene({ variant = "hero", className = "" }: { variant?: "hero" | "slim"; className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {/* aurora orbs */}
      <div className="animate-drift-a absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full bg-cobalt/25 blur-[110px]" />
      <div className="animate-drift-b absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-viol/20 blur-[110px]" />
      {variant === "hero" && (
        <div className="animate-drift-a absolute bottom-0 left-1/3 h-[300px] w-[520px] rounded-full bg-cyanx/10 blur-[120px]" />
      )}
      {/* architectural grid */}
      <div className="blueprint absolute inset-0 opacity-70" />
      {/* skyline silhouette */}
      <svg className="absolute bottom-0 left-0 h-[38%] w-full" viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" fill="none">
        <path
          d="M0 220 V170 H60 V140 H96 V170 H150 V110 H176 V60 H188 V28 H192 V60 H204 V110 H258 V150 H320 V120 H380 V160 H450 V100 H470 V70 H478 V100 H498 V150 H560 V130 H640 V170 H720 V120 H760 V180 H840 V140 H920 V165 H1000 V125 H1060 V155 H1140 V175 H1200 V220 Z"
          fill="#0A0F22"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
        {[[188, 20], [474, 62], [760, 112], [1000, 117]].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="2.5" fill={i % 2 ? "#38BDF8" : "#D4AF37"} className="animate-pulse-dot" style={{ animationDelay: `${i * 0.5}s` }} />
            <circle cx={x} cy={y} r="7" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          </g>
        ))}
        <line x1="0" y1="219" x2="1200" y2="219" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" />
      </svg>
      {/* orbit ring */}
      {variant === "hero" && (
        <svg className="absolute -right-20 -top-20 h-[340px] w-[340px] opacity-60 sm:h-[440px] sm:w-[440px]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="86" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <g className="animate-spin-slower" style={{ transformOrigin: "100px 100px" }}>
            <ellipse cx="100" cy="100" rx="86" ry="32" stroke="rgba(56,189,248,0.55)" strokeWidth="1.2" strokeDasharray="5 5" transform="rotate(-18 100 100)" />
          </g>
          <ellipse cx="100" cy="100" rx="86" ry="32" stroke="rgba(212,175,55,0.5)" strokeWidth="1.2" transform="rotate(20 100 100)" />
          <circle cx="100" cy="100" r="4" fill="#fff" />
        </svg>
      )}
      {/* film grain */}
      <div className="noise-overlay absolute inset-0 opacity-50" />
    </div>
  );
}
