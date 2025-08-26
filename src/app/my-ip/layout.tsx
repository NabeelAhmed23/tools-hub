import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What's My IP Address? - IP Lookup Tool | ToolsHub",
  description: "Find your public IP address, location, ISP, and browser information. Free IP lookup tool with IPv4 and IPv6 support. Privacy-focused with optional location data.",
  keywords: ["what is my IP", "IP address", "IP lookup", "my IP address", "public IP", "IP geolocation"],
  openGraph: {
    title: "What's My IP Address? - Free IP Lookup Tool",
    description: "Discover your public IP address and network information. Privacy-focused tool with optional location lookup.",
    type: "website",
  },
};

export default function MyIPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}