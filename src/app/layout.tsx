import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const grotesk = Space_Grotesk({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const groteskBlack = Space_Grotesk({ variable: "--font-black", subsets: ["latin"], weight: ["700"], display: "swap" });
const jbmono = JetBrains_Mono({ variable: "--font-plexmono", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const plexserif = IBM_Plex_Serif({ variable: "--font-plexserif", subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalburj.com"),
  title: {
    default: "DigitalBurj — Intelligence. Engineered.",
    template: "%s — DigitalBurj",
  },
  description:
    "DigitalBurj is a technology company, AI laboratory and transformation studio. Academy courses, startup builds, SME systems, verified talent certification and global career readiness.",
  keywords: [
    "DigitalBurj", "AI agents small business", "WhatsApp automation UAE",
    "answer engine optimization", "AEO", "generative engine optimization", "GEO",
    "AI Overviews visibility", "local SEO Dubai", "CRM implementation",
    "startup MVP studio", "business automation", "RAG knowledge base",
    "sales training Dubai", "admin assistant course", "talent certification",
  ],
  authors: [{ name: "DigitalBurj" }],
  icons: { icon: "/brand/db-icon-neo.svg", apple: "/brand/db-icon-neo.svg" },
  openGraph: {
    title: "DigitalBurj — Intelligence Engineered",
    description: "Human intelligence × AI systems × engineered execution. Academy, Studio, Business AI, Talent, Global Careers.",
    url: "https://digitalburj.com",
    siteName: "DigitalBurj",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/brand/og-cover.png", width: 1200, height: 369, alt: "DigitalBurj — Intelligence. Engineered." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalBurj — Intelligence Engineered",
    description: "Academy, Studio, Business AI, Talent and Global Careers.",
    images: ["/brand/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF6EE",
  width: "device-width",
  initialScale: 1,
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DigitalBurj",
  url: "https://digitalburj.com",
  slogan: "Human intelligence × AI systems × engineered execution.",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${groteskBlack.variable} ${jbmono.variable} ${plexserif.variable}`}>
      <body className="flex min-h-full flex-col bg-lab text-ink">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-cobalt focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white">
          Skip to content
        </a>
        <Navbar />
        <link rel="preconnect" href="https://picsum.photos" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
