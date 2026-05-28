import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Build Brand Better – #1 Online Reputation Management Company in Delhi, India",
  description: "Build Brand Better is India's No.1 Online Reputation Management Company in Delhi, dedicated to protecting and enhancing your online presence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
