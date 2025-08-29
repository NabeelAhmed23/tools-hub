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
    default: "ToolsHub - Free Online Tools",
  },
  description:
    "Privacy-focused online tools for security, calculations, and conversions. All processing happens in your browser - your data never leaves your device.",
  keywords: [
    "online tools",
    "password generator",
    "hash generator",
    "BMI calculator",
    "currency converter",
    "security tools",
    "free calculator",
    "privacy first",
    "client-side tools",
  ],
  authors: [{ name: "ToolsHub" }],
  creator: "ToolsHub",
  publisher: "ToolsHub",
  applicationName: "ToolsHub",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
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
    siteName: "ToolsHub",
    title: "ToolsHub - Free Online Tools",
    description:
      "Privacy-focused online tools for security, calculations, and conversions. All processing happens in your browser.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 600,
        alt: "ToolsHub - Free Online Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolsHub - Free Online Tools",
    description:
      "Privacy-focused online tools for security, calculations, and conversions. Client-side processing only.",
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
    "Privacy-focused online tools and utilities for security, calculations, and conversions.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ToolsHub",
  url: "https://www.the-tools-hub.com",
  description:
    "Privacy-focused online tools for security, calculations, and conversions. All processing happens in your browser - your data never leaves your device.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.the-tools-hub.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
        ></script>
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
