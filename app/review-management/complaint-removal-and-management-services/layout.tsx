import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consumer Complaint Page Removal Services | Suppress Forums",
  description: "Bury consumer complaint pages (Ripoff Report, Consumer Court, Complaints Board) from Google search results. Suppress negative complaints professionally.",
  keywords: ["consumer complaint board removal", "ripoff report suppression", "delete negative forum posts", "complaint board takedown"],
  alternates: {
    canonical: "/review-management/complaint-removal-and-management-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
