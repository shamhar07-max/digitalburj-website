const FAQS = [
  { q: "Are you an agency, a course site, or a recruiter?", a: "A practice combining all three, with one rule across them: courses end in assessed work, builds start small and get measured, and introductions to work follow demonstrated performance only." },
  { q: "I have an idea but a small budget. Where do I start?", a: "A one-week validation sprint: buyer, smallest usable version, and a written not-to-build list. Then a fixed-quote build sized so you can afford to be wrong — most founders learn more from that than from six months of planning." },
  { q: "Do your certificates guarantee a job or a visa?", a: "No. Each states exactly what was tested and carries a verifiable ID. Experience records cover supervised work actually completed. Employers and governments make hiring and visa decisions; our job is to make you worth choosing." },
  { q: "How does L1–L5 certification work?", a: "L1 knows the basics. L2 performs tasks in realistic simulations. L3 passes a published assessment. L4 completes supervised project work. L5 delivers consistently on real jobs. Written criteria at every step." },
  { q: "We're an SME. What do you fix first?", a: "The leak: enquiries nobody follows up. Website, messaging, CRM and a follow-up routine — then operations and visibility. Fixed packs, monthly care after, reports in numbers you already use." },
];

export function Faq() {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-ink bg-panel">
      {FAQS.map((f, i) => (
        <details key={i} className="group border-b-2 border-ink/10 last:border-b-0" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-panel-deep/60 [&::-webkit-details-marker]:hidden">
            <span className="flex items-baseline gap-4">
              <span className="font-mono-d rounded-md bg-cobalt/10 px-2 py-0.5 text-xs font-semibold text-cobalt">F.{i + 1}</span>
              <span className="text-[15px] font-bold text-ink">{f.q}</span>
            </span>
            <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-ink text-lg font-bold leading-none text-cyanx transition-transform duration-200 group-open:rotate-45">+</span>
          </summary>
          <p className="border-t-2 border-dashed border-hair bg-lab px-6 py-5 text-sm leading-relaxed text-ink-soft sm:pl-[4.5rem]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
