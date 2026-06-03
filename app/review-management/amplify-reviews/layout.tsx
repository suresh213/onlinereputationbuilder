import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amplify Reviews - Positive Review Generation Services",
  description: "Automatically gather and showcase 5-star customer reviews across critical platforms. Turn happy clients into brand advocates and drive sales.",
  keywords: ["amplify reviews", "positive review generator", "5 star review automation", "gather client reviews"],
  alternates: {
    canonical: "/review-management/amplify-reviews",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
