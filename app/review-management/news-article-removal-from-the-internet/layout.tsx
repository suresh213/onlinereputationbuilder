import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Negative Article Removal Services | Erase Press & News from Google",
  description: "Negative article removal from Google search and news sites. We handle editorial retractions, legal de-indexing, and reverse SEO suppression for defamatory press.",
  keywords: [
    "negative article removal",
    "negative article removal services",
    "remove news article from google",
    "retract outdated news",
    "delete newspaper post",
    "news media defamation removal",
    "deindex negative article",
    "suppress negative news",
    "newspaper article removal service",
    "online reputation management"
  ],
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
      "name": "How do negative article removal services work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative article removal employs three legal and technical methods: (1) Editorial Retraction or Anonymization requests sent directly to media editors with legal evidentiary dossiers, (2) Google Legal De-indexing requests under privacy violation, defamation, or outdated content grounds, and (3) Reverse SEO suppression, creating authoritative positive articles and PR assets that push the negative story below Page 1 of Google."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove a negative article from a major news website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While major publications rarely delete archival stories entirely, our legal team routinely negotiates noindex metatag additions (which makes the article vanish from Google Search while staying on the publisher's site) or name anonymization (replacing personal names with initials)."
      }
    },
    {
      "@type": "Question",
      "name": "How long does negative article removal take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Editorial retraction and publisher corrections typically take 3 to 14 business days. Google legal de-indexing decisions take 5 to 10 business days. For stubborn articles requiring comprehensive Reverse SEO suppression, visible page 1 displacement is achieved in 6 to 10 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Can outdated arrest records or old legal news articles be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If charges were dismissed, acquitted, or settled, we present certified court documentation to news editors and Google to compel removal under the Right to be Forgotten, Google Outdated Content policies, or defamation mitigation."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Negative Article Removal Services",
  "description": "Professional retraction, legal de-indexing, and suppression of negative news articles and defamatory press coverage from Google search.",
  "url": "https://onlinereputationbuilders.in/review-management/news-article-removal-from-the-internet",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in"
  },
  "areaServed": "IN",
  "serviceType": "Negative Article Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-news-article-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-news-article-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Services & Guides:</span>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Master Negative Content Removal Hub
          </Link>
          <Link href="/review-management/fake-news-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Fake News Removal
          </Link>
          <Link href="/individual/remove-individual-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Link Removal
          </Link>
          <Link href="/blog/remove-fake-news-articles-google-search" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Remove Fake News Articles from Google
          </Link>
        </div>
      </div>
    </>
  );
}
