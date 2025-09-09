import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebP to PNG Converter - Free Online WebP to PNG Conversion Tool",
  description: "Convert WebP images to PNG format online with preserved transparency and lossless quality. Perfect for graphics and logos.",
};

export default function WebpToPngLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}