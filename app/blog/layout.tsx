import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Online Reputation Management Blog | ORM Strategies",
  description: "Expert guides on removing negative search results, managing reviews, suppressing fake news, and crisis management. Real ORM strategies that work.",
  keywords: [
    "online reputation management blog",
    "how to remove negative reviews",
    "suppress negative google results",
    "fake news removal guide",
    "ORM strategy guides",
    "reputation repair articles",
    "learn online reputation management",
    "brand crisis management",
    "celebrity reputation protection",
    "business review management"
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Online Reputation Builder Blog",
            "description": "Expert guides on online reputation management, removing negative reviews, and crisis management",
            "url": "https://onlinereputationbuilder.in/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Online Reputation Builder",
              "logo": {
                "@type": "ImageObject",
                "url": "https://onlinereputationbuilder.in/logo-orm.png"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
