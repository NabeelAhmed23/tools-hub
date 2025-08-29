import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Compressor & Resizer - Optimize Images Online",
  description:
    "Compress and resize images directly in browser. No uploads required - your files stay private. Supports JPEG, PNG, WebP with quality control.",
  keywords: [
    "image compressor",
    "image resizer",
    "photo compressor",
    "reduce file size",
    "image optimizer",
    "compress photos",
    "resize images",
    "image tools",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/image-compressor",
  },
  openGraph: {
    title: "Image Compressor & Resizer - Optimize Images Online",
    description:
      "Compress and resize images directly in browser. No uploads required - your files stay private. Supports JPEG, PNG, WebP.",
    url: "https://www.the-tools-hub.com/image-compressor",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Image Compressor Tool - Optimize Images Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor & Resizer - Optimize Images Online",
    description:
      "Compress and resize images in browser. No uploads - files stay private.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function ImageCompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}