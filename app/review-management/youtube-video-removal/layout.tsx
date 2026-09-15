import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "YouTube Video Removal Services [DMCA & Defamation Takedowns] | ORM",
  description: "Remove defamatory, copyright-infringing, and privacy-violating YouTube videos permanently. Guaranteed legal escalation, DMCA takedowns & reverse video SEO.",
  keywords: [
    "remove youtube video",
    "defamatory youtube video removal",
    "youtube dmca takedown",
    "youtube copyright strike removal",
    "delete leaked video youtube",
    "take down defamatory video youtube",
    "youtube privacy complaint removal",
    "video takedown service"
  ],
  alternates: {
    canonical: "/review-management/youtube-video-removal",
  },
  openGraph: {
    title: "YouTube Video Removal Services [DMCA & Defamation Takedowns]",
    description: "Remove defamatory, copyright-infringing, and privacy-violating YouTube videos permanently. 100% legal & confidential.",
    url: "https://onlinereputationbuilders.in/review-management/youtube-video-removal",
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
      "name": "Can you legally remove a defamatory video from YouTube?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. YouTube enforces strict guidelines against defamation, non-consensual imagery, harassment, trademark abuse, and copyright infringement. When a video breaches these terms or local laws, our compliance specialists file formal legal webforms, DMCA notices, and court injunctions to achieve permanent removal."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can a YouTube video be taken down?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DMCA copyright strikes and privacy violation takedowns are frequently processed within 24 to 72 hours. Complex defamation cases involving legal compliance review usually resolve within 5 to 14 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What if the YouTube video creator refuses to delete the video?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not need the creator's permission. If the video violates YouTube policies or intellectual property rights, YouTube's Trust & Safety and Legal teams will remove the video directly. In parallel, we can issue formal Cease & Desist notices directly to the creator."
      }
    },
    {
      "@type": "Question",
      "name": "Can you remove negative YouTube videos from Google Search results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If a video cannot be deleted immediately at the platform level, we file Google Legal De-indexing requests to remove the video snippet from Google Search, alongside Reverse Video SEO to push the video off search results completely."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "YouTube Video Removal Service",
  "description": "Professional takedown of defamatory, copyright-infringing, and privacy-violating YouTube videos.",
  "url": "https://onlinereputationbuilders.in/review-management/youtube-video-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Video Removal"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-youtube-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-youtube-removal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Video & Removal Guides:</span>
          <Link href="/review-management/video-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Master Video Removal Hub
          </Link>
          <Link href="/blog/how-to-remove-copyright-strike-from-aiplex-software" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Remove AiPlex Copyright Strike Guide
          </Link>
          <Link href="/review-management/tiktok-video-and-post-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            TikTok Video Removal
          </Link>
          <Link href="/review-management/instagram-videos-and-posts-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Instagram Video Takedown
          </Link>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Negative Search Removal
          </Link>
        </div>
      </div>
    </>
  );
}
