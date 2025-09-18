import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Mission to Provide Free, Privacy-First Tools | ToolsHub",
  description: "Learn about ToolsHub's mission to provide professional, free online tools with privacy-first design. Discover our story, values, and commitment to user security and education.",
  keywords: [
    "about toolshub",
    "privacy-first tools",
    "free online tools",
    "our mission",
    "professional tools",
    "user privacy",
    "tool development",
    "educational resources",
    "security-focused",
    "open-source commitment",
    "user-centric design",
    "digital privacy advocacy"
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
    canonical: "https://www.the-tools-hub.com/about",
  },
  openGraph: {
    title: "About ToolsHub - Privacy-First Online Tools",
    description: "Discover the story behind ToolsHub and our commitment to providing professional, free online tools with uncompromising privacy standards.",
    url: "https://www.the-tools-hub.com/about",
    siteName: "ToolsHub - Professional Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og/about-us.jpg",
        width: 1200,
        height: 630,
        alt: "About ToolsHub - Privacy-First Online Tools Mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About ToolsHub - Privacy-First Online Tools",
    description: "Learn about our mission to provide professional, free tools with uncompromising privacy standards.",
    images: ["https://www.the-tools-hub.com/og/about-us.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}