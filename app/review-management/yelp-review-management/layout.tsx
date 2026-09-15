import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yelp Review Removal & Rating Repair Services | Online Reputation Builder",
  description: "Remove fake, defamatory, and competitor Yelp reviews. Legally flag Terms of Service violations, trigger filter re-evaluations, and protect your local business reputation.",
  keywords: [
    "yelp review removal",
    "remove fake yelp reviews",
    "yelp rating repair",
    "dispute bad yelp review",
    "delete 1 star yelp review",
    "yelp policy violation takedown",
    "local business orm",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/yelp-review-management",
  },
  openGraph: {
    title: "Yelp Review Removal & Rating Repair Services",
    description: "Remove fake, defamatory, and competitor Yelp reviews. Legally verified review disputes and profile protection.",
    url: "https://onlinereputationbuilders.in/review-management/yelp-review-management",
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
      "name": "Can fake or unfair Yelp reviews be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Yelp strictly bans reviews written by competitors, ex-employees, users without firsthand consumer experience, or reviews containing hate speech, threats, or private personal information. We prepare factual evidence dossiers and submit formal Content Guideline disputes to Yelp's moderation team."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Yelp review removal dispute take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yelp moderation reviews typically take between 5 to 10 business days. If initially declined, secondary compliance appeals or legal inquiries can take up to 21 days."
      }
    },
    {
      "@type": "Question",
      "name": "How does Yelp's recommendation software affect review visibility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yelp uses an automated recommendation software that pushes less helpful or unconfirmed reviews to the 'Not Recommended' section. We understand the algorithmic triggers and help legitimate reviews from authentic customers stay active and recommended."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Yelp Review Removal & Reputation Management",
  "description": "Content guideline disputes, fake review removals, and rating recovery on Yelp.",
  "url": "https://onlinereputationbuilders.in/review-management/yelp-review-management",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "CA"],
  "serviceType": "Review Management"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-yelp-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-yelp-removal"
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
          <Link href="/review-management/trustpilot-reputation-management" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Trustpilot Review Management
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Fake Review Removal Hub
          </Link>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Negative Search Result Removal
          </Link>
        </div>
      </div>
    </>
  );
}
