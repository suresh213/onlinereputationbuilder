import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Online Reputation Audit & Monitoring | ORM Expert",
  description: "Get a comprehensive analysis of your brand's digital footprint. We search, analyze, and track negative mentions to build an ORM strategy.",
  keywords: ["online reputation audit", "brand reputation analysis", "reputation scan business", "ORM audit services", "free reputation analysis", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business/reputation-audit",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
