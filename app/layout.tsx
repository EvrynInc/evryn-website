import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evryn - Find your people",
  description: "Evryn is an AI who finds you your people — the rare individuals who are just the right fit for you in any domain of life. She only connects people she trusts.",
  keywords: ["AI", "matchmaking", "connections", "networking", "relationships", "trusted introductions"],
  authors: [{ name: "Evryn Inc." }],
  creator: "Evryn Inc.",
  metadataBase: new URL("https://evryn.ai"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Evryn - Find your people",
    description: "An AI who finds you your people — and only connects people she trusts.",
    url: "https://evryn.ai",
    siteName: "Evryn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evryn - Find your people",
    description: "An AI who finds you your people — and only connects people she trusts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
