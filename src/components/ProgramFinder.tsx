"use client";

import { useState } from "react";
import { Tabs } from "@/components/decor";
import { Pill } from "@/components/lab";

type Program = { name: string; weeks: string; level: string; format: string; color: "violet" | "cobalt" | "cyan" | "amber" | "teal" };

const DIGITAL: Program[] = [
  { name: "AI Productivity & Automation", weeks: "4 wks", level: "Beginner", format: "Cohort + labs", color: "violet" },
  { name: "Website Building", weeks: "6 wks", level: "Beginner", format: "Cohort + build", color: "cobalt" },
  { name: "Digital Marketing & Social", weeks: "6 wks", level: "Beginner", format: "Cohort + live accounts", color: "cyan" },
  { name: "SEO / AEO / GEO / AIO", weeks: "5 wks", level: "Intermediate", format: "Cohort + audits", color: "teal" },
  { name: "CRM, Lead Gen & AI Agents", weeks: "6 wks", level: "Intermediate", format: "Cohort + pipelines", color: "amber" },
  { name: "MVP & SaaS Building", weeks: "8 wks", level: "Intermediate", format: "Cohort + ship", color: "cobalt" },
];

const WORKPLACE: Program[] = [
  { name: "Sales Executive", weeks: "8 wks", level: "Job-ready", format: "Calls + CRM", color: "amber" },
  { name: "Administrative Assistant", weeks: "6 wks", level: "Job-ready", format: "Inbox + sheets", color: "teal" },
  { name: "Customer Service", weeks: "6 wks", level: "Job-ready", format: "Tickets + calls", color: "cyan" },
  { name: "Real Estate Sales · Assistant", weeks: "6 wks", level: "Job-ready", format: "Viewings + CRM", color: "violet" },
];

function Grid({ items }: { items: Program[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((p) => (
        <div key={p.name} className="group rounded-2xl border border-hair bg-panel p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt/50 hover:shadow-[0_14px_36px_-14px_rgba(27,77,143,0.35)]">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold text-ink">{p.name}</h3>
            <Pill color={p.color}>{p.level}</Pill>
          </div>
          <div className="mt-4 flex gap-4 border-t border-hair pt-3 text-[11px] text-ink-faint">
            <span>{p.weeks}</span><span className="text-hair">|</span><span>{p.format}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProgramFinder() {
  const [tab, setTab] = useState<"digital" | "workplace">("digital");
  return (
    <div>
      <Tabs
        tabs={[{ id: "digital", label: "School A · Digital & AI" }, { id: "workplace", label: "School B · Workplace" }]}
        active={tab}
        onChange={setTab}
      />
      <div className="mt-6">{tab === "digital" ? <Grid items={DIGITAL} /> : <Grid items={WORKPLACE} />}</div>
      <p className="mt-5 text-xs leading-relaxed text-ink-faint">
        Every program ends in assessed work + evidence. Level, duration and format are fixed in the cohort agreement — no hidden modules.
      </p>
    </div>
  );
}
