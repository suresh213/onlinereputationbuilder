import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Fake Google Business Reviews | ORM Services",
  description: "Is your business suffering from fake or defamatory Google Maps reviews? Learn how to legally flag, dispute, and remove negative Google Reviews.",
  keywords: ["remove fake google reviews", "delete negative google review", "flag google map review", "google business review removal", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business/remove-google-business-review",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
