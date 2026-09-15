import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Fake Google Reviews [98% Deletion Success] | Online Reputation Builder",
  description: "Permanent legal deletion of fake, competitor, spam & defamatory Google Business Profile reviews. 100% confidential legal resolution & rapid 24-48 hr case review.",
  keywords: [
    "remove fake google reviews",
    "delete negative google review",
    "remove 1 star google review",
    "flag google map review",
    "google business review removal",
    "how to delete bad google review",
    "dispute fake reviews google maps",
    "online reputation management google reviews"
  ],
  alternates: {
    canonical: "/business/remove-google-business-review",
  },
  openGraph: {
    title: "Remove Fake Google Reviews [98% Deletion Success Rate]",
    description: "Permanent legal deletion of fake, competitor, spam & defamatory Google Business Profile reviews. 100% confidential resolution.",
    url: "https://onlinereputationbuilders.in/business/remove-google-business-review",
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
      "name": "Can you legally remove fake Google Business reviews permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When a Google review breaches Google Maps Prohibited and Restricted Content policies—including conflict of interest, fake engagement, harassment, hate speech, or competitor sabotage—our legal and compliance team submits direct legal disputes, policy appeals, and escalations to get the review permanently deleted from your Google Business Profile."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove a bad review from Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard policy escalation reviews take 7 to 15 business days. Obvious spam or hate speech violations can be expunged within 48 to 72 hours, while complex competitor defamation disputes may take up to 21 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is your success rate for Google review deletion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We maintain a verified 98% success rate for eligible policy-violating reviews. We perform a confidential feasibility assessment on every review before accepting the case to ensure compliance grounds are established."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a negative review cannot be removed by Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For genuine customer grievances that Google deems within policy guidelines, we deploy strategic brand recovery: crafting high-conversion public owner responses and executing automated review generation workflows to elevate your overall rating to 4.8+ stars."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Google review removal process confidential?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100%. All client engagements are protected by a legally binding Non-Disclosure Agreement (NDA). The reviewer is never notified of who initiated the dispute."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Google Business Profile Review Removal Service",
  "description": "Permanent legal removal of fake, defamatory, and competitor reviews on Google Maps and Google Business Profiles.",
  "url": "https://onlinereputationbuilders.in/business/remove-google-business-review",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Google Review Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-google-reviews"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-google-reviews"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Review Solutions:</span>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Fake Review Removal Hub
          </Link>
          <Link href="/review-management/ambitionbox-reputation-management" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            AmbitionBox Review Removal
          </Link>
          <Link href="/review-management/remove-glassdoor-review" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Glassdoor Review Removal
          </Link>
          <Link href="/review-management/trustpilot-reputation-management" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Trustpilot Review Management
          </Link>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Negative Search Result Removal
          </Link>
        </div>
      </div>
    </>
  );
}
