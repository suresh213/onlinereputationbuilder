import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Fake Reviews from Google, Yelp, and Trustpilot",
  description: "Are fake reviews hurting your sales? Our legal and technical experts help identify, report, and remove fake, policy-violating reviews.",
  keywords: ["remove fake reviews", "google fake reviews deletion", "dispute yelp rating", "fake review report"],
  alternates: {
    canonical: "/review-management/fake-review-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
