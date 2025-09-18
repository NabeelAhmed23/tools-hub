import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with ToolsHub Team | ToolsHub",
  description: "Contact the ToolsHub team for support, feedback, partnerships, or questions about our free online tools. We're here to help and value your input.",
  keywords: [
    "contact toolshub",
    "support",
    "feedback",
    "help",
    "get in touch",
    "customer service",
    "technical support",
    "partnership inquiries",
    "tool suggestions",
    "user feedback",
    "contact form",
    "business inquiries"
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
    canonical: "https://www.the-tools-hub.com/contact",
  },
  openGraph: {
    title: "Contact ToolsHub - We're Here to Help",
    description: "Get in touch with the ToolsHub team for support, feedback, or partnership inquiries. We value your input and are here to help.",
    url: "https://www.the-tools-hub.com/contact",
    siteName: "ToolsHub - Professional Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og/contact-us.jpg",
        width: 1200,
        height: 630,
        alt: "Contact ToolsHub - Professional Support Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ToolsHub - We're Here to Help",
    description: "Get in touch with our team for support, feedback, or partnership inquiries. We value your input.",
    images: ["https://www.the-tools-hub.com/og/contact-us.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}