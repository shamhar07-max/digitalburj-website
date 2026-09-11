import { SectionTag } from "@/components/SectionTag";
import { cn } from "@/lib/utils";

/** LAB shared primitives — single source for section rhythm, pills and spec rows. */

export function SectionHead({
  index, kicker, title, lede, dark = false, accent = "text-cobalt",
}: { index: string; kicker: string; title: React.ReactNode; lede?: string; dark?: boolean; accent?: string }) {
  return (
    <div className="max-w-3xl">
      <p className={cn("font-mono-d text-xs font-semibold uppercase tracking-[0.22em]", dark ? "text-white/60" : "text-ink-faint")}>
        <span className={accent}>{index}</span>
        <span className={cn("mx-3", dark ? "text-white/25" : "text-hair")}>/</span>
        {kicker}
      </p>
      <h2 className={cn("font-display mt-4 text-balance text-3xl font-extrabold leading-[1.04] tracking-tight sm:text-[2.75rem]", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {lede && <p className={cn("mt-4 max-w-2xl text-base leading-relaxed", dark ? "text-white/70" : "text-ink-soft")}>{lede}</p>}
    </div>
  );
}

export function Pill({ children, color = "cobalt" }: { children: React.ReactNode; color?: "cobalt" | "cyan" | "violet" | "amber" | "teal" | "ink" }) {
  const map: Record<string, string> = {
    cobalt: "border-cobalt/40 bg-cobalt/15 text-[#9db1ff]",
    cyan: "border-cyanx/40 bg-cyanx/10 text-cyanx",
    violet: "border-viol/40 bg-viol/15 text-[#c4b0ff]",
    amber: "border-amberx/40 bg-amberbg text-amberx",
    teal: "border-tealx/40 bg-tealx/10 text-tealx",
    ink: "border-hair bg-white/[0.04] text-ink-soft",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono-d text-[11px] font-semibold uppercase tracking-[0.12em]", map[color])}>
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

/** Spec row: mono label left, value right — the lab table pattern. */
export function SpecRow({ k, v, dark = false }: { k: string; v: React.ReactNode; dark?: boolean }) {
  return (
    <div className={cn("flex items-baseline justify-between gap-6 border-b py-3 last:border-b-0", dark ? "border-white/15" : "border-hair")}>
      <dt className={cn("shrink-0 font-mono-d text-xs uppercase tracking-[0.14em]", dark ? "text-white/50" : "text-ink-faint")}>{k}</dt>
      <dd className={cn("text-right text-sm font-semibold", dark ? "text-white" : "text-ink")}>{v}</dd>
    </div>
  );
}

export function LabCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("card-tower p-7", className)}>{children}</div>;
}

export { SectionTag };
