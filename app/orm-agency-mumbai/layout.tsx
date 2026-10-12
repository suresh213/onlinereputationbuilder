import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best ORM Agency in Mumbai | Top Reputation Management Company",
  description: "Top-rated online reputation management company in Mumbai. Remove negative search results, glassdoor reviews, and protect corporate leadership.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/orm-agency-mumbai",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
