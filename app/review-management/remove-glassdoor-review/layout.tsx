import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glassdoor Review Removal & Employer Reputation Management",
  description: "Restore your company's rating on Glassdoor. We flag fraudulent reviews and policy violations to improve your employer brand score and attract top talent.",
  keywords: ["remove glassdoor reviews", "glassdoor reputation repair", "employer score cleanup", "glassdoor rating repair", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/review-management/remove-glassdoor-review",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do employers remove negative reviews from Glassdoor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Employers can remove negative Glassdoor reviews by identifying specific platform policy violations and filing structured dispute appeals with Glassdoor Trust and Safety. Eligible violations include revealing confidential company data, naming non-executive staff members, profanity, conflict of interest, or demonstrably false factual allegations. When documentation proves a breach of Community Guidelines, Glassdoor permanently deletes the review within 7 to 14 business days."
      }
    },
    {
      "@type": "Question",
      "name": "Can an employer delete or dispute reviews on Glassdoor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, employers can dispute any review through the Glassdoor Employer Center by submitting an official Content Dispute notice. While employers cannot unilaterally delete reviews with a single click, Glassdoor must remove content that breaches Terms of Service, employee NDAs, or defamation statutes. If moderation declines initial removal, our team submits formal legal remediation dossiers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Glassdoor remove negative reviews from former or unverified employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Glassdoor removes reviews if evidence indicates the author was never employed by the company or is an active competitor seeking commercial sabotage. Under Glassdoor Fraud Detection policies, accounts showing velocity anomalies, geographic mismatches, or duplicate submissions are flagged and scrubbed during automated and manual moderation audits."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Glassdoor review dispute take to resolve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard Glassdoor review disputes take 5 to 14 business days from the initial filing date. Complex cases involving severe defamation or legal notices typically resolve in 2 to 4 weeks. Throughout the process, we monitor profile rating movements and provide complete status tracking."
      }
    },
    {
      "@type": "Question",
      "name": "What can companies do if Glassdoor refuses to remove a bad review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If Glassdoor refuses direct deletion under safe harbor protections, we deploy a three-stage mitigation strategy: first, we issue legal notices citing defamation laws and trade secret breaches; second, we launch verified internal employee sentiment programs to generate authentic 5-star ratings; and third, we use reverse SEO suppression to push Glassdoor search rankings below owned digital assets."
      }
    },
    {
      "@type": "Question",
      "name": "How do negative Glassdoor reviews impact hiring and recruitment costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative Glassdoor reviews increase corporate cost per hire by over 30 percent and lead up to 70 percent of qualified candidates to decline job offers. A 1-star reduction in employer rating directly impairs talent acquisition, especially for senior engineering and executive roles. Removing toxic reviews and improving employer ratings to 4.2 stars or higher restores applicant volume immediately."
      }
    },
    {
      "@type": "Question",
      "name": "Can Glassdoor reviews naming specific managers or colleagues be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Glassdoor Community Guidelines strictly prohibit naming individual employees below the executive level (C-suite or board directors). Any review that identifies mid-level managers, HR staff, or project leads by full name or identifiable job title qualifies for mandatory removal upon flagging."
      }
    },
    {
      "@type": "Question",
      "name": "Is Glassdoor review removal 100 percent confidential under an NDA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All employer review removal campaigns are executed under binding Non-Disclosure Agreements. We never contact the reviewer publicly, and employees, job candidates, and competitor firms will never know an external agency managed the dispute process."
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
