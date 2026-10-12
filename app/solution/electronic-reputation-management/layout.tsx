import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronics & Tech Industry Reputation Management | Consumer Brands ORM",
  description: "Protect your electronics and consumer tech brand from negative product reviews, unverified forum complaints, and tech blog defamation.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/solution/electronic-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
