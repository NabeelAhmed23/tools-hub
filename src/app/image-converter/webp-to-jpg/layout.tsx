import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebP to JPG Converter - Free Online WebP to JPEG Conversion Tool",
  description: "Convert WebP images to JPG/JPEG format online for maximum compatibility across all devices and platforms.",
};

export default function WebpToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}