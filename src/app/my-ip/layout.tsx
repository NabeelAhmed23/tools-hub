import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's My IP Address - IP Lookup & Location Tool",
  description:
    "Find your public IP address, location, ISP, and browser information. Free IP lookup tool with IPv4 and IPv6 support and privacy protection.",
  keywords: [
    "what is my IP",
    "IP address",
    "IP lookup",
    "my IP address",
    "public IP",
    "IP geolocation",
    "network information",
    "ISP lookup",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/my-ip",
  },
  openGraph: {
    title: "What's My IP Address - IP Lookup & Location Tool",
    description:
      "Find your public IP address and network information. Privacy-focused IP lookup tool with optional location data.",
    url: "https://www.the-tools-hub.com/my-ip",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "What's My IP Tool - IP Address Lookup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's My IP Address - IP Lookup & Location Tool",
    description:
      "Find your public IP address and location instantly. Privacy-focused network information tool.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function MyIPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}