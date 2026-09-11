"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navPrimary, navMore } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative rounded-md px-1 py-2 text-[13px] font-semibold text-ink-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-cobalt",
        active && "text-ink"
      )}
    >
      {label}
      <span className={cn(
        "absolute -bottom-0.5 left-1 right-1 h-[2px] rounded bg-gradient-to-r from-cobalt to-cyanx transition-all duration-200",
        active ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
      )} />
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const inMore = navMore.some((i) => i.href === pathname);

  return (
    <>
      <div className="border-b border-hair bg-void text-white">
        <div className="container-db flex items-center justify-between py-1.5 font-mono-d text-[11px] tracking-[0.14em]">
          <span className="text-ink-faint">DB-LAB · DUBAI — U.A.E.</span>
          <span className="hidden sm:inline text-ink-faint">ACADEMY · STUDIO · TALENT</span>
          <span className="animate-pulse-dot inline-flex items-center gap-1.5 font-semibold text-tealx">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            ACCEPTING Q4
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-hair bg-lab/85 backdrop-blur-xl">
        <div className="container-db flex h-[68px] items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {navPrimary.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            ))}
            <div className="group relative" >
              <button
                className={cn(
                  "flex items-center gap-1 rounded-md px-1 py-2 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-cobalt",
                  inMore ? "text-ink" : "text-ink-soft group-hover:text-ink"
                )}
                aria-haspopup="true"
                aria-expanded="false"
              >
                More <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute right-0 top-full w-56 translate-y-1 pt-2 opacity-0 transition-all duration-200 focus-within:visible focus-within:translate-y-0 focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-hair bg-panel shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)]">
                  {navMore.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-2.5 text-[13px] font-semibold text-ink-soft transition-colors hover:bg-white/[0.05] hover:text-ink",
                        pathname === item.href && "text-cyanx"
                      )}
                    >
                      {item.label}
                      <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-40" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="/contact" className="font-mono-d text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft transition-colors hover:text-cyanx">
              Client login
            </a>
            <a
              href="/contact"
              className="btn-shine inline-flex items-center gap-1.5 rounded-xl bg-cobalt px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_24px_-8px_rgba(77,107,255,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cobalt-deep"
            >
              Start a project <ArrowUpRight size={15} />
            </a>
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-hair bg-panel text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-hair bg-panel/95 backdrop-blur-xl lg:hidden">
            <nav className="container-db flex flex-col py-3" aria-label="Mobile">
              <p className="font-mono-d px-2 pb-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-ink-faint">Main</p>
              {[...navPrimary].map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-semibold text-ink-soft hover:bg-white/5 hover:text-ink">
                  {item.label}
                </a>
              ))}
              <p className="font-mono-d px-2 pb-1 pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-faint">More</p>
              {navMore.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-[15px] text-ink-soft hover:bg-white/5 hover:text-ink">
                  {item.label}
                </a>
              ))}
              <a href="/contact" className="mb-3 mt-3 rounded-xl bg-cobalt px-5 py-3 text-center text-sm font-bold text-white">Start a project</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
