"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navPrimary, navSolutions, navEcosystem } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

function Drop({ label, items, active }: { label: string; items: { label: string; href: string }[]; active: boolean }) {
  return (
    <div className="group relative">
      <button
        className={cn(
          "flex items-center gap-1 rounded-md px-1 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors focus-visible:outline-2 focus-visible:outline-cobalt",
          active ? "text-ink underline decoration-gold decoration-2 underline-offset-4" : "text-ink-soft group-hover:text-ink"
        )}
        aria-haspopup="true"
      >
        {label} <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full w-56 translate-y-1 pt-2 opacity-0 transition-all duration-200 focus-within:visible focus-within:translate-y-0 focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="overflow-hidden rounded-xl border-2 border-ink bg-panel shadow-[5px_5px_0_rgba(18,51,42,0.2)]">
          {items.map((item) => (
            <a
              key={item.href + item.label}
              href={item.href}
              className="block px-4 py-2.5 text-[13px] font-semibold text-ink-soft transition-colors hover:bg-panel-deep hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const solActive = navSolutions.some((i) => pathname === i.href.split("#")[0]);
  const ecoActive = navEcosystem.some((i) => i.href === pathname);

  return (
    <>
      <div className="bg-amberx text-[#171204]">
        <div className="container-db flex items-center justify-between py-1.5 font-mono-d text-[11px] tracking-[0.14em]">
          <span>DUBAI — U.A.E.</span>
          <span className="hidden sm:inline">INTELLIGENCE. ENGINEERED.</span>
          <span className="inline-flex items-center gap-1.5 font-bold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#171204]" />
            TAKING Q4 PROJECTS
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
        <div className="container-db flex h-[68px] items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {navPrimary.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href}
                className={cn("rounded-md px-1 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4",
                  pathname === item.href ? "text-ink underline decoration-gold decoration-2 underline-offset-4" : "text-ink-soft")}>
                {item.label}
              </a>
            ))}
            <Drop label="Solutions" items={navSolutions} active={solActive} />
            <Drop label="Ecosystem" items={navEcosystem} active={ecoActive} />
            {navPrimary.slice(3).map((item) => (
              <a key={item.href} href={item.href}
                className={cn("rounded-md px-1 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4",
                  pathname === item.href ? "text-ink underline decoration-gold decoration-2 underline-offset-4" : "text-ink-soft")}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="/contact"
              className="btn-shine inline-flex items-center gap-1.5 rounded-lg border-2 border-ink bg-navy px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] text-paper shadow-[4px_4px_0_#D9481C] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#D9481C]"
            >
              Start a project <ArrowUpRight size={15} />
            </a>
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="max-h-[70vh] overflow-y-auto border-t-2 border-ink bg-paper lg:hidden">
            <nav className="container-db flex flex-col py-3" aria-label="Mobile">
              <p className="font-mono-d px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-ink-faint">Menu</p>
              {navPrimary.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-bold uppercase tracking-[0.06em] text-ink-soft hover:bg-panel-deep hover:text-ink">
                  {item.label}
                </a>
              ))}
              <p className="font-mono-d px-2 pb-1 pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-faint">Solutions</p>
              {navSolutions.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-ink-soft hover:bg-panel-deep hover:text-ink">
                  {item.label}
                </a>
              ))}
              <p className="font-mono-d px-2 pb-1 pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-faint">Ecosystem</p>
              {navEcosystem.map((item) => (
                <a key={item.href + item.label} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-ink-soft hover:bg-panel-deep hover:text-ink">
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="my-4 rounded-lg bg-navy px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.06em] text-paper">Start a project</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
