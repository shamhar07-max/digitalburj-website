// DigitalBurj content bank 2/2 — services, markets, programs, glossary, handbook.

export type Service = { slug: string; name: string; tagline: string; deliverables: string[]; outcomes: string[] };
export const SERVICES: Service[] = [
{ slug: "website-development", name: "Website Development", tagline: "Sites engineered to ring, not just to look.", deliverables: ["Bilingual-ready marketing site", "Speed and Core Web Vitals pass", "Analytics + call tracking setup", "30-day fix window"], outcomes: ["Enquiry-ready in weeks", "Owner-editable content"] },
{ slug: "ai-agents", name: "AI Agents", tagline: "Staff that never sleep, supervised by you.", deliverables: ["One scoped agent pilot", "CRM connection + boundaries doc", "Escalation paths to humans", "Transcript review routine"], outcomes: ["After-hours coverage", "Faster first response"] },
{ slug: "business-automation", name: "Business Automation", tagline: "Repetitive work, handled quietly.", deliverables: ["Workflow map + automation build", "Owner + off-switch assigned", "Staff walkthrough session", "Runbook document"], outcomes: ["Hours returned weekly", "Fewer copy errors"] },
{ slug: "seo", name: "SEO", tagline: "Found when it matters, area by area.", deliverables: ["Technical fix pass", "Service + area pages", "Review engine setup", "Monthly leads report"], outcomes: ["Calls from search", "Compounding visibility"] },
{ slug: "aeo-aio-geo", name: "AEO / AIO / GEO", tagline: "Cited by answers, not just links.", deliverables: ["Answer-target audit", "FAQ + schema builds", "Definition paragraphs", "Citation tracking"], outcomes: ["AI-answer citations", "Future-proof visibility"] },
{ slug: "social-media", name: "Social Media", tagline: "Proof, posted consistently.", deliverables: ["Content calendar", "Shoot-day production", "Posting + replies routine", "Monthly performance note"], outcomes: ["Warm local audience", "Enquiries from DMs"] },
{ slug: "crm", name: "CRM Implementation", tagline: "Every lead owned, every follow-up timed.", deliverables: ["Pipeline matching your sale", "WhatsApp + data migration", "Staff training session", "Weekly review habit"], outcomes: ["No lost leads", "Honest forecasts"] },
{ slug: "erp", name: "ERP Systems", tagline: "Stock, invoices and ops in one place.", deliverables: ["Inventory + invoicing core", "Master data cleanup", "Parallel month-end run", "30-day go-live support"], outcomes: ["One version of truth", "Month-end without panic"] },
{ slug: "hrm", name: "HRM & People Ops", tagline: "Attendance to onboarding, organized.", deliverables: ["Leave + attendance setup", "Document expiry alerts", "Onboarding checklists", "HR dashboard"], outcomes: ["Half the HR queries", "No expiry surprises"] },
{ slug: "lead-generation", name: "Lead Generation", tagline: "Pipeline built on purpose.", deliverables: ["Offer + funnel build", "Speed-to-lead routine", "Qualification script", "Cost-per-job tracking"], outcomes: ["Booked jobs, not clicks", "Revival pipeline"] },
{ slug: "mobile-apps", name: "Android / iOS Applications", tagline: "Five screens done well.", deliverables: ["Scoped 5-screen build", "Admin panel + backend", "Store submission handling", "Crash reporting live"], outcomes: ["Staff/customer tool live", "Maintained yearly"] },
{ slug: "startup-mvp", name: "Startup MVP Development", tagline: "The smallest version strangers can use.", deliverables: ["Validation sprint output", "Working core transaction", "Admin + analytics", "Handover with docs"], outcomes: ["Real user evidence", "Fundable next step"] },
{ slug: "digital-transformation", name: "Digital Transformation", tagline: "Habits first, tools second.", deliverables: ["Pain-point audit", "Pilot department rollout", "Adoption coaching", "Hours-saved reporting"], outcomes: ["One proven pattern", "Company-wide rollout path"] },
{ slug: "ai-implementation", name: "AI Implementation", tagline: "A quarterly roadmap, not a shopping list.", deliverables: ["Workflow + data audit", "30-day pilot, one metric", "Staff training", "Scale/kill decision"], outcomes: ["Measured ROI per quarter", "Team that trusts the tools"] },
{ slug: "analytics-reporting", name: "Analytics & Reporting", tagline: "Five numbers owners open.", deliverables: ["Metric definitions doc", "Live dashboard build", "Monday summary automation", "Quarterly prune review"], outcomes: ["Decisions from data", "No vanity metrics"] },
];

