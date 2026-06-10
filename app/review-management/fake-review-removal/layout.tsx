import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Fake Reviews from Google, Yelp & Trustpilot | ORM",
  description: "Fake reviews hurting your sales? Our legal experts identify, report, and remove policy-violating reviews from Google, Yelp, and Trustpilot. Fast results.",
  keywords: ["remove fake reviews", "google fake reviews deletion", "dispute yelp rating", "fake review report", "reputation management service", "online reputation management agency", "best reputation management companies"],
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
      "name": "Can fake Google reviews be legally removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Google removes reviews that violate their policies including spam, fake accounts, conflict of interest, hate speech, and off-topic content. You can flag the review directly in Google Maps or submit a formal legal request if the review contains defamatory false statements. Most policy-violating reviews are removed within 2–5 business days."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove a fake review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Platform removal typically takes 2–7 business days for Google and Yelp, and 3–10 days for Trustpilot. If the review requires a legal defamation claim, the process can take 2–4 weeks. Our team expedites the process by preparing all required documentation upfront."
      }
    },
    {
      "@type": "Question",
      "name": "What if Google refuses to remove the fake review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If Google rejects the initial removal request, we escalate using a legal defamation notice, re-flag with stronger evidence, and simultaneously launch a suppression campaign, publishing positive content to push the fake review off page one of Google search results."
      }
    },
    {
      "@type": "Question",
      "name": "Can competitors leave fake reviews about my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, competitor sabotage is a common issue. Reviews from competitors violate Google's 'conflict of interest' policy and are grounds for immediate removal. We identify patterns of fake competitor reviews through account analysis and report them with documented evidence."
      }
    },
    {
      "@type": "Question",
      "name": "How much does fake review removal cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fake review removal services in India typically range from ₹5,000 to ₹50,000 depending on the platform, number of reviews, and complexity. We offer a free initial assessment to determine the best removal strategy for your specific situation."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Fake Review Removal Service",
  "description": "Legal identification, reporting, and removal of fake, spam, and policy-violating reviews from Google, Yelp, Trustpilot, and Glassdoor.",
  "url": "https://www.onlinereputationbuilder.in/review-management/fake-review-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://www.onlinereputationbuilder.in"
  },
  "areaServed": "IN",
  "serviceType": "Online Reputation Management"
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
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Guides:</span>
          <Link href="/blog/remove-defamatory-online-reviews" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Handle &amp; Remove Defamatory Reviews
          </Link>
          <Link href="/blog/remove-fake-news-articles-google-search" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Remove Fake News from Google
          </Link>
          <Link href="/blog/suppress-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Suppressing Negative Google Search Results
          </Link>
        </div>
      </div>
    </>
  );
}
