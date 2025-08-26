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
  title: "ToolsHub - Free Online Tools & Security Utilities",
  description:
    "Free online tools including BMI calculator, currency converter, password generator, hash tools, and more security utilities. Fast, accurate, and privacy-focused.",
  keywords: [
    "online tools",
    "password generator",
    "hash generator",
    "BMI calculator",
    "currency converter",
    "security tools",
    "free calculator",
  ],
  authors: [{ name: "ToolsHub" }],
  openGraph: {
    title: "ToolsHub - Free Online Tools & Security Utilities",
    description:
      "Free online tools including security utilities, calculators, and converters",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
