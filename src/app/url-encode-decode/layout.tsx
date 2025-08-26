import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder - Percent Encoding Tool | ToolsHub",
  description: "Free URL encoder and decoder tool. Convert URLs with special characters using percent-encoding for safe transmission. Auto-detects encoding/decoding needs.",
  keywords: ["URL encoder", "URL decoder", "percent encoding", "URL encoding", "URI encoding"],
  openGraph: {
    title: "Free URL Encoder/Decoder - Percent Encoding Tool",
    description: "Encode and decode URLs with percent-encoding. Perfect for query parameters and special characters.",
    type: "website",
  },
};

export default function URLEncodeDecodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}