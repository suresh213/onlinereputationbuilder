import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wikipedia Page Creation & Writing Services | Kolkata, India",
  description: "Professional Wikipedia editors to write, format, edit, and publish your personal or brand Wikipedia biography following notability rules.",
  keywords: ["wikipedia page writing", "wikipedia page creation", "wikipedia biography editor", "wikipedia page publisher", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/wikipedia-writing-services",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
