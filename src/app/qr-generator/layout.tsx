import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Generator - Create Custom QR Codes Free",
  description:
    "Generate QR codes from text, URLs, WiFi passwords, contact info and more. Customizable size and error correction. Download as PNG or SVG format.",
  keywords: [
    "QR code generator",
    "QR code",
    "barcode generator",
    "QR creator",
    "custom QR code",
    "WiFi QR code",
    "URL QR code",
    "contact QR code",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/qr-generator",
  },
  openGraph: {
    title: "QR Code Generator - Create Custom QR Codes Free",
    description:
      "Generate QR codes with customizable options. Support for URLs, text, WiFi, contact info with download options.",
    url: "https://www.the-tools-hub.com/qr-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "QR Code Generator Tool - Create Custom QR Codes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Code Generator - Create Custom QR Codes Free",
    description:
      "Generate custom QR codes for text, URLs, WiFi. Downloadable PNG/SVG formats.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function QRGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}