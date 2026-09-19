import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remove Reddit Posts & Threads [Defamation & Privacy Takedown] | ORM",
  description: "Permanently delete defamatory Reddit posts, comments & threads ranking on Google. Subreddit moderator outreach, legal de-indexing, and Reddit DMCA takedowns.",
  keywords: [
    "remove reddit post",
    "delete reddit thread about me",
    "reddit defamation removal",
    "remove reddit comment",
    "delete reddit post google search",
    "reddit doxxing removal",
    "reddit copyright takedown",
    "reddit thread suppression"
  ],
  alternates: {
    canonical: "/review-management/reddit-post-removal",
  },
  openGraph: {
    title: "Remove Reddit Posts & Threads [Defamation & Privacy Takedown]",
    description: "Permanently delete defamatory Reddit posts, comments & threads ranking on Google. Legal takedowns and de-indexing.",
    url: "https://onlinereputationbuilders.in/review-management/reddit-post-removal",
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
      "name": "Can a Reddit post or comment be permanently deleted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Reddit content can be removed permanently if it violates Reddit's Content Policy - including doxxing (posting personally identifiable information), targeted harassment, defamation, copyright infringement (DMCA), or subreddit-specific rules. We submit formal compliance appeals directly to Reddit Legal and subreddit moderators."
      }
    },
    {
      "@type": "Question",
      "name": "What if the Reddit post is already indexed and ranking #1 on Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once a Reddit post is removed or edited by moderators, we immediately expedite Google Search Console Outdated Content removals to purge the cached title and snippet from Google SERPs within 24 to 48 hours. If the post remains live, we submit legal Right to be Forgotten and defamation de-indexing requests."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Reddit content removal take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doxxing and copyright takedowns through Reddit Legal are typically processed within 48 to 72 hours. Moderator negotiations and legal defamation disputes average 5 to 12 business days."
      }
    },
    {
      "@type": "Question",
      "name": "Can Reddit threads be suppressed if direct removal is denied?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. By executing targeted Reverse SEO - ranking authoritative, positive personal or corporate web properties, PR assets, and high-DA profiles - we push the offending Reddit thread down to page 2 or 3 of Google where 99% of searchers never look."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Reddit Post Removal & Reputation Management",
  "description": "Legal deletion, de-indexing, and suppression of damaging Reddit threads, posts, and comments.",
  "url": "https://onlinereputationbuilders.in/review-management/reddit-post-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Reddit Content Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-reddit-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-reddit-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Platform Removal:</span>
          <Link href="/review-management/quora-content-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Quora Content Removal
          </Link>
          <Link href="/review-management/complaint-removal-and-management-services" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Complaint Board & Forum Removal
          </Link>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Remove Negative Search Results
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Fake Review Removal
          </Link>
        </div>
      </div>
    </>
  );
}
