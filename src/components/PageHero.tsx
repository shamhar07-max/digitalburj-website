import { SectionTag } from "@/components/SectionTag";

export function PageHero({ tag, title, sub, editorial, chips }: { tag: string; title: React.ReactNode; sub: string; editorial?: string; chips?: string[] }) {
  return (
    <section className="relative overflow-hidden border-b border-hair">
      <div className="container-db relative pb-12 pt-12 sm:pt-16">
        <SectionTag>{tag}</SectionTag>
        <h1 className="font-display mt-6 max-w-4xl text-balance text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{sub}</p>
        {editorial && <p className="mt-5 max-w-2xl text-lg italic text-gold-deep sm:text-xl">{editorial}</p>}
        {chips && (
          <div className="mt-7 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-lg border border-hair bg-panel px-3 py-1.5 text-xs font-medium text-ink-soft">{c}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}