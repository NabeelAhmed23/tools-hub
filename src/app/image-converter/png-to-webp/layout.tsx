import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to WebP Converter - Free Online PNG to WebP Conversion Tool",
  description: "Convert PNG images to WebP format online while preserving transparency. Get better compression with modern web standards.",
};

export default function PngToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}