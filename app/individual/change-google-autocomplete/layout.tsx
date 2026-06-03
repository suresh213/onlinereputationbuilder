import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fix & Change Google Autocomplete Suggestions | Personal ORM",
  description: "Remove negative suggestions, search autocomplete hints, and related searches on Google. Optimize suggestions to reflect your positive reputation.",
  keywords: ["fix google autocomplete", "change google suggestions", "remove search suggestions", "google autocomplete optimization"],
  alternates: {
    canonical: "/individual/change-google-autocomplete",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
