import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - How We Use Cookies and Tracking Technologies | ToolsHub",
  description: "Learn about ToolsHub's cookie usage, tracking technologies, and how to manage your cookie preferences. Comprehensive guide to our cookie practices and user controls.",
  keywords: [
    "cookie policy",
    "cookies usage",
    "tracking technologies",
    "browser cookies",
    "cookie management",
    "cookie preferences",
    "analytics cookies",
    "essential cookies",
    "third-party cookies",
    "cookie consent",
    "web tracking",
    "privacy controls",
    "cookie types",
    "opt-out cookies",
    "toolshub cookies"
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
    canonical: "https://www.the-tools-hub.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy - How We Use Cookies & Tracking Technologies | ToolsHub",
    description: "Understand how ToolsHub uses cookies and tracking technologies, and learn how to manage your cookie preferences and privacy settings.",
    url: "https://www.the-tools-hub.com/cookie-policy",
    siteName: "ToolsHub - Professional Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og/cookie-policy.jpg",
        width: 1200,
        height: 630,
        alt: "ToolsHub Cookie Policy - Cookie Usage and Privacy Controls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - How We Use Cookies & Tracking Technologies | ToolsHub",
    description: "Understand how ToolsHub uses cookies and tracking technologies, and learn how to manage your cookie preferences and privacy settings.",
    images: ["https://www.the-tools-hub.com/og/cookie-policy.jpg"],
  },
  other: {
    "last-modified": new Date().toISOString(),
    "content-language": "en-US",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}