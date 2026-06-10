import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Online Reputation Management Services | Delhi, India",
  description: "India's leading Corporate ORM company. Protect, repair, and build your business's online reputation. Suppress negative results and reviews.",
  keywords: ["business online reputation management", "corporate ORM company", "brand reputation management", "ORM company Delhi", "reputation repair India", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
