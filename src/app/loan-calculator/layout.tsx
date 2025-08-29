import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Calculator - EMI Calculator with Amortization",
  description:
    "Calculate monthly EMI, total interest, and loan breakdown with visual charts. Perfect for home loans, personal loans, and auto loans with detailed amortization schedule.",
  keywords: [
    "loan calculator",
    "EMI calculator",
    "home loan calculator",
    "personal loan calculator",
    "mortgage calculator",
    "interest calculator",
    "amortization schedule",
    "monthly payment",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/loan-calculator",
  },
  openGraph: {
    title: "Loan Calculator - EMI Calculator with Amortization",
    description:
      "Calculate monthly EMI, total interest, and loan breakdown with visual charts. Perfect for home loans and personal loans.",
    url: "https://www.the-tools-hub.com/loan-calculator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Loan Calculator Tool - EMI Calculator with Amortization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Calculator - EMI Calculator with Amortization",
    description:
      "Calculate monthly EMI and total interest with visual charts. Perfect for all loan types.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function LoanCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}