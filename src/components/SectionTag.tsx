export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-hair bg-panel/70 px-3.5 py-1.5 font-mono-d text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-soft backdrop-blur-sm">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-cobalt" style={{ animation: "pulseRing 2.6s ease-out infinite", boxShadow: "0 0 8px rgba(77,232,255,0.8)" }} />
      {children}
    </span>
  );
}