"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { navSolutions, navEcosystem } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

type Item = { label: string; href: string; desc?: string };

function Drop({ label, items, active }: { label: string; items: Item[]; active: boolean }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const onButtonKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      requestAnimationFrame(() => itemRefs.current[0]?.focus());
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const onItemKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Escape") {
      setOpen(false);
      (rootRef.current?.querySelector("button") as HTMLElement | null)?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      itemRefs.current[(i + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      itemRefs.current[(i - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Tab" && !e.shiftKey && i === items.length - 1) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1 rounded-md px-1 py-2 text-[13px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-cobalt",
          active ? "text-ink underline decoration-cobalt decoration-2 underline-offset-4" : "text-ink-soft hover:text-ink"
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKey}
      >
        {label} <ChevronDown size={14} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      <div className={cn(
        "absolute left-0 top-full w-64 translate-y-1 pt-2 transition-all duration-200",
        open ? "visible translate-y-0 opacity-100" : "invisible opacity-0"
      )}>
        <motion.div
          className="overflow-hidden rounded-xl border border-hair bg-panel-deep/95 p-1 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md"
          role="menu"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {items.map((item, i) => (
            <a
              key={item.href + item.label}
              ref={(el) => { itemRefs.current[i] = el; }}
              href={item.href}
              role="menuitem"
              tabIndex={open ? 0 : -1}
              onKeyDown={(e) => onItemKey(e, i)}
              className="block rounded-lg px-4 py-2.5 transition-colors hover:bg-hair/15 focus-visible:bg-hair/15 focus-visible:outline-none"
            >
              <span className="block text-[13px] font-bold text-ink">{item.label}</span>
              {"desc" in item && item.desc && (
                <span className="mt-0.5 block text-xs font-normal text-ink-soft">{(item as { desc: string }).desc}</span>
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const TOP_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const solActive = navSolutions.some((i) => pathname === i.href.split("#")[0]);
  const ecoActive = navEcosystem.some((i) => i.href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = (active: boolean) =>
    cn(
      "relative rounded-md px-1 py-2 text-[13px] font-bold transition-colors",
      active ? "text-ink" : "text-ink-soft hover:text-ink"
    );

  return (
    <>
      <div className="bg-[#04060c]/80 text-ink-soft">
        <div className="container-db flex items-center justify-between py-1.5 text-xs font-medium">
          <span className="font-mono-d uppercase tracking-[0.18em] text-ink-faint">DXB · Dubai, UAE</span>
          <a href="mailto:hello@digitalburj.com" className="transition-colors hover:text-cobalt">
            hello@digitalburj.com
          </a>
        </div>
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-hair bg-[#050810]/80 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#050810]/40"
        )}
      >
        <div className="container-db flex h-[64px] items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-4 whitespace-nowrap lg:flex xl:gap-5" aria-label="Primary">
            <Drop label="Solutions" items={navSolutions} active={solActive} />
            {TOP_LINKS.map((item) => (
              <a key={item.href} href={item.href} className={linkCls(pathname === item.href)}>
                {pathname === item.href && (
                  <span className="absolute inset-x-1 -bottom-[3px] h-[2px] rounded-full bg-cobalt shadow-[0_0_12px_rgba(77,232,255,0.7)]" />
                )}
                {item.label}
              </a>
            ))}
            <Drop label="Ecosystem" items={navEcosystem} active={ecoActive} />
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="/contact"
              className="btn-shine inline-flex items-center gap-1.5 rounded-lg bg-cobalt px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-cobalt-deep hover:glow-cy"
            >
              Start a project <ArrowUpRight size={15} />
            </a>
          </div>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-hair bg-panel/60 text-ink lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="max-h-[70vh] overflow-y-auto border-t border-hair bg-[#050810]/92 backdrop-blur-xl lg:hidden">
            <nav className="container-db flex flex-col py-3" aria-label="Mobile">
              {TOP_LINKS.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-bold text-ink-soft hover:bg-hair/15 hover:text-ink">
                  {item.label}
                </a>
              ))}
              <p className="px-2 pb-1 pt-4 font-mono-d text-[12px] font-semibold uppercase tracking-widest text-cobalt">Solutions</p>
              {navSolutions.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-ink-soft hover:bg-hair/15 hover:text-ink">
                  {item.label}
                </a>
              ))}
              <p className="px-2 pb-1 pt-4 font-mono-d text-[12px] font-semibold uppercase tracking-widest text-cobalt">Ecosystem</p>
              {navEcosystem.map((item) => (
                <a key={item.href + item.label} href={item.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-ink-soft hover:bg-hair/15 hover:text-ink">
                  {item.label}
                </a>
              ))}
              <a href="/about" onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-ink-soft hover:bg-hair/15 hover:text-ink">
                About
              </a>
              <a href="/contact" className="my-4 rounded-lg bg-cobalt px-5 py-3 text-center text-sm font-bold text-white hover:glow-cy">Start a project</a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}