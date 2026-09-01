import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalburj.com"),
  title: {
    default: "DigitalBurj — Build. Automate. Grow.",
    template: "%s — DigitalBurj",
  },
  description:
    "DigitalBurj is a UAE-based build partner taking founders from idea to full-stack platform — fintech, marketplaces, and SME automation — then growing what we build.",
  keywords: [
    "DigitalBurj",
    "UAE software agency",
    "Dubai web development",
    "SME automation UAE",
    "CRM ERP AI staff",
    "fintech platform development",
    "SEO AEO GEO AIO",
  ],
  openGraph: {
    title: "DigitalBurj — Build. Automate. Grow.",
    description:
      "From idea to full-stack platform — fintech, marketplaces, and SME automation for the UAE and beyond.",
    url: "https://digitalburj.com",
    siteName: "DigitalBurj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalBurj — Build. Automate. Grow.",
    description:
      "From idea to full-stack platform — fintech, marketplaces, and SME automation for the UAE and beyond.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
