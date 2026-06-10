import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "How to Remove Glassdoor Reviews | Employer Brand Repair",
  description: "Learn the legal and platform-compliant methods to remove fake, defamatory, or policy-violating employee reviews on Glassdoor. Fix your employer rating fast.",
  keywords: ["how to remove glassdoor reviews", "glassdoor policy violation review", "dispute employer review glassdoor", "fix glassdoor score", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/how-to-remove-glassdoor-reviews",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I remove a fake review on Glassdoor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To remove a fake review on Glassdoor: (1) Log into your Glassdoor employer account, (2) Find the review and click 'Flag as Inappropriate', (3) Select the specific policy violation (spam, fake, conflict of interest), (4) Submit documentation supporting your claim. For reviews that require legal action, send a defamation notice directly to Glassdoor's legal team. Most valid removal requests are processed within 3–7 business days."
      }
    },
    {
      "@type": "Question",
      "name": "What types of Glassdoor reviews can be removed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Glassdoor removes reviews that: are posted by someone who never worked at your company, contain spam or promotional content, include personal identifying information, make provably false factual claims, are posted by direct competitors, contain hate speech or personal attacks, or violate Glassdoor's community guidelines in any other way."
      }
    },
    {
      "@type": "Question",
      "name": "Can Glassdoor reviews hurt my company's SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Glassdoor reviews rank in Google search results for your company name. A low Glassdoor rating displayed in search results reduces click-through rates to your website and signals negative trust to potential customers and investors, not just job candidates. Managing your Glassdoor rating is therefore both an HR and SEO priority."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to improve a Glassdoor rating?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Improving a Glassdoor rating typically takes 4–12 weeks depending on your current rating and the number of existing reviews. The fastest strategy combines review removal (for fake reviews) with encouraging authentic positive reviews from satisfied current employees. A company with 20 reviews can see a 0.3–0.5 star improvement within 6 weeks with a structured review generation campaign."
      }
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="faq-how-remove-glassdoor"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
