import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best ORM Agency in Bangalore | Top Reputation Management Company",
  description: "Top-rated online reputation management company in Bangalore. Safeguard tech startups, founder profiles, app store ratings, and corporate brands with 100% confidential ORM.",
  keywords: [
    "orm agency in bangalore",
    "best orm agency in bangalore",
    "reputation management company bangalore",
    "online reputation management bangalore",
    "startup reputation management bangalore",
    "remove fake glassdoor reviews bangalore",
    "app store review management bangalore",
    "executive personal branding bangalore",
    "defamatory news removal bangalore"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-agency-bangalore",
  },
  openGraph: {
    title: "Best ORM Agency in Bangalore | Top Reputation Management Company",
    description: "Top-rated online reputation management company in Bangalore. Protect tech startups, founders, and enterprises from defamatory search results.",
    url: "https://onlinereputationbuilders.in/orm-agency-bangalore",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Online Reputation Builder - Bangalore Tech Hub Office",
  "image": "https://onlinereputationbuilders.in/logo-orm.webp",
  "url": "https://onlinereputationbuilders.in/orm-agency-bangalore",
  "telephone": "+918882788412",
  "email": "contact@onlinereputationbuilders.in",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 9, Prestige Meridian 1, 29 M.G. Road, Ashok Nagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9752,
    "longitude": 77.6067
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
    "reviewCount": "218",
    "bestRating": "5"
  },
  "areaServed": [
    { "@type": "City", "name": "Bengaluru" },
    { "@type": "City", "name": "Koramangala" },
    { "@type": "City", "name": "Indiranagar" },
    { "@type": "City", "name": "Whitefield" },
    { "@type": "City", "name": "Electronic City" },
    { "@type": "State", "name": "Karnataka" },
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
      "name": "ORM Agency Bangalore",
      "item": "https://onlinereputationbuilders.in/orm-agency-bangalore"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="bangalore-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="bangalore-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
