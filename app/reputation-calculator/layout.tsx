import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Online Reputation Risk Calculator | Free Brand Damage & Threat Assessment",
  description: "Calculate your Google reputation risk score, financial loss from negative search results, and get a custom de-indexing roadmap with our 2026 diagnostic tool.",
  keywords: [
    "reputation risk calculator",
    "online reputation calculator",
    "calculate reputation damage",
    "check brand reputation google",
    "negative review financial impact calculator",
    "free reputation audit tool"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/reputation-calculator",
  },
  openGraph: {
    title: "Online Reputation Risk Calculator | Free Brand Damage Assessment",
    description: "Evaluate your Google search vulnerabilities, calculate monthly revenue loss from negative links, and unlock a confidential takedown strategy.",
    url: "https://onlinereputationbuilders.in/reputation-calculator",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Online Reputation Risk & Financial Impact Calculator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "url": "https://onlinereputationbuilders.in/reputation-calculator",
  "description": "Interactive diagnostic tool calculating search threat severity index and revenue impact of negative Google search results.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR"
  },
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in"
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="calculator-tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {children}
    </>
  );
}
