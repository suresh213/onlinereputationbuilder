import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Fake News Articles & Defamatory Press | ORM",
  description: "Eliminate fake news posts, online defamation, and unverified allegations from search indexes. Take down illegal media publications quickly.",
  keywords: ["remove fake news", "delete defamatory article", "fake news report retraction", "media slander removal"],
  alternates: {
    canonical: "/review-management/fake-news-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
