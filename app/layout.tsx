import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evryn Finds You Your People",
  description: "Evryn is a personal AI who finds you just the right people — for anything. And she only connects you to people she trusts.",
  keywords: ["Evryn", "Evryn AI", "AI matchmaking", "find your people", "find soulmate", "find a cofounder", "trusted connections", "AI dating", "meet people", "AI introductions"],
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
    title: "Evryn Finds You Your People",
    description: "Evryn is a personal AI who finds you just the right people — for anything. And she only connects you to people she trusts.",
    url: "https://evryn.ai",
    siteName: "Evryn AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evryn Finds You Your People",
    description: "Evryn is a personal AI who finds you just the right people — for anything. And she only connects you to people she trusts.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Evryn, Inc.",
              "alternateName": "Evryn AI",
              "url": "https://evryn.ai",
              "description": "Evryn is a personal AI who finds you just the right people — for anything. And she only connects you to people she trusts.",
              "foundingDate": "2025",
              "founder": {
                "@type": "Person",
                "name": "Justin Burris McGowan"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@evryn.ai",
                "contactType": "customer service"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
