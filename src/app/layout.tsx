import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AniFocus - Stop Starting Anime. Start Finishing Them.",
  description: "Track your journey, maintain momentum, and complete more anime than ever before. Gamified anime progression dashboard and focus command center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
