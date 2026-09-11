import { ArrowUpRight } from "lucide-react";

const COLS = [
  { h: "Learn", links: [["Academy", "/academy"], ["Journal", "/journal"], ["Certification L1–L5", "/talent"], ["Global Careers", "/global-careers"]] },
  { h: "Build", links: [["Startup Studio", "/studio"], ["Business AI", "/business-ai"], ["Services", "/services"], ["Method", "/projects"], ["Skills index", "/skills"]] },
  { h: "Work & Grow", links: [["Talent", "/talent"], ["Jobs", "/jobs"], ["Community", "/community"], ["About", "/about"], ["Contact", "/contact"]] },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-paper">
      <div className="container-db py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/db-lockup-transparent.svg" alt="DigitalBurj — Learn, Build, Work, Grow, Go Global" width={400} height={123} className="h-auto w-full max-w-[340px]" loading="lazy" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/70">
              A skills, technology and talent practice. Courses, builds, certification — one record of proof.
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-paper/50">
              Certificates describe assessed skills only. No guaranteed jobs, visas, or licences unless formally established.
            </p>
            <a href="mailto:hello@digitalburj.com" className="font-mono-d mt-4 inline-block text-sm font-semibold text-gold">
              hello@digitalburj.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.h}>
                <h4 className="font-mono-d mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{c.h}</h4>
                <ul className="flex flex-col gap-2.5">
                  {c.links.map(([label, href]) => (
                    <li key={href + label}>
                      <a href={href} className="text-sm text-paper/75 hover:text-paper hover:underline">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-paper/20 pt-6 font-mono-d text-xs text-paper/50 sm:flex-row sm:items-center">
          <span>© {year} DIGITALBURJ · DUBAI, U.A.E.</span>
          <a href="/contact" className="inline-flex items-center gap-1 font-semibold text-gold">
            BOOK AN INTRO CALL <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
