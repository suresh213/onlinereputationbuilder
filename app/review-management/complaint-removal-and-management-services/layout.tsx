import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complaint Removal Services [Ripoff Report, Consumer Boards De-indexing] | ORM",
  description: "Permanently de-index and remove complaints from Ripoff Report, Complaints Board, ConsumerComplaints.in & consumer forums. Guaranteed legal takedowns & Google suppression.",
  keywords: [
    "complaint removal services",
    "ripoff report removal",
    "delete ripoff report complaints permanently",
    "complaints board takedown",
    "consumer complaints court removal",
    "remove negative complaint from google",
    "de-index complaint forum",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/complaint-removal-and-management-services",
  },
  openGraph: {
    title: "Complaint Removal Services [Ripoff Report, Consumer Boards De-indexing]",
    description: "Permanently de-index and remove complaints from Ripoff Report, Complaints Board & consumer forums from Google Search.",
    url: "https://onlinereputationbuilders.in/review-management/complaint-removal-and-management-services",
    siteName: "Online Reputation Builder",
    locale: "en_US",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can Ripoff Report and Complaints Board pages be removed from Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While platforms like Ripoff Report historically state they never delete reports, there are three proven avenues: (1) Google Legal De-indexing under defamation, right to be forgotten, or trademark infringement, completely wiping the URL from Google Search, (2) Platform arbitration programs that redact identifying personal and corporate details, and (3) Complete SERP suppression via Reverse SEO."
      }
    },
    {
      "@type": "Question",
      "name": "How does Google de-indexing work for defamatory complaint posts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a complaint post contains unverified defamatory allegations, exposed personal identity (PII), or breaches local IT regulations, our legal team files structured legal notices under Section 79 of the IT Act (India) or court order submissions to Google Legal. Upon review, Google completely removes the complaint link from all search indices."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove or suppress a consumer complaint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct de-indexing applications through search engine legal channels typically take 14 to 30 business days. Search suppression campaigns that bury complaint threads past page 2 take between 45 to 90 days depending on the forum's domain authority."
      }
    },
    {
      "@type": "Question",
      "name": "Will the person who filed the complaint know that we took legal action?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Google de-indexing and search engine suppression are performed strictly at the algorithmic and regulatory index level. The original poster is never contacted or notified."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Consumer Complaint Removal & De-indexing Services",
  "description": "De-indexing, removal, and SERP suppression of defamatory complaint forum posts including Ripoff Report and Complaints Board.",
  "url": "https://onlinereputationbuilders.in/review-management/complaint-removal-and-management-services",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Complaint Removal Service"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-complaint-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-complaint-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related De-indexing & Removal Services:</span>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Remove Negative Search Results
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Fake Review Removal Hub
          </Link>
          <Link href="/review-management/reddit-post-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Reddit Post Removal
          </Link>
          <Link href="/review-management/quora-content-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Quora Content Removal
          </Link>
        </div>
      </div>
    </>
  );
}
