import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CookieBanner from "@/components/cookies/CookieBanner";
import Analytics from "@/components/seo/Analytics";
import SeoSchema from "@/components/seo/SeoSchema";
import { rootMetadata } from "@/lib/metadata";
import { createOrganizationSchema } from "@/lib/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SeoSchema schema={createOrganizationSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
