import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to JPG Converter - Free Online PNG to JPEG Conversion Tool",
  description: "Convert PNG images to JPG/JPEG format online for free. Reduce file sizes significantly while maintaining quality for sharing and compatibility.",
};

export default function PngToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}