import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GPA Calculator - Calculate Grade Point Average",
  description:
    "Calculate your Grade Point Average with multiple subjects and credit hours. Supports both letter grades and numeric grades with accurate GPA calculation.",
  keywords: [
    "GPA calculator",
    "grade point average",
    "college GPA",
    "university GPA",
    "semester GPA",
    "cumulative GPA",
    "grade calculator",
    "academic calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/gpa-calculator",
  },
  openGraph: {
    title: "GPA Calculator - Calculate Grade Point Average",
    description:
      "Calculate your Grade Point Average with multiple subjects and credit hours. Supports letter and numeric grades.",
    url: "https://www.the-tools-hub.com/gpa-calculator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "GPA Calculator Tool - Calculate Grade Point Average",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPA Calculator - Calculate Grade Point Average",
    description:
      "Calculate your GPA with multiple subjects and credit hours. Supports letter and numeric grades.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function GPACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}