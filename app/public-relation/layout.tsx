import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PR Services & Media Relations",
  description: "Enhance your brand visibility with premium PR services. We draft, distribute, and pitch press releases to top tier Indian and global news outlets.",
  keywords: ["PR services India", "media relations agency Delhi", "distribute press release", "news publication marketing", "press release service", "pr reputation management", "brand marketing strategy", "brand strategy and marketing"],
  alternates: {
    canonical: "/public-relation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
