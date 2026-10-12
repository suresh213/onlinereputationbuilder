import type { Metadata } from "next";
import Script from "next/script";
import { industries } from "./data";

export const metadata: Metadata = {
  title: "Industry Online Reputation Management | 50+ Specialized Sectors",
  description: "Specialized online reputation management for 50+ industries including doctors, CEOs, lawyers, tech founders, hotels, and universities. Tailored legal and reverse SEO solutions under strict NDA.",
  keywords: [
    "industry online reputation management",
    "doctor reputation management",
    "ceo reputation repair",
    "lawyer reputation management",
    "hotel reputation management",
    "executive reputation management",
    "crypto founder orm",
    "hospital reputation management"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/industry",
  },
  openGraph: {
    title: "Industry Online Reputation Management | 50+ Specialized Sectors",
    description: "Specialized online reputation management for 50+ industries including doctors, CEOs, lawyers, tech founders, hotels, and universities. Tailored legal and reverse SEO solutions under strict NDA.",
    url: "https://onlinereputationbuilders.in/industry",
    siteName: "Online Reputation Builder",
    type: "website",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industry Online Reputation Management Solutions",
  description: "Comprehensive directory of specialized online reputation management services tailored to 50 distinct industries and professions.",
  url: "https://onlinereputationbuilders.in/industry",
  provider: {
    "@type": "Organization",
    name: "Online Reputation Builder",
    url: "https://onlinereputationbuilders.in",
    telephone: "+918882788412"
  },
  hasPart: industries.map((ind) => ({
    "@type": "Service",
    name: ind.title,
    description: ind.metaDescription,
    url: `https://onlinereputationbuilders.in/industry/${ind.slug}`
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://onlinereputationbuilders.in"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: "https://onlinereputationbuilders.in/industry"
    }
  ]
};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="industry-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="industry-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
