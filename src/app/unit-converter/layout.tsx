import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unit Converter - Convert Length, Weight, Temperature Units",
  description:
    "Convert between units of length, weight, temperature, speed, and volume. Supports metric and imperial systems with accurate conversions and explanations.",
  keywords: [
    "unit converter",
    "metric converter",
    "length converter",
    "weight converter",
    "temperature converter",
    "imperial converter",
    "measurement converter",
    "conversion calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/unit-converter",
  },
  openGraph: {
    title: "Unit Converter - Convert Length, Weight, Temperature Units",
    description:
      "Convert between units of length, weight, temperature, speed, and volume. Supports metric and imperial systems.",
    url: "https://www.the-tools-hub.com/unit-converter",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Unit Converter Tool - Convert Length, Weight, Temperature",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unit Converter - Convert Length, Weight, Temperature Units",
    description:
      "Convert between metric and imperial units with accurate results.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function UnitConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}