import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambitionbox Reputation Management & Review Repair",
  description: "Repair your employer brand on Ambitionbox. Flag fake reviews, suppress negative employee complaints, and build a positive rating to attract top talent.",
  keywords: ["ambitionbox reputation repair", "remove ambitionbox review", "employer branding ambitionbox", "suppress negative employee reviews"],
  alternates: {
    canonical: "/review-management/ambitionbox-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
