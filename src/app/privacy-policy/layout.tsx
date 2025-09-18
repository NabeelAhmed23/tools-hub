import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Your Data Protection and Privacy Rights | ToolsHub",
  description: "Comprehensive privacy policy explaining how ToolsHub protects your data, respects your privacy, and complies with GDPR, CCPA, and international data protection laws.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance",
    "user privacy rights",
    "data collection",
    "personal information",
    "cookie policy",
    "data security",
    "privacy rights",
    "data processing",
    "user consent",
    "data retention",
    "privacy controls",
    "toolshub privacy"
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
    canonical: "https://www.the-tools-hub.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Data Protection & Privacy Rights | ToolsHub",
    description: "Learn how ToolsHub protects your personal data and respects your privacy with our comprehensive privacy policy and GDPR compliance measures.",
    url: "https://www.the-tools-hub.com/privacy-policy",
    siteName: "ToolsHub - Professional Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og/privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "ToolsHub Privacy Policy - Data Protection and User Rights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Data Protection & Privacy Rights | ToolsHub",
    description: "Learn how ToolsHub protects your personal data and respects your privacy with our comprehensive privacy policy and GDPR compliance measures.",
    images: ["https://www.the-tools-hub.com/og/privacy-policy.jpg"],
  },
  other: {
    "last-modified": new Date().toISOString(),
    "content-language": "en-US",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}