import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Reputation Management Services | Doctors & Hospitals ORM",
  description: "Specialized online reputation management for doctors, clinics, and hospitals in India. Remove negative reviews, protect your medical practice, and enhance patient trust.",
  alternates: {
    canonical: "https://onlinereputationbuilders.in/solution/healthcare-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
