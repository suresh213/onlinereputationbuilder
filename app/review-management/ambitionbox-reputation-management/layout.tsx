import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AmbitionBox Review Removal & Employer Brand Repair [100% Legal] | ORM",
  description: "Permanently delete fake, defamatory & ex-employee reviews on AmbitionBox. Restore your company rating, attract top Indian talent, and protect hiring pipeline.",
  keywords: [
    "ambitionbox review removal",
    "delete fake employee review ambitionbox",
    "remove ambitionbox review",
    "ambitionbox reputation repair",
    "suppress negative ambitionbox reviews",
    "employer branding ambitionbox",
    "delete bad company review ambitionbox",
    "online reputation management India"
  ],
  alternates: {
    canonical: "/review-management/ambitionbox-reputation-management",
  },
  openGraph: {
    title: "AmbitionBox Review Removal & Employer Brand Repair [100% Legal]",
    description: "Permanently delete fake, defamatory & ex-employee reviews on AmbitionBox. Restore your company rating and hiring brand.",
    url: "https://onlinereputationbuilders.in/review-management/ambitionbox-reputation-management",
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
      "name": "Can fake or disgruntled employee reviews be removed from AmbitionBox?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. AmbitionBox community guidelines prohibit defamatory statements, hate speech, breach of corporate confidentiality (NDAs), and reviews posted by competitors or individuals who never worked at the enterprise. We legally dispute and flag non-compliant reviews for permanent deletion."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to remove an AmbitionBox review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The review dispute and moderation review on AmbitionBox typically concludes within 7 to 14 business days upon formal compliance filing."
      }
    },
    {
      "@type": "Question",
      "name": "Does AmbitionBox notify the employee who posted the review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All review challenges, policy escalations, and moderation requests are handled strictly between our legal team and platform compliance officers under complete confidentiality."
      }
    },
    {
      "@type": "Question",
      "name": "What can you do if AmbitionBox declines to delete a negative review?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When direct deletion is rejected, we deploy employee review amplification and rating recovery programs, ethically gathering verified positive feedback from current satisfied team members to push overall company scores above 4.2+."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "AmbitionBox Reputation Management & Review Removal",
  "description": "Legal deletion of defamatory employee reviews and comprehensive employer brand protection on AmbitionBox.",
  "url": "https://onlinereputationbuilders.in/review-management/ambitionbox-reputation-management",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": "IN",
  "serviceType": "Employer Review Management"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-ambitionbox"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-ambitionbox"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Employer ORM:</span>
          <Link href="/review-management/remove-glassdoor-review" className="hover:text-brand-blue transition-colors underline underline-offset-2 font-medium text-zinc-700">
            Glassdoor Review Removal
          </Link>
          <Link href="/review-management/indeed-reputation-management" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Indeed Review Management
          </Link>
          <Link href="/review-management/fake-review-removal" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Fake Review Removal Hub
          </Link>
          <Link href="/business/remove-negative-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Negative Search Removal
          </Link>
        </div>
      </div>
    </>
  );
}
