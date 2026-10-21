import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best ORM Agency in Hyderabad | Top Reputation Management Company",
  description: "Top-rated online reputation management company in Hyderabad. Defend HITEC City tech giants, pharma leaders, hospitals, and executives with 100% confidential ORM.",
  keywords: [
    "orm agency in hyderabad",
    "best orm company in hyderabad",
    "reputation management company hyderabad",
    "online reputation management hyderabad",
    "hitec city reputation management",
    "pharma reputation management hyderabad",
    "remove fake google reviews hyderabad",
    "executive personal branding hyderabad"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-agency-hyderabad",
  },
  openGraph: {
    title: "Best ORM Agency in Hyderabad | Top Reputation Management Company",
    description: "Top-rated online reputation management company in Hyderabad. Protect pharma enterprises, tech firms, and executives from negative search results.",
    url: "https://onlinereputationbuilders.in/orm-agency-hyderabad",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Online Reputation Builder - Hyderabad Regional Office",
  "image": "https://onlinereputationbuilders.in/logo-orm.webp",
  "url": "https://onlinereputationbuilders.in/orm-agency-hyderabad",
  "telephone": "+918882788412",
  "email": "contact@onlinereputationbuilders.in",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 4, Cyber Towers, HITEC City, Madhapur",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4504,
    "longitude": 78.3809
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
    "reviewCount": "172",
    "bestRating": "5"
  },
  "areaServed": [
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "HITEC City" },
    { "@type": "City", "name": "Gachibowli" },
    { "@type": "City", "name": "Banjara Hills" },
    { "@type": "City", "name": "Jubilee Hills" },
    { "@type": "City", "name": "Madhapur" },
    { "@type": "State", "name": "Telangana" },
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
      "name": "ORM Agency Hyderabad",
      "item": "https://onlinereputationbuilders.in/orm-agency-hyderabad"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="hyderabad-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="hyderabad-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
