import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "View Counter",
  description: "See how many times this page has been visited",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
