import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder - Free Online Tool | ToolsHub", 
  description: "Free Base64 encoder and decoder with UTF-8 support. Convert text to Base64 and decode Base64 strings back to text. Fast, secure, and works offline.",
  keywords: ["base64 encoder", "base64 decoder", "base64 converter", "encoding", "decoding", "UTF-8"],
  openGraph: {
    title: "Free Base64 Encoder/Decoder Tool",
    description: "Encode and decode Base64 strings with UTF-8 support. Privacy-focused tool that works in your browser.",
    type: "website",
  },
};

export default function Base64Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}