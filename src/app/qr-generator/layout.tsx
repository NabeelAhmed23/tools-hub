import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Generator - Create Custom QR Codes | ToolsHub",
  description: "Generate QR codes from text, URLs, WiFi passwords, contact info and more. Customizable size and error correction. Download as PNG or SVG.",
  keywords: ["QR code generator", "QR code", "barcode generator", "QR creator", "custom QR code"],
  openGraph: {
    title: "Free QR Code Generator - Create Custom QR Codes",
    description: "Generate QR codes with customizable options. Support for URLs, text, WiFi, contact info and more.",
    type: "website",
  },
};

export default function QRGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}