import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best ORM Agency in Kolkata | Top Reputation Management Company",
  description: "Top-rated online reputation management company in Kolkata headquartered at Park Street. Remove negative reviews, de-index defamatory news, and protect corporate leadership with 100% NDA confidentiality.",
  keywords: [
    "orm agency in kolkata",
    "best orm agency in kolkata",
    "reputation management company kolkata",
    "healthcare orm agency in kolkata",
    "remove fake google reviews kolkata",
    "corporate crisis management kolkata",
    "online reputation builder kolkata",
    "remove negative glassdoor reviews kolkata",
    "de-index defamatory news kolkata"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-agency-kolkata",
  },
  openGraph: {
    title: "Best ORM Agency in Kolkata | Top Reputation Management Company",
    description: "Top-rated online reputation management company in Kolkata headquartered at Park Street. Remove negative search results, bad reviews, and protect brand leadership.",
    url: "https://onlinereputationbuilders.in/orm-agency-kolkata",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Online Reputation Builder - Kolkata Headquarters",
  "image": "https://onlinereputationbuilders.in/logo-orm.webp",
  "url": "https://onlinereputationbuilders.in/orm-agency-kolkata",
  "telephone": "+918882788412",
  "email": "contact@onlinereputationbuilders.in",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "32 Chowringhee Rd, 7th Floor, Om Tower, Park Street",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700071",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 22.5518,
    "longitude": 88.3518
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
    "reviewCount": "184",
    "bestRating": "5"
  },
  "areaServed": [
    { "@type": "City", "name": "Kolkata" },
    { "@type": "State", "name": "West Bengal" },
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
      "name": "ORM Agency Kolkata",
      "item": "https://onlinereputationbuilders.in/orm-agency-kolkata"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="kolkata-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="kolkata-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
