import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Online Reputation Builder",
  description: "Verified client reviews and case studies for Online Reputation Builder. Trusted by 1,200+ businesses and executives worldwide.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/reviews",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
