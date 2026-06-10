import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Review Management & Content Removal Services",
  description: "Complete control over your review profiles. Flag and remove fake reviews, delete forum posts, and manage Glassdoor, Trustpilot, Indeed, and Google.",
  keywords: ["review management", "content removal services", "delete negative reviews", "manage brand profiles", "Google maps repair", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
