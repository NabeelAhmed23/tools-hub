import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG to PNG Converter - Free Online JPEG to PNG Conversion Tool",
  description: "Convert JPG/JPEG images to PNG format online for free. Add transparency support, maintain image quality, and get lossless conversion. No registration required.",
};

export default function JpgToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}