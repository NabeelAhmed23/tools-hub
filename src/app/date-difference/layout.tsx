import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Date Difference Calculator - Calculate Days Between Dates",
  description:
    "Calculate the exact difference between two dates in years, months, days, hours, minutes, and seconds. Free online date calculator with precise results.",
  keywords: [
    "date difference",
    "days between dates",
    "date calculator",
    "time difference",
    "date duration",
    "calendar calculator",
    "date math",
    "working days calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/date-difference",
  },
  openGraph: {
    title: "Date Difference Calculator - Calculate Days Between Dates",
    description:
      "Calculate the exact difference between two dates in years, months, days, hours, minutes, and seconds. Free online date calculator.",
    url: "https://www.the-tools-hub.com/date-difference",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Date Difference Calculator - Calculate Days Between Dates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Date Difference Calculator - Calculate Days Between Dates",
    description:
      "Calculate exact difference between dates in years, months, days. Free online calculator.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function DateDifferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}