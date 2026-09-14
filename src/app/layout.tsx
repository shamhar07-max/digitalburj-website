import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = IBM_Plex_Sans({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap" });
const grotesk = IBM_Plex_Sans({ variable: "--font-sora", subsets: ["latin"], weight: ["500", "600", "700"], display: "swap" });
const groteskBlack = IBM_Plex_Sans({ variable: "--font-black", subsets: ["latin"], weight: ["700"], display: "swap" });
const plexmono = IBM_Plex_Mono({ variable: "--font-plexmono", subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalburj.com"),
  title: {
    default: "DigitalBurj — Technology company in Dubai",
    template: "%s — DigitalBurj",
  },
  description:
    "DigitalBurj is a technology company in Dubai. Practical AI and automation for businesses in the Gulf, courses and missions on the Academy, and verified talent for companies hiring.",
  keywords: [
    "DigitalBurj", "technology company Dubai", "business automation UAE",
    "WhatsApp automation SME", "AI for small business", "Academy Dubai",
    "CRM implementation", "startup studio Dubai", "verified talent",
    "generative engine optimization", "sales training Dubai",
  ],
  authors: [{ name: "DigitalBurj" }],
  icons: { icon: "/brand/db-icon.svg", apple: "/brand/db-icon.svg" },
  openGraph: {
    title: "DigitalBurj — Technology company in Dubai",
    description: "DigitalBurj in Dubai: Academy, business automation, software builds, verified talent and career services.",
    url: "https://digitalburj.com",
    siteName: "DigitalBurj",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/brand/og-cover.png", width: 1200, height: 369, alt: "DigitalBurj — technology company in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalBurj — Technology company in Dubai",
    description: "Academy, business automation, software builds, verified talent and career services.",
    images: ["/brand/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  width: "device-width",
  initialScale: 1,
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DigitalBurj",
  url: "https://digitalburj.com",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${groteskBlack.variable} ${plexmono.variable}`}>
      <body className="flex min-h-full flex-col bg-lab text-ink">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-cobalt focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white">
          Skip to content
        </a>
        <Navbar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}