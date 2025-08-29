import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Percentage Calculator - Calculate Percentages Easily",
  description:
    "Calculate percentages, percentage changes, and discounts with multiple calculation modes. Free online percentage calculator with step-by-step explanations.",
  keywords: [
    "percentage calculator",
    "percent calculator",
    "percentage change",
    "discount calculator",
    "markup calculator",
    "percentage increase",
    "percentage decrease",
    "percent of",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/percentage-calculator",
  },
  openGraph: {
    title: "Percentage Calculator - Calculate Percentages Easily",
    description:
      "Calculate percentages, percentage changes, and discounts with multiple calculation modes. Free calculator with explanations.",
    url: "https://www.the-tools-hub.com/percentage-calculator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Percentage Calculator Tool - Calculate Percentages Easily",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator - Calculate Percentages Easily",
    description:
      "Calculate percentages, changes, and discounts with step-by-step explanations.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function PercentageCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}