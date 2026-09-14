export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-md border border-hair bg-panel px-3 py-1.5 text-[13px] font-semibold text-ink-soft">
      <span className="inline-block h-1.5 w-1.5 rounded-[2px] bg-cobalt" />
      {children}
    </span>
  );
}