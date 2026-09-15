import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trustpilot Review Removal & Rating Repair [100% Policy-Compliant] | ORM",
  description: "Permanently remove fake, competitor & unsubstantiated 1-star Trustpilot reviews. Find reviewer verification, fraud reporting, and star rating recovery.",
  keywords: [
    "trustpilot review removal",
    "repair trustpilot score",
    "remove fake trustpilot reviews",
    "trustpilot rating builder",
    "delete 1 star trustpilot review",
    "flag fake review trustpilot",
    "trustpilot compliance dispute",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/trustpilot-reputation-management",
  },
  openGraph: {
    title: "Trustpilot Review Removal & Rating Repair [100% Policy-Compliant]",
    description: "Permanently remove fake, competitor & unsubstantiated 1-star Trustpilot reviews. Legally verified review disputes.",
    url: "https://onlinereputationbuilders.in/review-management/trustpilot-reputation-management",
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
      "name": "Can you remove fake reviews from Trustpilot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Trustpilot has strict guidelines regarding genuine consumer experience, proof of purchase, defamation, and competitor conflicts. When an unverified or malicious review is posted, we trigger Trustpilot's 'Find Reviewer' compliance workflow and submit formal reporting for policy violations, resulting in review removal or permanent masking."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Trustpilot review investigation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The initial 'Find Reviewer' process gives the reviewer 3 days to provide verifiable documentation. If they fail to provide proof of genuine purchase, Trustpilot removes the review from public display within 3 to 7 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What if an unhappy real customer leaves a negative review on Trustpilot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For genuine customers, we deploy customer recovery strategies and automated review invite automation to generate authentic 5-star reviews from satisfied clients, quickly recovering your TrustScore above 4.5."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Trustpilot Review Management & Removal",
  "description": "Compliance disputes, verification challenges, and rating recovery for businesses on Trustpilot.",
  "url": "https://onlinereputationbuilders.in/review-management/trustpilot-reputation-management",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Review Management"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-trustpilot-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-trustpilot-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Review Solutions:</span>
          <Link href="/business/remove-google-business-review" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Google Review Removal
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Fake Review Removal Hub
          </Link>
          <Link href="/review-management/ambitionbox-reputation-management" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            AmbitionBox Review Removal
          </Link>
          <Link href="/review-management/remove-glassdoor-review" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Glassdoor Review Removal
          </Link>
        </div>
      </div>
    </>
  );
}
