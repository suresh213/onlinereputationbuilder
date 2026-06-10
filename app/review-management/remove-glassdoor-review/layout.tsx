import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glassdoor Review Removal & Employer Reputation Management",
  description: "Restore your company's rating on Glassdoor. We flag fraudulent reviews and policy violations to improve your employer brand score and attract top talent.",
  keywords: ["remove glassdoor reviews", "glassdoor reputation repair", "employer score cleanup", "glassdoor rating repair", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/remove-glassdoor-review",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can employers legally remove Glassdoor reviews?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, employers can request removal of Glassdoor reviews that violate Glassdoor's community guidelines. Reviews can be removed for: fake or spam content, conflict of interest (posted by competitors), personal attacks, unverified employment claims, and reviews containing provable false statements. Glassdoor responds to removal requests within 3–7 business days."
      }
    },
    {
      "@type": "Question",
      "name": "How do I identify a fake Glassdoor review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fake Glassdoor reviews typically show these patterns: posted by accounts with no history, generic complaints with no specific details, multiple reviews posted within a short timeframe, identical or very similar wording to other negative reviews, and reviews posted during periods of competitor activity. These patterns can be flagged as coordinated spam."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Glassdoor review removal take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Glassdoor typically processes removal requests within 3–10 business days. For legal defamation cases with strong documentation, removal can happen within 5 days. For reviews that require legal action, the process may take 2–4 weeks. Our team prepares comprehensive documentation to accelerate the process."
      }
    },
    {
      "@type": "Question",
      "name": "What if Glassdoor won't remove a fake review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If Glassdoor declines removal, we use a three-part strategy: (1) file an escalated legal defamation notice, (2) encourage verified current employees to post authentic reviews to improve your overall rating, and (3) launch a suppression strategy to push the negative review lower in search results."
      }
    },
    {
      "@type": "Question",
      "name": "How do fake Glassdoor reviews impact hiring?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fake negative Glassdoor reviews significantly impact hiring. Studies show 78% of job seekers check Glassdoor before applying. A drop from 4.0 to 3.5 stars can reduce application rates by 30–40%, increase cost-per-hire, and cause top candidates to reject offers. Removing or suppressing fake reviews directly improves recruitment outcomes."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-glassdoor-review-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Guides:</span>
          <Link href="/blog/remove-negative-glassdoor-reviews-employers" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Remove Negative Glassdoor Reviews: Employer&apos;s Guide
          </Link>
          <Link href="/blog/remove-defamatory-online-reviews" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Handle Defamatory Online Reviews
          </Link>
        </div>
      </div>
    </>
  );
}
