// DigitalBurj content composer — deterministic, human-voice long-form.
// Voice rules: contractions, second person, specifics over adjectives,
// rhetorical questions, short punches mixed with longer explanations.

import { TOPICS, ANGLES, type Topic } from "./bank1";
import { SERVICES, INDUSTRIES, EMIRATES, PROGRAMS, GLOSSARY_CATS, LIFECYCLE, PRINCIPLES, FOLDERS, ENG, UAE_NOTES } from "./bank2";

const hash = (s: string) => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return Math.abs(h); };
const pick = <T,>(arr: readonly T[] | T[], n: number): T => arr[n % arr.length] as T;

const OPENERS = [
  (t: string, a: string) => `Let's talk about ${t.toLowerCase()} — specifically, ${a.toLowerCase()}. Not theory. The version that decides whether money comes in or quietly leaks out.`,
  (t: string, a: string) => `If you've ever wondered about ${t.toLowerCase()}, you're asking the right question at the right time. Here's ${a.toLowerCase()}, explained the way we'd explain it to a client sitting across the table.`,
  (t: string) => `Most advice about ${t.toLowerCase()} is either too vague to act on or too technical to finish reading. This is neither. Here's what actually matters, and what you can skip.`,
  (t: string, a: string) => `Look, ${t.toLowerCase()} isn't complicated — but ${a.toLowerCase()} is where most businesses quietly get it wrong. Let's fix that in one sitting.`,
  (t: string) => `We've watched dozens of UAE businesses wrestle with ${t.toLowerCase()}. The patterns repeat so reliably you could set your watch by them. Here are the ones worth knowing.`,
  (t: string, a: string) => `A straight answer on ${t.toLowerCase()}: ${a.toLowerCase()}. No jargon, no padding — just the working version, with the numbers we actually see.`,
];
const BRIDGES = [
  "Here's why this deserves your attention before anything else.",
  "Why does this matter more here than the generic advice suggests?",
  "The UAE twist first, because it changes the answer.",
  "Before tactics, the context that makes tactics work.",
];
const STEP_INTRO = ["Here's how we'd approach it, in order:", "The sequence that works, step by step:", "Do it in this order and you'll avoid the usual rework:"];
const MISTAKE_INTRO = ["Now the expensive part — the mistakes:", "Where the money usually burns:", "The patterns that cost real dirhams:"];
const WEEK_INTRO = ["What you can do this week:", "If you do nothing else, do these three things:", "A starting list for the next seven days:"];

export type BlogPost = {
  slug: string; title: string; cat: string; date: string; updated: string;
  excerpt: string; reading: number; intro: string[]; why: string[];
  steps: string[]; mistakes: string[]; week: string[];
  faq: [string, string][]; related: { slug: string; title: string }[];
};

const START = Date.UTC(2019, 0, 7);
const END = Date.UTC(2026, 8, 11);
const dateFor = (i: number, total: number) => new Date(START + ((END - START) * i) / Math.max(total - 1, 1)).toISOString().slice(0, 10);

const angleTitle = (topic: string, angle: string, year: number) => {
  switch (angle) {
    case "cost": return `${topic}: what it really costs in the UAE (${year})`;
    case "mistakes": `${topic}: 7 mistakes we see every month`;
    case "checklist": `${topic}: the checklist we actually use`;
    case "timeline": `${topic}: how long it really takes`;
    case "tools": `${topic}: tools worth paying for`;
    case "diy": `${topic}: DIY or hire it out?`;
    case "metrics": `${topic}: measuring it honestly`;
    case "teardown": `Teardown: what good ${topic.toLowerCase()} looks like`;
    case "basics": `${topic}, explained for busy owners`;
    default: return `${topic} after the basics stop working`;
  }
};

