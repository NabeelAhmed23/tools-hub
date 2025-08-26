import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator - Random UUID v4 Generator | ToolsHub",
  description: "Generate cryptographically secure UUID v4 identifiers. Create 1-100 UUIDs at once, copy individually or download as file. Perfect for databases and APIs.",
  keywords: ["UUID generator", "UUID v4", "unique identifier", "GUID generator", "random ID"],
  openGraph: {
    title: "Free UUID Generator - Create Random UUID v4 Identifiers",
    description: "Generate secure UUID v4 identifiers in bulk. Download or copy UUIDs for your projects.",
    type: "website",
  },
};

export default function UUIDGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}