export type Market = { slug: string; name: string; note: string };
export const INDUSTRIES: Market[] = [
{ slug: "restaurants", name: "Restaurants & Cafes", note: "Menus, reservations, reviews and delivery visibility." },
{ slug: "retail", name: "Retail & Shops", note: "Footfall, WhatsApp catalogues and repeat buyers." },
{ slug: "real-estate", name: "Real Estate", note: "Speed-to-lead, viewings and long follow-up arcs." },
{ slug: "clinics", name: "Clinics & Wellness", note: "Bookings, reminders and reputation management." },
{ slug: "logistics", name: "Logistics & Transport", note: "Quotes, tracking updates and POD discipline." },
{ slug: "professional-services", name: "Professional Services", note: "Authority content, proposals and referral loops." },
{ slug: "hospitality", name: "Hospitality", note: "Direct bookings, guest messaging and reviews." },
{ slug: "ecommerce", name: "E-commerce Sellers", note: "COD, instalments and cart recovery." },
{ slug: "automotive", name: "Automotive & Garages", note: "Service bookings, estimates and reminders." },
{ slug: "education", name: "Education & Training", note: "Enquiries, counselling follow-up and batches." },
];
export const EMIRATES: Market[] = [
{ slug: "dubai", name: "Dubai", note: "Dense competition; speed and reviews decide." },
{ slug: "abu-dhabi", name: "Abu Dhabi", note: "Relationship-led buying; Arabic presence matters." },
{ slug: "sharjah", name: "Sharjah", note: "Value-conscious market; bilingual reach wins." },
{ slug: "ajman", name: "Ajman", note: "Tight communities; reputation travels fast." },
{ slug: "ras-al-khaimah", name: "Ras Al Khaimah", note: "Tourism + industry mix; seasonal planning helps." },
{ slug: "fujairah", name: "Fujairah", note: "Port and trade flows shape demand." },
{ slug: "umm-al-quwain", name: "Umm Al Quwain", note: "Small market; every lead counts double." },
];

