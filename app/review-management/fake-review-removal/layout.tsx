import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Negative Review Removal Services | Google, Glassdoor & Trustpilot",
  description: "Remove negative reviews from Google Maps, Glassdoor, Trustpilot, and Yelp. 100% policy-compliant dispute and deletion by senior ORM reputation experts.",
  keywords: [
    "negative review removal",
    "negative review removal services",
    "remove negative reviews from google",
    "google negative review removal",
    "delete negative review",
    "remove fake reviews",
    "google fake reviews deletion",
    "dispute yelp rating",
    "delete glassdoor review",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/fake-review-removal",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can negative reviews be removed from Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Google removes reviews that violate their Prohibited and Restricted Content policies - including fake consumer experiences, competitor conflicts of interest, defamatory allegations, offensive hate speech, and off-topic commentary. Policy-violating negative reviews are escalated through Google Business Profile support and legal request portals, typically removed within 2 to 5 business days."
      }
    },
    {
      "@type": "Question",
      "name": "How long does negative review removal take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Platform review removal typically takes 2 to 7 business days for Google and Yelp, and 3 to 10 days for Trustpilot or Glassdoor. If an escalated legal defamation request or ex-employee conflict verification is required, the formal process takes 2 to 4 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "What if Google refuses to remove the negative review initially?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When automated reporting filters reject an initial flag, our specialists prepare an exhaustive evidence docket demonstrating Terms of Service violations and escalate directly to platform Trust & Safety supervisors. Simultaneously, review suppression strategies generate genuine customer reviews to restore your aggregate rating."
      }
    },
    {
      "@type": "Question",
      "name": "Can negative reviews from competitors or disgruntled ex-employees be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Google, Glassdoor, and Trustpilot strictly forbid conflict-of-interest reviews. By matching digital footprints, internal HR departure records, and account timestamps, we provide verifiable proof of bias to secure permanent deletion."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a negative review removal service cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative review removal services in India typically range from ₹5,000 to ₹35,000 depending on platform complexity, number of offending links, and whether legal arbitration is necessary. We provide a 100% confidential upfront case assessment."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Negative Review Removal Services",
  "description": "Legal identification, reporting, and removal of negative, fake, and policy-violating reviews from Google, Yelp, Trustpilot, and Glassdoor.",
  "url": "https://onlinereputationbuilders.in/review-management/fake-review-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in"
  },
  "areaServed": "IN",
  "serviceType": "Negative Review Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-fake-review-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-fake-review-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Removal Solutions:</span>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Master Negative Content Removal Hub
          </Link>
          <Link href="/business/remove-google-business-review" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Google Business Review Removal
          </Link>
          <Link href="/review-management/remove-glassdoor-review" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Glassdoor Review Removal
          </Link>
          <Link href="/review-management/negative-link-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Link Removal
          </Link>
          <Link href="/blog/remove-defamatory-online-reviews" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Handle &amp; Remove Defamatory Reviews
          </Link>
        </div>
      </div>
    </>
  );
}
