import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Fake News Articles & Defamatory Press | ORM",
  description: "Eliminate fake news posts, online defamation, and unverified allegations from search indexes. DMCA takedowns and legal tools for fast removal.",
  keywords: ["remove fake news", "delete defamatory article", "fake news report retraction", "media slander removal", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/fake-news-removal",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can fake news articles be removed from Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Fake news and defamatory articles can be removed from Google using three methods: (1) DMCA takedown if the article contains plagiarized content or misuses your photos/videos, (2) Legal defamation notice if the article contains provably false statements that harm your reputation, (3) Google's own content removal tool for pages that violate their policies. Our team handles all three approaches simultaneously for fastest results."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove a fake news article?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DMCA takedowns are processed by Google within 24–48 hours. Legal defamation removal requests typically take 5–15 business days depending on publisher responsiveness. If direct removal fails, a suppression strategy can push the article off Google's first page within 3–6 weeks of targeted content publishing."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between DMCA removal and defamation removal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A DMCA removal is for copyright violations — when someone uses your images, videos, or written content without permission. A defamation removal is for false factual statements that damage your reputation. Both can result in content being de-indexed from Google, but they require different documentation and follow different legal processes."
      }
    },
    {
      "@type": "Question",
      "name": "Can I remove a fake news article if the publisher refuses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Even if the publisher refuses to remove the article, we can request Google to de-index the page using their legal removal tools, making it invisible in search results even though it technically still exists on the publisher's website. We also deploy suppression strategies to fill Google's first page with positive, authoritative content about you."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-fake-news-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Guides:</span>
          <Link href="/blog/remove-fake-news-articles-google-search" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Remove Fake News Articles from Google [2026]
          </Link>
          <Link href="/blog/suppress-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Ultimate Guide to Suppressing Negative Google Results
          </Link>
        </div>
      </div>
    </>
  );
}
