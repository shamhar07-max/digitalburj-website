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

/** Editorial buttons — flat paper surfaces, one signal blue. */
export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap active:translate-y-0";
  const variants = {
    primary: "border border-cobalt bg-cobalt text-white hover:bg-cobalt-deep",
    dark: "border border-ink bg-navy text-paper hover:bg-navy-2",
    gold: "border border-amberx bg-amberbg text-amber-deep hover:border-amber-deep",
    paper: "border border-cobalt/50 bg-panel text-ink hover:border-cobalt",
    outline: "border-2 border-ink text-ink hover:border-cobalt hover:text-cobalt",
    ghost: "text-ink-soft hover:text-cobalt underline-offset-4 hover:underline",
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}
