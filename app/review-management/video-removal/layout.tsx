import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Leaked Videos from Google Search, YouTube & Web",
  description: "Delete non-consensual videos, copyright leaks, and defamatory uploads from Google, YouTube, and streaming platforms. Confidential and fast removal service.",
  keywords: ["remove leaked video", "delete copyrighted video", "video take down google", "erase video from search", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/video-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
