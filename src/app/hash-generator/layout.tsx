import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512 Hashing Tool",
  description:
    "Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text input. Fast, secure hash generation tool with multiple algorithms and privacy protection.",
  keywords: [
    "hash generator",
    "MD5",
    "SHA-256",
    "SHA-512",
    "SHA-1",
    "cryptographic hash",
    "checksum",
    "data integrity",
    "hash calculator",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/hash-generator",
  },
  openGraph: {
    title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512 Hashing Tool",
    description:
      "Generate cryptographic hashes with multiple algorithms. Privacy-focused hash generation - all processing done in your browser.",
    url: "https://www.the-tools-hub.com/hash-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Hash Generator Tool - MD5, SHA-1, SHA-256, SHA-512",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hash Generator - MD5, SHA-1, SHA-256, SHA-512 Hashing Tool",
    description:
      "Generate cryptographic hashes with multiple algorithms. Privacy-focused tool works in browser.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function HashGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}