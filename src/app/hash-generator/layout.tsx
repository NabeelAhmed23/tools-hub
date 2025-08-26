import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hash Generator - MD5, SHA-256, SHA-512 | ToolsHub",
  description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text input. Fast, secure, and privacy-focused hash generation tool with detailed algorithm information.",
  keywords: ["hash generator", "MD5", "SHA-256", "SHA-512", "SHA-1", "cryptographic hash", "checksum"],
  openGraph: {
    title: "Free Hash Generator - MD5, SHA-256, SHA-512 Hashing Tool",
    description: "Generate cryptographic hashes with multiple algorithms. Privacy-focused - all processing done in your browser.",
    type: "website",
  },
};

export default function HashGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}