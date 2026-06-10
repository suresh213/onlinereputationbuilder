import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Defamatory News Articles from Google & Web Search",
  description: "Request retraction or suppression of negative news coverage, outdated articles, and defamatory media press from Google search.",
  keywords: ["remove news article from google", "retract outdated news", "news media defamation removal", "delete newspaper post", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/news-article-removal-from-the-internet",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
