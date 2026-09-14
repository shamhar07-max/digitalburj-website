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

/** Editorial hard-shadow buttons with shine sweep. */
export function Button({ href, children, variant = "primary", className, showArrow = true }: ButtonProps) {
  const base =
    "btn-shine group inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap active:translate-y-0";
  const variants = {
    primary: "border-2 border-ink bg-cobalt text-white shadow-[4px_4px_0_#00ADC4] hover:shadow-[6px_6px_0_#00ADC4]",
    dark: "border-2 border-ink bg-navy text-white shadow-[4px_4px_0_rgba(0,224,255,0.28)] hover:shadow-[6px_6px_0_rgba(0,224,255,0.32)]",
    gold: "border-2 border-ink bg-amberx text-[#05060D] shadow-[4px_4px_0_rgba(0,0,0,0.4)] hover:shadow-[6px_6px_0_rgba(0,0,0,0.4)]",
    paper: "border-2 border-cobalt/50 bg-panel-deep text-ink shadow-[4px_4px_0_#FF2ED4] hover:shadow-[6px_6px_0_#FF2ED4]",
    outline: "border-2 border-ink/70 bg-transparent text-ink hover:border-cobalt hover:text-cobalt",
    ghost: "text-ink-soft hover:text-cobalt underline-offset-4 hover:underline",
  };
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}
