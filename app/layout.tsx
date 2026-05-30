import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Builder – #1 ORM Company in India",
    description:
      "Protect & enhance your online reputation with India's #1 ORM agency. Trusted by 1200+ clients.",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Online Reputation Builder",
              description:
                "India's No.1 Online Reputation Management Company in Delhi",
              url: siteUrl,
              telephone: "+91-9971687251",
              email: "info@onlinereputationbuilder.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dwarka",
                addressLocality: "New Delhi",
                postalCode: "110059",
                addressCountry: "IN",
              },
              areaServed: "IN",
              serviceType: "Online Reputation Management",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
