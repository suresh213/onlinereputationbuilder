import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MouthShut Review Removal & Complaint Resolution Services | Delete False Grievances",
  description: "Permanently remove or resolve defamatory, fake, and unverified reviews from MouthShut.com. Protect your brand reputation in India with 100% confidential legal ORM.",
  keywords: [
    "mouthshut review removal",
    "how to remove negative reviews from mouthshut",
    "mouthshut complaint removal",
    "delete fake mouthshut reviews",
    "remove mouthshut review google search",
    "mouthshut reputation management",
    "mouthshut legal notice defamation"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/review-management/mouthshut-review-removal",
  },
  openGraph: {
    title: "MouthShut Review Removal & Complaint Resolution Services",
    description: "Permanently delete or de-index defamatory MouthShut consumer complaints and fake ratings from Google search results.",
    url: "https://onlinereputationbuilders.in/review-management/mouthshut-review-removal",
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
      "name": "Can you legally remove negative reviews from MouthShut.com?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When a MouthShut review contains unverified accusations, competitor sabotage, extortion attempts, or violates the Consumer Protection Act and IT Rules 2021, we submit formal legal dispute notices and grievance officer escalations to delete the review or de-index the URL from Google Search."
      }
    },
    {
      "@type": "Question",
      "name": "Why do MouthShut complaints rank so high on Google search in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MouthShut has high domain authority (DA 70+) and Google's algorithm frequently indexes consumer forum pages for branded queries. If left unaddressed, a single 1-star MouthShut review often ranks on Page 1 directly beneath your official website."
      }
    },
    {
      "@type": "Question",
      "name": "How long does MouthShut review resolution take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct grievance officer escalations and policy dispute removals take 7 to 21 business days. In scenarios requiring Reverse SEO suppression to push the URL off Page 1, the timeline is 45 to 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "Can an anonymous MouthShut reviewer be challenged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. MouthShut requires reviewers to be genuine consumers. If a reviewer cannot provide proof of purchase, invoice, or client verification upon formal grievance notice, the review is flagged as fraudulent and removed under intermediary compliance guidelines."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "MouthShut Review Removal & Reputation Management",
  "description": "Professional removal, dispute escalation, and Reverse SEO suppression of negative MouthShut complaints and reviews.",
  "url": "https://onlinereputationbuilders.in/review-management/mouthshut-review-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "AE", "US", "GB", "SG"],
  "serviceType": "Consumer Review Dispute & De-indexing"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="mouthshut-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="mouthshut-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
