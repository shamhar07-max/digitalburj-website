// Capability detail data — one dedicated page per Solutions entry.
export type Capability = {
  slug: string; n: string; t: string; lede: string;
  includes: { t: string; d: string }[];
  outcomes: string[];
  faq: [string, string][];
};

export const CAPABILITIES: Capability[] = [
{
  slug: "transform", n: "01", t: "Transform",
  lede: "Business diagnosis, process redesign, technology strategy. We find what is actually wrong before proposing anything.",
  includes: [
    { t: "Digital health check", d: "Business model, roles, processes, technology, data, AI opportunities and security — investigated, not guessed." },
    { t: "Automation audit", d: "Every repeated task mapped by frequency, time, cost and error — then classified: automate now, improve first, human + AI, or keep human." },
    { t: "Maturity assessment", d: "Twelve areas scored, from digital presence to infrastructure. You get a number, not an opinion." },
    { t: "Transformation roadmap", d: "Now / 30 days / 90 days / 6 months / 12 months — sequenced by impact, not enthusiasm." },
  ],
  outcomes: ["A written Transformation Blueprint", "Prioritized opportunities with owners", "No software sold before diagnosis"],
  faq: [
    ["We already know what we need. Skip diagnosis?", "Then bring it — the audit either confirms it in days or saves you from an expensive mistake. Both are wins."],
    ["What do we receive?", "A Blueprint: findings, scores, priority matrix, roadmap and fixed quotes for next steps."],
  ],
},
{
  slug: "build", n: "02", t: "Build",
  lede: "Websites, web apps, mobile apps, SaaS, portals and custom software — engineered to survive users.",
  includes: [
    { t: "Websites", d: "Corporate, service, landing, e-commerce, booking and knowledge sites that load fast and convert." },
    { t: "Web applications", d: "Dashboards, portals, marketplaces and internal tools with real auth and admin." },
    { t: "Mobile apps", d: "Android, iOS and cross-platform — customer, delivery, employee and field apps." },
    { t: "SaaS & MVPs", d: "Idea → validation → prototype → beta → launch → iteration, scoped to survive contact with users." },
    { t: "Legacy modernization", d: "Audit, stabilize, modernize, migrate, integrate — without stopping the business." },
  ],
  outcomes: ["Working software on a fixed quote", "You own the repo, domain and accounts", "Docs and handover included"],
  faq: [
    ["Fixed price or hourly?", "Fixed scope, fixed price, staged milestones. Change requests priced separately, in writing."],
    ["Who owns the code?", "You do — repository, accounts and credentials transfer at handover."],
  ],
},
{
  slug: "intelligence", n: "03", t: "Intelligence",
  lede: "AI where it creates measurable value. Assistants, agents, knowledge systems and governance — never decoration.",
  includes: [
    { t: "Website & WhatsApp assistants", d: "Answers from your content: products, pricing, FAQs, policies — with human handoff." },
    { t: "Sales & support agents", d: "Qualification, scoring, scheduling and ticket handling inside your CRM." },
    { t: "Document intelligence", d: "Invoices, contracts and forms extracted into structured data." },
    { t: "Private knowledge (RAG)", d: "Your documents, searchable and cited — access-controlled, never trained away." },
    { t: "AI governance", d: "Permissions, approvals, logging, evaluation and hallucination controls." },
  ],
  outcomes: ["Hours returned weekly, measured", "Humans approve high-risk actions", "Costs monitored, not surprising"],
  faq: [
    ["Will AI replace our staff?", "It removes repetitive work; people handle judgment, relationships and exceptions. We design for that split."],
    ["What about wrong answers?", "Guardrails, cited sources and approval gates — plus evaluation before launch."],
  ],
},
{
  slug: "automate", n: "04", t: "Automate",
  lede: "Automation first; AI where it improves the workflow. Trigger → validate → execute → verify.",
  includes: [
    { t: "Workflow automation", d: "Lead routing, approvals, reminders and reporting that run themselves." },
    { t: "API & webhook integrations", d: "CRM ↔ WhatsApp ↔ website ↔ ERP — systems exchanging data automatically." },
    { t: "CRM/ERP automation", d: "Follow-ups, assignments and status changes without manual copying." },
    { t: "Document + approval flows", d: "Quotations, onboarding and expenses with audit trails." },
  ],
  outcomes: ["Manual copying eliminated", "Every run logged and recoverable", "One owner per workflow"],
  faq: [
    ["Automate or AI first?", "Automation first — deterministic and cheap. AI joins where judgment or language is needed."],
    ["What if a flow breaks?", "Failed-job recovery, alerts and an off switch on every workflow."],
  ],
},
{
  slug: "grow", n: "05", t: "Grow",
  lede: "Search, content and lead systems that compound — SEO, AEO, GEO, social, funnels.",
  includes: [
    { t: "Technical + local SEO", d: "Crawlability, speed, structure, reviews and area visibility." },
    { t: "Answer-engine visibility", d: "Content machines can quote: FAQs, entities, schema, citations." },
    { t: "Content systems", d: "Research → script → produce → approve → publish → measure — repeatable, not viral-chasing." },
    { t: "Lead capture → CRM → follow-up", d: "Forms, landing pages and WhatsApp feeding a pipeline that follows up in minutes." },
  ],
  outcomes: ["Discoverable in search and AI answers", "Pipeline with measured cost per job", "Monthly reporting in plain numbers"],
  faq: [
    ["Guarantee rankings?", "No — anyone promising that is selling. We promise stated work and honest reporting."],
    ["How fast?", "Technical fixes in weeks; compounding visibility over quarters. Both tracked."],
  ],
},
{
  slug: "operate", n: "06", t: "Operate",
  lede: "Maintenance, monitoring, optimization. We don't disappear after launch.",
  includes: [
    { t: "Managed websites & software", d: "Updates, monitoring, backups, security, performance, fixes." },
    { t: "Managed automation & AI", d: "Workflow monitoring, failed-job recovery, prompt and knowledge updates." },
    { t: "Managed CRM/ERP", d: "Users, configuration, workflows, reports and support." },
    { t: "Monthly operating rhythm", d: "Measure → diagnose → improve → implement → report." },
  ],
  outcomes: ["Named response times in contract", "Backups tested, not assumed", "Roadmap that never stalls"],
  faq: [
    ["Can you take over existing systems?", "Yes — starting with an audit and stabilization sprint, never blind."],
    ["Month-to-month?", "Quarterly minimum for rhythm; monthly reporting throughout."],
  ],
},
{
  slug: "business-systems", n: "07", t: "Business systems",
  lede: "CRM, ERP and HRM mapped around how the business actually works — not how software wishes it worked.",
  includes: [
    { t: "Sales pipelines", d: "Stages matching reality: quoted, followed up, won, lost-with-reason." },
    { t: "Inventory & purchasing", d: "Stock, suppliers and approvals without spreadsheet chaos." },
    { t: "People operations", d: "Onboarding, leave, documents and performance in one place." },
  ],
  outcomes: ["One operating picture", "Staff trained, not just installed", "Measured in hours saved"],
  faq: [
    ["Custom or off-the-shelf?", "Mapped first, then the cheapest honest answer — configure, integrate, or build."],
    ["Will staff use it?", "Designed with them, trained hands-on, reviewed after 30 days."],
  ],
},
];
