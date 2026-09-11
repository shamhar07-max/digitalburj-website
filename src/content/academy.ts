// Digital Burj Academy — FINAL production curriculum DB-00 → DB-22.
// Statuses: complete topic lists, projects, simulations. Rendered on /academy.

export type Course = {
  code: string; name: string; level: string; outcome: string;
  modules: string[]; project?: string; simulation?: string;
};

export const LEVELS: { name: string; courses: Course[] }[] = [
{ name: "Foundation", courses: [
{ code: "DB-00", name: "Digital Foundations", level: "Start here",
  outcome: "Reads any digital product without feeling lost — and deploys a first site.",
  modules: ["How computers and software actually work", "Internet fundamentals: DNS, domains, HTTP/HTTPS, hosting", "Websites vs web applications", "Frontend vs backend", "Servers, cloud computing, JSON, APIs", "Files, storage, Git and GitHub", "Dev environments, command line, environment variables", "Software terminology fluency"],
  project: "Build and deploy a personal/business landing page." },
{ code: "DB-01", name: "Real-World Problem Solving & Product Thinking", level: "Start here",
  outcome: "Turns 'we need an app' into requirements, scope and a not-building list.",
  modules: ["Identifying real problems: symptoms vs root causes", "User research, personas, journeys, jobs-to-be-done", "Stakeholder interviews", "Functional vs non-functional requirements", "Acceptance criteria", "MVP thinking and prioritization", "Product-market assumptions, business models, success metrics", "Risks and constraints"],
  simulation: "A transport company runs on WhatsApp and Excel — determine what is broken, what to automate, what to build, what stays manual." },
] },
{ name: "Build", courses: [
{ code: "DB-02", name: "Professional Web Development", level: "Builder",
  outcome: "Ships a production-style business website and dashboard.",
  modules: ["HTML, CSS, responsive design, accessibility", "Forms, validation, loading and empty states", "JavaScript: state, events, API consumption", "React + TypeScript + Vite", "Component architecture, routing, reusable UI", "Mobile UX and performance"],
  project: "Production-style business website + dashboard from a brief." },
{ code: "DB-03", name: "Backend, APIs & Databases", level: "Builder",
  outcome: "Builds customer → order → payment → delivery backends that survive concurrency.",
  modules: ["Node.js, Express: routes, controllers, middleware, validation", "REST: endpoints, JSON, status codes, error handling", "PostgreSQL: tables, keys, relationships, indexes", "Transactions, constraints, migrations", "Authentication vs authorization", "Logging and rate limiting"],
  project: "Complete business application with login, dashboard, orders and admin." },
{ code: "DB-05", name: "Data, PostgreSQL & Business Data", level: "Builder",
  outcome: "Fixes contradictory business data at the system level.",
  modules: ["Relational modelling and normalization", "SQL: joins, aggregation, reporting", "Indexing, transactions, integrity", "Audit trails", "Analytics foundations", "Backup and recovery", "Data lifecycle"],
  project: "Business database for customers, orders, transactions and audit." },
{ code: "DB-14", name: "Mobile App Builder", level: "Builder",
  outcome: "Ships a mobile companion on a real backend.",
  modules: ["Mobile UX and navigation", "State and API integration", "Auth, storage, push, camera, location", "Offline mode and permissions", "Error handling and testing", "App deployment"] },
] },
{ name: "AI", courses: [
{ code: "DB-04", name: "AI-Native Software Development", level: "Signature",
  outcome: "Directs AI effectively — and verifies everything it produces.",
  modules: ["AI-assisted coding and context engineering", "Prompting for builders", "AI code review: finding bugs and bad assumptions", "AI debugging triage", "AI architecture assistance", "AI docs, tests and research", "Hallucinations, limits, model selection", "Agentic development and human judgment"],
  project: "AI vs Engineer: generate, inspect, test, break, fix, and document what AI got wrong." },
{ code: "DB-12", name: "AI Agents, Automation & Business Workflows", level: "Flagship",
  outcome: "Ships an AI employee for one business function.",
  modules: ["Automation thinking: triggers, conditions, approvals", "Workflow design and webhooks/APIs", "AI classification, extraction, routing", "Agents: tools, memory, guardrails, permissions", "Human-in-the-loop design", "Agent security review", "RAG over company knowledge"],
  project: "Build an AI employee: lead qualification, support, or reporting agent." },
] },
{ name: "Production", courses: [
{ code: "DB-06", name: "Production Engineering", level: "Professional",
  outcome: "Deploys systems a business can depend on — and recovers them.",
  modules: ["Dev, staging, production; env management and secrets", "CI/CD pipelines", "Deployment, migrations, rollbacks", "Health checks and monitoring", "Performance, caching, queues and workers", "Backups and graceful failure", "Dependency management", "Incident Lab: database connection fails — diagnose and recover"] },
{ code: "DB-07", name: "Secure Software & Cybersecurity", level: "Professional",
  outcome: "Attacks their own app ethically — then fixes it.",
  modules: ["Security mindset", "Authentication, sessions, passwords, secrets", "Authorization and RBAC", "Injection, XSS, CSRF", "API, upload and webhook security", "Rate limiting and security headers", "Supply-chain and dependency risks", "Logging, audit trails, OWASP Top 10", "Threat modeling"],
  project: "Security audit: find and fix 10 planted vulnerabilities." },
{ code: "DB-08", name: "Software Testing & Quality Engineering", level: "Professional",
  outcome: "Owns a regression suite that catches the double-charge.",
  modules: ["Test strategy: happy, wrong, malicious, failure, concurrency paths", "Unit, integration and API tests", "Playwright end-to-end", "Regression, smoke, UAT", "Mocks and test databases", "CI testing and failure analysis"],
  project: "Automated regression suite for a checkout flow." },
{ code: "DB-10", name: "Real-Time Applications", level: "Professional",
  outcome: "Ships a live operations dashboard.",
  modules: ["WebSockets and Socket.IO", "Events, notifications, presence", "Live dashboards", "Reconnection and duplicate events", "Ordering and offline behaviour"] },
{ code: "DB-11", name: "Documents, Uploads & Storage", level: "Professional",
  outcome: "Ships a secure business document system.",
  modules: ["Uploads and object storage", "Private files and signed URLs", "MIME validation and size limits", "Malware awareness and metadata", "Hashing and versioning", "Evidence systems and extraction"] },
{ code: "DB-09", name: "Payments, Ledgers, Webhooks & Money", level: "Advanced",
  outcome: "Prevents double payment when webhooks arrive twice.",
  modules: ["Payment lifecycle: auth, capture, refund, chargeback", "Gateways", "Webhooks and idempotency", "Duplicate-payment defense", "Ledgers and reconciliation", "Fees, commission, currency, rounding", "Audit trails and two-person approval", "Financial race conditions"],
  simulation: "Two requests release the same payment simultaneously — design recovery." },
] },
{ name: "Business Tech", courses: [
{ code: "DB-13", name: "CRM / ERP / HRM", level: "Consultant",
  outcome: "Replaces six spreadsheets with one operating system.",
  modules: ["CRM: leads, pipeline, activities, follow-ups, support", "ERP: products, orders, inventory, purchasing, finance", "HRM: records, onboarding, attendance, leave, approvals"],
  project: "Mini business OS for a fictional company." },
{ code: "DB-15", name: "Search & AI Visibility Engineering", level: "Consultant",
  outcome: "Makes a business understandable to Google and AI answers.",
  modules: ["Technical SEO: crawl, index, speed, schema", "Search intent and content architecture", "Local SEO", "AEO: answer-oriented content", "GEO: entities, citations, topical authority", "Analytics and conversion"],
  project: "Full search visibility audit and implementation." },
{ code: "DB-16", name: "Social Media & Content Operations", level: "Consultant",
  outcome: "Runs social as a system, not a lottery.",
  modules: ["Audience and positioning", "Content pillars, hooks, scripts", "Short-form video and editing", "Repurposing engine", "Calendars, publishing, community", "Analytics and content funnels", "AI-assisted production"] },
] },
{ name: "Product", courses: [
{ code: "DB-17", name: "From Idea to MVP", level: "Founder",
  outcome: "Decides what should — and shouldn't — be built.",
  modules: ["Problem, customer, market, interviews", "Competitors and validation", "Business model and pricing", "MVP definition and prototype", "Roadmap, feedback, analytics, iteration"],
  project: "Startup validation sprint: problem → prototype → pricing." },
{ code: "DB-18", name: "Build, Launch & Grow", level: "Founder",
  outcome: "Ships a small SaaS with users and metrics.",
  modules: ["MVP architecture and roadmap", "Onboarding and analytics", "Launch, pricing, retention", "Infrastructure, scaling, cost control", "Product metrics"] },
{ code: "DB-19", name: "Digital Transformation Consulting", level: "Consultant",
  outcome: "Delivers a professional transformation audit.",
  modules: ["Business, process and technology audits", "Automation opportunity ranking", "NOW / 30 / 90 / 12-month roadmap", "ROI in hours, risk and change management"],
  project: "Full transformation report for a fictional company." },
] },
{ name: "Professional", courses: [
{ code: "DB-20", name: "Client Delivery & Freelancing", level: "Professional",
  outcome: "Survives a real client: brief, budget, deadline, difficult stakeholder.",
  modules: ["Positioning and proof-based portfolio", "Discovery calls and requirements", "Proposals, SOWs, pricing, contracts", "Kickoffs, status comms, difficult conversations", "Scope-creep defense and change control", "QA, UAT, handover, support, invoicing, renewals"],
  simulation: "Client says 'just add one small thing' — run the change-request drill." },
{ code: "DB-21", name: "Business Operations & Practice", level: "Professional",
  outcome: "Runs five clients without chaos.",
  modules: ["SOPs and documentation", "Project folders and knowledge management", "Time, finance and vendor management", "Support, incidents, backups, disaster recovery", "Security policies and legal awareness", "Team, hiring and quality systems"] },
{ code: "DB-22", name: "Professional Challenge", level: "Master",
  outcome: "Earns the Capability Record across 8 defense interviews.",
  modules: ["72-hour build: discover → architect → build → secure → deploy", "10-break incident gauntlet", "Technical, security, AI, product, client and incident defenses", "Live app, docs, reports and demonstration"],
  project: "CargoFlow Logistics in 72 hours: discovery to defended demo." },
] },
];

