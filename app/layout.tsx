import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://onlinereputationbuilder.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Online Reputation Builder – Top ORM Company in Kolkata, India",
    template: "%s | Online Reputation Builder",
  },
  description:
    "Online Reputation Builder is India's No.1 Online Reputation Management Company. We protect, repair & enhance your online reputation. Trusted by 1200+ clients across the globe.",
  keywords: [
    "online reputation management",
    "online reputation management meaning",
    "online reputation management tools",
    "online reputation management company",
    "online reputation management (orm)",
    "online reputation management services",
    "online reputation",
    "online reputation management pvt ltd",
    "ORM company India",
    "reputation management india",
    "remove negative Google results",
    "remove negative reviews",
    "brand reputation management",
    "online reputation repair",
    "crisis management",
    "review management",
    "ORM agency India",
  ],
  alternates: { canonical: "https://onlinereputationbuilder.in/" },
  openGraph: {
    title: "Online Reputation Builder – Top ORM Company in India",
    description:
      "Protect & enhance your online reputation with India's Top ORM agency. Trusted by 1200+ clients.",
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Online Reputation Builder",
    images: [
      {
        url: "/logo-orm.webp",
        width: 1200,
        height: 630,
        alt: "Online Reputation Builder Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Builder – Top ORM Company in India",
    description:
      "Protect & enhance your online reputation with India's Top ORM agency. Trusted by 1200+ clients.",
    images: ["/logo-orm.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Online Reputation Builder",
                "description": "India's No.1 Online Reputation Management Company in Kolkata",
                "url": siteUrl,
                "logo": `${siteUrl}/logo-orm.webp`,
                "telephone": "+918882788412",
                "email": "contact@onlinereputationbuilder.in",
                "sameAs": [
                  "https://www.facebook.com/onlinereputationbuilder",
                  "https://x.com/reputationbuild",
                  "https://www.linkedin.com/company/onlinereputationbuilder",
                  "https://www.instagram.com/onlinereputationbuilder"
                ],
                "knowsAbout": [
                  "Online Reputation Management",
                  "Reverse SEO",
                  "Search Engine Suppression",
                  "Content Removal",
                  "Crisis Management",
                  "Review Management"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Suresh Kumar"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Shantipally, Behala",
                  "addressLocality": "Kolkata",
                  "postalCode": "700060",
                  "addressCountry": "IN"
                },
                "areaServed": "IN",
                "serviceType": "Online Reputation Management"
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Online Reputation Builder",
                "image": `${siteUrl}/logo-orm.webp`,
                "telephone": "+918882788412",
                "email": "contact@onlinereputationbuilder.in",
                "url": siteUrl,
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Shantipally, Behala",
                  "addressLocality": "Kolkata",
                  "postalCode": "700060",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 22.4996,
                  "longitude": 88.3103
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Online Reputation Builder",
                "url": siteUrl,
                "description": "India's Top Online Reputation Management Company. We remove negative results, manage reviews, and build strong digital reputations.",
                "inLanguage": "en-IN",
                "publisher": {
                  "@type": "Organization",
                  "name": "Online Reputation Builder",
                  "url": siteUrl
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${siteUrl}/blog?q={search_term_string}`
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About Us",
                "description": "Learn more about Online Reputation Builder, India's leading ORM agency.",
                "url": `${siteUrl}/about`
              }
            ]),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3HQP074NNT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3HQP074NNT');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
