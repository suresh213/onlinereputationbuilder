import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glassdoor Review Removal & Reputation Management",
  description: "Restore your company's rating on Glassdoor. We flag fraudulent reviews and policy violations to improve your employer brand score.",
  keywords: ["remove glassdoor reviews", "glassdoor reputation repair", "employer score cleanup", "glassdoor rating repair"],
  alternates: {
    canonical: "/review-management/remove-glassdoor-review",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
