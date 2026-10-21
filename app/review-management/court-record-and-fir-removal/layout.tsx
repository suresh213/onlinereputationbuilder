import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Court Record & FIR Removal Services | De-index Legal Cases from Google India",
  description: "Permanently de-index dismissed court records, quashed FIRs, and legal case judgments from Google search, IndianKanoon, and legal portals under the Right to be Forgotten.",
  keywords: [
    "remove court records from google india",
    "remove fir from internet",
    "indiankanoon case removal",
    "right to be forgotten india court order removal",
    "quashed fir removal google",
    "de-index high court judgment india",
    "expunge police fir search results",
    "legal record de-indexing service"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/review-management/court-record-and-fir-removal",
  },
  openGraph: {
    title: "Court Record & FIR Removal Services | De-index Legal Cases from Google",
    description: "Permanently de-index dismissed legal records, police FIRs, and court judgments from Google search and legal aggregators under Right to be Forgotten precedents.",
    url: "https://onlinereputationbuilders.in/review-management/court-record-and-fir-removal",
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
      "name": "Can a dismissed court case or quashed FIR be removed from Google Search in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multiple Indian High Courts including the Delhi High Court, Gujarat High Court, and Kerala High Court have recognized the Right to be Forgotten. If an individual has been acquitted, charges have been quashed under Section 482 CrPC / Section 528 BNSS, or proceedings have been amicably settled, Google can be legally required to de-index the judgment and search snippets."
      }
    },
    {
      "@type": "Question",
      "name": "Can case summaries on IndianKanoon or Casemine be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While legal aggregators maintain public records, search engine de-indexing prevents those pages from showing up when someone searches your personal or business name on Google. Furthermore, verified court redaction orders can be submitted to legal aggregators to redact names and identifying details."
      }
    },
    {
      "@type": "Question",
      "name": "How long does court record de-indexing from Google take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A formal submission to Google Legal backed by certified court orders and High Court precedents typically takes between 14 to 28 business days for complete search de-indexing."
      }
    },
    {
      "@type": "Question",
      "name": "Is my privacy protected throughout this legal process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100 percent. All case documentation, FIR details, and court orders are reviewed under strict attorney-client privilege and mutual Non-Disclosure Agreements."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Court Record & FIR De-indexing Services",
  "description": "Legal de-indexing and Right to be Forgotten removal of acquitted court records, dismissed FIRs, and legal aggregators from Google Search.",
  "url": "https://onlinereputationbuilders.in/review-management/court-record-and-fir-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "AE", "US", "GB", "SG"],
  "serviceType": "Legal Search De-indexing & Right to be Forgotten"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="court-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="court-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
