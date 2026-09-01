import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { SectionTag } from "@/components/SectionTag";
import { GradientBackdrop } from "@/components/GradientBackdrop";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with DigitalBurj — full-stack platforms, SME automation, and growth marketing for the UAE and beyond.",
};

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@digitalburj.com",
    href: "mailto:hello@digitalburj.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "United Arab Emirates",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within one business day",
  },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <GradientBackdrop variant="hero" />
      <div className="container-db">
        <Reveal className="flex justify-center">
          <SectionTag>Contact</SectionTag>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-8 max-w-2xl text-center font-display text-4xl font-semibold leading-tight text-fg sm:text-6xl">
            Let&apos;s build the{" "}
            <span className="text-gradient-gold">next thing.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-center text-base text-fg-muted sm:text-lg">
            Tell us what you&apos;re trying to build, automate, or grow. We&apos;ll reply
            with honest scope, timeline, and next steps.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-6">
            {details.map((d) => (
              <div key={d.label} className="card-glass flex items-start gap-4 rounded-2xl p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-surface-2 text-gold">
                  <d.icon size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-fg-faint">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block text-sm font-medium text-fg hover:text-gold">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-fg">{d.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="card-glass rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-fg-faint">
                Currently taking on
              </p>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                Full-stack product builds, SME automation engagements, and growth
                marketing retainers across the UAE.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