export type Program = { slug: string; name: string; weeks: string; level: string; format: string; modules: string[]; tools: string[]; assessment: string };
const M = (modules: string[]) => modules;
export const PROGRAMS: Program[] = [
{ slug: "sales-executive", name: "Sales Executive — Job Ready", weeks: "8 weeks", level: "Job-ready", format: "Live calls + CRM", modules: [
"W1 Sales fundamentals: pipeline math, buyer types, activity targets",
"W2 Prospecting: lists, research, first-line personalization",
"W3 Calling & communication: scripts, tone, objection openers",
"W4 CRM: pipeline hygiene, notes that help, stuck-deal alerts",
"W5 Objection handling: price, timing, trust — live roleplays",
"W6 Negotiation: trading concessions, closing language",
"W7 Closing: commitments, follow-through, handover notes",
"W8 Practical project: real supervised outreach campaign with reports"], tools: ["CRM pipeline", "Call scripts", "Qualification sheet"], assessment: "40 graded calls + pipeline review + mock close" },
{ slug: "business-development", name: "Business Development Executive", weeks: "8 weeks", level: "Job-ready", format: "Outreach + meetings", modules: M(["Market mapping", "Outreach sequences", "Discovery meetings", "Proposals", "Pipeline reviews", "Handover discipline"]), tools: ["LinkedIn", "CRM", "Proposal template"], assessment: "10 booked qualified meetings" },
{ slug: "real-estate-sales", name: "Real Estate Sales — Assistant Level", weeks: "6 weeks", level: "Job-ready", format: "Viewings + CRM", modules: M(["Area knowledge", "Lead handling speed", "Viewings conduct", "Follow-up arcs", "Documentation basics", "Licence pathway briefing"]), tools: ["Portals", "CRM", "Viewing checklist"], assessment: "Mock viewings + follow-up plan" },
{ slug: "customer-service", name: "Customer Service Professional", weeks: "6 weeks", level: "Job-ready", format: "Tickets + calls", modules: M(["Communication basics", "Ticketing systems", "Complaint handling", "Escalation judgment", "Difficult conversations", "Recovery + reviews"]), tools: ["Ticketing", "Call scripts"], assessment: "20 graded tickets + call review" },
{ slug: "receptionist", name: "Receptionist / Front Desk", weeks: "4 weeks", level: "Foundation+", format: "Roleplays", modules: M(["Greeting standards", "Phone handling", "Visitor management", "Bookings", "Complaint first-response", "Handover logs"]), tools: ["Booking sheet", "Phone script"], assessment: "Live desk simulation" },
{ slug: "office-admin", name: "Office Administration", weeks: "6 weeks", level: "Job-ready", format: "Inbox + sheets", modules: M(["Email discipline", "Documents + filing", "Scheduling", "Records + reporting", "Vendor coordination", "Petty cash basics"]), tools: ["Sheets", "Drive", "Email"], assessment: "Admin inbox simulation" },
{ slug: "admin-assistant", name: "Administrative Assistant", weeks: "6 weeks", level: "Job-ready", format: "Executive support", modules: M(["Calendar management", "Meeting support", "Travel coordination", "Expense tracking", "Confidentiality", "Reporting to managers"]), tools: ["Calendar", "Sheets"], assessment: "Support-week simulation" },
{ slug: "data-entry", name: "Data Entry & Records", weeks: "4 weeks", level: "Foundation", format: "Speed + accuracy", modules: M(["Typing discipline", "Spreadsheet basics", "Validation rules", "CRM entry", "Error checking", "Confidentiality"]), tools: ["Sheets", "CRM"], assessment: "Timed accuracy battery" },
{ slug: "retail-operations", name: "Retail & Store Operations", weeks: "4 weeks", level: "Foundation+", format: "Floor drills", modules: M(["Customer greeting", "POS basics", "Stock + merchandising", "Upselling", "Returns handling", "Closing routine"]), tools: ["POS", "Stock sheet"], assessment: "Floor shift simulation" },
{ slug: "hospitality-service", name: "Hospitality & Guest Services", weeks: "6 weeks", level: "Job-ready", format: "Guest scenarios", modules: M(["Service standards", "Reservations", "Check-in/out", "Complaint recovery", "Upselling stays", "Review generation"]), tools: ["Booking system"], assessment: "Guest-journey roleplays" },
{ slug: "logistics-ops", name: "Logistics & Operations Assistant", weeks: "6 weeks", level: "Job-ready", format: "Docs + tracking", modules: M(["Documentation", "Dispatch coordination", "Tracking updates", "POD discipline", "Customer communication", "Exception handling"]), tools: ["Tracking sheets", "WhatsApp"], assessment: "Shipment desk simulation" },
{ slug: "digital-marketing-exec", name: "Digital Marketing Executive", weeks: "8 weeks", level: "Job-ready", format: "Live accounts", modules: M(["Offer + funnel basics", "Content calendar", "Paid social setup", "SEO fundamentals", "Analytics", "Monthly reporting"]), tools: ["Ad accounts", "Analytics"], assessment: "Live campaign + report" },
];

