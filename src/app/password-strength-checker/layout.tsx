import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Strength Checker - Test Password Security | ToolsHub",
  description: "Check your password strength with our free online tool. Get security recommendations, crack time estimates, and entropy analysis. Privacy-focused - passwords never leave your browser.",
  keywords: ["password strength checker", "password security", "password analyzer", "password tester", "security checker"],
  openGraph: {
    title: "Free Password Strength Checker - Test Your Password Security",
    description: "Analyze password strength with crack time estimates and security recommendations. Privacy-focused analysis.",
    type: "website",
  },
};

export default function PasswordStrengthCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}