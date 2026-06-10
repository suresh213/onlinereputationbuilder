import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Reddit Posts & Comments | Defamation Removal",
  description: "Is a negative Reddit post ranking for your name? Learn how to report copyrighted content, violate rules, and suppress Reddit threads.",
  keywords: ["remove reddit post", "delete reddit comment", "reddit thread suppression", "reddit copyright takedown", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/reddit-post-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
