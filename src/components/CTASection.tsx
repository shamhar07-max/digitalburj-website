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
      <div className="rounded-xl border-2 border-ink bg-panel px-6 py-14 text-center sm:px-16">
        <div className="text-[13px] font-bold text-ink-faint">{eyebrow}</div>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-balance text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" className="px-8 py-3.5">Start a project</Button>
          <a href="/projects" className="text-sm font-semibold text-ink-soft underline decoration-cobalt decoration-2 underline-offset-8 hover:text-cobalt">
            Read the method first
          </a>
        </div>
      </div>
    </section>
  );
}
