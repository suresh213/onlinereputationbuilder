import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Images from Google Search & Websites | Personal Privacy",
  description: "Erase copyrighted photos, non-consensual images, leaks, and unwanted photos from Google Images and host servers. Take down image leaks.",
  keywords: ["remove images from google", "delete private photo search", "DMCA image takedown", "remove leaked pictures", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/image-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
