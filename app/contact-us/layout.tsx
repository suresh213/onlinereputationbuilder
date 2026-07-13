import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our ORM Experts",
  description: "Get a free, confidential online reputation consultation. Contact India's #1 ORM agency in Kolkata to repair your online presence today.",
  keywords: ["contact ORM company", "reputation consultation Kolkata", "hire reputation builder", "ORM expert contact", "online reputation management company in kolkata", "reputation management company"],
  alternates: {
    canonical: "/contact-us",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