export const PATHWAYS = [
{ code: "A", name: "Digital Starter", path: "DB-00 → DB-01 → DB-02", out: "Understands technology and builds basic products." },
{ code: "B", name: "Digital Builder", path: "DB-00 → DB-01 → DB-02 → DB-03 → DB-05 → DB-06 → DB-08", out: "Builds and deploys real software." },
{ code: "C", name: "AI Product Builder", path: "DB-00 → DB-01 → DB-02 → DB-03 → DB-04 → DB-06 → DB-07 → DB-08 → DB-12 → DB-17 → DB-18", out: "Builds AI-enabled products." },
{ code: "D", name: "AI Automation Specialist", path: "DB-00 → DB-01 → DB-04 → DB-12 → DB-13 → DB-19", out: "Implements AI/automation inside businesses." },
{ code: "E", name: "Transformation Consultant", path: "DB-01 → DB-12 → DB-13 → DB-15 → DB-16 → DB-19 → DB-20 → DB-21", out: "Diagnoses businesses and delivers transformation." },
{ code: "F", name: "Professional Operator", path: "DB-00 → DB-22, everything", out: "Flagship: beginner to real-world operator." },
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
["L1 · Guided", "Follow these instructions."],
["L2 · Assisted", "Tools provided. Find the next step."],
["L3 · Independent", "Here's the problem. Solve it."],
["L4 · Production", "Solve it under real constraints."],
["L5 · Expert", "Unfamiliar problem. Incomplete information."],
];

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
