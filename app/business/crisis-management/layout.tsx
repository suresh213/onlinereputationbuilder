import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reputation Crisis Management Services | Corporate ORM",
  description: "Mitigate corporate PR disasters, negative media coverage, and viral social media crises. Protect your brand value with our 24/7 crisis response team in India.",
  keywords: ["reputation crisis management", "PR crisis response", "corporate crisis management", "crisis control ORM", "brand disaster repair", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business/crisis-management",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is online reputation crisis management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Online reputation crisis management is the process of rapidly identifying, responding to, and neutralizing events that cause sudden severe damage to a brand's online reputation. This includes viral social media controversies, negative news coverage, product recall fallout, executive scandals, and coordinated review attacks. A crisis management team combines PR communication, search engine suppression, social media response, and legal action to contain and recover from the damage."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can a reputation crisis be controlled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The first 48 hours are critical. An effective crisis response team can issue an official statement within 4–6 hours, begin suppressing negative search rankings within 24 hours, and achieve significant narrative control within 7–14 days. Full reputation recovery typically takes 4–12 weeks depending on the severity and media coverage of the crisis."
      }
    },
    {
      "@type": "Question",
      "name": "What types of reputation crises do you handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We handle all types of corporate reputation crises including: viral social media controversies, negative press coverage and media hit pieces, product recalls and safety crises, executive misconduct allegations, data breach PR fallout, negative review storms, defamatory content campaigns, and competitor sabotage attacks."
      }
    },
    {
      "@type": "Question",
      "name": "How much does crisis reputation management cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crisis management costs vary by severity. Emergency response retainers start at ₹50,000 for small businesses. For mid-size companies facing active media coverage, packages range from ₹1,00,000–₹5,00,000. Enterprise-level crisis management for large corporates is priced based on scope, media coverage scale, and duration of the crisis. We offer an emergency free consultation to assess your specific situation."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-crisis-management"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
      <div className="bg-zinc-50 border-t border-zinc-200 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <span className="font-bold text-zinc-700 text-xs uppercase tracking-wider">Related Guides:</span>
          <Link href="/blog/corporate-pr-crisis-control-guide" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            Mastering Corporate PR Crisis Control: Complete Protocol
          </Link>
          <Link href="/blog/suppress-negative-search-results" className="hover:text-brand-blue transition-colors underline underline-offset-2">
            How to Suppress Negative Google Search Results
          </Link>
        </div>
      </div>
    </>
  );
}
