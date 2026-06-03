import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Private Information & Personal Data from Google",
  description: "Erase phone numbers, home addresses, emails, and sensitive personal information from search engines, data brokers, and public databases.",
  keywords: ["remove private info from google", "delete personal address search", "remove phone number websites", "erase privacy data"],
  alternates: {
    canonical: "/individual/remove-private-info",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
