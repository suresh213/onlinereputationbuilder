import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Justdial Review Removal & Rating Management | Delete Fake Business Reviews",
  description: "Permanently delete or dispute fake, abusive, and competitor reviews on Justdial. Restore your local business ratings in India with verified reputation management.",
  keywords: [
    "justdial review removal",
    "justdial rating management",
    "remove fake reviews from justdial",
    "how to remove negative reviews from justdial",
    "delete justdial review",
    "justdial reputation management",
    "clean justdial business profile"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/review-management/justdial-review-management",
  },
  openGraph: {
    title: "Justdial Review Removal & Rating Management Services",
    description: "Permanently remove or dispute fake, competitor, and unverified reviews on Justdial to protect your local business score in India.",
    url: "https://onlinereputationbuilders.in/review-management/justdial-review-management",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you remove fake reviews from Justdial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Justdial has clear merchant and listing guidelines. Reviews posted by competitor accounts, non-genuine callers, abusive trolls, or reviews lacking invoice proof can be challenged and deleted through merchant support escalation and formal legal dispute filing."
      }
    },
    {
      "@type": "Question",
      "name": "Why do Justdial reviews hurt local businesses in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Justdial is one of India's largest local business directories. When prospective customers search for local services or compare vendors, a 1-star rating or unaddressed complaint directly drives leads to competing local providers."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Justdial review dispute take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Justdial merchant disputes and verified complaint reviews take between 5 to 14 business days for resolution and rating adjustment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I remove negative reviews without paying Justdial premium listing fees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Review policy disputes are independent of commercial listing packages. Whether you have a free or paid listing, reviews that violate terms of service can be legally disputed."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Justdial Review Removal & Reputation Management",
  "description": "Specialized dispute filing and rating management for Indian businesses on Justdial local directory.",
  "url": "https://onlinereputationbuilders.in/review-management/justdial-review-management",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "AE", "US", "GB", "SG"],
  "serviceType": "Local Business Review Dispute & Clean-up"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="justdial-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="justdial-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
