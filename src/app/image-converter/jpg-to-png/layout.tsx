import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG to PNG Converter - Free Online JPEG to PNG Conversion Tool | ToolsHub",
  description: "Convert JPG/JPEG images to PNG format online for free. Add transparency support, maintain lossless image quality, and preserve all image data. No registration required - your files stay private with secure processing.",
  keywords: "jpg to png converter, jpeg to png, image converter, format conversion, transparency support, lossless conversion, image format change, png transparency, jpeg converter, image processing",
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
    canonical: "/image-converter/jpg-to-png",
  },
  openGraph: {
    title: "Free JPG to PNG Converter - Online Image Format Conversion | ToolsHub",
    description: "Convert JPEG images to PNG format with transparency support and lossless quality. Fast, free, and secure conversion tool with no file limits.",
    url: "/image-converter/jpg-to-png",
    siteName: "ToolsHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/jpg-to-png-converter.jpg",
        width: 1200,
        height: 630,
        alt: "JPG to PNG Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PNG Converter - Free Online Tool | ToolsHub",
    description: "Convert JPEG images to PNG format with transparency support and lossless quality. Professional image conversion tool.",
    images: ["/og/jpg-to-png-converter.jpg"],
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

export default function JpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}