import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Exclusieve feestzaal in Tongeren-Borgloon, Haspengouw`,
    template: `%s | ${siteConfig.name} — Feestzaal Tongeren-Borgloon`,
  },
  description: siteConfig.description,
  keywords: [
    "feestzaal Tongeren",
    "feestzaal Borgloon",
    "feestzaal Haspengouw",
    "zaal huren Tongeren",
    "zaal huren Borgloon",
    "evenementenlocatie Limburg",
    "fuifzaal huren",
    "receptie locatie Haspengouw",
    "zaalverhuur Tongeren-Borgloon",
    "verjaardagsfeest zaal",
    "zaalmateriaal huren",
    "statafels huren",
    "uplighters huren",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Exclusieve feestzaal in Tongeren-Borgloon`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg", // TODO: voeg een 1200×630 sfeerbeeld toe in /public
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — exclusieve feestzaal en evenementenlocatie in Haspengouw`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Exclusieve feestzaal in Tongeren-Borgloon`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "events",
};

export const viewport: Viewport = {
  themeColor: "#0e0d0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-BE" className={`${playfair.variable} ${inter.variable}`}>
      <body className="texture-noise min-h-screen">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
