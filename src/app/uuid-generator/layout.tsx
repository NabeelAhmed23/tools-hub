import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator - Generate RFC 4122 UUID Identifiers",
  description:
    "Generate cryptographically secure UUID v4 identifiers. Create 1-100 UUIDs at once, copy individually or download as file. Perfect for databases and APIs.",
  keywords: [
    "UUID generator",
    "UUID v4",
    "unique identifier",
    "GUID generator",
    "random ID",
    "RFC 4122",
    "database ID",
    "API identifier",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/uuid-generator",
  },
  openGraph: {
    title: "UUID Generator - Generate RFC 4122 UUID Identifiers",
    description:
      "Generate secure UUID v4 identifiers in bulk. Download or copy UUIDs for your databases and API projects.",
    url: "https://www.the-tools-hub.com/uuid-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "UUID Generator Tool - Generate RFC 4122 Identifiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID Generator - Generate RFC 4122 UUID Identifiers",
    description:
      "Generate secure UUIDs in bulk for databases and APIs. Copy or download identifiers.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function UUIDGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}