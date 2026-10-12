import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Brand Management & Executive Digital PR",
  description: "Strategic digital PR and brand narrative management for enterprise leadership, corporations, and startup founders.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/campaign/brand-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
