"use client";

import { motion } from "framer-motion";
import {
  KeyRound,
  Shield,
  Hash,
  Code,
  Link,
  Fingerprint,
  QrCode,
  Network,
  Calculator,
  Calendar,
  TrendingUp,
  Ruler,
  Percent,
  CalendarDays,
  GraduationCap,
  Palette,
  Image,
  Star,
  Rainbow,
  Smile,
} from "lucide-react";
import ToolCard from "@/components/ToolCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
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

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ToolsHub - Free Online Tools",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    url: "https://www.the-tools-hub.com",
    description:
      "Comprehensive suite of privacy-focused online tools including password generators, calculators, converters, and security utilities.",
    featureList: [
      "Password Generator & Strength Checker",
      "Hash Generator (MD5, SHA-1, SHA-256, SHA-512)",
      "Base64 & URL Encoder/Decoder",
      "BMI & Age Calculator",
      "Currency & Unit Converter",
      "Color Picker & Gradient Generator",
      "Image Compressor & Favicon Generator",
      "Image Format Converters (JPG/PNG/WebP)",
      "QR Code Generator",
      "UUID Generator",
      "Loan & GPA Calculator",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Professional Free Online Tools &
          <span className="text-primary block mt-2">Educational Utilities</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
          Professional online tools designed for security, calculations, image
          processing, and data conversions. Each tool includes comprehensive
          tutorials, step-by-step guides, and educational content to help you
          understand both the process and the results. Privacy-focused design
          ensures your data remains secure.
        </p>
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            What Makes ToolsHub Different?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="gap-2">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-primary flex items-center gap-2">
                  <span aria-hidden="true">🎓</span>
                  Educational Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Every tool includes detailed explanations, use cases, and
                  learning resources to help you understand the concepts behind
                  the calculations.
                </p>
              </CardContent>
            </Card>

            <Card className="gap-2">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-primary flex items-center gap-2">
                  <span aria-hidden="true">🔒</span>
                  Privacy-First Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Most processing happens in your browser. When server-side
                  processing is used for performance, data is processed
                  immediately and never stored.
                </p>
              </CardContent>
            </Card>

            <Card className="gap-2">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-primary flex items-center gap-2">
                  <span aria-hidden="true">⚡</span>
                  Professional Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Built with modern web technologies and industry best practices
                  to ensure accurate results and optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="gap-2">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-primary flex items-center gap-2">
                  <span aria-hidden="true">📚</span>
                  Comprehensive Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Step-by-step instructions, FAQ sections, and practical
                  examples help you get the most out of each tool.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center space-x-2">
            <Shield className="w-8 h-8 text-primary" />
            <span>Security Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Professional security tools designed for developers, IT
            professionals, and security-conscious users. Generate
            cryptographically secure passwords, analyze password strength with
            detailed feedback, create hash values for data integrity, and safely
            encode sensitive data. Each tool includes comprehensive educational
            content explaining the underlying security concepts, best practices,
            and real-world applications. All processing happens locally in your
            browser for maximum privacy and security.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <ToolCard
            title="Password Generator"
            description="Generate cryptographically secure passwords with customizable options. Choose length, character types, and entropy levels."
            href="/password-generator"
            delay={0.1}
            icon={<KeyRound className="w-6 h-6" />}
          />

          <ToolCard
            title="Password Strength Checker"
            description="Analyze password security with real-time feedback. Get crack time estimates and improvement suggestions."
            href="/password-strength-checker"
            delay={0.2}
            icon={<Shield className="w-6 h-6" />}
          />

          <ToolCard
            title="Hash Generator"
            description="Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text input. Perfect for data integrity verification."
            href="/hash-generator"
            delay={0.3}
            icon={<Hash className="w-6 h-6" />}
          />

          <ToolCard
            title="Base64 Encoder/Decoder"
            description="Encode and decode Base64 strings with UTF-8 support. Perfect for data transmission and storage."
            href="/base64"
            delay={0.4}
            icon={<Code className="w-6 h-6" />}
          />

          <ToolCard
            title="URL Encoder/Decoder"
            description="Safely encode URLs with percent-encoding for special characters. Auto-detects encoding needs."
            href="/url-encode-decode"
            delay={0.5}
            icon={<Link className="w-6 h-6" />}
          />

          <ToolCard
            title="UUID Generator"
            description="Generate RFC 4122 compliant UUID v4 identifiers. Perfect for databases, APIs, and distributed systems."
            href="/uuid-generator"
            delay={0.6}
            icon={<Fingerprint className="w-6 h-6" />}
          />

          <ToolCard
            title="QR Code Generator"
            description="Create QR codes from text, URLs, WiFi passwords, and more. Customizable size and error correction."
            href="/qr-generator"
            delay={0.7}
            icon={<QrCode className="w-6 h-6" />}
          />

          <ToolCard
            title="What's My IP"
            description="Discover your public IP address, location, ISP, and browser information with privacy controls."
            href="/my-ip"
            delay={0.8}
            icon={<Network className="w-6 h-6" />}
          />
        </div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center space-x-2">
            <Calculator className="w-8 h-8 text-primary" />
            <span>Calculators & Converters</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Professional calculation and conversion tools for students,
            professionals, and everyday users. Our comprehensive suite includes
            health calculators (BMI, age), financial tools (loan EMI, currency
            conversion), mathematical utilities (percentages, unit conversions),
            and academic calculators (GPA). Each tool provides detailed
            explanations of formulas, step-by-step calculations, and practical
            examples to help you understand the methodology behind the results.
            Perfect for learning and professional use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <ToolCard
            title="BMI Calculator"
            description="Calculate your Body Mass Index instantly. Enter your weight and height to determine if you're in a healthy weight range."
            href="/bmi-calculator"
            delay={0.1}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            }
          />

          <ToolCard
            title="Age Calculator"
            description="Calculate your exact age in years, months, and days. Includes next birthday countdown and total days lived."
            href="/age-calculator"
            delay={0.2}
            icon={<Calendar className="w-6 h-6" />}
          />

          <ToolCard
            title="Loan/EMI Calculator"
            description="Calculate monthly EMI, total interest, and loan breakdown with visual charts. Perfect for home loans and personal loans."
            href="/loan-calculator"
            delay={0.3}
            icon={<TrendingUp className="w-6 h-6" />}
          />

          <ToolCard
            title="Currency Converter"
            description="Convert between different currencies with live exchange rates. Get accurate conversions for 100+ currencies."
            href="/currency-converter"
            delay={0.4}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            }
          />

          <ToolCard
            title="Unit Converter"
            description="Convert between units of length, weight, temperature, speed, and volume. Supports metric and imperial systems."
            href="/unit-converter"
            delay={0.5}
            icon={<Ruler className="w-6 h-6" />}
          />

          <ToolCard
            title="Percentage Calculator"
            description="Calculate percentages, percentage changes, and discounts. Includes multiple calculation modes with explanations."
            href="/percentage-calculator"
            delay={0.6}
            icon={<Percent className="w-6 h-6" />}
          />

          <ToolCard
            title="Date Difference"
            description="Calculate the exact difference between two dates in years, months, days, hours, and more."
            href="/date-difference"
            delay={0.7}
            icon={<CalendarDays className="w-6 h-6" />}
          />

          <ToolCard
            title="GPA Calculator"
            description="Calculate your Grade Point Average with multiple subjects and credit hours. Supports both letter and numeric grades."
            href="/gpa-calculator"
            delay={0.8}
            icon={<GraduationCap className="w-6 h-6" />}
          />
        </div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center justify-center space-x-2">
            <Palette className="w-8 h-8 text-primary" />
            <span>Design & Web Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Professional design and web development tools for creators,
            developers, and designers. Our suite includes color manipulation
            tools with format conversion, advanced image processing with
            compression and format conversion, professional favicon generation
            for web projects, CSS gradient creation, and emoji utilities. Each
            tool provides educational content about design principles, web
            standards, and optimization techniques. Advanced image tools use
            server-side processing for professional-quality results while
            maintaining privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <ToolCard
            title="Color Picker & Converter"
            description="Pick colors and convert between HEX, RGB, HSL formats with live preview. Generate CSS variables instantly."
            href="/color-picker"
            delay={0.1}
            icon={<Palette className="w-6 h-6" />}
          />

          <ToolCard
            title="Image Compressor & Resizer"
            description="Compress and resize images directly in browser. No uploads required - your files stay private."
            href="/image-compressor"
            delay={0.2}
            // eslint-disable-next-line jsx-a11y/alt-text
            icon={<Image className="w-6 h-6" />}
          />

          <ToolCard
            title="Favicon Generator"
            description="Generate complete favicon sets from any image - all standard sizes with HTML snippet included."
            href="/favicon-generator"
            delay={0.3}
            icon={<Star className="w-6 h-6" />}
          />

          <ToolCard
            title="Gradient Generator"
            description="Create beautiful CSS gradients with live preview. Export as CSS, SCSS, or Tailwind config."
            href="/gradient-generator"
            delay={0.4}
            icon={<Rainbow className="w-6 h-6" />}
          />

          <ToolCard
            title="Emoji Picker & Copy"
            description="Browse, search, and copy emojis with keyboard navigation and recent history tracking."
            href="/emoji-picker"
            delay={0.5}
            icon={<Smile className="w-6 h-6" />}
          />
        </div>

        {/* Image Converter Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-8 mt-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Image Format Converters
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Convert images between JPG, PNG, and WebP formats with professional
            quality. Server-side processing ensures consistent results and
            optimal compression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <ToolCard
            title="JPG to PNG Converter"
            description="Convert JPEG images to PNG format with transparency support and lossless quality."
            href="/image-converter/jpg-to-png"
            delay={0.1}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <ToolCard
            title="JPG to WebP Converter"
            description="Convert JPEG to modern WebP format for 25-35% smaller file sizes and faster loading."
            href="/image-converter/jpg-to-webp"
            delay={0.2}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />

          <ToolCard
            title="PNG to JPG Converter"
            description="Convert PNG to JPEG for significantly smaller file sizes and universal compatibility."
            href="/image-converter/png-to-jpg"
            delay={0.3}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            }
          />

          <ToolCard
            title="PNG to WebP Converter"
            description="Convert PNG to WebP format while preserving transparency and reducing file size."
            href="/image-converter/png-to-webp"
            delay={0.4}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            }
          />

          <ToolCard
            title="WebP to JPG Converter"
            description="Convert WebP to JPEG format for maximum compatibility across all devices and platforms."
            href="/image-converter/webp-to-jpg"
            delay={0.5}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              </svg>
            }
          />

          <ToolCard
            title="WebP to PNG Converter"
            description="Convert WebP to PNG format with preserved transparency and lossless quality."
            href="/image-converter/webp-to-png"
            delay={0.6}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          />
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Why Choose ToolsHub?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-3 text-lg">
              Privacy & Security First
            </h3>
            <p className="text-muted-foreground">
              Most tools run entirely in your browser using client-side
              processing. When server-side processing is used for performance
              (like image tools), data is processed immediately and never
              stored. Your sensitive information, passwords, and documents
              remain completely private and secure.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-3 text-lg">
              Educational & Comprehensive
            </h3>
            <p className="text-muted-foreground">
              Every tool includes detailed explanations, tutorials, and
              educational content. Learn about the concepts, formulas, and best
              practices behind each calculation. Perfect for students,
              professionals, and anyone looking to understand the methodology
              behind the results.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-3 text-lg">
              Professional Quality & Speed
            </h3>
            <p className="text-muted-foreground">
              Built with modern web technologies and industry best practices.
              Instant results with optimized, lightweight tools that deliver
              professional-quality output. Advanced features like server-side
              Sharp processing for images ensure the highest quality results.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Are these tools really free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all tools on ToolsHub are completely free with no hidden
                  costs, registration requirements, or premium subscriptions.
                  You can use any tool unlimited times without providing
                  personal information or payment details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How do you ensure data privacy and security?
                </AccordionTrigger>
                <AccordionContent>
                  Most of our tools use client-side processing, meaning your
                  data never leaves your browser. For tools requiring
                  server-side processing (like image conversion), data is
                  processed immediately and never stored on our servers. We
                  follow privacy-by-design principles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What makes ToolsHub different from other online tools?
                </AccordionTrigger>
                <AccordionContent>
                  ToolsHub focuses on education and comprehensive guidance. Each
                  tool includes detailed explanations, tutorials, and real-world
                  examples. We prioritize professional quality, user privacy,
                  and educational value over simple functionality.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Do I need to install anything to use these tools?
                </AccordionTrigger>
                <AccordionContent>
                  No installation required. All tools work directly in your web
                  browser on any device - desktop, tablet, or mobile. Simply
                  visit the tool page and start using it immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Are the calculations and results accurate?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all tools use industry-standard algorithms and formulas.
                  We provide detailed explanations of the methodology and
                  formulas used, allowing you to verify the accuracy and
                  understand how results are calculated.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Can I use these tools for professional or commercial purposes?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our tools are designed for both personal and
                  professional use. Many professionals, students, and businesses
                  rely on ToolsHub for their daily calculations and conversions.
                  All results are suitable for professional applications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}
