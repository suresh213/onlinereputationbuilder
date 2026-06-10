import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Facebook Content, Posts, Pages & Reviews",
  description: "Delete defamatory Facebook posts, reports, reviews, pages, or groups. Protect your business or personal name from online social media bullying.",
  keywords: ["remove facebook post", "delete defamatory facebook page", "facebook review removal", "take down facebook group", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/facebook-content-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
