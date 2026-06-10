import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Reputation Management for Schools & Universities",
  description: "Protect your school or university from fake student reviews and negative news reports. Drive admissions by showing positive campus achievements.",
  keywords: ["school reputation management", "university ORM services", "education brand protection", "manage college reviews", "online reputation management company in delhi", "orm company in india", "orm services india"],
  alternates: {
    canonical: "/solution/education-industry-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
