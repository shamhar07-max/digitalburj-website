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

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const company = String(form.get("company") ?? "");
    const interest = String(form.get("interest") ?? "");
    const budget = String(form.get("budget") ?? "");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Interested in: ${interest}`,
      `Budget: ${budget}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:hello@digitalburj.com?subject=${encodeURIComponent(
      `New project inquiry — ${name}`
    )}&body=${encodeURIComponent(body)}&cc=${encodeURIComponent(email)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card-glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
        <CheckCircle2 size={40} className="text-gold" />
        <h3 className="font-display text-xl font-semibold text-fg">
          Your email client should be opening now
        </h3>
        <p className="max-w-sm text-sm text-fg-muted">
          If nothing opened, email us directly at{" "}
          <a href="mailto:hello@digitalburj.com" className="text-gold hover:underline">
            hello@digitalburj.com
          </a>
          .
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm font-semibold text-fg-muted hover:text-fg"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-glass space-y-6 rounded-3xl p-7 sm:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Ahmed Khan" />
        <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
      </div>

      <Field label="Company (optional)" name="company" placeholder="Your company" />

      <div>
        <label className="mb-2 block text-sm font-medium text-fg">
          What are you looking to build?
        </label>
        <select
          name="interest"
          required
          defaultValue=""
          className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition-colors focus:border-gold/60"
        >
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

      <div>
        <label className="mb-2 block text-sm font-medium text-fg">Rough budget</label>
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
              <span className="inline-block rounded-full border border-border bg-surface-2 px-4 py-2 text-xs font-medium text-fg-muted transition-colors peer-checked:border-gold/60 peer-checked:bg-gold/10 peer-checked:text-gold">
                {b}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-fg">
          Tell us about the project
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What are you trying to build or automate?"
          className="w-full resize-none rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-gold/60"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-deep px-6 py-3.5 text-sm font-semibold text-[#14100a] transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        Send message
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-fg" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-gold/60"
      />
    </div>
  );
}
