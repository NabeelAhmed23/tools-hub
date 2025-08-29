import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Password Strength Checker - Test Password Security | ToolsHub",
  description:
    "Check your password strength with our free online tool. Get security recommendations, crack time estimates, and entropy analysis. Privacy-focused - passwords never leave your browser.",
  keywords: [
    "password strength checker",
    "password security",
    "password analyzer",
    "password tester",
    "security checker",
    "password validation",
    "secure passwords",
  ],
  alternates: {
    canonical: "https://www.the-tools-hub.com/password-strength-checker",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Free Password Strength Checker - Test Your Password Security",
    description:
      "Analyze password strength with crack time estimates and security recommendations. Privacy-focused analysis.",
    type: "website",
    url: "https://www.the-tools-hub.com/password-strength-checker",
    siteName: "ToolsHub",
    images: [
      {
        url: "/og-password-checker.png",
        width: 1200,
        height: 540,
        alt: "Password Strength Checker Tool - Test Password Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Password Strength Checker - Test Your Password Security",
    description:
      "Analyze password strength with crack time estimates and security recommendations. Privacy-focused analysis.",
    images: ["/og-password-checker.webp"],
  },
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Password Strength Checker",
  url: "https://www.the-tools-hub.com/password-strength-checker",
  description:
    "Free online password strength checker that analyzes password security, provides crack time estimates, and offers security recommendations. Privacy-focused - all analysis happens locally in your browser.",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Any",
  permissions: "none",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Real-time password strength analysis",
    "Crack time estimation",
    "Entropy calculation",
    "Security recommendations",
    "Privacy-focused local processing",
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Check Password Strength",
  description:
    "Learn how to use our password strength checker to analyze and improve your password security.",
  image: "https://www.the-tools-hub.com/og-password-checker.webp",
  totalTime: "PT1M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  supply: [
    {
      "@type": "HowToSupply",
      name: "A password to test",
    },
  ],
  tool: [
    {
      "@type": "HowToTool",
      name: "Password Strength Checker Tool",
      url: "https://www.the-tools-hub.com/password-strength-checker",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Enter Your Password",
      text: "Type or paste your password into the password input field.",
    },
    {
      "@type": "HowToStep",
      name: "Review Strength Analysis",
      text: "Check the strength meter, crack time estimate, and entropy calculation.",
    },
    {
      "@type": "HowToStep",
      name: "Follow Security Recommendations",
      text: "Review the checklist and recommendations to improve your password security.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How secure is this password checker tool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our password strength checker is completely secure. All password analysis happens locally in your browser using JavaScript. Your password never leaves your device, is never sent to our servers, and is not stored or logged anywhere.",
      },
    },
    {
      "@type": "Question",
      name: "What makes a password strong?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A strong password typically contains at least 12 characters, includes a mix of uppercase and lowercase letters, numbers, and special symbols. It should avoid common words, personal information, and predictable patterns.",
      },
    },
    {
      "@type": "Question",
      name: "How is the crack time calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tool estimates crack time based on the password's entropy and modern attack methods. It considers factors like character set size, password length, and common attack vectors including brute force and dictionary attacks.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use a password manager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Password managers are highly recommended for generating, storing, and managing unique, strong passwords for all your accounts. They eliminate the need to remember complex passwords while ensuring maximum security.",
      },
    },
  ],
};

export default function PasswordStrengthCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      {children}
    </>
  );
}
