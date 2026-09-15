import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Negative Content Removal Services | Delete or Suppress Google Results",
  description: "Remove negative content from Google search, complaint sites, news press, and social media. 100% confidential negative content removal services & reverse SEO by ORM specialists.",
  keywords: [
    "negative content removal",
    "negative content removal services",
    "remove negative content from the internet",
    "negative search results removal",
    "online content removal agency",
    "remove defamatory content online",
    "suppress negative google link",
    "delete complaints google",
    "online reputation management"
  ],
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
      "name": "How does negative content removal work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative content removal utilizes a two-tier strategy: direct removal and reverse SEO suppression. Direct removal is executed through platform Terms of Service (TOS) enforcement, DMCA copyright notices, privacy violations, or formal legal cease-and-desist communications to website publishers. When publishers refuse direct deletion, reverse SEO suppression deploys high-authority positive digital assets that outrank the damaging content, permanently pushing it to page 2 or 3 of Google where over 95% of searchers never look."
      }
    },
    {
      "@type": "Question",
      "name": "Can defamatory content and complaint pages be permanently removed from Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If the content violates Google's Search Essentials, contains non-consensual personal information, or is ruled defamatory, it can be formally de-indexed using Google's legal removal tools. For persistent complaint portals such as Ripoff Report or Complaints Board, we combine publisher negotiations with aggressive SEO suppression to push the URL off the first page of Google."
      }
    },
    {
      "@type": "Question",
      "name": "How long do negative content removal services take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline varies by content type and platform authority. Direct platform review and video removals take 2 to 7 business days. Legal takedowns and publisher retractions typically take 2 to 4 weeks. Full Reverse SEO suppression campaigns for stubborn news articles or high-authority blog posts take between 6 to 12 weeks to achieve first-page dominance."
      }
    },
    {
      "@type": "Question",
      "name": "Will removed or suppressed negative content return?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Directly de-indexed or deleted content cannot reappear unless a publisher uploads a brand-new page. For suppressed content, our robust network of controlled positive assets (executive bios, Wikipedia, PR coverage, authoritative business listings) creates a permanent barrier that keeps negative links suppressed long-term."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Negative Content Removal Services",
  "description": "Professional negative content removal, search result de-indexing, and reverse SEO suppression for businesses and executives.",
  "url": "https://onlinereputationbuilders.in/business/remove-negative-results",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in"
  },
  "areaServed": "IN",
  "serviceType": "Negative Content Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-remove-negative-results"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-remove-negative-results"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Specialized Removal Hubs:</span>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Review Removal
          </Link>
          <Link href="/review-management/video-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Video Removal
          </Link>
          <Link href="/review-management/news-article-removal-from-the-internet" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Article Removal
          </Link>
          <Link href="/individual/remove-individual-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Link Removal
          </Link>
          <Link href="/blog/suppress-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Search Suppression Guide
          </Link>
        </div>
      </div>
    </>
  );
}
