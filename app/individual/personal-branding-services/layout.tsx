import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Branding Services for Executives & Celebrities",
  description: "Establish your digital authority and personal brand. We build websites, write articles, publish press releases, and manage social profiles to rank you high.",
  keywords: ["personal branding services", "executive branding Delhi", "build celebrity brand", "thought leadership branding"],
  alternates: {
    canonical: "/individual/personal-branding-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
