import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Reputation Management Services | Best ORM Company India",
  description: "Complete online reputation repair, negative link suppression, and review management for high-net-worth individuals and businesses.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
