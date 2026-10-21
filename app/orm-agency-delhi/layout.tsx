import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Best ORM Agency in Delhi NCR | Top Reputation Management Company",
  description: "Top-rated online reputation management company in Delhi NCR. Remove negative search results, fake Google reviews, glassdoor posts, and defamatory news articles with 100% NDA confidentiality.",
  keywords: [
    "orm agency in delhi",
    "best orm agency in delhi",
    "reputation management company delhi",
    "orm company delhi ncr",
    "remove fake google reviews delhi",
    "corporate crisis management delhi",
    "right to be forgotten delhi high court",
    "online reputation builder delhi",
    "defamatory news removal delhi",
    "glassdoor review removal delhi"
  ],
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-agency-delhi",
  },
  openGraph: {
    title: "Best ORM Agency in Delhi NCR | Top Reputation Management Company",
    description: "Top-rated online reputation management company in Delhi NCR. Remove negative search results, bad reviews, and protect brand leadership.",
    url: "https://onlinereputationbuilders.in/orm-agency-delhi",
    siteName: "Online Reputation Builder",
    locale: "en_IN",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Online Reputation Builder - Delhi NCR Regional Office",
  "image": "https://onlinereputationbuilders.in/logo-orm.webp",
  "url": "https://onlinereputationbuilders.in/orm-agency-delhi",
  "telephone": "+918882788412",
  "email": "contact@onlinereputationbuilders.in",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Level 6, Wing B, Statesman House, Barakhamba Road, Connaught Place",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.6304,
    "longitude": 77.2274
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
    "reviewCount": "246",
    "bestRating": "5"
  },
  "areaServed": [
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Gurgaon" },
    { "@type": "City", "name": "Faridabad" },
    { "@type": "City", "name": "Ghaziabad" },
    { "@type": "State", "name": "Delhi NCR" },
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
      "name": "ORM Agency Delhi",
      "item": "https://onlinereputationbuilders.in/orm-agency-delhi"
    }
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="delhi-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="delhi-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