export const GLOSSARY_CATS: { cat: string; terms: string[] }[] = [
{ cat: "SEO & Search", terms: ["Alt text", "Anchor text", "Backlink", "Bounce rate", "Canonical URL", "Click-through rate", "Core Web Vitals", "Crawl budget", "Domain authority", "Featured snippet", "Hreflang", "Index coverage", "Keyword intent", "Long-tail keyword", "Meta description", "NAP consistency", "Organic traffic", "Redirect chain", "Robots.txt", "Schema markup", "SERP", "Sitemap", "Title tag", "301 redirect", "404 page"] },
{ cat: "AI & Automation", terms: ["AI agent", "Chatbot vs agent", "Prompt", "Hallucination", "Knowledge base", "Escalation path", "Workflow trigger", "Webhook", "API integration", "CRM sync", "Lead scoring", "Sentiment analysis", "Transcript review", "Fine-tuning", "Embeddings", "Vector search", "Guardrails", "Human-in-the-loop", "Automation owner", "Off switch"] },
{ cat: "Sales & CRM", terms: ["Pipeline stage", "Lead vs prospect", "Qualification", "Speed-to-lead", "Follow-up sequence", "Objection handling", "Discovery call", "Proposal", "Close rate", "Churn", "Upsell", "Cross-sell", "Referral", "Territory", "Quota", "Forecast", "Win/loss review", "Stuck deal", "Touchpoint", "Handover note"] },
{ cat: "Business Systems", terms: ["ERP", "CRM", "HRM", "POS", "Inventory turnover", "Reorder point", "Cycle count", "Month-end close", "Chart of accounts", "Purchase order", "Goods receipt", "Leave balance", "Attendance", "Payslip", "Onboarding", "Offboarding", "SOP", "Audit trail", "Access control", "Data backup"] },
{ cat: "Marketing & Growth", terms: ["Cost per lead", "Cost per acquisition", "Conversion rate", "Landing page", "Call to action", "A/B test", "Retargeting", "Lookalike audience", "Marketing funnel", "Lead magnet", "Email sequence", "Broadcast list", "Influencer seeding", "UGC", "Social proof", "Review velocity", "Google Business Profile", "Call tracking", "Attribution", "ROAS"] },
{ cat: "Workplace Skills", terms: ["Professional email", "Meeting agenda", "Minutes of meeting", "Timesheet", "KPI", "OKR", "Escalation", "Probation review", "Notice period", "Handover", "Standard operating procedure", "Confidentiality", "Conflict of interest", "Performance review", "Feedback sandwich", "Active listening", "Time blocking", "Priority matrix", "Status report", "Stakeholder"] },
{ cat: "Startup & Product", terms: ["MVP", "Validation sprint", "Product-market fit", "User story", "Wireframe", "Prototype", "Tech stack", "API", "Database", "Authentication", "Admin panel", "Staging environment", "Rollback plan", "Uptime", "Bug triage", "Feature flag", "Changelog", "Roadmap", "Burn rate", "Runway"] },
{ cat: "AI Search", terms: ["Answer engine", "AI Overview", "Citation", "Entity", "Knowledge panel", "Zero-click search", "Featured answer", "Speakable content", "E-E-A-T", "Freshness signal"] },
];