function buildPost(ti: number, ai: number, total: number): BlogPost {
  const t = TOPICS[ti] as Topic;
  const a = (ANGLES as readonly { slug: string; q: string }[])[ai] as { slug: string; q: string };
  const h = hash(t.slug + a.slug);
  const year = Number(dateFor(ti * ANGLES.length + ai, total).slice(0, 4));
  const slug: string = `${t.slug}-${a.slug}`;
  const title: string = angleTitle(t.title, a.slug, year);
  const f = t.facts;
  const lead = f[h % f.length] as string;
  const intro = [
    pick(OPENERS, h)(t.title, a.q),
    `The short version: ${f[h % f.length]} And once you accept that, the rest of this guide becomes straightforward — because every decision below follows from it.`,
  ];
  const why = [
    pick(BRIDGES, h + 1),
    `${(f[(h + 1) % f.length] as string)} In practice this means the businesses that win aren't the ones with the biggest budgets. They're the ones that fix the unglamorous fundamentals first and measure honestly.`,
    `${(f[(h + 2) % f.length] as string)} Ask yourself: if a competitor did exactly this for six months while you waited, where would you stand? That gap is the real cost of postponing.`,
  ];
  const steps = [
    pick(STEP_INTRO, h + 2),
    `First, ${f[(h + 3) % f.length].charAt(0).toLowerCase() + f[(h + 3) % f.length].slice(1)}`,
    `Second, ${f[(h + 4) % f.length].charAt(0).toLowerCase() + f[(h + 4) % f.length].slice(1)}`,
    `Third, set one number that decides success and review it monthly — no vanity metrics allowed.`,
    `Finally, write down what you'll stop doing. Every strong operation we know runs on a short not-doing list.`,
  ];
  const mistakes = [
    pick(MISTAKE_INTRO, h + 3),
    `${(f[(h + 5) % f.length] as string)}`,
    `Copying a competitor's tactic without their context — what works in Marina retail rarely ports cleanly to Mussafah industrial.`,
    `Paying for tools before assigning an owner. Unowned software becomes shelfware within a quarter.`,
  ];
  const week = [
    pick(WEEK_INTRO, h + 4),
    `Pick the single fact above that stung most, and fix one instance of it before Friday.`,
    `Write down your current number for it — calls, leads, hours, errors — so next month has something to beat.`,
    `Book a 30-minute review with whoever owns it. Calendared beats intended, every time.`,
  ];
  const faq: [string, string][] = [
    [`How much should a small UAE business budget for ${t.title.toLowerCase()}?`, `Enough to run properly for 90 days and measure one outcome. Anything shorter teaches you nothing; anything vaguer spends without learning. Fixed scopes beat open-ended retainers at this stage.`],
    [`What's the biggest mistake beginners make?`, `${lead} Start there, because it compounds into every other problem on the list.`],
    [`When should we hire help instead of DIY?`, `When the task repeats weekly, mistakes cost real money, or you've postponed it twice. That's the honest threshold — not enthusiasm, frequency times consequence.`],
  ];
  const body = [...intro, ...why, ...steps, ...mistakes, ...week].join(" ");
  return {
    slug, title, cat: t.cat, date: dateFor(ti * ANGLES.length + ai, total), updated: "2026-09-11",
    excerpt: lead, reading: Math.max(4, Math.round(body.split(" ").length / 200)),
    intro, why, steps, mistakes, week, faq, related: [],
  };
}

export const BLOG: BlogPost[] = (() => {
  const total = TOPICS.length * ANGLES.length;
  const posts = TOPICS.flatMap((_, ti) => ANGLES.map((__, ai) => buildPost(ti, ai, total)));
  const byCat = new Map<string, BlogPost[]>();
  posts.forEach((p) => { const l = byCat.get(p.cat) ?? []; l.push(p); byCat.set(p.cat, l); });
  posts.forEach((p) => {
    const l = (byCat.get(p.cat) ?? []).filter((x) => x.slug !== p.slug);
    const i = hash(p.slug) % Math.max(l.length, 1);
    const rel: { slug: string; title: string }[] = [];
    for (const k of [0, 1, 2]) {
      const x = l[(i + k * 7) % l.length];
      if (x) rel.push({ slug: x.slug, title: x.title });
    }
    p.related = rel;
  });
  return posts;
})();

// ——— Solutions: services × industries + services × emirates = 255 pages
export type Solution = { slug: string; title: string; service: string; market: string; note: string; deliverables: string[]; outcomes: string[] };
export const SOLUTIONS: Solution[] = [
  ...SERVICES.flatMap((s) =>
    INDUSTRIES.map((m) => ({
      slug: `${s.slug}-for-${m.slug}`, title: `${s.name} for ${m.name}`,
      service: s.tagline, market: m.note, note: m.note,
      deliverables: s.deliverables, outcomes: s.outcomes,
    }))
  ),
  ...SERVICES.flatMap((s) =>
    EMIRATES.map((m) => ({
      slug: `${s.slug}-in-${m.slug}`, title: `${s.name} in ${m.name}`,
      service: s.tagline, market: m.note, note: m.note,
      deliverables: s.deliverables, outcomes: s.outcomes,
    }))
  ),
];

