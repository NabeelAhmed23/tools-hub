import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to WebP Converter - Free Online PNG to WebP Conversion Tool | ToolsHub",
  description: "Convert PNG images to WebP format online for free. Achieve superior compression while preserving transparency with modern web standards. No registration required - your files stay private with secure processing.",
  keywords: "png to webp converter, png to webp, image converter, webp conversion, transparency preservation, web optimization, image compression, modern web format, image processing",
  authors: [{ name: "ToolsHub", url: "https://www.the-tools-hub.com" }],
  creator: "ToolsHub",
  publisher: "ToolsHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.the-tools-hub.com"),
  alternates: {
    canonical: "/image-converter/png-to-webp",
  },
  openGraph: {
    title: "Free PNG to WebP Converter - Superior Compression & Transparency | ToolsHub",
    description: "Convert PNG images to WebP format with 25-50% better compression while preserving transparency. Modern web optimization tool.",
    url: "/image-converter/png-to-webp",
    siteName: "ToolsHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/png-to-webp-converter.jpg",
        width: 1200,
        height: 630,
        alt: "PNG to WebP Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to WebP Converter - Modern Web Optimization | ToolsHub",
    description: "Convert PNG images to WebP format with superior compression and transparency preservation. Professional web optimization tool.",
    images: ["/og/png-to-webp-converter.jpg"],
    creator: "@toolshub",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function PngToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}