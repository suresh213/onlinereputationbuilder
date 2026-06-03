import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Review Management Services | E-commerce ORM",
  description: "Increase product sales by managing e-commerce reviews across Amazon, Flipkart, Shopify, and local directories. Drive ratings and customer trust.",
  keywords: ["product review management", "amazon review repair", "ecommerce rating boost", "flipkart review monitoring"],
  alternates: {
    canonical: "/review-management/product-review-management",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
