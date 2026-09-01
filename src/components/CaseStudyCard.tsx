import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="card-glass group relative flex flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
    >
      <div className={cn("relative h-36 w-full overflow-hidden bg-gradient-to-br", study.color)}>
        <div className="absolute inset-0 bg-bg/40 transition-opacity duration-300 group-hover:bg-bg/25" />
        <div className="grid-fade absolute inset-0 opacity-40" />
        <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {study.status}
        </span>
        <span className="absolute bottom-4 left-5 font-display text-2xl font-bold text-white drop-shadow-sm sm:text-3xl">
          {study.name}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-faint">
          {study.category}
        </span>
        <p className="text-sm leading-relaxed text-fg-muted">{study.tagline}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-semibold text-fg">
          View case study
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
          />
        </div>
      </div>
    </Link>
  );
}
