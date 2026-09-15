import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Quora Answers & Questions [Defamation Takedown] | ORM",
  description: "Delete defamatory Quora questions, answers & comments. Flag BNBR policy violations, execute legal de-indexing from Google, and suppress competitor smear campaigns.",
  keywords: [
    "remove quora answer",
    "delete quora post",
    "remove quora question",
    "quora defamation removal",
    "quora content removal service",
    "suppress competitor quora spam",
    "delete bad quora review",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/quora-content-removal",
  },
  openGraph: {
    title: "Remove Quora Answers & Questions [Defamation Takedown]",
    description: "Delete defamatory Quora questions, answers & comments. Legal takedowns and Google de-indexing.",
    url: "https://onlinereputationbuilders.in/review-management/quora-content-removal",
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
      "name": "Can a defamatory Quora answer or question be permanently removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Quora strictly enforces its 'Be Nice, Be Respectful' (BNBR) policy, alongside rules against harassment, hate speech, false impersonation, and copyright violation. Content violating these standards or containing unsubstantiated corporate defamation can be removed permanently by Quora's Trust & Safety and Legal teams."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove content from Quora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BNBR policy violation appeals and copyright infringement takedowns typically take 3 to 7 business days. Complex defamation claims submitted to Quora Legal usually take 7 to 14 business days."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Quora thread ranking on Google be removed from search results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Once an answer is removed or collapsed, we submit an Outdated Content Removal request to Google Search Console to clear the snippet within 24 to 48 hours. If Quora refuses to delete the post, we submit direct Google Legal Webform requests to de-index the URL from search engines."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle anonymous accounts attacking companies on Quora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anonymous attacks and competitor smear accounts violate Quora's policies regarding sockpuppetry, spam, and unverified commercial allegations. We gather digital evidence and file targeted policy violation dossiers that result in answer deletion and account suspension."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Quora Content Removal & Defamation Resolution",
  "description": "Permanent legal removal and search de-indexing of defamatory Quora questions and answers.",
  "url": "https://onlinereputationbuilders.in/review-management/quora-content-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Quora Content Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-quora-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-quora-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Social & Forum Removal:</span>
          <Link href="/review-management/reddit-post-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Reddit Post Removal
          </Link>
          <Link href="/review-management/complaint-removal-and-management-services" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Complaint Board Removal
          </Link>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Remove Negative Search Results
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Fake Review Removal
          </Link>
        </div>
      </div>
    </>
  );
}
