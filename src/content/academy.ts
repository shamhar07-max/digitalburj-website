// DigitalBurj Academy curriculum — DB-00 → DB-22, pathways, mission system.
// Compact encoding: course code, name, outcome, condensed modules.

export type Course = { code: string; name: string; level: string; outcome: string; modules: string[] };

export const LEVELS: { name: string; courses: Course[] }[] = [
{ name: "Foundation", courses: [
{ code: "DB-00", name: "Digital Foundations", level: "Start here", outcome: "Reads any digital product without feeling lost: browser → server → database → deploy.", modules: ["Digital world tour: sites, apps, SaaS, cloud", "Builder workspace: files, editors, terminal", "How the internet works: DNS, HTTP, servers", "First logic: variables, conditions, loops", "Git & GitHub: recover yesterday's site", "First deployment: live URL for a client"] },
{ code: "DB-01", name: "Problem Solving & Product Thinking", level: "Start here", outcome: "Turns 'we need an app' into requirements, scope and a not-building list.", modules: ["Symptoms vs root problems", "Discovery interviews", "Requirements & acceptance criteria", "Process mapping", "Build vs buy vs automate", "Scope, MVP and change control", "Final: the client discovery room"] },
] },
{ name: "Build", courses: [
{ code: "DB-02", name: "Professional Web Development", level: "Builder", outcome: "Ships a production-quality business website from a brief.", modules: ["HTML structure", "CSS + responsive", "Mobile-first fixes", "JavaScript + forms", "UI/UX teardown", "React fundamentals", "Design systems + Tailwind", "Deploy with domain + HTTPS"] },
{ code: "DB-03", name: "Backend, APIs & Databases", level: "Builder", outcome: "Builds a complete business app: login → dashboard → orders → admin.", modules: ["Why backends exist", "APIs: endpoints, JSON, status codes", "Node.js + npm", "Express routes + validation", "PostgreSQL essentials", "Database design from a spreadsheet", "Authentication", "Authorization (the invoice-leak scenario)", "Transactions + idempotency"] },
{ code: "DB-05", name: "Data & PostgreSQL", level: "Builder", outcome: "Fixes a company's contradictory data at the system level.", modules: ["Data thinking", "Relational design", "SQL fluency", "Indexing + constraints", "Migrations + backups", "Reporting queries"] },
{ code: "DB-14", name: "Mobile App Development", level: "Builder", outcome: "Ships a mobile companion on a real backend.", modules: ["Mobile UX + navigation", "State + API integration", "Auth + storage + push", "Permissions + errors", "Store deployment concepts"] },
] },
{ name: "AI", courses: [
{ code: "DB-04", name: "AI-Native Development", level: "Signature", outcome: "Uses AI as an engineering partner — and catches it when it's wrong.", modules: ["What AI can/can't do", "Builder prompting", "THINK → PLAN → BUILD → REVIEW → TEST → SHIP", "AI code review drills", "AI debugging triage", "AI architecture critique", "Verification discipline", "Final: AI vs Engineer"] },
{ code: "DB-12", name: "AI Agents & Automation", level: "Flagship", outcome: "Ships an AI employee for one business function.", modules: ["Automation thinking", "Trigger → Logic → Action → Verify", "APIs + webhooks", "Low-code workflows", "AI classification + routing", "Agent guardrails + permissions", "Human-in-the-loop design", "Agent security review"] },
] },
{ name: "Production", courses: [
{ code: "DB-06", name: "Production Engineering", level: "Professional", outcome: "Deploys with monitoring, backups and a rollback plan.", modules: ["Environments + secrets", "CI/CD gates", "Monitoring + alerts", "Backups + recovery drills", "Rollback runs", "Incident room simulation"] },
{ code: "DB-07", name: "Secure Software", level: "Professional", outcome: "Attacks their own app ethically, then fixes it.", modules: ["Auth + sessions", "Access control", "Injection, XSS, CSRF", "API + upload security", "Rate limits + headers", "Threat modeling", "Break labs + audit mission"] },
{ code: "DB-08", name: "Testing & QA", level: "Professional", outcome: "Owns a regression suite that catches the double-charge.", modules: ["Test strategy", "Unit + integration + API tests", "Playwright end-to-end", "Regression + edge cases", "Failure analysis"] },
{ code: "DB-10", name: "Real-Time Systems", level: "Professional", outcome: "Ships a live operations dashboard.", modules: ["WebSockets + events", "Notifications + presence", "Reconnection + duplicates", "Offline behaviour"] },
{ code: "DB-11", name: "Documents & Storage", level: "Professional", outcome: "Ships a secure document vault.", modules: ["Uploads + object storage", "Presigned URLs + access control", "Validation + versioning", "Confidential handling"] },
{ code: "DB-09", name: "Payments & Ledgers", level: "Advanced", outcome: "Survives duplicate webhooks and timeout storms.", modules: ["Payment lifecycle", "Webhooks + idempotency", "Refunds + payouts", "Ledger + reconciliation", "Approvals + audit trails"] },
] },
{ name: "Business Tech", courses: [
{ code: "DB-13", name: "CRM / ERP / HRM", level: "Consultant", outcome: "Replaces six spreadsheets with one operating system.", modules: ["CRM pipelines", "ERP: stock, purchasing, finance", "HRM: onboarding to offboarding", "Mini-OS final project"] },
{ code: "DB-15", name: "Search & AI Visibility", level: "Consultant", outcome: "Makes a business understandable to Google and AI answers.", modules: ["Technical SEO", "Answer-engine content", "Entity + citation strategy", "Visibility audit mission"] },
{ code: "DB-16", name: "Social Content Systems", level: "Consultant", outcome: "Runs a 30-day content system from zero.", modules: ["Pillars + hooks + scripts", "Short-form production", "Repurpose engine", "Analytics + funnels"] },
] },
{ name: "Product", courses: [
{ code: "DB-17", name: "Idea to MVP", level: "Founder", outcome: "Decides what should (and shouldn't) be built.", modules: ["Problem + customer + market", "Validation sprints", "MVP definition + prototype", "Pricing hypothesis"] },
{ code: "DB-18", name: "Build, Launch & Grow", level: "Founder", outcome: "Ships a small SaaS with users and metrics.", modules: ["MVP architecture", "Onboarding + analytics", "Launch + pricing + retention", "Infrastructure + cost control"] },
{ code: "DB-19", name: "Digital Transformation", level: "Consultant", outcome: "Delivers a professional transformation audit.", modules: ["Business + process + tech audits", "Opportunity ranking", "NOW/30/90/12-month roadmap", "ROI in hours, not adjectives"] },
] },
{ name: "Professional", courses: [
{ code: "DB-20", name: "Client Delivery & Freelancing", level: "Professional", outcome: "Survives a real client: brief, budget, deadline, difficult stakeholder.", modules: ["Positioning + portfolio", "Discovery calls", "Proposals + contracts", "Kickoffs + status comms", "Scope creep defense", "QA, handover, support"] },
{ code: "DB-21", name: "Technology Operations", level: "Professional", outcome: "Runs five clients without chaos.", modules: ["SOPs + client folders", "Support + incidents + backups", "Finance + renewals", "Build your own OS"] },
{ code: "DB-22", name: "Professional Challenge", level: "Master", outcome: "Earns the Capability Record: live app, incidents survived, defense passed.", modules: ["Client brief → discovery → architecture", "Build under constraints", "10-break incident gauntlet", "Technical + client defense", "Ship + evidence pack"] },
] },
];

