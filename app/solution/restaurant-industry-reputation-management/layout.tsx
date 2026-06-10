import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Reputation Management | Boost Dining Bookings",
  description: "ORM services tailored for cafes, cloud kitchens, and restaurant chains. Delete fake reviews, handle food blogger crisis, and boost ratings.",
  keywords: ["restaurant review management", "cafe ORM solutions", "google maps restaurant ratings", "delete fake food reviews", "online reputation management company in delhi", "orm company in india", "orm services india"],
  alternates: {
    canonical: "/solution/restaurant-industry-reputation-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
