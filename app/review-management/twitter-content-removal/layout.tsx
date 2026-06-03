import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Twitter / X Defamatory Posts & Accounts",
  description: "Take down negative tweets, defamatory threads, copyright infringements, and fake impersonation profiles from X. Clean your search profile.",
  keywords: ["remove tweet", "delete twitter post", "twitter copycat report", "x post defamation removal"],
  alternates: {
    canonical: "/review-management/twitter-content-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
