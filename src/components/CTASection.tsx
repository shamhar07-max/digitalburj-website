import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CTASection({
  eyebrow = "Let's build",
  title = "Have an idea worth building?",
  description = "Tell us what you're trying to build or automate — we'll tell you honestly what it takes to ship it.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="container-db py-24 sm:py-32">
      <Reveal>
        <div className="card-glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-[100px]" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-fg sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-fg-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" className="px-8 py-3.5 text-base">
              Start a project
            </Button>
            <Button href="/work" variant="secondary" className="px-8 py-3.5 text-base">
              See our work
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
