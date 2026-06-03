import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Review Management & Generation Services",
  description: "Monitor and manage reviews across Google, Glassdoor, Indeed, Trustpilot, and Yelp. Generate positive customer reviews to build online trust.",
  keywords: ["review management services", "corporate review monitoring", "generate positive reviews", "manage yelp reviews", "improve business rating"],
  alternates: {
    canonical: "/business/review-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
