import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yelp Review Removal & Business Profile Management",
  description: "Remove fake Yelp reviews, manage customer responses, and optimize your business page to build rating scores and local customer leads.",
  keywords: ["yelp review removal", "yelp rating repair", "manage yelp profile", "remove fake yelp reviews", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/yelp-review-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
