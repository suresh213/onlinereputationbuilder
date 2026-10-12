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
    canonical: "https://onlinereputationbuilders.in/business/remove-google-business-review",
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
      "name": "How to remove fake Google reviews from your business profile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To remove fake Google reviews, flag the review via Google Business Profile manager under Prohibited and Restricted Content such as Fake Engagement, Off-topic, or Conflict of Interest. If automated filters reject the flag, our legal and compliance specialists submit documented evidence dockets directly to Google Trust and Safety supervisors to secure permanent deletion."
      }
    },
    {
      "@type": "Question",
      "name": "How to delete Google reviews posted by others that are defamatory?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Business owners cannot delete reviews left by third parties with a single click. However, defamatory reviews posted by competitors, disgruntled ex-employees, bots, or unverified customers can be permanently removed by submitting substantiated policy appeals and formal legal defamation notices directly to Google legal support."
      }
    },
    {
      "@type": "Question",
      "name": "Can you delete bad Google reviews on your business profile permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When a review violates Google Maps policies including spam, personal harassment, conflict of interest, non-customer extortion, or competitor sabotage, we achieve permanent deletion. Once removed by Google, your aggregate rating recalculates and the negative review is permanently expunged."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Google take to remove a flagged review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard policy escalation reviews take 7 to 15 business days. Severe policy violations like hate speech or obvious bot attacks can be expunged within 48 to 72 hours, while complex competitor defamation disputes typically resolve within 14 to 21 days."
      }
    },
    {
      "@type": "Question",
      "name": "What can you do if Google refuses to remove a fake 1-star review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If automated filters mistakenly reject an initial removal request, our team compiles forensic evidence such as reviewer location anomalies, zero transaction history, or competitor IP correlations, escalating directly to senior platform supervisors. Concurrently, we deploy verified review acquisition campaigns to bury the isolated rating."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a professional Google review removal service cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional Google review removal costs vary depending on case complexity, evidence requirements, and whether legal escalation is required. We evaluate every case through a free, confidential feasibility review so you understand the exact timeline and scope before beginning."
      }
    },
    {
      "@type": "Question",
      "name": "Can competitors post fake 1-star reviews on Google Maps without consequences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google terms strictly forbid conflict-of-interest reviews and competitor manipulation. When competitor sabotage is proven through digital forensics and evidence dockets, Google not only permanently removes the fake reviews but may also penalize the offending competitor profile."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Google review removal process 100% confidential under NDA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100%. All client engagements operate under a legally binding Non-Disclosure Agreement (NDA). The reviewer is never notified of who initiated the dispute, ensuring complete confidentiality."
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
