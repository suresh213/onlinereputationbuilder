import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Reputation Management Consultation | Online Reputation Builder",
  description:
    "Get a free, confidential consultation with India's top ORM experts. We remove negative Google reviews, de-index damaging articles, and protect your brand. 1,200+ clients served.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Free Reputation Management Consultation | Online Reputation Builder",
    description:
      "Remove negative reviews, de-index damaging content, and protect your brand. Free confidential consultation with India's #1 ORM agency.",
    type: "website",
  },
};

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
