import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trustpilot Review Removal & Reputation Repair",
  description: "Remove fake ratings from Trustpilot. We help flag false complaints, verify reviews, and maintain a stellar Trustpilot rating for trust.",
  keywords: ["trustpilot review removal", "repair trustpilot score", "remove fake trustpilot reviews", "trustpilot rating builder", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/trustpilot-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
