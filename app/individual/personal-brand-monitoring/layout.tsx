import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Brand & Reputation Monitoring Services",
  description: "Track mentions of your name across search engines, social media platforms, public directories, and forums with our personal brand alert systems.",
  keywords: ["personal brand monitoring", "track my name google", "reputation alert for individuals", "personal mention monitor"],
  alternates: {
    canonical: "/individual/personal-brand-monitoring",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
