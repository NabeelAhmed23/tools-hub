import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder - Percent Encoding Tool",
  description:
    "Free URL encoder and decoder tool. Convert URLs with special characters using percent-encoding for safe transmission. Auto-detects encoding/decoding needs.",
  keywords: [
    "URL encoder",
    "URL decoder",
    "percent encoding",
    "URL encoding",
    "URI encoding",
    "web development",
    "API encoding",
    "query parameters",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/url-encode-decode",
  },
  openGraph: {
    title: "URL Encoder/Decoder - Percent Encoding Tool",
    description:
      "Encode and decode URLs with percent-encoding. Perfect for query parameters and special characters with auto-detection.",
    url: "https://www.the-tools-hub.com/url-encode-decode",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "URL Encoder/Decoder Tool - Percent Encoding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Encoder/Decoder - Percent Encoding Tool",
    description:
      "Encode and decode URLs with percent-encoding. Essential for web developers and APIs.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function URLEncodeDecodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}