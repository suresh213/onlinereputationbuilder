import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Reputation Management Services | Builders & Developers ORM",
  description: "Safeguard property developments, buyer sentiment, and builder credibility. Remove false buyer complaints and forum defamation across Google.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/solution/real-estate-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
