import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Political Reputation Management Services | Leaders & Candidates ORM",
  description: "Confidential digital reputation management and crisis response for politicians, elected officials, and public figures during campaigns and governance.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/solution/politics-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
