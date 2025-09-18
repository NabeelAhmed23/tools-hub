"use client";

import { motion } from "framer-motion";
import {
  Cookie,
  Settings,
  Eye,
  Shield,
  BarChart3,
  Globe,
  FileText,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Info,
  Mail,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function CookiePolicyPage() {
  const lastUpdated = "January 15, 2025";
  const version = "2.1";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.the-tools-hub.com/cookie-policy#webpage",
    url: "https://www.the-tools-hub.com/cookie-policy",
    name: "Cookie Policy - ToolsHub",
    description:
      "Comprehensive cookie policy explaining how ToolsHub uses cookies, tracking technologies, and how users can manage their cookie preferences.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.the-tools-hub.com/#website",
      name: "ToolsHub",
    },
    about: {
      "@type": "Thing",
      name: "Cookie Policy",
      description: "Information about cookie usage and tracking technologies",
    },
    dateModified: "2025-01-15",
    inLanguage: "en-US",
  };

  const cookieData = [
    {
      name: "Theme Preference",
      type: "Essential",
      purpose: "Remember your dark/light mode preference",
      duration: "1 year",
      domain: "the-tools-hub.com",
    },
    {
      name: "Google Analytics",
      type: "Analytics",
      purpose: "Understand website usage and improve user experience",
      duration: "26 months",
      domain: "google.com",
    },
    {
      name: "Google AdSense",
      type: "Advertising",
      purpose: "Serve relevant advertisements and measure ad performance",
      duration: "Up to 2 years",
      domain: "google.com",
    },
    {
      name: "Session Storage",
      type: "Functional",
      purpose: "Maintain tool state during your session",
      duration: "Session only",
      domain: "the-tools-hub.com",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Cookie className="h-12 w-12 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-foreground">
                  Cookie Policy
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn how we use cookies and tracking technologies to enhance
                your experience and protect your privacy.
              </p>

              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Last updated: {lastUpdated}
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  Version {version}
                </div>
              </div>
            </div>

            {/* Quick Summary Alert */}
            <Alert className="mb-8 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
              <Info className="h-4 w-4" />
              <AlertDescription className="text-base">
                <strong>Quick Summary:</strong> We use minimal cookies for
                essential functionality, anonymous analytics, and relevant
                advertising. You can control most cookies through your browser
                settings.
              </AlertDescription>
            </Alert>

            <AdPlaceholder id="adsense-top" className="mb-8" />

            {/* Table of Contents */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav aria-label="Cookie Policy Navigation">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      <a
                        href="#what-are-cookies"
                        className="text-primary hover:underline"
                      >
                        What Are Cookies?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#why-we-use-cookies"
                        className="text-primary hover:underline"
                      >
                        Why We Use Cookies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#types-of-cookies"
                        className="text-primary hover:underline"
                      >
                        Types of Cookies We Use
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cookie-details"
                        className="text-primary hover:underline"
                      >
                        Detailed Cookie Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="#third-party-cookies"
                        className="text-primary hover:underline"
                      >
                        Third-Party Cookies
                      </a>
                    </li>
                    <li>
                      <a
                        href="#managing-cookies"
                        className="text-primary hover:underline"
                      >
                        Managing Your Cookie Preferences
                      </a>
                    </li>
                    <li>
                      <a
                        href="#browser-controls"
                        className="text-primary hover:underline"
                      >
                        Browser-Specific Cookie Controls
                      </a>
                    </li>
                    <li>
                      <a
                        href="#mobile-controls"
                        className="text-primary hover:underline"
                      >
                        Mobile Device Controls
                      </a>
                    </li>
                    <li>
                      <a
                        href="#opt-out-tools"
                        className="text-primary hover:underline"
                      >
                        Third-Party Opt-Out Tools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cookie-updates"
                        className="text-primary hover:underline"
                      >
                        Updates to Cookie Usage
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact-us"
                        className="text-primary hover:underline"
                      >
                        Contact Information
                      </a>
                    </li>
                  </ol>
                </nav>
              </CardContent>
            </Card>

            {/* Main Content */}
            <div className="space-y-8">
              {/* What Are Cookies */}
              <Card id="what-are-cookies">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cookie className="h-5 w-5 mr-2" />
                    1. What Are Cookies?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Cookies are small text files that are stored on your device
                    (computer, tablet, or mobile) when you visit a website. They
                    are widely used to make websites work more efficiently and
                    provide information to website owners.
                  </p>

                  <h3 className="text-lg font-semibold">
                    1.1 How Cookies Work
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Storage:</strong> Cookies are stored in your web
                      browser's memory or on your device
                    </li>
                    <li>
                      <strong>Information:</strong> They contain small amounts
                      of data, such as preferences or session information
                    </li>
                    <li>
                      <strong>Communication:</strong> When you return to a
                      website, cookies help the site recognize you and your
                      preferences
                    </li>
                    <li>
                      <strong>Expiration:</strong> Cookies can be temporary
                      (session cookies) or persistent (stored for a set period)
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">1.2 Cookie Safety</h3>
                  <p>
                    Cookies cannot run programs, carry viruses, or access your
                    personal files. They are simply text files that help
                    websites function properly and remember your preferences.
                  </p>
                </CardContent>
              </Card>

              {/* Why We Use Cookies */}
              <Card id="why-we-use-cookies">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    2. Why We Use Cookies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use cookies to enhance your experience on ToolsHub and to
                    ensure our services work properly. Our approach prioritizes
                    user privacy while providing essential functionality.
                  </p>

                  <h3 className="text-lg font-semibold">
                    2.1 Primary Purposes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold flex items-center mb-2">
                        <Settings className="h-4 w-4 mr-2" />
                        Essential Functionality
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Remember your preferences like dark mode, language
                        settings, and tool configurations.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold flex items-center mb-2">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Service Improvement
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Understand how users interact with our tools to improve
                        functionality and user experience.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold flex items-center mb-2">
                        <Eye className="h-4 w-4 mr-2" />
                        Analytics
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Anonymously track usage patterns to identify popular
                        tools and optimize performance.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold flex items-center mb-2">
                        <Globe className="h-4 w-4 mr-2" />
                        Advertising
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Display relevant advertisements to support our free
                        services while respecting your privacy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Types of Cookies */}
              <Card id="types-of-cookies">
                <CardHeader>
                  <CardTitle>3. Types of Cookies We Use</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Badge variant="destructive" className="mr-2">
                          Essential
                        </Badge>
                        <h3 className="text-lg font-semibold">
                          Essential Cookies
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        These cookies are necessary for the website to function
                        properly and cannot be switched off.
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Theme preferences (dark/light mode)</li>
                        <li>Session management</li>
                        <li>Security features</li>
                        <li>Basic functionality</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Badge variant="secondary" className="mr-2">
                          Functional
                        </Badge>
                        <h3 className="text-lg font-semibold">
                          Functional Cookies
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        These cookies enhance functionality and personalization
                        but are not essential.
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Tool preferences and settings</li>
                        <li>Language preferences</li>
                        <li>User interface customizations</li>
                        <li>Feature usage tracking</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Badge variant="outline" className="mr-2">
                          Analytics
                        </Badge>
                        <h3 className="text-lg font-semibold">
                          Analytics Cookies
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        These cookies help us understand how visitors use our
                        website (anonymously).
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Page views and user paths</li>
                        <li>Tool usage statistics</li>
                        <li>Performance metrics</li>
                        <li>Error tracking and debugging</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Badge className="mr-2">Advertising</Badge>
                        <h3 className="text-lg font-semibold">
                          Advertising Cookies
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        These cookies are used to deliver relevant
                        advertisements and measure their effectiveness.
                      </p>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Ad personalization (non-personal)</li>
                        <li>Ad performance measurement</li>
                        <li>Frequency capping</li>
                        <li>Fraud prevention</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Cookie Information */}
              <Card id="cookie-details">
                <CardHeader>
                  <CardTitle>4. Detailed Cookie Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left">
                            Cookie Name
                          </th>
                          <th className="border border-border p-3 text-left">
                            Type
                          </th>
                          <th className="border border-border p-3 text-left">
                            Purpose
                          </th>
                          <th className="border border-border p-3 text-left">
                            Duration
                          </th>
                          <th className="border border-border p-3 text-left">
                            Domain
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cookieData.map((cookie, index) => (
                          <tr key={index} className="hover:bg-muted/30">
                            <td className="border border-border p-3 font-medium">
                              {cookie.name}
                            </td>
                            <td className="border border-border p-3">
                              <Badge
                                variant={
                                  cookie.type === "Essential"
                                    ? "destructive"
                                    : cookie.type === "Analytics"
                                    ? "outline"
                                    : cookie.type === "Functional"
                                    ? "secondary"
                                    : "default"
                                }
                                className="text-xs"
                              >
                                {cookie.type}
                              </Badge>
                            </td>
                            <td className="border border-border p-3">
                              {cookie.purpose}
                            </td>
                            <td className="border border-border p-3">
                              {cookie.duration}
                            </td>
                            <td className="border border-border p-3 text-xs text-muted-foreground">
                              {cookie.domain}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Third-Party Cookies */}
              <Card id="third-party-cookies">
                <CardHeader>
                  <CardTitle>5. Third-Party Cookies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use carefully selected third-party services that may set
                    their own cookies. These services help us provide better
                    functionality and support our free services.
                  </p>

                  <h3 className="text-lg font-semibold">
                    5.1 Google Analytics
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Purpose:</strong> Website analytics and user
                      behavior insights
                    </li>
                    <li>
                      <strong>Data Collection:</strong> Anonymous usage
                      statistics
                    </li>
                    <li>
                      <strong>Privacy:</strong> IP anonymization enabled
                    </li>
                    <li>
                      <strong>Opt-out:</strong>{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Opt-out Browser Add-on
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">5.2 Google AdSense</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Purpose:</strong> Display relevant advertisements
                    </li>
                    <li>
                      <strong>Data Collection:</strong> Anonymous ad targeting
                      and performance measurement
                    </li>
                    <li>
                      <strong>Privacy:</strong> Compliant with privacy
                      regulations
                    </li>
                    <li>
                      <strong>Controls:</strong>{" "}
                      <a
                        href="https://adssettings.google.com/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Ad Settings
                      </a>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    5.3 Content Delivery Networks
                  </h3>
                  <p>
                    We may use CDNs to deliver website resources efficiently.
                    These services may set technical cookies for performance
                    optimization and security purposes.
                  </p>
                </CardContent>
              </Card>

              <AdPlaceholder id="adsense-top" className="mb-8" />

              {/* Managing Cookies */}
              <Card id="managing-cookies">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    6. Managing Your Cookie Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Note:</strong> Disabling certain cookies may
                      affect website functionality. Essential cookies cannot be
                      disabled as they are necessary for basic operation.
                    </AlertDescription>
                  </Alert>

                  <h3 className="text-lg font-semibold">
                    6.1 Browser Settings
                  </h3>
                  <p>
                    Most web browsers allow you to control cookies through their
                    settings. You can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>View all cookies stored on your device</li>
                    <li>Block all cookies (may break website functionality)</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete existing cookies</li>
                    <li>Set preferences for future cookie acceptance</li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    6.2 Granular Control
                  </h3>
                  <p>For more granular control, you can:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Allow essential cookies while blocking others</li>
                    <li>Set different rules for different websites</li>
                    <li>Configure automatic cookie deletion</li>
                    <li>Enable/disable cookies for specific purposes</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Browser-Specific Controls */}
              <Card id="browser-controls">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Monitor className="h-5 w-5 mr-2" />
                    7. Browser-Specific Cookie Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Google Chrome</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Click the three dots menu → Settings</li>
                        <li>
                          Go to Privacy and Security → Cookies and other site
                          data
                        </li>
                        <li>Choose your preferred cookie settings</li>
                        <li>Manage exceptions for specific sites</li>
                      </ol>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Mozilla Firefox</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Click the menu button → Settings</li>
                        <li>Select Privacy & Security</li>
                        <li>In the Cookies and Site Data section</li>
                        <li>Configure your cookie preferences</li>
                      </ol>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Safari</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Safari menu → Preferences</li>
                        <li>Click the Privacy tab</li>
                        <li>Choose cookies and website data settings</li>
                        <li>Manage website data if needed</li>
                      </ol>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Microsoft Edge</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Click the three dots menu → Settings</li>
                        <li>Go to Cookies and site permissions</li>
                        <li>Select Cookies and site data</li>
                        <li>Configure your cookie settings</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile Controls */}
              <Card id="mobile-controls">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    8. Mobile Device Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    8.1 iOS (iPhone/iPad)
                  </h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Open Settings app</li>
                    <li>Scroll down and tap Safari</li>
                    <li>Under Privacy & Security, manage cookie settings</li>
                    <li>
                      Choose "Block All Cookies" or "Allow from Websites I
                      Visit"
                    </li>
                  </ol>

                  <h3 className="text-lg font-semibold">8.2 Android</h3>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Open Chrome browser</li>
                    <li>Tap the three dots menu → Settings</li>
                    <li>Tap Site Settings → Cookies</li>
                    <li>Toggle cookies on/off or set specific rules</li>
                  </ol>

                  <h3 className="text-lg font-semibold">
                    8.3 Mobile Advertising Controls
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>iOS:</strong> Settings → Privacy & Security →
                      Apple Advertising → Personalized Ads
                    </li>
                    <li>
                      <strong>Android:</strong> Settings → Privacy → Ads → Opt
                      out of Ads Personalization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Third-Party Opt-Out Tools */}
              <Card id="opt-out-tools">
                <CardHeader>
                  <CardTitle>9. Third-Party Opt-Out Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    9.1 Industry Opt-Out Pages
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <a
                        href="http://www.aboutads.info/choices/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Digital Advertising Alliance (DAA)
                      </a>{" "}
                      - US advertising opt-out
                    </li>
                    <li>
                      <a
                        href="http://www.youronlinechoices.eu/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Your Online Choices
                      </a>{" "}
                      - European advertising opt-out
                    </li>
                    <li>
                      <a
                        href="https://www.networkadvertising.org/choices/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Network Advertising Initiative (NAI)
                      </a>{" "}
                      - Network advertising opt-out
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    9.2 Google-Specific Controls
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <a
                        href="https://adssettings.google.com/"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Ad Settings
                      </a>{" "}
                      - Control ad personalization
                    </li>
                    <li>
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Opt-out
                      </a>{" "}
                      - Browser add-on to disable tracking
                    </li>
                    <li>
                      <a
                        href="https://myaccount.google.com/data-and-privacy"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Privacy Controls
                      </a>{" "}
                      - Comprehensive privacy settings
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cookie Updates */}
              <Card id="cookie-updates">
                <CardHeader>
                  <CardTitle>10. Updates to Cookie Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We may update our cookie usage from time to time to improve
                    our services or comply with legal requirements. When we make
                    significant changes to our cookie practices, we will:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                    <li>Update this Cookie Policy with the new information</li>
                    <li>
                      Change the "Last updated" date at the top of this page
                    </li>
                    <li>Provide notice on our website for material changes</li>
                    <li>Obtain new consent where required by law</li>
                  </ul>

                  <p className="mt-4">
                    We recommend reviewing this policy periodically to stay
                    informed about our cookie practices.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              {/* <Card id="contact-us">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    11. Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>If you have questions about our cookie usage or this Cookie Policy, please contact us:</p>

                  <div className="mt-4 space-y-2">
                    <p><strong>Privacy Questions:</strong> <a href="mailto:privacy@the-tools-hub.com" className="text-primary hover:underline">privacy@the-tools-hub.com</a></p>
                    <p><strong>Cookie Issues:</strong> <a href="mailto:cookies@the-tools-hub.com" className="text-primary hover:underline">cookies@the-tools-hub.com</a></p>
                    <p><strong>Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a></p>
                    <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                  </div>

                  <Alert className="mt-6 border-primary/20 bg-primary/5">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      For cookie-related inquiries, please use the subject line "Cookie Policy" to ensure prompt handling.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card> */}
            </div>

            <AdPlaceholder id="adsense-top" className="mt-8" />

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                This Cookie Policy is effective as of {lastUpdated} (Version{" "}
                {version}). We are committed to transparency in our cookie usage
                and will continue to update our practices to ensure the best
                balance of functionality and privacy protection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
