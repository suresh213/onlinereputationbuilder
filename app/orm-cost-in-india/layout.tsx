import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Online Reputation Management Cost in India (2026 Pricing Guide & Packages)",
  description: "Complete transparent 2026 pricing guide for Online Reputation Management (ORM) services in India. Compare SME packages, enterprise retainers, and legal takedown costs.",
  keywords: [
    "how much does online reputation management cost in india",
    "orm cost in india",
    "online reputation management services cost india",
    "reputation management packages india",
    "orm pricing india 2026",
    "cost to remove negative reviews google india",
    "corporate orm retainer cost india"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-cost-in-india",
  },
  openGraph: {
    title: "Online Reputation Management Cost in India (2026 Pricing Guide)",
    description: "Detailed transparent pricing breakdowns for ORM services in India. Compare costs for small businesses, enterprises, doctors, and executive personal branding.",
    url: "https://onlinereputationbuilders.in/orm-cost-in-india",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does online reputation management cost in India in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In India, professional ORM services range from INR 25,000 to INR 60,000 per month for small businesses and local clinics; INR 75,000 to INR 2,00,000 per month for mid-sized enterprises; and INR 2,50,000 to INR 6,00,000+ per month for enterprise crisis management and corporate conglomerates. Pay-per-deletion review takedowns typically cost between INR 15,000 and INR 45,000 per verified URL removal."
      }
    },
    {
      "@type": "Question",
      "name": "Why is there a wide price variation among ORM companies in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on four primary factors: (1) Domain Authority of the negative content (e.g. Times of India vs a personal blog), (2) The method required (direct legal de-indexing vs long-term reverse SEO suppression), (3) Number of damaging URLs on Page 1 and Page 2, and (4) The entity profile (individual, medical practitioner, or enterprise corporate brand)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge upfront retainers or pay-for-performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer milestone-based payment schedules. For discrete negative review and link takedowns, payment is tied to confirmed removal milestones. For long-term corporate suppression and executive branding, monthly fixed retainers provide predictable billing with zero hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "What is the ROI of investing in online reputation management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "According to Harvard Business Review, a 1-star improvement in online review rating yields a 5 to 9 percent increase in revenue. For businesses with negative Page 1 links, eliminating search fallout stops customer abandonment rates that typically exceed 22 to 70 percent."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="orm-pricing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
