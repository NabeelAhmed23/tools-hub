"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Heart,
  Users,
  Lightbulb,
  Code,
  Globe,
  Lock,
  GraduationCap,
  CheckCircle,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.the-tools-hub.com/#organization",
    name: "ToolsHub",
    url: "https://www.the-tools-hub.com",
    logo: "https://www.the-tools-hub.com/logo.png",
    description:
      "Professional online tools and utilities for security, calculations, image processing, and conversions with privacy-first design and educational resources.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "ToolsHub Development Team",
    },
    knowsAbout: [
      "Web Development Tools",
      "Security Utilities",
      "Image Processing",
      "Mathematical Calculations",
      "Data Conversion",
      "Privacy Protection",
      "Educational Technology",
    ],
    areaServed: "Worldwide",
    serviceType: "Online Tools and Utilities",
    sameAs: ["https://www.the-tools-hub.com"],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.the-tools-hub.com/about/#aboutpage",
    mainEntity: {
      "@id": "https://www.the-tools-hub.com/#organization",
    },
    description:
      "Learn about ToolsHub's mission to provide professional, free online tools with privacy-first design and comprehensive educational resources.",
    inLanguage: "en-US",
  };

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description:
        "Your data belongs to you. Most of our tools process information entirely in your browser, and when server-side processing is required, data is processed immediately and never stored.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Educational Focus",
      description:
        "Every tool includes comprehensive guides, explanations, and educational content. We believe in empowering users with knowledge, not just providing results.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Always Free",
      description:
        "Professional-quality tools shouldn't be locked behind paywalls. All our tools are completely free with no hidden costs, registration requirements, or premium tiers.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Quality & Reliability",
      description:
        "Built with modern web technologies and industry best practices. Every tool is thoroughly tested to ensure accurate results and optimal performance.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "ToolsHub Launch",
      description:
        "Started with a vision to create privacy-focused, educational online tools that respect user data and provide genuine value.",
    },
    {
      year: "2024",
      title: "Security Tools Suite",
      description:
        "Launched comprehensive security tools including password generators, hash calculators, and encoding utilities with educational content.",
    },
    {
      year: "2024",
      title: "Calculator & Converter Tools",
      description:
        "Expanded to include professional calculation and conversion tools for health, finance, and academic use with step-by-step explanations.",
    },
    {
      year: "2024",
      title: "Design & Image Tools",
      description:
        "Added advanced image processing and design tools with server-side Sharp processing for professional-quality results.",
    },
  ];

  const stats = [
    {
      number: "21+",
      label: "Professional Tools",
      description: "Across security, calculations, and design",
    },
    {
      number: "100%",
      label: "Free to Use",
      description: "No hidden costs or premium tiers",
    },
    {
      number: "WCAG 2.1",
      label: "Accessibility",
      description: "AA compliant for all users",
    },
    {
      number: "0",
      label: "Data Stored",
      description: "Your privacy is our priority",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          About <span className="text-primary">ToolsHub</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          We believe that powerful, professional-quality tools should be
          accessible to everyone. ToolsHub provides free online utilities with
          uncompromising privacy standards and comprehensive educational
          resources.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              To democratize access to professional-quality online tools while
              maintaining the highest standards of user privacy, security, and
              education. We strive to create tools that not only solve problems
              but also teach users about the underlying concepts and best
              practices.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          What We Believe
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    {value.icon}
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Story Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex gap-4 mb-8 last:mb-0"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {milestone.year}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technology & Approach */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Technology
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                Modern Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Built with Next.js 14, TypeScript, and Tailwind CSS for optimal
                performance and maintainability.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• React 18 with Server Components</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS + shadcn/ui</li>
                <li>• Framer Motion animations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Privacy-First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Client-side processing where possible, with secure server-side
                handling only when necessary.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web Crypto API for security tools</li>
                <li>• No user data collection</li>
                <li>• HTTPS everywhere</li>
                <li>• Open development practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Accessible
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                WCAG 2.1 AA compliant with full keyboard navigation and screen
                reader support.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Semantic HTML structure</li>
                <li>• ARIA labels and roles</li>
                <li>• Keyboard navigation</li>
                <li>• Dark/light mode support</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Community Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-16"
      >
        <Card className="bg-muted/30">
          <CardContent className="p-8 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
              ToolsHub serves students, professionals, developers, and everyday
              users who need reliable, privacy-respecting tools. We&apos;re
              proud to contribute to a more open and accessible internet where
              powerful tools aren&apos;t locked behind paywalls or compromised
              by data collection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Used by students worldwide
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Trusted by professionals
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Loved by privacy advocates
              </span>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Our Commitment */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Commitment
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Always Free:</strong>{" "}
                  ToolsHub will always provide professional-quality tools at no
                  cost. We believe powerful utilities should be accessible to
                  everyone, regardless of their financial situation.
                </p>
                <p>
                  <strong className="text-foreground">
                    Privacy Protected:
                  </strong>{" "}
                  We will never sell, rent, or share your data. Most tools run
                  entirely in your browser, and when server processing is
                  needed, we process and discard data immediately.
                </p>
                <p>
                  <strong className="text-foreground">
                    Educational Focus:
                  </strong>{" "}
                  Every tool includes comprehensive explanations, tutorials, and
                  educational content. We&apos;re committed to teaching
                  concepts, not just providing calculations.
                </p>
                <p>
                  <strong className="text-foreground">
                    Continuous Improvement:
                  </strong>{" "}
                  We actively listen to user feedback and continuously improve
                  our tools based on real-world usage and needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  );
}
