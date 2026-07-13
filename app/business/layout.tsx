import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Reputation Management Services | India",
  description: "Protect and repair your company's online image. Specialized B2B and B2C reputation management services in India to remove bad reviews and boost brand trust.",
  keywords: ["business online reputation management", "corporate ORM company", "brand reputation management", "ORM company India", "reputation repair India", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
