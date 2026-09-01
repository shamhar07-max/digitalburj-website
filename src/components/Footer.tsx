import { Logo } from "@/components/Logo";
import { nav, services } from "@/lib/data";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg-soft">
      <div className="container-db grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-muted">
            A UAE-based build partner taking founders from idea to full-stack platform —
            then automating and growing what we build.
          </p>
          <a
            href="mailto:hello@digitalburj.com"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg hover:text-gold"
          >
            <Mail size={16} />
            hello@digitalburj.com
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-fg-muted hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <a href={`/services#${s.slug}`} className="text-sm text-fg-muted hover:text-fg">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-fg-faint">
            Based in the UAE
          </h4>
          <p className="flex items-start gap-2 text-sm text-fg-muted">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            Building for founders and SMEs across Dubai, Abu Dhabi, Sharjah &amp; beyond.
          </p>
          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-deep"
          >
            Book an intro call
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-db flex flex-col items-center justify-between gap-3 py-6 text-xs text-fg-faint sm:flex-row">
          <span>© {year} DigitalBurj. All rights reserved.</span>
          <span>Build. Automate. Grow.</span>
        </div>
      </div>
    </footer>
  );
}
