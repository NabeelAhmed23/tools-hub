"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Users,
  FileText,
  Mail,
  Calendar,
  Globe,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2025";
  const version = "2.1";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.the-tools-hub.com/privacy-policy#webpage",
    url: "https://www.the-tools-hub.com/privacy-policy",
    name: "Privacy Policy - ToolsHub",
    description:
      "Comprehensive privacy policy explaining how ToolsHub protects your data, respects your privacy, and complies with GDPR, CCPA, and international data protection laws.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.the-tools-hub.com/#website",
      name: "ToolsHub",
    },
    about: {
      "@type": "Thing",
      name: "Privacy Policy",
      description: "Data protection and privacy rights for ToolsHub users",
    },
    dateModified: "2025-01-15",
    inLanguage: "en-US",
  };

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
                <Shield className="h-12 w-12 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-foreground">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your privacy is our priority. Learn how we protect your data and
                respect your rights.
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
            <Alert className="mb-8 border-primary/20 bg-primary/5">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="text-base">
                <strong>Quick Summary:</strong> We prioritize your privacy by
                processing data locally when possible, using minimal analytics,
                never selling personal information, and providing clear opt-out
                options.
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
                <nav aria-label="Privacy Policy Navigation">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      <a
                        href="#information-collection"
                        className="text-primary hover:underline"
                      >
                        Information We Collect
                      </a>
                    </li>
                    <li>
                      <a
                        href="#data-usage"
                        className="text-primary hover:underline"
                      >
                        How We Use Your Information
                      </a>
                    </li>
                    <li>
                      <a
                        href="#data-sharing"
                        className="text-primary hover:underline"
                      >
                        Information Sharing and Disclosure
                      </a>
                    </li>
                    <li>
                      <a
                        href="#data-security"
                        className="text-primary hover:underline"
                      >
                        Data Security
                      </a>
                    </li>
                    <li>
                      <a
                        href="#user-rights"
                        className="text-primary hover:underline"
                      >
                        Your Privacy Rights
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cookies"
                        className="text-primary hover:underline"
                      >
                        Cookies and Tracking
                      </a>
                    </li>
                    <li>
                      <a
                        href="#international-transfers"
                        className="text-primary hover:underline"
                      >
                        International Data Transfers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#data-retention"
                        className="text-primary hover:underline"
                      >
                        Data Retention
                      </a>
                    </li>
                    <li>
                      <a
                        href="#children-privacy"
                        className="text-primary hover:underline"
                      >
                        Children&apos;s Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#policy-changes"
                        className="text-primary hover:underline"
                      >
                        Changes to This Policy
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
              {/* Information We Collect */}
              <Card id="information-collection">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    1. Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    1.1 Information You Provide Directly
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Contact Forms:</strong> Name, email address, and
                      message content when you contact us
                    </li>
                    <li>
                      <strong>Tool Inputs:</strong> Data you enter into our
                      tools (processed locally when possible)
                    </li>
                    <li>
                      <strong>Feedback:</strong> Comments and suggestions you
                      voluntarily provide
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    1.2 Information Collected Automatically
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Usage Data:</strong> Pages visited, time spent,
                      click patterns (anonymized)
                    </li>
                    <li>
                      <strong>Technical Information:</strong> IP address,
                      browser type, device information
                    </li>
                    <li>
                      <strong>Performance Data:</strong> Page load times and
                      error reports for service improvement
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    1.3 Third-Party Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Analytics:</strong> Anonymous usage statistics
                      from Google Analytics
                    </li>
                    <li>
                      <strong>Ad Services:</strong> Non-personal data for
                      relevant ad serving
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Usage */}
              <Card id="data-usage">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">2.1 Primary Uses</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Service Delivery:</strong> Providing and improving
                      our online tools
                    </li>
                    <li>
                      <strong>User Support:</strong> Responding to inquiries and
                      technical support requests
                    </li>
                    <li>
                      <strong>Communication:</strong> Sending important updates
                      about our services
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    2.2 Service Improvement
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Analytics:</strong> Understanding user patterns to
                      enhance tool functionality
                    </li>
                    <li>
                      <strong>Performance:</strong> Monitoring and optimizing
                      website performance
                    </li>
                    <li>
                      <strong>Security:</strong> Protecting against fraud and
                      malicious activities
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    2.3 Legal Compliance
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Complying with applicable laws and regulations</li>
                    <li>
                      Responding to legal requests and preventing illegal
                      activities
                    </li>
                    <li>Protecting our rights and the rights of our users</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Sharing */}
              <Card id="data-sharing">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    3. Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-destructive/20 bg-destructive/5">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>We never sell your personal information.</strong>{" "}
                      We only share data in limited circumstances as outlined
                      below.
                    </AlertDescription>
                  </Alert>

                  <h3 className="text-lg font-semibold">
                    3.1 Service Providers
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Hosting Services:</strong> Vercel for website
                      hosting and deployment
                    </li>
                    <li>
                      <strong>Analytics:</strong> Google Analytics for anonymous
                      usage statistics
                    </li>
                    <li>
                      <strong>Email Services:</strong> Email providers for
                      contact form responses
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    3.2 Legal Requirements
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>When required by law or legal process</li>
                    <li>
                      To protect rights, property, or safety of ToolsHub or
                      others
                    </li>
                    <li>In connection with legal investigations</li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    3.3 Business Transfers
                  </h3>
                  <p>
                    In the event of a merger, acquisition, or sale, your
                    information may be transferred as part of that transaction,
                    with notice provided.
                  </p>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card id="data-security">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2" />
                    4. Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    4.1 Security Measures
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Encryption:</strong> HTTPS encryption for all data
                      transmission
                    </li>
                    <li>
                      <strong>Local Processing:</strong> Most tools process data
                      client-side for privacy
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Strict access controls
                      for any collected data
                    </li>
                    <li>
                      <strong>Regular Updates:</strong> Continuous security
                      updates and monitoring
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    4.2 Privacy by Design
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Minimal data collection principle</li>
                    <li>Purpose limitation for any data collected</li>
                    <li>Data minimization and anonymization where possible</li>
                    <li>Regular security assessments and improvements</li>
                  </ul>
                </CardContent>
              </Card>

              {/* User Rights */}
              <Card id="user-rights">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    5. Your Privacy Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    5.1 GDPR Rights (EU Users)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Access:</strong> Request access to your personal
                      data
                    </li>
                    <li>
                      <strong>Rectification:</strong> Correct inaccurate
                      personal data
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of your
                      personal data
                    </li>
                    <li>
                      <strong>Portability:</strong> Receive your data in a
                      structured format
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your
                      personal data
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request restriction of
                      processing
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    5.2 CCPA Rights (California Users)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Know:</strong> Right to know what personal
                      information is collected
                    </li>
                    <li>
                      <strong>Delete:</strong> Right to delete personal
                      information
                    </li>
                    <li>
                      <strong>Opt-Out:</strong> Right to opt-out of sale (we
                      don&apos;t sell data)
                    </li>
                    <li>
                      <strong>Non-Discrimination:</strong> Right to
                      non-discriminatory treatment
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    5.3 Exercising Your Rights
                  </h3>
                  <p>
                    To exercise any of these rights, contact us at{" "}
                    <a
                      href="mailto:privacy@the-tools-hub.com"
                      className="text-primary hover:underline"
                    >
                      privacy@the-tools-hub.com
                    </a>
                    . We will respond within the legally required timeframe.
                  </p>
                </CardContent>
              </Card>

              <AdPlaceholder id="adsense-middle" className="my-8" />

              {/* Cookies */}
              <Card id="cookies">
                <CardHeader>
                  <CardTitle>6. Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    We use cookies and similar technologies to enhance your
                    experience. For detailed information, please see our{" "}
                    <a
                      href="/cookie-policy"
                      className="text-primary hover:underline"
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>

                  <h3 className="text-lg font-semibold">
                    6.1 Cookie Categories
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Essential Cookies:</strong> Required for website
                      functionality
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how
                      you use our site
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your
                      settings and preferences
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    6.2 Managing Cookies
                  </h3>
                  <p>
                    You can control cookies through your browser settings. Note
                    that disabling certain cookies may affect website
                    functionality.
                  </p>
                </CardContent>
              </Card>

              {/* International Transfers */}
              <Card id="international-transfers">
                <CardHeader>
                  <CardTitle>7. International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Your information may be transferred to and processed in
                    countries other than your country of residence. We ensure
                    appropriate safeguards are in place:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Adequacy Decisions:</strong> Transfers to
                      countries with adequate protection
                    </li>
                    <li>
                      <strong>Standard Contractual Clauses:</strong> Legal
                      safeguards for other transfers
                    </li>
                    <li>
                      <strong>Encryption:</strong> Data protection during
                      transfer and storage
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Retention */}
              <Card id="data-retention">
                <CardHeader>
                  <CardTitle>8. Data Retention</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    8.1 Retention Periods
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Contact Form Data:</strong> 2 years for support
                      purposes
                    </li>
                    <li>
                      <strong>Analytics Data:</strong> 26 months (Google
                      Analytics default)
                    </li>
                    <li>
                      <strong>Error Logs:</strong> 30 days for debugging
                      purposes
                    </li>
                    <li>
                      <strong>Tool Data:</strong> Not stored (processed locally
                      when possible)
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    8.2 Deletion Criteria
                  </h3>
                  <p>
                    We delete data when it&apos;s no longer necessary for the
                    purposes collected, upon user request, or as required by
                    law.
                  </p>
                </CardContent>
              </Card>

              {/* Children's Privacy */}
              <Card id="children-privacy">
                <CardHeader>
                  <CardTitle>9. Children&apos;s Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our service is not directed to children under 13. We do not
                    knowingly collect personal information from children under
                    13. If we become aware that we have collected such
                    information, we will take steps to delete it promptly.
                  </p>

                  <p className="mt-4">
                    Parents and guardians who believe their child has provided
                    us with personal information should contact us immediately.
                  </p>
                </CardContent>
              </Card>

              {/* Policy Changes */}
              <Card id="policy-changes">
                <CardHeader>
                  <CardTitle>10. Changes to This Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by:
                  </p>

                  <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                    <li>Posting the updated policy on this page</li>
                    <li>Updating the &quot;Last modified&quot; date</li>
                    <li>
                      Providing notice through our website or email for
                      significant changes
                    </li>
                  </ul>

                  <p className="mt-4">
                    Your continued use of our service after changes take effect
                    constitutes acceptance of the updated policy.
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
                  <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>

                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> <a href="mailto:privacy@the-tools-hub.com" className="text-primary hover:underline">privacy@the-tools-hub.com</a></p>
                    <p><strong>Website:</strong> <a href="/contact" className="text-primary hover:underline">Contact Form</a></p>
                    <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                  </div>

                  <Alert className="mt-6 border-primary/20 bg-primary/5">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      For data protection inquiries, please use the subject line &quot;Privacy Request&quot; to ensure prompt handling.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card> */}
            </div>

            <AdPlaceholder id="adsense-bottom" className="mt-8" />

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                This Privacy Policy is effective as of {lastUpdated} (Version{" "}
                {version}). We are committed to protecting your privacy and will
                continue to update our practices to ensure the highest standards
                of data protection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
