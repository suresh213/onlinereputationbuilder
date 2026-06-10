import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Defamatory YouTube Videos & Flag Violations",
  description: "Take down defamatory, false, or copyright-violating YouTube videos. Flag video uploads, copyright strikes, and channel impersonations.",
  keywords: ["remove youtube video", "delete copyright youtube video", "youtube channel strike report", "flag youtube defamation", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/youtube-video-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
