import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Remove Defamatory News Articles from Google | ORM",
  description: "Request retraction or suppression of negative news coverage, outdated articles, and defamatory media press from Google search. Fast and confidential service.",
  keywords: ["remove news article from google", "retract outdated news", "news media defamation removal", "delete newspaper post", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/news-article-removal-from-the-internet",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I remove a news article from Google search results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. There are three main ways to remove news articles from Google: (1) Request the publisher to retract or update the article — most reputable news outlets comply when presented with documented proof of inaccuracy, (2) Submit a Google de-indexing request if the article violates Google's content policies or contains personal sensitive information, (3) File a legal defamation claim if the article contains provably false statements that cause reputational harm. If direct removal isn't possible, a content suppression strategy can push the article off Google's first page within 4–8 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "How long does news article removal from Google take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline varies by method: Publisher retraction requests take 3–14 days. Google de-indexing via legal removal tools takes 5–10 business days after approval. Legal defamation claims take 2–6 weeks. Suppression strategies start showing results within 3–4 weeks and achieve full first-page control within 6–10 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Can old outdated news articles be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Outdated news articles can often be removed or de-indexed from Google using the 'Right to be Forgotten' provisions (applicable in EU and increasingly in India), Google's outdated content removal tool, or by requesting the publisher to add a 'noindex' tag. Articles older than 3 years with no recent engagement are often successfully de-indexed."
      }
    },
    {
      "@type": "Question",
      "name": "What if the news article is from a major publication?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Articles from major publications (Times of India, Economic Times, NDTV) are harder to remove directly, but can be addressed through: official retraction requests backed by legal documentation, publishing a counter-narrative on equally authoritative platforms, or deploying a suppression strategy that fills Google's first page with positive authoritative content so the negative article falls to page 2."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-news-article-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
