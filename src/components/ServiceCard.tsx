import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";
import { iconMap } from "@/components/icon-map";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, big = false }: { service: Service; big?: boolean }) {
  const Icon = iconMap[service.icon];
  return (
    <Link
      href={`/services#${service.slug}`}
      className={cn(
        "card-glass group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1",
        big ? "min-h-[280px] sm:col-span-2" : "min-h-[220px]"
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo/0 blur-3xl transition-all duration-500 group-hover:bg-indigo/20"
        aria-hidden
      />
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-soft bg-surface-2 text-gold">
          {Icon && <Icon size={20} />}
        </span>
        <ArrowUpRight
          size={18}
          className="text-fg-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold group-hover:opacity-100"
        />
      </div>
      <div className="mt-8">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-faint">
          {service.pillar}
        </span>
        <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{service.short}</p>
      </div>
    </Link>
  );
}
