import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Online Reputation Builder",
  description: "Our commitment to client privacy, data confidentiality, and non-disclosure standards.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/privacy-policy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
