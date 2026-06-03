import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Negative Search Results from Google | Corporate ORM",
  description: "Bury and suppress negative search results, complaints, and forum posts. Rank positive assets on the first page of Google to protect your brand.",
  keywords: ["remove negative search results", "suppress negative google link", "bury complaints google", "google negative link removal"],
  alternates: {
    canonical: "/business/remove-negative-results",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
