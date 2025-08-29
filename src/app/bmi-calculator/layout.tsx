import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Body Mass Index Instantly",
  description:
    "Calculate your Body Mass Index (BMI) instantly with height and weight. Free BMI calculator with healthy weight ranges, categories, and health insights.",
  keywords: [
    "BMI calculator",
    "body mass index",
    "weight calculator", 
    "health calculator",
    "BMI chart",
    "healthy weight",
    "obesity calculator",
    "fitness calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/bmi-calculator",
  },
  openGraph: {
    title: "BMI Calculator - Calculate Body Mass Index Instantly",
    description:
      "Calculate your BMI and understand your weight category. Free BMI calculator with health insights and privacy protection.",
    url: "https://www.the-tools-hub.com/bmi-calculator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "BMI Calculator Tool - Calculate Body Mass Index",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator - Calculate Body Mass Index Instantly",
    description:
      "Calculate your BMI instantly with health insights. Free calculator with privacy protection.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function BMICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}