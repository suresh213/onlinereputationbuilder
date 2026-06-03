import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Reputation Management Blog | Latest ORM Strategies",
  description: "Read the latest guides, trends, and expert tips on how to suppress negative search results, manage online reviews, and build a strong personal brand.",
  keywords: [
    "online reputation management blog",
    "ORM strategy guides",
    "reputation repair articles",
    "learn online reputation management",
    "brand repair tips"
  ],
  alternates: {
    canonical: "/blog",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