export type Doc = { slug: string; section: string; title: string; body: string[] };
export const LIFECYCLE: [string, string, string][] = [
["Discover", "Who owns the problem and what hurts", "Problem statement signed"],
["Audit / Diagnose", "Evidence before opinions: data, calls, screens", "Findings report"],
["Strategy", "Where to play and what winning looks like", "One-page strategy"],
["Scope / Define", "In, out, and explicitly not-building", "Scope document"],
["Plan", "Milestones, owners, dates, dependencies", "Plan + RACI"],
["Design", "Flows and interfaces before code", "Approved designs"],
["Execute / Build", "Weekly demos against scope", "Working increments"],
["QA", "Acceptance criteria checked, devices covered", "QA sign-off"],
["Launch", "Checklist, rollback plan, comms ready", "Live + announcement"],
["Measure", "The one metric that matters, reviewed", "Evidence review"],
["Optimize", "Fix drop-offs before buying traffic", "Prioritized backlog"],
["Scale", "Harden, staff, and grow what proved out", "Scale decision"],
];
export const PRINCIPLES = [
"Fixed scope in writing before money moves", "Clear deliverables with acceptance criteria",
"Staged milestones, never 100% upfront", "Change requests priced separately, in writing",
"No unlimited revisions — rounds defined per item", "Client-owned accounts: domain, hosting, ad, cloud",
"Credentials in a vault, never in chat threads", "AI-generated work verified by a human before delivery",
"No guaranteed rankings, jobs, visas or revenues", "Documentation delivered with the work, not later",
"QA sign-off required before every launch", "Rollback plan written before deploy day",
"Support procedure with response times, in the contract", "Monthly reports in numbers owners use",
"Renewals proposed before expiry, never auto-assumed", "Kill rules for pilots that miss their metric",
];
export const FOLDERS: [string, string][] = [
["01 Discovery", "Notes, call recordings log, problem statement"], ["02 Contract", "Signed scope, terms, payment schedule"],
["03 Brand", "Logo, fonts, colors, voice notes"], ["04 Research", "Competitors, references, screenshots"],
["05 Audit", "Findings, data exports, issue list"], ["06 Strategy", "One-page strategy, goals, metrics"],
["07 Scope", "In/out lists, acceptance criteria"], ["08 Content", "Copy drafts, photos, videos, translations"],
["09 Design", "Figma links, approved screens, assets"], ["10 Development", "Repo, env docs, credentials vault ref"],
["11 Automation", "Flow diagrams, accounts, runbooks"], ["12 SEO", "Audits, keywords, content calendar"],
["13 Social", "Calendars, creatives, posting log"], ["14 Analytics", "Dashboards, tracking docs, reports"],
["15 QA", "Checklists, device matrix, sign-offs"], ["16 Launch", "Launch checklist, rollback plan, comms"],
["17 Reports", "Monthly PDFs, meeting notes"], ["18 Assets", "Final exports, source files"],
["19 Approvals", "Written approvals per stage"], ["20 Roadmap", "Backlog, priorities, next quarter"],
];
export const ENG: [string, string][] = [
["Product Overview", "One page: users, value, money flow."], ["Business Rules", "Pricing, eligibility, edge cases written down."],
["User Roles", "Every role and what each can touch."], ["User Journeys", "Happy path plus the three sad paths."],
["System Architecture", "Diagram plus why-this-shape note."], ["Frontend Architecture", "Routes, state, and component rules."],
["Backend Architecture", "Services, jobs, and failure handling."], ["Database", "Schema, indexes, and retention policy."],
["API Documentation", "Endpoints, auth, errors, examples."], ["Authentication", "Sessions, expiry, and recovery flows."],
["Authorization", "Role checks on every mutating route."], ["Security", "Threat list, mitigations, review dates."],
["Payments", "Rails, reconciliation, and refund rules."], ["Ledger", "Double-entry movements, immutable log."],
["Webhooks", "Providers, retries, idempotency keys."], ["Notifications", "Channels, templates, quiet hours."],
["WhatsApp", "Templates approved before launch week."], ["Documents", "Storage, retention, access rules."],
["Insurance", "Coverage, claims path, exclusions."], ["Disputes", "Freeze rules, evidence, resolution steps."],
["Compliance", "Licences, checks, review cadence."], ["Infrastructure", "Providers, regions, cost notes."],
["Environments", "Dev, staging, production parity."], ["Git/GitHub", "Branching, reviews, protected main."],
["CI/CD", "Checks that gate every deploy."], ["Testing", "Unit, integration, and manual passes."],
["Monitoring", "Uptime, errors, and who gets paged."], ["Logging", "What is logged, what never is."],
["Alerts", "Thresholds plus on-call rotation."], ["Backups", "Schedule plus tested restores."],
["Disaster Recovery", "RTO/RPO targets and drill log."], ["Incident Response", "Roles, comms, post-mortem template."],
["Scaling", "Bottlenecks in order, with triggers."], ["Performance", "Budgets for speed and payload."],
["Cost Management", "Monthly review, kill list for waste."], ["Customer Support", "Channels, SLAs, macros."],
["Fraud & Abuse", "Signals, limits, and ban process."], ["Legal/Compliance", "Counsel review points."],
["Data Protection", "PDPL-aware handling and deletion paths."], ["Release Management", "Versioning and rollout notes."],
["Rollback", "One-command revert, tested quarterly."], ["Vendor Dependencies", "List, costs, exit plans."],
["Known Limitations", "Printed honestly, reviewed quarterly."], ["Technical Debt", "Register with interest rates."],
["Roadmap", "Next quarter, in priority order."],
];
export const UAE_NOTES: [string, string][] = [
["Transport licensing", "Classification follows conduct and contracts — get counsel before launch."],
["RTA requirements", "Commercial transport rules vary by emirate and activity."],
["VAT at 5%", "Registration, invoicing and filing discipline from the first dirham."],
["Payment regulation", "Holding client funds may trigger licensing questions."],
["Data protection (PDPL)", "Consent, minimization and deletion paths documented."],
["Electronic records", "Contracts and logs kept admissible and retrievable."],
];
