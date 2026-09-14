import { ArrowUpRight } from "lucide-react";

const COLS = [
  { h: "Solutions", links: [["Transform", "/services/transform"], ["Build", "/services/build"], ["Intelligence", "/services/intelligence"], ["Automate", "/services/automate"], ["Grow", "/services/grow"], ["Operate", "/services/operate"]] },
  { h: "Ecosystem", links: [["Academy", "/academy"], ["Studio", "/studio"], ["Business", "/business-ai"], ["Talent", "/talent"], ["Jobs", "/jobs"]] },
  { h: "Company", links: [["About", "/about"], ["Work", "/#work"], ["Journal", "/journal"], ["Contact", "/contact"]] },
  { h: "Legal", links: [["Privacy", "/legal"], ["Terms", "/legal"], ["Cookies", "/legal"]] },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-ink bg-panel">
      <div className="container-db py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/db-lockup-cyber.svg" alt="DigitalBurj — Learn, Build, Work, Grow, Go Global" width={400} height={120} className="h-auto w-full max-w-[340px]" loading="lazy" />
            <p className="font-mono-d mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-coral">Intelligence. Engineered.</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
              A technology company that understands business problems and builds the technology to solve them.
            </p>
            <a href="mailto:hello@digitalburj.com" className="font-mono-d mt-4 inline-block text-sm font-semibold text-cobalt hover:underline">
              hello@digitalburj.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLS.map((c) => (
              <div key={c.h}>
                <h4 className="font-mono-d mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">{c.h}</h4>
                <ul className="flex flex-col gap-2.5">
                  {c.links.map(([label, href]) => (
                    <li key={href + label}>
                      <a href={href} className="text-sm text-ink-soft hover:text-ink hover:underline">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-hair pt-6 font-mono-d text-xs text-ink-faint sm:flex-row sm:items-center">
          <span>© {year} DIGITALBURJ · DUBAI, U.A.E.</span>
          <a href="/contact" className="inline-flex items-center gap-1 font-semibold text-cobalt hover:underline">
            BOOK AN INTRO CALL <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
