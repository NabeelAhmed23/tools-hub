import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Converter - Live Exchange Rates Calculator",
  description:
    "Convert currencies instantly with live exchange rates. Free online currency converter supporting 100+ currencies including USD, EUR, GBP, JPY, and more.",
  keywords: [
    "currency converter",
    "exchange rates",
    "currency exchange",
    "money converter",
    "forex rates",
    "USD to EUR",
    "international money",
    "currency calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/currency-converter",
  },
  openGraph: {
    title: "Currency Converter - Live Exchange Rates Calculator",
    description:
      "Convert currencies instantly with live exchange rates. Free online converter supporting 100+ currencies with real-time data.",
    url: "https://www.the-tools-hub.com/currency-converter",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Currency Converter Tool - Live Exchange Rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Currency Converter - Live Exchange Rates Calculator",
    description:
      "Convert currencies instantly with live rates. Support for 100+ currencies worldwide.",
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