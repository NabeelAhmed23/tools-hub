import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JPG to WebP Converter - Free Online JPEG to WebP Conversion Tool",
  description: "Convert JPG/JPEG images to modern WebP format online. Get 25-35% smaller file sizes with better compression and faster web loading.",
};

export default function JpgToWebpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}