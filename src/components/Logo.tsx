import Link from "next/link";

/** Primary lockup: D/B architectural emblem + wordmark. */
export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={className ?? "flex items-center gap-2.5"} aria-label="DigitalBurj home">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/db-icon-neo.svg" alt="DigitalBurj emblem" width={34} height={34} className="rounded-[9px]" />
      <span className="leading-none">
        <span className={`font-black-d block text-[19px] tracking-tight ${dark ? "text-paper" : "text-ink"}`}>
          DIGITAL<span className={dark ? "text-gold" : "text-gold-deep"}>BURJ</span>
        </span>
        <span className={`font-mono-d mt-1 block text-[10px] tracking-[0.22em] ${dark ? "text-paper/60" : "text-ink-faint"}`}>
          LEARN · BUILD · WORK · GROW
        </span>
      </span>
    </Link>
  );
}
