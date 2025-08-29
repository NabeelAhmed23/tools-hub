import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favicon Generator - Create Complete Favicon Sets",
  description:
    "Generate complete favicon sets from any image. Create all standard favicon sizes with HTML snippet included. Perfect for websites and web apps.",
  keywords: [
    "favicon generator",
    "favicon creator",
    "website icon",
    "favicon sizes",
    "ico generator",
    "apple touch icon",
    "web manifest",
    "favicon HTML",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/favicon-generator",
  },
  openGraph: {
    title: "Favicon Generator - Create Complete Favicon Sets",
    description:
      "Generate complete favicon sets from any image. Create all standard favicon sizes with HTML snippet included.",
    url: "https://www.the-tools-hub.com/favicon-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Favicon Generator Tool - Create Complete Favicon Sets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Favicon Generator - Create Complete Favicon Sets",
    description:
      "Generate complete favicon sets from any image with all standard sizes.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function FaviconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}