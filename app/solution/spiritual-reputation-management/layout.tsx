import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spiritual Organization Reputation Management | Ashrams & Trusts ORM",
  description: "Protect religious, spiritual, and charitable organizations from smear campaigns, malicious misinformation, and search defamation.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/solution/spiritual-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
