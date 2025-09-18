import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Favicon Generator - Create Complete Favicon Sets | ToolsHub",
  description: "Generate professional favicon sets from any image with server-side processing. Get 8 PNG sizes, ICO files, web manifest, and HTML code in one ZIP package. Free, fast, and secure.",
  keywords: [
    "favicon generator",
    "ico creator",
    "apple touch icon",
    "android chrome icon",
    "PWA manifest",
    "web favicon maker",
    "favicon sizes",
    "professional favicon",
    "server-side processing",
    "sharp image processing",
    "favicon zip package",
    "web manifest generator"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://toolshub.com/favicon-generator",
  },
  openGraph: {
    title: "Professional Favicon Generator - Complete Favicon Sets",
    description: "Create professional favicon sets with server-side Sharp processing. Generate all sizes, ICO files, web manifest, and HTML code.",
    url: "https://toolshub.com/favicon-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://toolshub.com/og/favicon-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Favicon Generator Tool - Create Complete Favicon Sets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Favicon Generator - Free Online Tool",
    description: "Generate complete favicon sets with professional quality and browser compatibility.",
    images: ["https://toolshub.com/og/favicon-generator.jpg"],
  },
};

export default function FaviconGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}