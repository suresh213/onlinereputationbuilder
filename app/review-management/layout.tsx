import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Review Management & Content Removal Services",
  description: "Complete control over your review profiles. Flag and remove fake reviews, delete forum posts, and manage Glassdoor, Trustpilot, Indeed, and Google.",
  keywords: ["review management", "content removal services", "delete negative reviews", "manage brand profiles", "Google maps repair", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management",
  },
};

import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you remove negative Google reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If a Google review violates Google's terms of service (e.g., fake reviews, conflict of interest, harassment, spam), we can file legal and policy-based escalations to have it permanently deleted."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove bad reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Review removals typically take between 14 to 45 days, depending on the platform's escalation procedures and whether legal intervention is required."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Review Management Services",
  "description": "Remove fake negative reviews and strategically manage your brand's presence on Google Maps, Trustpilot, Glassdoor, and Indeed.",
  "url": "https://onlinereputationbuilder.in/review-management",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder"
  },
  "areaServed": "IN"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="review-management-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, serviceSchema])
        }}
      />
      {children}
    </>
  );
}
