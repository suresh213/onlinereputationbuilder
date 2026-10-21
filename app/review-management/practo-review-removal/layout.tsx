import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Practo Review Removal & Doctor Reputation Management | Protect Medical Practice",
  description: "Permanently delete fake, unverified, or defamatory patient reviews from Practo, Google Maps, and Lybrate. Defend doctor credibility with 100% confidential healthcare ORM.",
  keywords: [
    "practo review removal",
    "remove negative practo reviews",
    "how to remove fake reviews from practo",
    "practo review management for doctors",
    "doctor reputation management india",
    "healthcare orm india",
    "remove medical defamation online",
    "practo feedback dispute service"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/review-management/practo-review-removal",
  },
  openGraph: {
    title: "Practo Review Removal & Doctor Reputation Management",
    description: "Permanently remove or resolve defamatory, fake, and policy-violating reviews from Practo and Google Maps for medical practitioners in India.",
    url: "https://onlinereputationbuilders.in/review-management/practo-review-removal",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a doctor remove fake or defamatory reviews from Practo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Practo maintains strict Patient Feedback Policies. Reviews containing unverified accusations, commercial extortion, abusive language, non-patient accounts, or competitor interference can be formally disputed and permanently deleted through Practo's moderation desk and legal counsel escalations."
      }
    },
    {
      "@type": "Question",
      "name": "What can a doctor do if a patient posts false malpractice claims on Practo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Allegations of medical negligence or malpractice require statutory proof under Indian law (National Medical Commission regulations). Unsubstantiated claims violate Practo terms and Indian defamation statutes (Section 356 BNS). We submit formal legal notices demanding immediate removal."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a Practo review dispute take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Formal platform disputes and legal verification notices take between 7 to 18 business days for resolution and deletion on Practo."
      }
    },
    {
      "@type": "Question",
      "name": "Can you also clean up Google Maps reviews and Lybrate profiles for doctors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our healthcare ORM service covers Practo, Google Maps Business Profiles, Lybrate, Justdial, and medical forums simultaneously to ensure full digital defense for your clinic or hospital practice."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Practo Review Removal & Healthcare ORM Services",
  "description": "Specialized reputation management, dispute filing, and review moderation for doctors, medical specialists, and hospital clinics on Practo and Google Maps.",
  "url": "https://onlinereputationbuilders.in/review-management/practo-review-removal",
  "provider": {
    "@type": "Organization",
    "name": "Online Reputation Builder",
    "url": "https://onlinereputationbuilders.in",
    "telephone": "+918882788412"
  },
  "areaServed": ["IN", "AE", "US", "GB", "SG"],
  "serviceType": "Healthcare Reputation Management & Review Dispute"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="practo-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="practo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
