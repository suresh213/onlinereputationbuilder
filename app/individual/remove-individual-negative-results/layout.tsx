import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Negative Link Removal Services | De-index & Push Down Google Links",
  description: "Negative link removal from Google search results. Expert link de-indexing, DMCA takedowns, and reverse SEO suppression to bury damaging links permanently.",
  keywords: [
    "negative link removal",
    "negative link removal services",
    "remove negative links from google",
    "push down negative search results",
    "google outdated link removal",
    "deindex bad links",
    "bury negative links",
    "suppress search results",
    "online reputation management"
  ],
  alternates: {
    canonical: "/individual/remove-individual-negative-results",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does negative link removal work for Google search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative link removal operates through two core mechanisms: (1) Permanent De-indexing via Google's Legal Removal and Outdated Content tools when content violates privacy, copyright, or platform terms, and (2) Reverse SEO suppression, which creates a protective shield of authoritative high-ranking web assets that pushes the negative link to page 2 or 3 of Google where search visibility drops below 2%."
      }
    },
    {
      "@type": "Question",
      "name": "Can you de-index a negative link using Google's Outdated Content Tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If the source webpage has been deleted (returns a 404 or 410 HTTP error) or the defamatory text mentioning your name has been altered on the host site, Google's Outdated Content Removal tool can be used to instantly expunge the cached snippet and de-index the URL from search results."
      }
    },
    {
      "@type": "Question",
      "name": "How long does negative link removal or suppression take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outdated content cache clearing and policy de-indexing typically take 2 to 5 business days. Reverse SEO suppression campaigns to bury high-ranking blog posts, forums, or news articles typically show substantial movement in 4 to 8 weeks, with full first-page suppression achieved in 60 to 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between link de-indexing and reverse SEO suppression?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De-indexing removes the URL completely from Google's search index so it can never appear for search queries. Reverse SEO suppression leaves the third-party page intact on the host server, but aggressively outranks it with 10 to 15 positive, authoritative web properties (interviews, corporate profiles, Wikipedia, social assets) so searchers never find the negative link."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Negative Link Removal Services",
  "description": "Professional negative link removal, Google de-indexing, and reverse SEO search suppression for individuals and brands.",
  "url": "https://onlinereputationbuilders.in/individual/remove-individual-negative-results",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in"
  },
  "areaServed": "IN",
  "serviceType": "Negative Link Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-link-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-link-removal"
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
          <Link href="/individual/remove-private-info" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Remove Private Information
          </Link>
          <Link href="/blog/suppress-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Suppressing Negative Search Results Guide
          </Link>
          <Link href="/blog/how-to-push-down-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Push Down Bad Links
          </Link>
        </div>
      </div>
    </>
  );
}
