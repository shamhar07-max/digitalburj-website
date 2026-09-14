"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const budgets = ["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+", "Not sure yet"];
const interests = [
  "Full-stack product development",
  "Fintech / trading platform",
  "Marketplace or escrow platform",
  "Website development",
  "SME automation (CRM/ERP/AI staff)",
  "AI automation & agents",
  "Social media management",
  "Digital marketing",
  "SEO / AEO / GEO / AIO",
  "Something else",
];

const inputCls =
  "w-full rounded-xl border border-hair bg-panel-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cobalt";
const labelCls = "mb-2 block text-sm font-bold text-ink";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [ref, setRef] = useState<number | null>(null);
  const [sending, setSending] = useState(false);

  function mailtoFallback(name: string, email: string, company: string, interest: string, budget: string, message: string) {
    const body = [
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Interested in: ${interest}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:hello@digitalburj.com?subject=${encodeURIComponent(
      `New project inquiry — ${name}`
    )}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(email)}`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const interest = String(form.get("interest") ?? "");
    const budget = String(form.get("budget") ?? "");
    const message = String(form.get("message") ?? "");
    setSending(true);
    try {
      const base = process.env.NEXT_PUBLIC_ACADEMY_URL || "/platform";
      const res = await fetch(`${base}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, interest, budget, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setRef(data.id);
        setSent(true);
        return;
      }
    } catch {
      // intake desk unreachable → mailto fallback below
    } finally {
      setSending(false);
    }
    mailtoFallback(name, email, company, interest, budget, message);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card-tower flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 size={40} className="text-tealx" />
        <h3 className="font-display text-xl font-extrabold text-ink">
          {ref ? `Received — inquiry #${ref}` : "Your email client should be opening now"}
        </h3>
        {ref && (
          <p className="max-w-md text-sm text-ink-soft">
            Your inquiry is logged in our system and a human reads every one.
            We reply within 3 working days — no auto-drip, no spam.
          </p>
        )}
        <p className="max-w-sm text-sm text-ink-soft">
          If nothing opened, email us directly at{" "}
          <a href="mailto:hello@digitalburj.com" className="font-semibold text-cobalt hover:underline">
            hello@digitalburj.com
          </a>
          .
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm font-semibold text-ink-soft hover:text-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-tower space-y-6 p-7 sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Full name <span aria-hidden>*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="Ahmed Khan" autoComplete="name" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email <span aria-hidden>*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" autoComplete="email" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="company">
          Company (optional)
        </label>
        <input id="company" name="company" type="text" placeholder="Your company" autoComplete="organization" className={inputCls} />
      </div>

      <div>
        <label className={labelCls} htmlFor="interest">
          What are you looking to build?
        </label>
        <select id="interest" name="interest" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Select one
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className={labelCls}>Rough budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b, i) => (
            <label key={b} className="cursor-pointer">
              <input
                type="radio"
                name="budget"
                value={b}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-hair bg-panel-deep px-4 py-2 text-xs font-semibold text-ink-soft transition-colors peer-checked:border-cobalt peer-checked:bg-cobalt/10 peer-checked:text-cobalt peer-focus-visible:outline-2 peer-focus-visible:outline-cobalt">
                {b}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className={labelCls} htmlFor="message">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={20}
          placeholder="What are you trying to build or automate? (20+ characters)"
          className="w-full resize-none rounded-xl border border-hair bg-panel-deep px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-cobalt"
        />
      </div>

      <button
        type="submit"
        className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-ink bg-cobalt px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_#12332A] transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
      >
        Send message
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </form>
  );
}
