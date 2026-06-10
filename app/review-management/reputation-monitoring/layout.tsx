import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputation Monitoring & Online Mention Alerts",
  description: "Stay updated on what is said about your business or name. Set up proactive alerts for review sites, blogs, and news platforms.",
  keywords: ["reputation monitoring", "mention alerts", "review alert systems", "online brand tracking", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/reputation-monitoring",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
