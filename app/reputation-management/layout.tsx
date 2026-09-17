import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Reputation Management & Removal Services | Free Confidential Audit",
  description:
    "India's leading Online Reputation Management (ORM) agency. We legally remove negative Google reviews, de-index defamatory articles, and protect your brand identity under strict NDA. Request your confidential audit today.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Online Reputation Management & Removal Services | Online Reputation Builder",
    description:
      "Legally remove negative reviews, de-index damaging search results, and build an untouchable brand reputation. 1,200+ clients protected globally.",
    type: "website",
  },
};

export default function ReputationManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
