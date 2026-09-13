"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/Reveal";

const ENV_ACADEMY = process.env.NEXT_PUBLIC_ACADEMY_URL || "";

// Same-origin by default (/platform/* proxied to the Academy app). Full-URL override
// only for split-domain production.
function academyUrl(path: string) {
  if (ENV_ACADEMY) return `${ENV_ACADEMY}${path}`;
  if (typeof window !== "undefined") return `/platform${path}`;
  return `/platform${path}`;
}

export function AcademyLink({ path, children, className }: { path: string; children: React.ReactNode; className?: string }) {
  const [href, setHref] = useState(ENV_ACADEMY ? `${ENV_ACADEMY}${path}` : `/platform${path}`);
  useEffect(() => {
    setHref(academyUrl(path));
  }, [path]);
  return <a href={href} className={className}>{children}</a>;
}

export function StudioIntakeForm() {
  const [f, setF] = useState({ name: "", email: "", idea: "", stage: "idea", budget: "unknown" });
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);
  const inp = "w-full rounded-xl border border-hair bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch(`${academyUrl("/api/studio/inquiries")}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMsg(`Received — inquiry #${data.id}. We review every idea personally and reply within 3 working days.`);
        setF({ name: "", email: "", idea: "", stage: "idea", budget: "unknown" });
      } else {
        setMsg(data.error || "Something went wrong — email hello@digitalburj.com instead.");
      }
    } catch {
      setMsg("The intake desk is unreachable right now — email hello@digitalburj.com instead.");
    }
    setBusy(false);
  }

  return (
    <Reveal>
      <form onSubmit={submit} className="card-tower grid gap-4 rounded-3xl p-8">
        <h2 className="font-display text-2xl font-bold text-ink">Pitch the idea — validation starts here</h2>
        <p className="-mt-2 text-sm text-fg-muted">Goes straight to the Studio review queue. No spam, no auto-drip — a human reads it.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} required placeholder="Your name" className={inp} />
          <input value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} required type="email" placeholder="you@company.com" className={inp} />
        </div>
        <textarea value={f.idea} onChange={(e) => setF({ ...f, idea: e.target.value })} required rows={4}
          placeholder="The idea in a few sentences: who pays, for what, why now? (30+ characters)" className={inp} />
        <div className="grid gap-4 sm:grid-cols-2">
          <select value={f.stage} onChange={(e) => setF({ ...f, stage: e.target.value })} className={inp} aria-label="Stage">
            <option value="idea">Stage: just an idea</option>
            <option value="validated">Stage: validated with customers</option>
            <option value="mvp">Stage: MVP exists</option>
            <option value="revenue">Stage: earning revenue</option>
          </select>
          <select value={f.budget} onChange={(e) => setF({ ...f, budget: e.target.value })} className={inp} aria-label="Budget">
            <option value="unknown">Budget: not sure yet</option>
            <option value="<10k">Budget: under AED 10k</option>
            <option value="10-50k">Budget: AED 10–50k</option>
            <option value="50k+">Budget: AED 50k+</option>
          </select>
        </div>
        <button disabled={busy} className="w-fit rounded-xl bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-paper disabled:opacity-50">
          {busy ? "Sending…" : "Submit for review"}
        </button>
        {msg && <p role="status" className="text-sm font-semibold text-ink">{msg}</p>}
      </form>
    </Reveal>
  );
}
