import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Change Google Autocomplete Predictions & Search Suggestions | ORM",
  description: "Remove negative Google autocomplete suggestions, scam predictions & defamatory search drop-downs. 100% legal Search Box Optimization (SBO) & reputation repair.",
  keywords: [
    "change google autocomplete",
    "fix google autocomplete suggestions",
    "remove negative google autocomplete predictions",
    "google suggest optimization",
    "remove search suggestions google",
    "how to change google search predictions",
    "search box optimization sbo",
    "personal reputation management",
    "online reputation management"
  ],
  alternates: {
    canonical: "/individual/change-google-autocomplete",
  },
  openGraph: {
    title: "Change Google Autocomplete Predictions & Search Suggestions",
    description: "Remove negative Google autocomplete suggestions and defamatory search drop-downs. 100% confidential SBO & reputation repair.",
    url: "https://onlinereputationbuilders.in/individual/change-google-autocomplete",
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
      "name": "Can you remove or change negative Google Autocomplete suggestions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Google Autocomplete predictions can be addressed through two distinct avenues: (1) Direct Policy Enforcement: Google strictly prohibits autocomplete predictions that contain unverified defamatory accusations, violence, hate speech, or sensitive personal disclosures. We submit formal policy violation reporting to purge policy-breaching suggestions. (2) Search Box Optimization (SBO): By driving organic search interest and positive keyword velocity around authoritative brand terms, we organically replace negative suggestions with positive, brand-defining phrases."
      }
    },
    {
      "@type": "Question",
      "name": "How does Google generate autocomplete predictions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google's autocomplete algorithm reflects common and trending queries based on search volume, real-time query velocity, geographic location, and search freshness. When a controversy occurs, artificial surges in searches can cause negative terms (e.g., 'scam', 'fraud', 'arrest') to latch onto a brand's autocomplete drop-down."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to fix Google search suggestions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct policy violations submitted through Google Legal and Search Support are typically reviewed and expunged within 7 to 14 business days. Algorithmic Search Box Optimization (SBO) campaigns designed to organically dilute and replace suggestions usually require 45 to 90 days."
      }
    },
    {
      "@type": "Question",
      "name": "Will the removed autocomplete predictions reappear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Predictions removed via Google policy violations are permanently suppressed from the prediction model. For algorithmically replaced suggestions, maintaining consistent positive PR and brand search momentum ensures long-term stability."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Google Autocomplete Optimization & Removal Services",
  "description": "Professional removal of negative Google search predictions and brand Search Box Optimization (SBO).",
  "url": "https://onlinereputationbuilders.in/individual/change-google-autocomplete",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "US", "GB", "AE", "CA", "AU"],
  "serviceType": "Search Box Optimization"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-autocomplete"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-autocomplete"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Brand & Search Solutions:</span>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Content Removal
          </Link>
          <Link href="/review-management/negative-link-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Negative Link Removal
          </Link>
          <Link href="/individual/personal-branding-services" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Personal Branding Services
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Negative Review Removal
          </Link>
        </div>
      </div>
    </>
  );
}
