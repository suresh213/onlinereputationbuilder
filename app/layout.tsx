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

const siteUrl = "https://www.onlinereputationbuilder.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Online Reputation Builder – #1 ORM Company in Delhi, India",
    template: "%s | Online Reputation Builder",
  },
  description:
    "Online Reputation Builder is India's No.1 Online Reputation Management Company in Delhi. We protect, repair & enhance your online reputation. Trusted by 1200+ clients across the globe.",
  keywords: [
    "online reputation management",
    "ORM company India",
    "reputation management Delhi",
    "remove negative Google results",
    "remove negative reviews",
    "brand reputation management",
    "online reputation repair",
    "crisis management",
    "review management",
    "ORM agency Delhi NCR",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Online Reputation Builder – #1 ORM Company in India",
    description:
      "Protect & enhance your online reputation with India's #1 ORM agency. Trusted by 1200+ clients.",
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Online Reputation Builder",
    images: [
      {
        url: "/logo-orm.png",
        width: 1200,
        height: 630,
        alt: "Online Reputation Builder Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Builder – #1 ORM Company in India",
    description:
      "Protect & enhance your online reputation with India's #1 ORM agency. Trusted by 1200+ clients.",
    images: ["/logo-orm.png"],
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
                "description": "India's No.1 Online Reputation Management Company in Delhi",
                "url": siteUrl,
                "logo": `${siteUrl}/logo-orm.png`,
                "telephone": "+918882788412",
                "email": "contact@onlinereputationbuilder.in",
                "sameAs": [
                  "https://www.facebook.com/onlinereputationbuilder",
                  "https://x.com/reputationbuild",
                  "https://www.linkedin.com/company/onlinereputationbuilder",
                  "https://www.instagram.com/onlinereputationbuilder"
                ],
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
                "image": `${siteUrl}/logo-orm.png`,
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
              }
            ]),
          }}
        />
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
