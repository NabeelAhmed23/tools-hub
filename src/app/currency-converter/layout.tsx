import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Converter - All World Currencies Live Rates",
  description:
    "Convert between 180+ world currencies instantly with live exchange rates. Comprehensive currency converter supporting all major and minor currencies from USD, EUR, GBP to exotic currencies.",
  keywords: [
    "currency converter",
    "all world currencies",
    "180 currencies",
    "exchange rates",
    "currency exchange",
    "money converter",
    "forex rates",
    "international currency",
    "exotic currencies",
    "currency calculator",
    "world currency converter",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/currency-converter",
  },
  openGraph: {
    title: "Currency Converter - All World Currencies Live Rates",
    description:
      "Convert between 180+ world currencies instantly with live exchange rates. Comprehensive support for all major and minor world currencies.",
    url: "https://www.the-tools-hub.com/currency-converter",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Currency Converter Tool - All World Currencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter - All World Currencies Live Rates",
    description:
      "Convert between 180+ world currencies instantly. Support for all major and minor currencies worldwide.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function CurrencyConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}