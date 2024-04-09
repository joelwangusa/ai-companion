import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Companion",
  description: "AI Companion is a platform for AI enthusiasts to learn and grow together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  </ClerkProvider>
  );
}
