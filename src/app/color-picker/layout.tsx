import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Picker & Converter - HEX, RGB, HSL Color Tools",
  description:
    "Professional color picker and converter tool. Convert between HEX, RGB, HSL formats with live preview. Generate CSS variables and color palettes instantly.",
  keywords: [
    "color picker",
    "color converter",
    "hex to rgb",
    "rgb to hex",
    "hsl converter",
    "color palette",
    "css colors",
    "design tools",
    "web colors",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/color-picker",
  },
  openGraph: {
    title: "Color Picker & Converter - HEX, RGB, HSL Color Tools",
    description:
      "Professional color picker and converter tool. Convert between HEX, RGB, HSL formats with live preview. Generate CSS variables instantly.",
    url: "https://www.the-tools-hub.com/color-picker",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Color Picker Tool - HEX, RGB, HSL Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Picker & Converter - HEX, RGB, HSL Color Tools",
    description:
      "Professional color picker and converter. Convert HEX, RGB, HSL formats with live preview.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function ColorPickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}