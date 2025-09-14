import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAH Softwares",
  description:
    "Creative Services For Brands Grow - Professional web design, development, and digital strategy",
  // generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
