import { SectionTag } from "@/components/SectionTag";
import { VenueScene } from "@/components/Scene";

export function PageHero({ tag, title, sub, editorial, chips }: { tag: string; title: React.ReactNode; sub: string; editorial?: string; chips?: string[] }) {
  return (
    <section className="aurora relative overflow-hidden border-b border-hair">
      <VenueScene variant="slim" />
      <div className="container-db relative pb-12 pt-12 sm:pt-16">
        <div className="mb-6 flex gap-1.5" aria-hidden>
          <span className="h-1.5 w-14 rounded-full bg-cobalt" />
          <span className="h-1.5 w-8 rounded-full bg-cyanx" />
          <span className="h-1.5 w-8 rounded-full bg-viol" />
          <span className="h-1.5 w-8 rounded-full bg-amberx" />
          <span className="h-1.5 w-8 rounded-full bg-tealx" />
        </div>
        <SectionTag>{tag}</SectionTag>
        <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{sub}</p>
        {editorial && <p className="font-ed mt-5 text-xl italic text-gold-deep sm:text-2xl">{editorial}</p>}
        {chips && (
          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-lg border border-hair bg-panel px-3 py-1.5 font-mono-d text-[11px] font-medium tracking-wide text-ink-soft">{c}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
