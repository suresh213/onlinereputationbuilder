import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Online Reputation Builder",
  description: "Service terms, legal engagement standards, and operational guidelines for Online Reputation Builder.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/terms-and-conditions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
