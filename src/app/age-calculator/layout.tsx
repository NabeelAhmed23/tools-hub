import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Your Exact Age",
  description:
    "Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with next birthday countdown and total days lived calculation.",
  keywords: [
    "age calculator",
    "calculate age",
    "exact age",
    "birthday calculator",
    "age in days",
    "age counter",
    "how old am I",
    "age difference calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/age-calculator",
  },
  openGraph: {
    title: "Age Calculator - Calculate Your Exact Age",
    description:
      "Calculate your exact age in years, months, days, hours, and minutes. Free online age calculator with next birthday countdown and total days lived calculation.",
    url: "https://www.the-tools-hub.com/age-calculator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Age Calculator Tool - Calculate Your Exact Age",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Age Calculator - Calculate Your Exact Age",
    description:
      "Calculate your exact age in years, months, days, hours, and minutes. Free age calculator with birthday countdown.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function AgeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}