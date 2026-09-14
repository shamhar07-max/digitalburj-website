import { SectionTag } from "@/components/SectionTag";

export function PageHero({ tag, title, sub, editorial, chips }: { tag: string; title: React.ReactNode; sub: string; editorial?: string; chips?: string[] }) {
  return (
    <section className="relative overflow-hidden border-b border-hair">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-cy-glow opacity-70" />
      <div aria-hidden className="blueprint absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/70 to-transparent" />
      <div className="container-db relative pb-14 pt-14 sm:pt-20">
        <div className="hero-in">
          <SectionTag>{tag}</SectionTag>
        </div>
        <h1 className="font-display mt-7 max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl [text-shadow:0_0_40px_rgba(77,232,255,0.18)]">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{sub}</p>
        {editorial && <p className="mt-5 max-w-2xl text-lg italic text-gold sm:text-xl [text-shadow:0_0_28px_rgba(255,200,87,0.25)]">{editorial}</p>}
        {chips && (
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="rounded-lg border border-hair bg-panel/70 px-3 py-1.5 font-mono-d text-[12px] font-medium uppercase tracking-wider text-ink-soft backdrop-blur-sm">{c}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}