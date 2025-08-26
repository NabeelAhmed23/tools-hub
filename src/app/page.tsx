"use client";

import { motion } from "framer-motion";
import { KeyRound, Shield, Hash, Code, Link, Fingerprint, QrCode, Network, Calculator, Calendar, TrendingUp, Ruler, Percent, CalendarDays, GraduationCap, Palette, Image, Star, Rainbow, Smile } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <AdPlaceholder id="adsense-top" className="mb-8" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Free Online Tools &
          <span className="text-primary block mt-2">Security Utilities</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Privacy-focused tools for security, encryption, and calculations. All processing happens in your browser - your data never leaves your device.
        </p>
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Generate passwords, analyze security, encode data, and more with our privacy-first security utilities.
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical tools for everyday calculations and conversions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <ToolCard
            title="BMI Calculator"
            description="Calculate your Body Mass Index instantly. Enter your weight and height to determine if you're in a healthy weight range."
            href="/bmi-calculator"
            delay={0.1}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional design and web development tools for creators and developers.
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
            icon={<Image className="w-6 h-6" alt="" />}
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
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-4xl mx-auto mb-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose ToolsHub?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Privacy First</h3>
            <p className="text-muted-foreground text-sm">All tools run in your browser - your data never leaves your device</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">100% Free</h3>
            <p className="text-muted-foreground text-sm">No registration, no hidden fees, completely free to use</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground text-sm">Instant results with optimized, lightweight tools</p>
          </div>
        </div>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}