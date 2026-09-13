import type { Metadata } from "next";
import { Search, Compass, PenTool, Hammer, FlaskConical, ShieldCheck, Rocket, LineChart } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How DigitalBurj engagements run: qualify, discover, diagnose, define, design, build, break, verify, review, deploy, operate, improve — with a written definition of done.",
};

const stages = [
  { icon: Search, title: "1. Qualify & Discover", text: "We learn how the business actually runs today — process, stack, pain, constraints, budget, decision makers — before any price is mentioned." },
  { icon: Compass, title: "2. Diagnose & Define", text: "Findings become a written diagnosis: problem, impact, recommended future state, scope, risks, assumptions, acceptance criteria." },
  { icon: PenTool, title: "3. Design & Architect", text: "Architecture and experience are designed against the acceptance criteria, not against trends. Boring technology is preferred where it fits." },
  { icon: Hammer, title: "4. Build", text: "Small increments, working software early, client-visible progress. No big-bang reveals after months of silence." },
  { icon: FlaskConical, title: "5. Break, Secure & Test", text: "We try to break what we built: adversarial checks, security review proportionate to risk, performance and acceptance testing." },
  { icon: ShieldCheck, title: "6. Verify & Review", text: "Someone other than the builder verifies. Verdicts are recorded: verified, verified with conditions, changes required, or not verified." },
  { icon: Rocket, title: "7. Deploy & Handover", text: "Verified deployment, credentials and accounts transferred, team trained, documentation and known limitations handed over in writing." },
  { icon: LineChart, title: "8. Operate & Improve", text: "Monitoring, support, measured outcomes against the original diagnosis — then the next improvement cycle, or a clean close." },
];

const done = [
  "Agreed scope completed",
  "Acceptance criteria satisfied",
  "Tests passed",
  "Security review proportionate to risk",
  "Deployment verified in production",
  "Client acceptance obtained",
  "Documentation and handover complete",
  "Monitoring and support established",
  "Known limitations documented",
  "Evidence stored and assurance verdict recorded",
];

export default function ProcessPage() {
  return (
    <>
      <PageHero tag="How we work" title={<>A project isn&apos;t done <span className="text-foil-gold">when the code exists.</span></>}
        sub="The delivery lifecycle every DigitalBurj engagement follows — and the written definition of done we hold ourselves to before asking for sign-off."
        chips={["Written definition of done", "Independent verification", "Evidence-backed"]} />

      <section className="container-db py-12">
        <RevealGroup className="grid gap-6 md:grid-cols-2">
          {stages.map((s) => (
            <RevealItem key={s.title}>
              <div className="rounded-2xl border-2 border-ink bg-panel p-7">
              <s.icon size={26} className="text-gold" aria-hidden />
              <h2 className="mt-4 font-display text-xl font-bold text-ink">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="container-db pb-20">
        <Reveal className="rounded-2xl border-2 border-ink bg-panel-deep p-8 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Definition of done</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Nothing ships to a client until every item below is true and evidenced. The person
            who built it is never the only person who decides it is good enough.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {done.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm font-semibold text-ink">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-emerald" aria-hidden /> {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTASection
        eyebrow="Start a project"
        title="Bring us a messy problem, not a finished spec."
        description="Tell us what's happening in your business. We'll diagnose first, propose second — and walk away if we're not the right fit."
      />
    </>
  );
}
