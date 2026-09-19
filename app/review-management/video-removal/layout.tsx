import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Negative Video Removal Services | Remove YouTube & Slander Videos",
  description: "Professional negative video removal services. We take down defamatory, copyrighted, or leaked videos from YouTube, Google Search, and video platforms. 100% confidential legal resolution.",
  keywords: [
    "negative video removal",
    "negative video removal services",
    "remove youtube video",
    "remove defamatory video youtube",
    "video takedown service",
    "dmca copyright video removal",
    "delete leaked video google",
    "youtube privacy complaint removal",
    "tiktok video removal",
    "online reputation management"
  ],
  alternates: {
    canonical: "/review-management/video-removal",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does negative video removal work for YouTube and Google?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Negative video removal operates through four proven avenues: (1) Direct DMCA Copyright Takedown notices for unauthorized or stolen footage, (2) YouTube Privacy and Harassment Complaints when your personal identity, likeness, or private data is exposed without consent, (3) Formal legal Defamation Webforms and Cease & Desist notices to video uploaders, and (4) Google De-indexing requests to wipe video snippets from search results."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove a negative YouTube video without the uploader's permission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. When a video breaches platform Terms of Service - such as defamation, harassment, copyright infringement, trademark abuse, or privacy violations - YouTube and hosting platforms will permanently delete the video directly upon receiving validated legal and compliance submissions."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove a negative video?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Copyright and DMCA video takedowns are often processed within 24 to 72 hours. Privacy violations and non-consensual content claims take 48 hours to 5 days. Defamation disputes requiring legal review by platform compliance boards typically take between 7 to 14 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What if a negative video cannot be completely taken down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In rare instances where a video cannot be deleted due to public interest claims, we deploy Reverse Video SEO suppression. By optimizing and ranking authoritative video assets, official brand channels, and high-ranking press clips, we push the damaging video far past the first page of search results where it receives virtually zero views."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Negative Video Removal Services",
  "description": "Confidential and legal negative video removal from YouTube, Google Search, and social media platforms.",
  "url": "https://onlinereputationbuilders.in/review-management/video-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in"
  },
  "areaServed": "IN",
  "serviceType": "Negative Video Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-video-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-video-removal"
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
          <Link href="/review-management/youtube-video-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            YouTube Video Removal
          </Link>
          <Link href="/blog/how-to-remove-copyright-strike-from-aiplex-software" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Remove AiPlex Copyright Strike Guide
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Negative Review Removal
          </Link>
          <Link href="/review-management/negative-link-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Link Removal
          </Link>
        </div>
      </div>
    </>
  );
}
