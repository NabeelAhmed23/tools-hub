import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebP to JPG Converter - Free Online WebP to JPEG Conversion Tool | ToolsHub",
  description: "Convert WebP images to JPG/JPEG format online for free. Get maximum compatibility across all devices and platforms with universal JPEG support. No registration required - your files stay private with secure processing.",
  keywords: "webp to jpg converter, webp to jpeg, image converter, webp conversion, universal compatibility, image format conversion, web compatibility, image processing, photo converter",
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
    canonical: "/image-converter/webp-to-jpg",
  },
  openGraph: {
    title: "Free WebP to JPG Converter - Online Image Format Conversion | ToolsHub",
    description: "Convert WebP images to JPEG format for universal compatibility. Fast, free, and secure conversion tool for maximum device support.",
    url: "/image-converter/webp-to-jpg",
    siteName: "ToolsHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/webp-to-jpg-converter.jpg",
        width: 1200,
        height: 630,
        alt: "WebP to JPG Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to JPG Converter - Free Online Tool | ToolsHub",
    description: "Convert WebP images to JPEG format for universal compatibility. Professional image conversion tool.",
    images: ["/og/webp-to-jpg-converter.jpg"],
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

export default function WebpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}