import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remove Defamatory Quora Answers, Posts & Comments",
  description: "Suppress or remove defamatory answers, spam reports, or negative threads targeting your brand on Quora. Stop competitor spam.",
  keywords: ["remove quora answer", "delete quora post", "suppress competitor quora spam", "quora defamation removal", "reputation management service", "online reputation management agency", "best reputation management companies"],
  alternates: {
    canonical: "/review-management/quora-content-removal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
