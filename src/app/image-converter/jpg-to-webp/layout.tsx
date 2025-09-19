import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG to WebP Converter - Free Online JPEG to WebP Conversion Tool | ToolsHub",
  description: "Convert JPG/JPEG images to WebP format online for free. Reduce file size by up to 80% while maintaining quality and get modern, efficient image format. No registration required - your files stay private with secure processing.",
  keywords: "jpg to webp converter, jpeg to webp, image converter, webp format, image compression, file size reduction, modern image format, web optimization, image processing",
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
    canonical: "/image-converter/jpg-to-webp",
  },
  openGraph: {
    title: "Free JPG to WebP Converter - Online Image Format Conversion | ToolsHub",
    description: "Convert JPEG images to WebP format with up to 80% file size reduction. Fast, free, and secure conversion tool for modern web optimization.",
    url: "/image-converter/jpg-to-webp",
    siteName: "ToolsHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/jpg-to-webp-converter.jpg",
        width: 1200,
        height: 630,
        alt: "JPG to WebP Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to WebP Converter - Free Online Tool | ToolsHub",
    description: "Convert JPEG images to WebP format with massive file size reduction. Professional image optimization tool.",
    images: ["/og/jpg-to-webp-converter.jpg"],
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

export default function JpgToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}