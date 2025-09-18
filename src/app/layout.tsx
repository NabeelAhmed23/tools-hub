import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.the-tools-hub.com"),
  title: {
    template: "%s | ToolsHub",
    default: "ToolsHub - Professional Free Online Tools & Calculators",
  },
  description:
    "Professional online tools for security, calculations, image processing, and conversions. Privacy-focused tools with comprehensive guides and tutorials. Password generators, calculators, image converters, and more - all free and secure.",
  keywords: [
    "online tools",
    "free calculators",
    "password generator",
    "hash generator",
    "BMI calculator",
    "currency converter",
    "image converter",
    "security tools",
    "privacy tools",
    "professional tools",
    "web utilities",
    "developer tools",
    "image compressor",
    "favicon generator",
    "educational tools"
  ],
  authors: [{ name: "ToolsHub Team", url: "https://www.the-tools-hub.com" }],
  creator: "ToolsHub",
  publisher: "ToolsHub - Professional Online Tools",
  applicationName: "ToolsHub",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.the-tools-hub.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.the-tools-hub.com",
    siteName: "ToolsHub - Professional Online Tools",
    title: "ToolsHub - Professional Free Online Tools & Calculators",
    description:
      "Professional online tools for security, calculations, image processing, and conversions. Privacy-focused tools with comprehensive guides and tutorials for users of all skill levels.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 600,
        alt: "ToolsHub - Professional Free Online Tools & Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolsHub - Professional Free Online Tools",
    description:
      "Professional online tools with comprehensive guides. Password generators, calculators, image converters, and more - all free, secure, and privacy-focused.",
    images: ["/og-image.png"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ToolsHub",
  url: "https://www.the-tools-hub.com",
  logo: "https://www.the-tools-hub.com/logo.png",
  description:
    "Professional online tools and utilities for security, calculations, image processing, and conversions. Educational resources and comprehensive guides for users of all skill levels.",
  foundingDate: "2024",
  knowsAbout: [
    "Web Development Tools",
    "Security Utilities",
    "Image Processing",
    "Mathematical Calculations",
    "Data Conversion",
    "Privacy Protection"
  ],
  areaServed: "Worldwide",
  serviceType: "Online Tools and Utilities"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ToolsHub - Professional Online Tools",
  url: "https://www.the-tools-hub.com",
  description:
    "Professional online tools for security, calculations, image processing, and conversions. Privacy-focused tools with comprehensive guides and tutorials. All tools include educational content and step-by-step instructions.",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.the-tools-hub.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  mainEntity: {
    "@type": "ItemList",
    "name": "Online Tools Categories",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Security Tools",
        "description": "Password generators, hash calculators, and encryption utilities"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculators & Converters",
        "description": "BMI calculators, currency converters, and mathematical tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Design & Image Tools",
        "description": "Image converters, favicon generators, and design utilities"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon-32x32.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme colors for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/android-chrome-192x192.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="google-adsense-account"
          content={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
