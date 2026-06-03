import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Leaked Videos from Google Search, YouTube & Web",
  description: "Delete non-consensual videos, copyright leaks, and defamatory video uploads from search pages and streaming platforms.",
  keywords: ["remove leaked video", "delete copyrighted video", "video take down google", "erase video from search"],
  alternates: {
    canonical: "/review-management/video-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
