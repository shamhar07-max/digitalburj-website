export const navPrimary = [
  { label: "Academy", href: "/academy" },
  { label: "Studio", href: "/studio" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navSolutions = [
  { label: "Transform", href: "/services/transform" },
  { label: "Build", href: "/services/build" },
  { label: "Intelligence", href: "/services/intelligence" },
  { label: "Automate", href: "/services/automate" },
  { label: "Grow", href: "/services/grow" },
  { label: "Operate", href: "/services/operate" },
  { label: "Business systems", href: "/services/business-systems" },
];

export const navEcosystem = [
  { label: "Academy", href: "/academy" },
  { label: "Studio", href: "/studio" },
  { label: "Business", href: "/business-ai" },
  { label: "Talent", href: "/talent" },
  { label: "Jobs", href: "/jobs" },
  { label: "Journal", href: "/journal" },
];

/** @deprecated Use navPrimary/navSolutions/navEcosystem. */
export const nav = [...navPrimary];

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
};

export const caseStudies: CaseStudy[] = [];

export const stats = [
  { value: 12, suffix: "", label: "Role programs across 2 schools" },
  { value: 5, suffix: "", label: "Certification levels, L1–L5" },
  { value: 5, suffix: "", label: "Practice tracks, one record" },
  { value: 24, suffix: "h", label: "First-reply commitment" },
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
