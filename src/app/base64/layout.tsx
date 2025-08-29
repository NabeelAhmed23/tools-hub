import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder - Convert Text to Base64",
  description:
    "Free Base64 encoder and decoder with UTF-8 support. Convert text to Base64 and decode Base64 strings back to text. Privacy-focused tool works offline.",
  keywords: [
    "base64 encoder",
    "base64 decoder", 
    "base64 converter",
    "encoding",
    "decoding",
    "UTF-8",
    "data encoding",
    "text converter",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/base64",
  },
  openGraph: {
    title: "Base64 Encoder/Decoder - Convert Text to Base64",
    description:
      "Free Base64 encoder and decoder with UTF-8 support. Convert text to Base64 and decode Base64 strings. Privacy-focused tool.",
    url: "https://www.the-tools-hub.com/base64",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Base64 Encoder/Decoder Tool - Convert Text to Base64",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Encoder/Decoder - Convert Text to Base64",
    description:
      "Free Base64 encoder and decoder. Convert text to Base64 and decode strings back to text.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function Base64Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}