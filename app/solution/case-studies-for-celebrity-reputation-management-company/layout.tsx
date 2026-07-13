import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Celebrity Reputation Management Case Studies | ORM Success",
  description: "See how we repaired online reputation for political figures, actors, and public figures. Suppress leaks, fake news, and personal defamation.",
  keywords: ["celebrity reputation case study", "actor ORM cleanup", "political candidate reputation recovery", "public figure suppression case study", "online reputation management company in india", "orm company in india", "orm services india"],
  alternates: {
    canonical: "/solution/case-studies-for-celebrity-reputation-management-company",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
