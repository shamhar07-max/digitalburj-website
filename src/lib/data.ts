export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Pillar = "Build" | "Automate" | "Grow";

export type Service = {
  slug: string;
  pillar: Pillar;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: string; // lucide icon name
};

export const pillars: { name: Pillar; tagline: string; description: string }[] = [
  {
    name: "Build",
    tagline: "Idea to full-stack platform",
    description:
      "Product strategy, architecture, and engineering — marketplaces, fintech platforms, and mobile/web apps shipped with real auth, payments, and admin tooling from day one.",
  },
  {
    name: "Automate",
    tagline: "Run the business on autopilot",
    description:
      "CRM/ERP builds, AI staff, and workflow automation that take repetitive operations off your team's plate so SMEs can scale without scaling headcount.",
  },
  {
    name: "Grow",
    tagline: "Be found, be chosen, be remembered",
    description:
      "Websites, social, performance marketing, and search visibility across classic SEO and the new AI-driven discovery surfaces — AEO, GEO, and AIO.",
  },
];

export const services: Service[] = [
  {
    slug: "full-stack-product-development",
    pillar: "Build",
    title: "Full-Stack Product Development",
    short: "From idea to shipped platform.",
    description:
      "We take a founder's idea through architecture, design, and engineering to a production-shaped product — not a prototype. Real auth, real data models, real admin consoles.",
    bullets: [
      "Product strategy & technical architecture",
      "Web + mobile apps (Next.js, React, React Native)",
      "API design, databases, and cloud infrastructure",
      "Design systems & component libraries",
    ],
    icon: "Layers",
  },
  {
    slug: "fintech-trading-platforms",
    pillar: "Build",
    title: "Fintech & Trading Platforms",
    short: "CFD, brokerage & prop-firm infrastructure.",
    description:
      "For licensed brokers and prop firms, we build the full trading stack — order engines, KYC/AML, wallets, on-chain settlement, and partner/IB programs — with an immutable financial ledger at the core.",
    bullets: [
      "Order & risk engines, margin and stop-out logic",
      "KYC/AML workflows and admin back-office",
      "On-chain deposits, wallets, and settlement",
      "Partner, IB, and revenue-share programs",
    ],
    icon: "LineChart",
  },
  {
    slug: "marketplace-escrow-platforms",
    pillar: "Build",
    title: "Marketplace & Escrow Platforms",
    short: "Two-sided platforms that hold trust, not just data.",
    description:
      "Freight marketplaces, B2B procurement exchanges, e-commerce and affiliate platforms — built with verification, escrow, dispute resolution, and audit trails as first-class features.",
    bullets: [
      "Buyer/seller or shipper/carrier matching engines",
      "Escrow, payouts, and dispute workflows",
      "Verification and trust & safety tooling",
      "Admin consoles with full audit logs",
    ],
    icon: "ShieldCheck",
  },
  {
    slug: "website-development",
    pillar: "Build",
    title: "Website Development",
    short: "Fast, on-brand, built to convert.",
    description:
      "Marketing sites, e-commerce storefronts, and web apps engineered for speed and SEO from the first commit — not bolted on afterward.",
    bullets: [
      "Marketing sites & landing pages",
      "E-commerce & booking systems",
      "CMS-backed content platforms",
      "Performance, accessibility & Core Web Vitals",
    ],
    icon: "Globe",
  },
  {
    slug: "sme-automation",
    pillar: "Automate",
    title: "SME Automation — CRM / ERP / AI Staff",
    short: "Systems that run without you in the loop.",
    description:
      "We design and deploy CRM and ERP systems tailored to how a UAE SME actually operates, plus AI staff that handle inbound leads, bookings, support, and back-office work around the clock.",
    bullets: [
      "Custom CRM & ERP builds and integrations",
      "AI staff for sales, support & operations",
      "Invoicing, inventory, and workflow automation",
      "Dashboards & reporting for owners and managers",
    ],
    icon: "Bot",
  },
  {
    slug: "ai-automation-agents",
    pillar: "Automate",
    title: "AI Automation & Agents",
    short: "LLM-powered workflows, WhatsApp-first.",
    description:
      "From WhatsApp-first customer journeys to document processing and internal copilot tools, we wire AI into the parts of the business that eat the most hours.",
    bullets: [
      "WhatsApp & chat-first automation flows",
      "Document intake, routing & processing",
      "Internal copilots and knowledge assistants",
      "Integrations across your existing tool stack",
    ],
    icon: "Sparkles",
  },
  {
    slug: "social-media-management",
    pillar: "Grow",
    title: "Social Media Management",
    short: "Consistent, on-brand, always-on.",
    description:
      "Content calendars, creative production, and community management that keep a brand visible and consistent across every platform that matters to it.",
    bullets: [
      "Content strategy & editorial calendars",
      "Creative production (graphics, reels, copy)",
      "Community management & engagement",
      "Monthly performance reporting",
    ],
    icon: "Share2",
  },
  {
    slug: "digital-marketing",
    pillar: "Grow",
    title: "Digital Marketing",
    short: "Paid, funnels, and conversion.",
    description:
      "Performance campaigns across search and social, landing pages built to convert, and funnels instrumented well enough to know what's actually working.",
    bullets: [
      "Paid search & social campaigns",
      "Funnel design & landing page CRO",
      "Marketing automation & email flows",
      "Analytics, attribution & reporting",
    ],
    icon: "Megaphone",
  },
  {
    slug: "seo-aeo-geo-aio",
    pillar: "Grow",
    title: "SEO / AEO / GEO / AIO",
    short: "Visible in search engines and AI answers.",
    description:
      "Classic search optimization plus the new discovery surfaces — Answer Engine, Generative Engine, and AI Overview optimization — so a brand shows up whether the query lands on Google or on ChatGPT.",
    bullets: [
      "Technical & on-page SEO",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI Overview Optimization (AIO)",
    ],
    icon: "Search",
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: "Live Build" | "Platform Build" | "MVP Build" | "In Development";
  region: string;
  summary: string;
  problem: string;
  approach: string;
  stack: string[];
  highlights: string[];
  color: string; // tailwind gradient classes
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "loadbyton",
    name: "Loadbyton",
    tagline: "UAE road freight & container drayage marketplace",
    category: "Marketplace · Logistics",
    status: "Live Build",
    region: "UAE — Dubai, Abu Dhabi, Sharjah, Fujairah",
    summary:
      "A full-stack marketplace connecting shippers who need a container or truck moved with verified carriers across the UAE — with escrow-held payments, live job tracking, and a complete admin back office.",
    problem:
      "UAE road freight ran on phone calls and WhatsApp groups — shippers had no visibility into pricing or carrier reliability, and carriers had no verified pipeline of loads.",
    approach:
      "We built a two-sided marketplace covering 12 equipment types from container chassis to flatbeds: shippers post jobs, verified carriers bid price and ETA, and the platform holds funds in escrow through pickup, transit, and delivery — releasing payout on confirmation or automatically after 24 hours.",
    stack: ["Node 22", "Express", "SQLite (WAL)", "React 18", "Vite", "Tailwind CSS"],
    highlights: [
      "Escrow state machine: HELD → FUNDED → RELEASED, with dispute freezing",
      "Carrier verification queue, TOTP 2FA, and full audit-log trail",
      "Recurring job templates, contract lanes, loyalty tiers & referrals",
      "Server-rendered SEO pages + prerendered marketing routes for crawlability",
    ],
    color: "from-cyan-400 to-indigo-500",
  },
  {
    slug: "veloztrade",
    name: "VelozTrade",
    tagline: "Full-stack CFD trading platform for licensed brokers",
    category: "Fintech · Trading",
    status: "Platform Build",
    region: "UAE-based, global markets",
    summary:
      "A complete retail trading platform — forex, crypto, stocks, commodities, and indices CFDs — with a real order engine, KYC, on-chain deposits, and a multi-tier partner program, built for operators holding the right licenses.",
    problem:
      "Standing up a compliant, licensed CFD or prop-trading brand needs more than a white-label chart — it needs a real ledger, real risk controls, and a back office an ops team can actually run.",
    approach:
      "We built the full stack: ~75 tradable instruments across five asset classes with per-class leverage, server-enforced SL/TP and margin-call/stop-out logic, an append-only financial ledger for every balance mutation, and an automated BSC/Polygon USDT deposit scanner alongside manual admin-approved flows.",
    stack: ["TypeScript", "Drizzle ORM + PostgreSQL", "Express 5 + WebSocket", "React", "shadcn/ui", "WalletConnect"],
    highlights: [
      "Immutable, append-only ledger for deposits, PnL, swaps, and commissions",
      "IB / Sub-IB partner program with tiered rebates and revenue share",
      "Real-time price streaming with SL/TP, margin call & stop-out engine",
      "Single-container deployment serving SPA, API, and WebSocket on one port",
    ],
    color: "from-amber-400 to-rose-500",
  },
  {
    slug: "upex",
    name: "UPEX",
    tagline: "UAE Procurement Exchange",
    category: "B2B Marketplace · Procurement",
    status: "MVP Build",
    region: "United Arab Emirates",
    summary:
      "A demand-first procurement platform: buyers post inquiries that get aggregated into consolidated RFQs, verified global suppliers compete on landed cost, and logistics partners bid on the resulting shipments.",
    problem:
      "SME buyers in the UAE lack the volume to negotiate like large importers, and suppliers waste cycles chasing one-off inquiries instead of consolidated demand.",
    approach:
      "Buyer inquiries are classified and pooled into consolidated RFQs, giving suppliers real volume to quote against. Once a purchase order exists, logistics partners bid on the freight, and escrow-protected payments settle the whole chain from wallet to delivery.",
    stack: ["Next.js 15 (App Router)", "React 19", "Prisma + PostgreSQL", "TypeScript", "Zod"],
    highlights: [
      "Demand pooling that turns fragmented inquiries into leverage",
      "Role-scoped portals for buyers, suppliers, logistics, and ops",
      "Wallet-funded escrow with milestone-based release",
      "AI-assisted classification and quantity extraction on inbound inquiries",
    ],
    color: "from-emerald-400 to-teal-500",
  },
  {
    slug: "imamcollective",
    name: "ImamCollective",
    tagline: "Islamic lifestyle marketplace & affiliate platform",
    category: "E-commerce · Affiliate",
    status: "MVP Build",
    region: "GCC & global Muslim diaspora",
    summary:
      "A curated marketplace for Islamic lifestyle products with a built-in affiliate program — letting a community of creators earn from products they already recommend.",
    problem:
      "The Islamic lifestyle category is underserved by modern e-commerce UX and has no easy way for community voices to monetize their recommendations.",
    approach:
      "We built a product-and-shop experience alongside a self-serve affiliate system, so the same platform serves buyers, a curated product catalogue, and a network of referrers earning commission — with Stripe handling payments end to end.",
    stack: ["Next.js 16", "React 19", "Prisma", "Stripe", "NextAuth", "Radix UI", "Zustand"],
    highlights: [
      "Curated shop and product-detail experience",
      "Self-serve affiliate program with attribution",
      "Stripe-powered checkout and payments",
      "Component system built on Radix primitives + Tailwind v4",
    ],
    color: "from-fuchsia-400 to-purple-500",
  },
  {
    slug: "skillbridge",
    name: "Skill Bridge",
    tagline: "Bridging talent and opportunity for the region's workforce",
    category: "EdTech · Workforce",
    status: "In Development",
    region: "United Arab Emirates",
    summary:
      "A platform designed to connect job-seekers building in-demand skills with employers who need them — closing the gap between training and real employment outcomes.",
    problem:
      "Upskilling programs and hiring pipelines in the region rarely talk to each other, leaving trained talent undiscovered and employers still struggling to fill roles.",
    approach:
      "DigitalBurj is currently building Skill Bridge's core matching engine and employer/candidate portals — applying the same marketplace and trust-layer patterns we've shipped on Loadbyton and UPEX to a workforce-development use case.",
    stack: ["Next.js", "PostgreSQL", "TypeScript"],
    highlights: [
      "Currently in active development",
      "Employer and candidate portal architecture underway",
      "Built on the same verified-marketplace playbook as our logistics and procurement work",
    ],
    color: "from-sky-400 to-blue-600",
  },
  {
    slug: "attestchain",
    name: "AttestChain",
    tagline: "AI-powered, WhatsApp-first attestation & apostille platform",
    category: "AI · GovTech Services",
    status: "In Development",
    region: "India, six-city agent network",
    summary:
      "A venture digitizing the attestation, apostille, and immigration-document services market — replacing a 2–8 week, multi-department manual process with AI-routed, WhatsApp-tracked service and a guaranteed turnaround time.",
    problem:
      "Millions of people need documents attested for overseas work, study, or immigration every year, and today that means multiple physical visits, opaque pricing, and no visibility into where a document actually is.",
    approach:
      "DigitalBurj is building AttestChain's AI Route Advisor — which reads document type, issuing authority, and destination to recommend the correct processing route — on top of a WhatsApp-first tracking experience and a verified agent network with chain-of-custody photo evidence at every handoff.",
    stack: ["AI routing engine", "WhatsApp Business API", "Agent network ops tooling"],
    highlights: [
      "AI Route Advisor to prevent wrong-route rejections",
      "WhatsApp-first tracking — no app download required",
      "Transparent published pricing, guaranteed TAT",
      "Tamper-evident, photo-verified chain of custody",
    ],
    color: "from-yellow-300 to-amber-600",
  },
];

export const stats = [
  { value: 6, suffix: "+", label: "Ventures built end-to-end" },
  { value: 9, suffix: "", label: "Service lines under one roof" },
  { value: 4, suffix: "", label: "Emirates covered on the ground" },
  { value: 100, suffix: "%", label: "In-house build — no outsourcing chain" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We dig into the problem, the market, and the constraints — licensing, region, budget — before a line of code gets written.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Architecture and interface design happen together, so the product looks right and holds together under real usage.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Full-stack engineering with production-shaped foundations — real auth, real data, real admin tooling — from the first sprint.",
  },
  {
    step: "04",
    title: "Automate",
    description:
      "We wire in the CRM/ERP, AI staff, and workflow automation that let the business run without a person in every loop.",
  },
  {
    step: "05",
    title: "Grow",
    description:
      "Website, social, performance marketing, and SEO/AEO/GEO/AIO visibility — so the product built gets found and chosen.",
  },
];
