import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indeed Reputation Management & Review Removal | Employer Brand",
  description: "Clean up your Indeed employer page. Discard fake company reviews, respond to negative feedback, and improve ratings to hire talent faster.",
  keywords: ["indeed reputation repair", "indeed employer review removal", "employer branding indeed", "indeed rating fix", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/indeed-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
