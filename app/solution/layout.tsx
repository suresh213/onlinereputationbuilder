import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Specific Reputation Management Solutions",
  description: "Custom ORM roadmaps designed for restaurants, educational institutes, celebrities, and corporate brands. Build credibility in your specific industry.",
  keywords: ["industry reputation management", "restaurant reviews repair", "celebrity ORM", "school reputation management", "niche reputation solutions", "online reputation management company in kolkata", "orm company in india", "orm services india"],
  alternates: {
    canonical: "/solution",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
