import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Negative Search Results from Google | Corporate ORM",
  description: "Bury and suppress negative search results, complaints, and forum posts. Rank positive assets on the first page of Google to protect your brand permanently.",
  keywords: ["remove negative search results", "suppress negative google link", "bury complaints google", "google negative link removal", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business/remove-negative-results",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I remove negative results from Google search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are two approaches to removing negative Google results: direct removal and suppression. Direct removal works when content violates Google's policies, contains your personal information, is outdated, or when the publisher agrees to take it down. Suppression works in all other cases — you publish high-authority positive content that outranks the negative results, pushing them to page 2 or 3 where 95% of searchers never look. Most ORM campaigns combine both strategies."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to suppress negative Google results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Suppression timelines depend on the authority of the negative content. Forum posts and low-authority blogs: 3–6 weeks. Medium-authority news articles: 6–12 weeks. High-authority publications (major news sites): 3–6 months. Our suppression strategy builds a network of authoritative positive assets — websites, press releases, profiles, articles — that outrank the negative content in search results."
      }
    },
    {
      "@type": "Question",
      "name": "Can consumer complaint pages (Ripoff Report, Complaints Board) be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct removal from Ripoff Report and similar complaint sites is very difficult as they resist takedowns. However, these pages can be suppressed off Google's first page through aggressive SEO campaigns. We build 10–15 high-authority positive assets targeting the same keywords, effectively burying the complaint page where it gets less than 2% of search traffic."
      }
    },
    {
      "@type": "Question",
      "name": "Will the negative results come back after suppression?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative results can resurface if you stop maintaining your positive content assets. That's why we recommend ongoing monthly ORM maintenance to keep your positive content ranked higher. A properly built suppression network, however, typically stays dominant for 12–24 months even without active maintenance."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-remove-negative-results"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Guides:</span>
          <Link href="/blog/suppress-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Ultimate Guide: Suppressing Negative Google Results
          </Link>
          <Link href="/blog/remove-fake-news-articles-google-search" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Remove Fake News Articles from Google
          </Link>
          <Link href="/blog/corporate-pr-crisis-control-guide" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Corporate PR Crisis Control Guide
          </Link>
        </div>
      </div>
    </>
  );
}
