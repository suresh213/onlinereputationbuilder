import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real-time Brand Reputation Monitoring Services | India",
  description: "Track brand mentions across news, social media, forums, and blogs in real-time. Detect threats and negative sentiment before they escalate.",
  keywords: ["brand reputation monitoring", "track online mentions", "sentiment monitoring company", "real-time brand watch", "ORM monitor tools", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business/reputation-monitoring",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
