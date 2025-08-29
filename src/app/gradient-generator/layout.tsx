import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSS Gradient Generator - Create Beautiful Gradients",
  description:
    "Create beautiful CSS gradients with live preview. Generate linear and radial gradients, export as CSS, SCSS, or Tailwind config. Perfect for web design.",
  keywords: [
    "gradient generator",
    "css gradient",
    "linear gradient",
    "radial gradient",
    "gradient maker",
    "web design",
    "css tools",
    "gradient colors",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/gradient-generator",
  },
  openGraph: {
    title: "CSS Gradient Generator - Create Beautiful Gradients",
    description:
      "Create beautiful CSS gradients with live preview. Generate linear and radial gradients, export as CSS, SCSS, or Tailwind config.",
    url: "https://www.the-tools-hub.com/gradient-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "CSS Gradient Generator Tool - Create Beautiful Gradients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Gradient Generator - Create Beautiful Gradients",
    description:
      "Create beautiful CSS gradients with live preview. Export as CSS, SCSS, or Tailwind config.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function GradientGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}