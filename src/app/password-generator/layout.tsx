import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Generator - Strong Secure Passwords | ToolsHub",
  description: "Generate cryptographically secure passwords with customizable options. Choose length, character types, and exclude similar characters. Free online password generator.",
  keywords: ["password generator", "secure password", "random password", "strong password", "cryptographic password"],
  openGraph: {
    title: "Free Password Generator - Create Strong Secure Passwords",
    description: "Generate cryptographically secure passwords with customizable options. Free, secure, and privacy-focused.",
    type: "website",
  },
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}