export const PATHWAYS = [
{ code: "A", name: "Digital Starter", path: "DB-00 → DB-01 → DB-02", out: "Understands technology and builds basic products." },
{ code: "B", name: "Digital Builder", path: "DB-00 → DB-01 → DB-02 → DB-03 → DB-04 → DB-05 → DB-06 → DB-08", out: "Builds and deploys real software." },
{ code: "C", name: "AI Product Builder", path: "DB-00 → DB-01 → DB-02 → DB-03 → DB-04 → DB-06 → DB-07 → DB-08 → DB-12 → DB-17 → DB-18", out: "Builds AI-enabled products." },
{ code: "D", name: "AI Automation Specialist", path: "DB-00 → DB-01 → DB-04 → DB-12 → DB-13 → DB-19", out: "Implements AI/automation inside businesses." },
{ code: "E", name: "Transformation Consultant", path: "DB-01 → DB-12 → DB-13 → DB-15 → DB-16 → DB-19 → DB-20 → DB-21", out: "Diagnoses businesses and delivers transformation." },
{ code: "F", name: "Professional Builder", path: "DB-00 → DB-22, everything", out: "The flagship: beginner to real-world operator." },
];

export const MISSION_STEPS = [
["Cold open", "A real situation, not a chapter title."],
["Mission", "What exactly must be solved."],
["Learn", "The shortest concept lesson that unblocks."],
["Investigate", "Student explores the terrain."],
["Decide", "Student chooses an approach."],
["Build", "Student does the work."],
["Break", "Something goes wrong — on purpose."],
["Debug", "Student finds the cause."],
["Verify", "Student proves it works."],
["Defend", "Student explains every why."],
["Deliver", "Artifact submitted."],
["Client review", "Professional feedback."],
["Evidence", "Skill added to the capability record."],
];

export const DIFFICULTY = [
["L1 · Guided", "Follow these instructions.", "cobalt"],
["L2 · Assisted", "Tools provided. Find the next step.", "cyan"],
["L3 · Independent", "Here's the problem. Solve it.", "amber"],
["L4 · Production", "Solve it under real constraints.", "violet"],
["L5 · Expert", "Unfamiliar problem. Incomplete information.", "teal"],
] as const;

export const UNIVERSE = [
["CargoFlow", "Logistics — shipments, assistants, CRM, breaches."],
["Medix", "Healthcare — bookings, records, compliance."],
["EstateX", "Real estate — listings, viewings, follow-ups."],
["LearnHub", "Education — cohorts, content, progress."],
["ShopSphere", "E-commerce — catalogue, checkout, affiliates."],
["FinCore", "Financial ops — ledgers, approvals, reports."],
["ServicePro", "Professional services — proposals, delivery, billing."],
];

export const LOOP = ["Brief", "Discover", "Learn", "Try", "Build", "Break", "Fix", "Defend", "Ship"];
