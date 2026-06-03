import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Reputation Management Services for Individuals",
  description: "Protect your personal brand, career, and digital footprint. Suppress negative content, mugshots, court records, and private information from search results.",
  keywords: ["personal reputation management", "reputation repair for individuals", "clean personal google search", "delete mugshots google", "private link removal"],
  alternates: {
    canonical: "/individual",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
