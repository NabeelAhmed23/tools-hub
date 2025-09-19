import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to JPG Converter - Free Online PNG to JPEG Conversion Tool | ToolsHub",
  description: "Convert PNG images to JPG/JPEG format online for free. Reduce file sizes by up to 90% while maintaining excellent quality for sharing and web compatibility. No registration required - your files stay private with secure processing.",
  keywords: "png to jpg converter, png to jpeg, image converter, file size reduction, image compression, format conversion, web optimization, image processing, photo converter",
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
    canonical: "/image-converter/png-to-jpg",
  },
  openGraph: {
    title: "Free PNG to JPG Converter - Online Image Format Conversion | ToolsHub",
    description: "Convert PNG images to JPG format with up to 90% file size reduction. Fast, free, and secure conversion tool for web optimization.",
    url: "/image-converter/png-to-jpg",
    siteName: "ToolsHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/png-to-jpg-converter.jpg",
        width: 1200,
        height: 630,
        alt: "PNG to JPG Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to JPG Converter - Free Online Tool | ToolsHub",
    description: "Convert PNG images to JPG format with massive file size reduction. Professional image optimization tool.",
    images: ["/og/png-to-jpg-converter.jpg"],
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

export default function PngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}