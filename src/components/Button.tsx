import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-gold to-gold-deep text-[#14100a] hover:shadow-[0_0_0_1px_rgba(242,193,78,0.4),0_8px_30px_-4px_rgba(242,193,78,0.45)] hover:-translate-y-0.5",
    secondary:
      "bg-surface-2 text-fg border border-border hover:border-indigo/60 hover:bg-surface-2/80 hover:-translate-y-0.5",
    ghost: "text-fg-muted hover:text-fg",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
