import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputation Crisis Management Services | Corporate ORM Company",
  description: "Mitigate corporate PR disasters, negative media coverage, and viral social media crises. Protect your brand value with our 24/7 crisis response team.",
  keywords: ["reputation crisis management", "PR crisis response", "corporate crisis management", "crisis control ORM", "brand disaster repair", "online reputation management", "business reputation management", "reputation management company"],
  alternates: {
    canonical: "/business/crisis-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
