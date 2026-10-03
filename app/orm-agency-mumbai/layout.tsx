import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ORM Agency in Mumbai | Top Online Reputation Management Company",
  description:
    "Looking for the best ORM agency in Mumbai? We legally remove negative Google reviews, de-index defamatory articles, and protect your brand identity. Request a confidential audit.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "ORM Agency in Mumbai | Online Reputation Builder",
    description:
      "Mumbai's leading Online Reputation Management agency. Legally remove negative reviews and de-index damaging search results.",
    type: "website",
  },
};

export default function MumbaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
