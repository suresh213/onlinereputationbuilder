import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Instagram Posts, Videos, Comments & Accounts",
  description: "Get rid of negative Instagram comments, impersonation accounts, copyrighted video uploads, and cyberbullying posts. Protect your profile.",
  keywords: ["remove instagram post", "delete instagram comment", "instagram copycat take down", "remove leaked instagram video"],
  alternates: {
    canonical: "/review-management/instagram-videos-and-posts-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
