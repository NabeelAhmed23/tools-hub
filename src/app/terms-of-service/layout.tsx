import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - User Agreement and Service Terms | ToolsHub",
  description: "Read ToolsHub's comprehensive terms of service including user agreements, acceptable use policy, intellectual property rights, and service limitations.",
  keywords: [
    "terms of service",
    "user agreement",
    "service terms",
    "acceptable use policy",
    "user responsibilities",
    "intellectual property",
    "service limitations",
    "liability disclaimer",
    "governing law",
    "dispute resolution",
    "service availability",
    "user conduct",
    "toolshub terms",
    "legal agreement",
    "service rules"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://www.the-tools-hub.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service - User Agreement & Service Terms | ToolsHub",
    description: "Read ToolsHub's comprehensive terms of service including user agreements, acceptable use policy, and service terms for our online tools.",
    url: "https://www.the-tools-hub.com/terms-of-service",
    siteName: "ToolsHub - Professional Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og/terms-of-service.jpg",
        width: 1200,
        height: 630,
        alt: "ToolsHub Terms of Service - User Agreement and Service Terms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - User Agreement & Service Terms | ToolsHub",
    description: "Read ToolsHub's comprehensive terms of service including user agreements, acceptable use policy, and service terms for our online tools.",
    images: ["https://www.the-tools-hub.com/og/terms-of-service.jpg"],
  },
  other: {
    "last-modified": new Date().toISOString(),
    "content-language": "en-US",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}