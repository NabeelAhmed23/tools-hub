import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Generator - Create Strong Secure Passwords",
  description:
    "Generate cryptographically secure passwords with customizable length, character types, and entropy calculation. Free online tool with privacy protection.",
  keywords: [
    "password generator",
    "secure password",
    "random password",
    "strong password",
    "cryptographic password",
    "entropy calculator",
    "password security",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/password-generator",
  },
  openGraph: {
    title: "Password Generator - Create Strong Secure Passwords",
    description:
      "Generate cryptographically secure passwords with customizable length, character types, and entropy calculation. Free online tool with privacy protection.",
    url: "https://www.the-tools-hub.com/password-generator",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-password-generator.png",
        width: 1200,
        height: 540,
        alt: "Password Generator Tool - Create Strong Secure Passwords",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Password Generator - Create Strong Secure Passwords",
    description:
      "Generate cryptographically secure passwords with customizable length, character types, and entropy calculation. Free online tool with privacy protection.",
    images: ["https://www.the-tools-hub.com/og-password-generator.png"],
  },
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
