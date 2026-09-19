import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Negative Link Removal Services | Delete & De-index URLs from Google",
  description: "Professional negative link removal services. Permanently delete or de-index defamatory URLs, outdated links & search records from Google search. 100% confidential legal resolution.",
  keywords: [
    "negative link removal",
    "negative link removal service",
    "remove negative links from google",
    "delete link from google search",
    "google search de-indexing service",
    "how to remove negative links from google",
    "remove url from google search results",
    "delete negative search results",
    "de-index defamatory url google",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/negative-link-removal",
  },
  openGraph: {
    title: "Negative Link Removal Services | Delete & De-index URLs from Google",
    description: "Permanently delete or de-index defamatory URLs, outdated links & court records from Google search. 100% confidential legal resolution.",
    url: "https://onlinereputationbuilders.in/review-management/negative-link-removal",
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
      "name": "Can you legally remove negative links from Google Search permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When a negative link contains defamatory statements, exposed personal information (PII/doxxing), copyright infringement, or breaches statutory guidelines like Section 79 of the Indian IT Act, we file formal legal removal submissions and court injunctions directly with Google Legal to permanently de-index the URL from search results."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between link de-indexing and link removal at source?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Link removal at source occurs when the hosting webmaster completely deletes the web page, making it return a 404 error. De-indexing occurs when Google removes the link from search results entirely - making it impossible for anyone to find when searching your name or business on Google."
      }
    },
    {
      "@type": "Question",
      "name": "How long does negative link removal take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google Outdated Content removals for cached or modified links take 24 to 48 hours. Formal legal de-indexing through Google Legal takes 10 to 21 business days. In scenarios requiring algorithmic Reverse SEO link suppression, pushing the link off Page 1 takes between 45 to 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "What if the website hosting the negative link is anonymous or located overseas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not need the webmaster's consent. We target the search engine level directly via Google Legal Webforms to de-index the link from Google worldwide or regionally, and execute Reverse SEO suppression to bury the URL past Page 2 where 95%+ of searchers never look."
      }
    },
    {
      "@type": "Question",
      "name": "Can court records, arrest disclosures, or outdated police FIRs be removed from Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Indian High Courts and global privacy jurisdictions recognize the Right to be Forgotten for acquittals, quashed proceedings, and settled disputes. We submit validated certified court orders to Google to expunge the search snippets permanently."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Negative Link Removal Services",
  "description": "Professional removal, de-indexing, and Reverse SEO suppression of negative, defamatory, and outdated links from Google search results.",
  "url": "https://onlinereputationbuilders.in/review-management/negative-link-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Negative Link Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-negative-link-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-negative-link-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">The 5 Core Negative Removal Services:</span>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            1. Negative Content Removal
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            2. Negative Review Removal
          </Link>
          <Link href="/review-management/video-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            3. Negative Video Removal
          </Link>
          <Link href="/review-management/news-article-removal-from-the-internet" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            4. Negative Article Removal
          </Link>
          <Link href="/review-management/negative-link-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            5. Negative Link Removal
          </Link>
          <Link href="/blog/how-to-remove-negative-links-from-google-search-2026" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Detailed De-indexing Guide
          </Link>
        </div>
      </div>
    </>
  );
}
