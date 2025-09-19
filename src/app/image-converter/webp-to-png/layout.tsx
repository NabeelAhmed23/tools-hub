import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebP to PNG Converter - Free Online WebP to PNG Conversion Tool | ToolsHub",
  description: "Convert WebP images to PNG format online for free. Preserve transparency and achieve lossless quality perfect for graphics, logos, and professional designs. No registration required - your files stay private with secure processing.",
  keywords: "webp to png converter, webp to png, image converter, transparency preservation, lossless conversion, graphics conversion, logo conversion, image processing, photo converter",
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
    canonical: "/image-converter/webp-to-png",
  },
  openGraph: {
    title: "Free WebP to PNG Converter - Preserve Transparency & Quality | ToolsHub",
    description: "Convert WebP images to PNG format with perfect transparency preservation and lossless quality. Ideal for graphics and professional designs.",
    url: "/image-converter/webp-to-png",
    siteName: "ToolsHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/webp-to-png-converter.jpg",
        width: 1200,
        height: 630,
        alt: "WebP to PNG Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to PNG Converter - Transparency Preserved | ToolsHub",
    description: "Convert WebP images to PNG format with perfect transparency and lossless quality. Professional graphics conversion tool.",
    images: ["/og/webp-to-png-converter.jpg"],
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

export default function WebpToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}