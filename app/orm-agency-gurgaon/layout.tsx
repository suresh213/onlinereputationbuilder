import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best ORM Agency in Gurgaon (Gurugram) | Corporate Reputation Management",
  description: "Top-rated online reputation management company in Gurgaon. Protect Cyber City corporate headquarters, real estate developers, and executives with 100% confidential ORM.",
  keywords: [
    "orm agency in gurgaon",
    "best orm company in gurgaon",
    "reputation management company gurugram",
    "online reputation management gurgaon",
    "cyber city reputation management",
    "real estate reputation management gurgaon",
    "remove negative glassdoor reviews gurgaon",
    "executive personal branding gurugram"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-agency-gurgaon",
  },
  openGraph: {
    title: "Best ORM Agency in Gurgaon (Gurugram) | Corporate Reputation Management",
    description: "Top-rated online reputation management company in Gurgaon. Protect corporate headquarters, real estate firms, and executives from negative search results.",
    url: "https://onlinereputationbuilders.in/orm-agency-gurgaon",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Online Reputation Builder - Gurgaon Corporate Office",
  "image": "https://onlinereputationbuilders.in/logo-orm.webp",
  "url": "https://onlinereputationbuilders.in/orm-agency-gurgaon",
  "telephone": "+918882788412",
  "email": "contact@onlinereputationbuilders.in",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tower B, 12th Floor, DLF Cyber City, Phase 2",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "postalCode": "122002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4952,
    "longitude": 77.0895
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "194",
    "bestRating": "5"
  },
  "areaServed": [
    { "@type": "City", "name": "Gurgaon" },
    { "@type": "City", "name": "Gurugram" },
    { "@type": "City", "name": "Cyber City" },
    { "@type": "City", "name": "Golf Course Road" },
    { "@type": "City", "name": "Sohna Road" },
    { "@type": "State", "name": "Haryana" },
    { "@type": "Country", "name": "India" }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://onlinereputationbuilders.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "ORM Agency Gurgaon",
      "item": "https://onlinereputationbuilders.in/orm-agency-gurgaon"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="gurgaon-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="gurgaon-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
