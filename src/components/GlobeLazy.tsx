"use client";

import dynamic from "next/dynamic";

const Globe3D = dynamic(() => import("@/components/Globe3D").then((m) => m.Globe3D), {
  ssr: false,
  loading: () => <div className="h-full w-full" aria-hidden />,
});

/** Client boundary for the Three.js globe (SSR-safe). */
export function GlobeLazy({ className = "" }: { className?: string }) {
  return <Globe3D className={className} />;
}