// ——— Programs: 12 roles × 4 formats = 48 pages
export const FORMATS = [
  { slug: "evening", name: "Weekday evenings", note: "Two evenings a week, built for working learners." },
  { slug: "weekend", name: "Weekends", note: "Friday–Saturday blocks with weekday practice tasks." },
  { slug: "intensive", name: "Intensive", note: "Four weeks, daily sessions, fastest path to assessment." },
  { slug: "corporate", name: "Corporate batch", note: "Delivered for one company's team, on their cases." },
];
export type ProgramPage = { slug: string; title: string; weeks: string; level: string; format: string; fnote: string; modules: string[]; tools: string[]; assessment: string };
export const PROGRAM_PAGES: ProgramPage[] = PROGRAMS.flatMap((p) =>
  FORMATS.map((f) => ({
    slug: `${p.slug}-${f.slug}`, title: `${p.name} · ${f.name}`,
    weeks: p.weeks, level: p.level, format: `${p.format} · ${f.name}`,
    fnote: f.note, modules: p.modules, tools: p.tools, assessment: p.assessment,
  }))
);

// ——— Glossary: 150 terms
export type Term = { slug: string; term: string; cat: string; def: string; example: string };
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const TERMS: Term[] = GLOSSARY_CATS.flatMap((c) =>
  c.terms.map((t) => {
    const h = hash(t);
    return {
      slug: slugify(t), term: t, cat: c.cat,
      def: `${t} is one of those terms everyone nods at and few can define cleanly. In plain language: ${pick([
        "it's the part of the work where precision actually pays.",
        "it decides whether effort turns into outcomes or evaporates.",
        "it's a working concept, not decoration — it changes decisions.",
      ], h)} ${pick([
        "Owners who grasp it ask better questions and waste less money.",
        "Teams that track it improve it; teams that don't, argue about it.",
        "Get this right early and everything downstream gets cheaper.",
      ], h + 1)}`,
      example: pick([
        `A typical example: a 12-person trading firm in Deira uses ${t.toLowerCase()} to stop a weekly leak they've tolerated for a year.`,
        `In practice: a Sharjah retail shop applies ${t.toLowerCase()} to one process for 30 days and reviews the number, not the feeling.`,
        `Where it shows up: any service business in Dubai taking enquiries over WhatsApp will meet ${t.toLowerCase()} within the first month of getting serious.`,
      ], h + 2),
    };
  })
);

// ——— Handbook: 12 + 20 + 44 + 6 + 4 = 86 pages
export type DocPage = { slug: string; section: string; title: string; body: string[] };
export const DOCS: DocPage[] = [
  ...LIFECYCLE.map(([t, d, exit], i) => ({
    slug: `lifecycle-${slugify(t)}`, section: "Agency Lifecycle",
    title: `Stage ${String(i + 1).padStart(2, "0")}: ${t}`,
    body: [`What happens: ${d}.`, `Exit gate: ${exit}. Nothing moves forward on a verbal promise — the gate needs the artifact, reviewed and filed.`, `Who runs it: named in the plan's RACI, not whoever is free that week.`, `Common failure: skipping this stage to save days, then losing weeks redoing it later under pressure.`],
  })),
  ...FOLDERS.map(([t, d]) => ({
    slug: `folder-${slugify(t)}`, section: "Client Folder System",
    title: `Folder ${t}`,
    body: [`Contains: ${d}.`, `Rule: if it isn't filed here within 48 hours, it didn't happen. Approvals, especially, live here — never only in chat.`, `Review: folder completeness checked at every milestone before the next stage opens.`],
  })),
  ...ENG.map(([t, d]) => ({
    slug: `manual-${slugify(t)}`, section: "Engineering Manual",
    title: t,
    body: [`${d}`, `Standard: one owner, one review date, one place it lives. Anything else rots.`, `Evidence: the artifact for this chapter is named in the plan — log, diagram, test report, or config — and linked from the release notes.`],
  })),
  ...UAE_NOTES.map(([t, d]) => ({
    slug: `uae-${slugify(t)}`, section: "UAE Context",
    title: t,
    body: [`${d}`, `Position: get qualified counsel before commercial launch — website copy never decides legal classification.`, `Review: revisit quarterly; regulations and enforcement evolve.`],
  })),
  ...[0, 1, 2, 3].map((g) => ({
    slug: `principles-${g + 1}`, section: "Operating Principles",
    title: `Operating principles, part ${g + 1}`,
    body: PRINCIPLES.slice(g * 4, g * 4 + 4).flatMap((p) => [
      `${p}.`,
      `Why it exists: every principle here is a scar — something that cost a client or us real money once, written down so it costs nobody twice.`,
    ]),
  })),
];

export { GLOSSARY_CATS } from "./bank2";

export const COUNTS = {
  blog: BLOG.length, solutions: SOLUTIONS.length, programs: PROGRAM_PAGES.length,
  terms: TERMS.length, docs: DOCS.length,
  total: BLOG.length + SOLUTIONS.length + PROGRAM_PAGES.length + TERMS.length + DOCS.length,
};
