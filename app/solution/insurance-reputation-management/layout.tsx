import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Industry Reputation Management | Brokers & Agencies ORM",
  description: "Build policyholder trust and remove false claim complaints online. Strategic reputation repair and review amplification for insurance firms.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/solution/insurance-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
