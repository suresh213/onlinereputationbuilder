import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Sitemap | Online Reputation Builder Complete Page Directory",
  description: "Comprehensive directory of all services, industry reputation playbooks, regional offices, and expert guides published by Online Reputation Builder.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/html-sitemap",
  },
  openGraph: {
    title: "HTML Sitemap | Online Reputation Builder Complete Directory",
    description: "Explore all pages, reputation management solutions, regional hubs, and research articles.",
    url: "https://onlinereputationbuilders.in/html-sitemap",
    siteName: "Online Reputation Builder",
    locale: "en_US",
    type: "website",
  },
};

export default function HtmlSitemapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
