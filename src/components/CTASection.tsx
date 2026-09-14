import { Button } from "@/components/Button";

export function CTASection({
  eyebrow = "Next step",
  title = "Have an idea worth testing?",
  description = "Tell us what you're trying to build or fix — we'll reply within 24 hours with an honest read on scope, cost, and what not to do.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-12 sm:py-14">
      <div className="relative overflow-hidden rounded-2xl border border-hair bg-panel-deep/90 px-6 py-16 text-center backdrop-blur-sm sm:px-16">
        <div aria-hidden className="blueprint absolute inset-0" />
        <div aria-hidden className="bg-horizon pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/70 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-0 vignette" style={{ backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 0%, transparent 30%, rgba(5,8,16,0.7) 100%)" }} />
        <div className="relative">
          <div className="font-mono-d text-[12px] font-semibold uppercase tracking-[0.16em] text-cobalt">{eyebrow}</div>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-balance text-3xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl [text-shadow:0_0_36px_rgba(77,232,255,0.18)]">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" className="px-8 py-3.5">Start a project</Button>
            <a href="/projects" className="text-sm font-semibold text-ink-soft underline decoration-cobalt decoration-2 underline-offset-8 transition-colors hover:text-cobalt">
              Read the method first
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}