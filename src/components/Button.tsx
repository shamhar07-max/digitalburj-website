import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "dark" | "outline" | "gold" | "ghost" | "paper";
  className?: string;
  showArrow?: boolean;
};

/** Cinematic buttons — neon signal fills, glass rails, gold currency. */
export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  const base =
    "group relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap active:translate-y-0";
  const variants = {
    primary:
      "bg-cobalt text-[#1a1510] hover:bg-cobalt-deep hover:shadow-[0_0_22px_-8px_rgba(255,107,61,0.55)]",
    dark:
      "border border-hair bg-panel/80 text-ink backdrop-blur-sm hover:border-cobalt/60 hover:bg-panel",
    gold:
      "bg-gold text-[#1a1510] hover:bg-amber-deep hover:shadow-[0_0_22px_-8px_rgba(233,180,76,0.5)]",
    paper:
      "border border-hair bg-panel/70 text-ink backdrop-blur-sm hover:border-cobalt/70",
    outline:
      "border border-cobalt/40 text-cobalt hover:border-cobalt hover:text-ink hover:bg-cobalt/10",
    ghost: "text-ink-soft hover:text-cobalt underline-offset-4 hover:underline",
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}