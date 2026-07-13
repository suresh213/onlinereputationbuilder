import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education ORM Case Studies - Schools & Universities",
  description: "Case studies on restoring student admissions and public trust for top universities and colleges by clearing negative forums and news.",
  keywords: ["education ORM case study", "school reputation repair", "university rating cleanup", "student admission boost", "online reputation management company in kolkata", "orm company in india", "orm services india"],
  alternates: {
    canonical: "/solution/case-studies-for-education-reputation-management-company",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
