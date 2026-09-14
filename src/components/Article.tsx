import { Button } from "@/components/Button";
import { Pill } from "@/components/lab";

export function DocShell({
  crumb, pills, title, excerpt, date, updated, reading, children, related, jsonld,
}: {
  crumb: [string, string][]; pills: string[]; title: string; excerpt: string;
  date?: string; updated?: string; reading?: number;
  children: React.ReactNode; related?: { slug: string; title: string; base: string }[];
  jsonld: Record<string, unknown>;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumb.map(([name, item], i) => ({
          "@type": "ListItem", position: i + 1, name, item: `https://digitalburj.com${item}`,
        })),
      }) }} />
      <section className="border-b border-hair bg-panel-deep/50">
        <div className="container-db max-w-4xl py-10">
          <nav className="font-mono-d flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-faint" aria-label="Breadcrumb">
            {crumb.map(([label, href], i) => (
              <span key={href} className="flex items-center gap-2">
                {i > 0 && <span className="text-hair">/</span>}
                <a href={href} className="hover:text-cobalt">{label}</a>
              </span>
            ))}
          </nav>
          <div className="mt-5 flex flex-wrap gap-2">
            {pills.map((p) => <Pill key={p} color="ink">{p}</Pill>)}
          </div>
          <h1 className="mt-5 text-balance text-3xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-[2.75rem]" style={{ fontFamily: "var(--font-sora)" }}>
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft" style={{ borderLeft: "4px solid #FF6BD6", paddingLeft: "1rem" }}>{excerpt}</p>
          {(date || reading) && (
            <p className="font-mono-d mt-5 text-xs uppercase tracking-[0.14em] text-ink-faint">
              {date && <>Published {date}</>}{date && updated && " · "}{updated && <>Updated {updated}</>}{reading && ` · ${reading} min read`}
            </p>
          )}
        </div>
      </section>
      <section className="container-db max-w-3xl py-10">
        <div className="space-y-5 text-[17px] leading-[1.75] text-ink-soft">{children}</div>
        {related && related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-mono-d text-xs font-bold uppercase tracking-[0.2em] text-ink-faint">Keep reading</h2>
            <div className="mt-4 grid gap-3">
              {related.map((r) => (
                <a key={r.slug} href={`${r.base}/${r.slug}`} className="group rounded-xl border border-hair bg-panel p-4 transition-all hover:-translate-y-0.5 hover:border-cobalt">
                  <span className="font-bold text-ink group-hover:text-cobalt">{r.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="mt-12 rounded-2xl border-2 border-ink bg-panel p-7 text-center shadow-[6px_6px_0_#FF6BD6]">
          <p className="font-display text-xl font-extrabold text-ink">Want this handled for your business?</p>
          <p className="mt-2 text-sm text-ink-soft">Fixed scope, written quote, reply within 24 hours.</p>
          <div className="mt-5"><Button href="/contact">Talk to us</Button></div>
        </div>
      </section>
    </>
  );
}

export function Para({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

export function FaqBlock({ faq }: { faq: [string, string][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-hair bg-panel">
      {faq.map(([q, a], i) => (
        <details key={i} className="group border-b border-hair last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
            <span className="text-[15px] font-bold text-ink">{q}</span>
            <span className="text-xl font-bold leading-none text-cobalt transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="border-t border-dashed border-hair px-5 py-4 text-[15px] leading-relaxed">{a}</p>
        </details>
      ))}
    </div>
  );
}
