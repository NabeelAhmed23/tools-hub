"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Users,
  Shield,
  AlertTriangle,
  BookOpen,
  Globe,
  FileText,
  Calendar,
  CheckCircle,
  XCircle,
  Gavel,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function TermsOfServicePage() {
  const version = "2.1";
  const effectiveDate = "January 15, 2025";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.the-tools-hub.com/terms-of-service#webpage",
    url: "https://www.the-tools-hub.com/terms-of-service",
    name: "Terms of Service - ToolsHub",
    description:
      "Comprehensive terms of service for ToolsHub including user agreements, acceptable use policy, intellectual property rights, and service limitations.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.the-tools-hub.com/#website",
      name: "ToolsHub",
    },
    about: {
      "@type": "Thing",
      name: "Terms of Service",
      description: "Legal agreement governing the use of ToolsHub services",
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
                <Scale className="h-12 w-12 text-primary mr-3" />
                <h1 className="text-4xl font-bold text-foreground">
                  Terms of Service
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Legal agreement governing your use of ToolsHub services and
                online tools.
              </p>

              <div className="flex items-center justify-center space-x-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Effective: {effectiveDate}
                </div>
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  Version {version}
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-base">
                <strong>Important:</strong> By using ToolsHub, you agree to
                these terms. Please read them carefully. If you don&apos;t agree
                with any part of these terms, you may not use our services.
              </AlertDescription>
            </Alert>


            {/* Table of Contents */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav aria-label="Terms of Service Navigation">
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>
                      <a
                        href="#acceptance"
                        className="text-primary hover:underline"
                      >
                        Acceptance of Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#service-description"
                        className="text-primary hover:underline"
                      >
                        Service Description
                      </a>
                    </li>
                    <li>
                      <a
                        href="#user-accounts"
                        className="text-primary hover:underline"
                      >
                        User Accounts and Registration
                      </a>
                    </li>
                    <li>
                      <a
                        href="#acceptable-use"
                        className="text-primary hover:underline"
                      >
                        Acceptable Use Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#intellectual-property"
                        className="text-primary hover:underline"
                      >
                        Intellectual Property Rights
                      </a>
                    </li>
                    <li>
                      <a
                        href="#user-content"
                        className="text-primary hover:underline"
                      >
                        User-Generated Content
                      </a>
                    </li>
                    <li>
                      <a
                        href="#privacy"
                        className="text-primary hover:underline"
                      >
                        Privacy and Data Protection
                      </a>
                    </li>
                    <li>
                      <a
                        href="#disclaimers"
                        className="text-primary hover:underline"
                      >
                        Disclaimers and Limitations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#liability"
                        className="text-primary hover:underline"
                      >
                        Limitation of Liability
                      </a>
                    </li>
                    <li>
                      <a
                        href="#indemnification"
                        className="text-primary hover:underline"
                      >
                        Indemnification
                      </a>
                    </li>
                    <li>
                      <a
                        href="#termination"
                        className="text-primary hover:underline"
                      >
                        Termination
                      </a>
                    </li>
                    <li>
                      <a
                        href="#governing-law"
                        className="text-primary hover:underline"
                      >
                        Governing Law
                      </a>
                    </li>
                    <li>
                      <a
                        href="#dispute-resolution"
                        className="text-primary hover:underline"
                      >
                        Dispute Resolution
                      </a>
                    </li>
                    <li>
                      <a
                        href="#changes"
                        className="text-primary hover:underline"
                      >
                        Changes to Terms
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
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
              {/* Acceptance of Terms */}
              <Card id="acceptance">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    1. Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    These Terms of Service (&quot;Terms&quot;) constitute a
                    legally binding agreement between you (&quot;User,&quot;
                    &quot;you,&quot; or &quot;your&quot;) and ToolsHub
                    (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                    regarding your access to and use of the ToolsHub website and
                    services located at www.the-tools-hub.com.
                  </p>

                  <h3 className="text-lg font-semibold">
                    1.1 Agreement to Terms
                  </h3>
                  <p>
                    By accessing or using our services, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms.
                    If you do not agree to these Terms, you must not access or
                    use our services.
                  </p>

                  <h3 className="text-lg font-semibold">
                    1.2 Capacity to Enter Agreement
                  </h3>
                  <p>
                    You represent and warrant that you have the legal capacity
                    to enter into this agreement. If you are under 18 years of
                    age, you may only use our services with the involvement and
                    consent of a parent or guardian.
                  </p>

                  <h3 className="text-lg font-semibold">
                    1.3 Additional Terms
                  </h3>
                  <p>
                    Certain features of our services may be subject to
                    additional terms and conditions, which will be presented to
                    you at the time of first use of such features.
                  </p>
                </CardContent>
              </Card>

              {/* Service Description */}
              <Card id="service-description">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    2. Service Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    2.1 ToolsHub Services
                  </h3>
                  <p>
                    ToolsHub provides a collection of free online tools and
                    utilities including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Security tools (password generators, hash generators,
                      encoders/decoders)
                    </li>
                    <li>
                      Calculation tools (BMI calculators, loan calculators, unit
                      converters)
                    </li>
                    <li>
                      Design and media tools (image compressors, favicon
                      generators, color pickers)
                    </li>
                    <li>
                      Other utility tools for productivity and convenience
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    2.2 Service Availability
                  </h3>
                  <p>
                    We strive to maintain continuous service availability but do
                    not guarantee uninterrupted access. Services may be
                    temporarily unavailable due to maintenance, updates, or
                    circumstances beyond our control.
                  </p>

                  <h3 className="text-lg font-semibold">
                    2.3 Service Modifications
                  </h3>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any
                    part of our services at any time without prior notice. We
                    may also impose limits on certain features or restrict
                    access to parts of the service.
                  </p>
                </CardContent>
              </Card>

              {/* User Accounts */}
              <Card id="user-accounts">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    3. User Accounts and Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    3.1 No Registration Required
                  </h3>
                  <p>
                    Currently, ToolsHub does not require user registration or
                    account creation to access most of our tools and services.
                    You can use our tools anonymously.
                  </p>

                  <h3 className="text-lg font-semibold">
                    3.2 Contact and Feedback
                  </h3>
                  <p>
                    While registration is not required, you may provide contact
                    information when:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Submitting feedback or support requests</li>
                    <li>Contacting us through our contact form</li>
                    <li>Reporting issues or bugs</li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    3.3 Accurate Information
                  </h3>
                  <p>
                    If you choose to provide contact information, you agree to
                    provide accurate, current, and complete information.
                  </p>
                </CardContent>
              </Card>

              {/* Acceptable Use Policy */}
              <Card id="acceptable-use">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    4. Acceptable Use Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Permitted Uses:</strong> Our tools are designed
                      for legitimate, legal, and ethical purposes. Use them
                      responsibly and in compliance with all applicable laws.
                    </AlertDescription>
                  </Alert>

                  <h3 className="text-lg font-semibold">
                    4.1 Prohibited Activities
                  </h3>
                  <p>You agree not to use our services to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Violate any local, state, national, or international law
                      or regulation
                    </li>
                    <li>
                      Transmit or create malicious code, viruses, or harmful
                      software
                    </li>
                    <li>
                      Attempt to gain unauthorized access to our systems or
                      other users&apos; data
                    </li>
                    <li>
                      Engage in any form of harassment, abuse, or harmful
                      behavior
                    </li>
                    <li>
                      Use our services for illegal activities including fraud or
                      identity theft
                    </li>
                    <li>
                      Overload our systems with excessive requests or automated
                      traffic
                    </li>
                    <li>
                      Reverse engineer, decompile, or attempt to extract source
                      code
                    </li>
                    <li>Remove or modify any proprietary notices or labels</li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    4.2 Security and Monitoring
                  </h3>
                  <p>
                    We reserve the right to monitor usage patterns to ensure
                    compliance with these terms and to protect our services from
                    abuse. We may temporarily or permanently restrict access for
                    violations.
                  </p>

                  <h3 className="text-lg font-semibold">
                    4.3 Reporting Violations
                  </h3>
                  <p>
                    If you become aware of any violations of these terms, please
                    report them to us immediately at
                    <a
                      href="mailto:abuse@the-tools-hub.com"
                      className="text-primary hover:underline"
                    >
                      abuse@the-tools-hub.com
                    </a>
                    .
                  </p>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card id="intellectual-property">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    5. Intellectual Property Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    5.1 Our Intellectual Property
                  </h3>
                  <p>
                    The ToolsHub website, including its design, code, content,
                    logos, and functionality, is owned by ToolsHub and protected
                    by intellectual property laws. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Website design and user interface</li>
                    <li>Tool algorithms and implementations</li>
                    <li>Content, text, and educational materials</li>
                    <li>Trademarks, logos, and branding</li>
                  </ul>

                  <h3 className="text-lg font-semibold">5.2 Limited License</h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable
                    license to access and use our services for personal,
                    non-commercial purposes in accordance with these Terms.
                  </p>

                  <h3 className="text-lg font-semibold">5.3 Restrictions</h3>
                  <p>You may not:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Copy, modify, or distribute our content without permission
                    </li>
                    <li>
                      Use our services for commercial purposes without
                      authorization
                    </li>
                    <li>Create derivative works based on our services</li>
                    <li>Use our trademarks or branding without permission</li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    5.4 Open Source Components
                  </h3>
                  <p>
                    Our services may include open source software components.
                    Such components are governed by their respective open source
                    licenses, which are incorporated herein by reference.
                  </p>
                </CardContent>
              </Card>

  
              {/* User Content */}
              <Card id="user-content">
                <CardHeader>
                  <CardTitle>6. User-Generated Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    6.1 Content You Provide
                  </h3>
                  <p>
                    When you use our tools, you may input data or content. You
                    retain ownership of any intellectual property rights in
                    content you provide. However, you grant us a limited license
                    to process this content solely to provide our services.
                  </p>

                  <h3 className="text-lg font-semibold">6.2 Data Processing</h3>
                  <p>
                    Most of our tools process your data locally in your browser
                    for privacy. When server-side processing is required, data
                    is processed immediately and not stored permanently.
                  </p>

                  <h3 className="text-lg font-semibold">
                    6.3 Content Responsibility
                  </h3>
                  <p>
                    You are solely responsible for the content you input into
                    our tools. You warrant that you have the right to use such
                    content and that it does not violate any laws or third-party
                    rights.
                  </p>
                </CardContent>
              </Card>

              {/* Privacy */}
              <Card id="privacy">
                <CardHeader>
                  <CardTitle>7. Privacy and Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Your privacy is important to us. Our collection and use of
                    personal information is governed by our Privacy Policy,
                    which is incorporated into these Terms by reference. Please
                    review our
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    to understand our practices.
                  </p>

                  <h3 className="text-lg font-semibold mt-4">
                    7.1 Data Protection Compliance
                  </h3>
                  <p>
                    We comply with applicable data protection laws including
                    GDPR and CCPA. You have rights regarding your personal data
                    as outlined in our Privacy Policy.
                  </p>
                </CardContent>
              </Card>

              {/* Disclaimers */}
              <Card id="disclaimers">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    8. Disclaimers and Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Important Disclaimer:</strong> Our services are
                      provided &quot;as is&quot; without warranties of any kind.
                      Use our tools at your own risk and always verify results
                      independently.
                    </AlertDescription>
                  </Alert>

                  <h3 className="text-lg font-semibold">8.1 No Warranties</h3>
                  <p>
                    We provide our services &quot;as is&quot; and &quot;as
                    available&quot; without warranties of any kind, either
                    express or implied, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Merchantability and fitness for a particular purpose
                    </li>
                    <li>Non-infringement of third-party rights</li>
                    <li>Accuracy, completeness, or reliability of results</li>
                    <li>Uninterrupted or error-free operation</li>
                  </ul>

                  <h3 className="text-lg font-semibold">8.2 Tool Accuracy</h3>
                  <p>
                    While we strive for accuracy in our tools, we do not
                    guarantee that results are error-free or suitable for any
                    particular purpose. Always verify important calculations and
                    results independently.
                  </p>

                  <h3 className="text-lg font-semibold">
                    8.3 Third-Party Content
                  </h3>
                  <p>
                    Our services may include links to third-party websites or
                    resources. We are not responsible for the availability,
                    accuracy, or content of such external resources.
                  </p>
                </CardContent>
              </Card>

              {/* Limitation of Liability */}
              <Card id="liability">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <XCircle className="h-5 w-5 mr-2" />
                    9. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    9.1 Damages Limitation
                  </h3>
                  <p>
                    To the maximum extent permitted by law, ToolsHub shall not
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including but not
                    limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Business interruption or system failures</li>
                    <li>Cost of substitute services or technologies</li>
                    <li>Any damages arising from use of our services</li>
                  </ul>

                  <h3 className="text-lg font-semibold">
                    9.2 Maximum Liability
                  </h3>
                  <p>
                    Our total liability for any claims arising from or related
                    to these Terms or our services shall not exceed the amount
                    you paid us in the twelve months preceding the claim (which,
                    for free services, would be zero).
                  </p>

                  <h3 className="text-lg font-semibold">
                    9.3 Jurisdictional Limitations
                  </h3>
                  <p>
                    Some jurisdictions do not allow the exclusion or limitation
                    of certain damages. In such jurisdictions, our liability is
                    limited to the maximum extent permitted by law.
                  </p>
                </CardContent>
              </Card>

              {/* Indemnification */}
              <Card id="indemnification">
                <CardHeader>
                  <CardTitle>10. Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    You agree to indemnify, defend, and hold harmless ToolsHub,
                    its officers, directors, employees, agents, and affiliates
                    from and against any claims, damages, losses, costs, and
                    expenses (including reasonable attorney fees) arising from
                    or related to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
                    <li>Your use of our services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>
                      Any content you provide or transmit through our services
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card id="termination">
                <CardHeader>
                  <CardTitle>11. Termination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    11.1 Termination by You
                  </h3>
                  <p>
                    You may stop using our services at any time. Since no
                    registration is required, simply discontinuing use
                    constitutes termination.
                  </p>

                  <h3 className="text-lg font-semibold">
                    11.2 Termination by Us
                  </h3>
                  <p>
                    We may terminate or suspend your access to our services
                    immediately, without prior notice, if you violate these
                    Terms or engage in prohibited activities.
                  </p>

                  <h3 className="text-lg font-semibold">
                    11.3 Effect of Termination
                  </h3>
                  <p>
                    Upon termination, your right to use our services ceases
                    immediately. Provisions of these Terms that by their nature
                    should survive termination will survive, including liability
                    limitations and indemnification obligations.
                  </p>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card id="governing-law">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gavel className="h-5 w-5 mr-2" />
                    12. Governing Law
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    These Terms are governed by and construed in accordance with
                    the laws of the jurisdiction where ToolsHub operates,
                    without regard to conflict of law principles. Any legal
                    action or proceeding arising under these Terms will be
                    brought exclusively in the courts of competent jurisdiction
                    in that location.
                  </p>

                  <h3 className="text-lg font-semibold mt-4">
                    12.1 International Users
                  </h3>
                  <p>
                    If you access our services from outside our jurisdiction,
                    you do so at your own risk and are responsible for
                    compliance with local laws.
                  </p>
                </CardContent>
              </Card>

              {/* Dispute Resolution */}
              <Card id="dispute-resolution">
                <CardHeader>
                  <CardTitle>13. Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    13.1 Informal Resolution
                  </h3>
                  <p>
                    Before pursuing formal dispute resolution, we encourage you
                    to contact us directly to seek a resolution. Many disputes
                    can be resolved quickly and amicably through direct
                    communication.
                  </p>

                  <h3 className="text-lg font-semibold">
                    13.2 Binding Arbitration
                  </h3>
                  <p>
                    Any dispute arising from these Terms that cannot be resolved
                    informally may be subject to binding arbitration in
                    accordance with the rules of a recognized arbitration
                    organization, as applicable by law.
                  </p>

                  <h3 className="text-lg font-semibold">
                    13.3 Class Action Waiver
                  </h3>
                  <p>
                    To the extent permitted by law, you agree that any dispute
                    will be resolved on an individual basis and not as part of a
                    class action or collective proceeding.
                  </p>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card id="changes">
                <CardHeader>
                  <CardTitle>14. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We reserve the right to modify these Terms at any time. We
                    will notify users of material changes by:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
                    <li>Posting the updated Terms on this page</li>
                    <li>Updating the &quot;Last modified&quot; date</li>
                    <li>
                      Providing prominent notice on our website for significant
                      changes
                    </li>
                  </ul>

                  <p className="mt-4">
                    Your continued use of our services after changes take effect
                    constitutes acceptance of the updated Terms. If you
                    don&apos;t agree with the changes, you must stop using our
                    services.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              {/* <Card id="contact">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    15. Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    If you have questions about these Terms of Service, please
                    contact us:
                  </p>

                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>General Inquiries:</strong>{" "}
                      <a
                        href="mailto:legal@the-tools-hub.com"
                        className="text-primary hover:underline"
                      >
                        legal@the-tools-hub.com
                      </a>
                    </p>
                    <p>
                      <strong>Abuse Reports:</strong>{" "}
                      <a
                        href="mailto:abuse@the-tools-hub.com"
                        className="text-primary hover:underline"
                      >
                        abuse@the-tools-hub.com
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        Contact Form
                      </a>
                    </p>
                    <p>
                      <strong>Response Time:</strong> We aim to respond within
                      48 hours
                    </p>
                  </div>

                  <Alert className="mt-6 border-primary/20 bg-primary/5">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      For legal inquiries, please use the subject line "Terms of
                      Service" to ensure prompt handling.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card> */}
            </div>


            {/* Footer Note */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                These Terms of Service are effective as of {effectiveDate}{" "}
                (Version {version}). By using ToolsHub, you acknowledge that you
                have read, understood, and agree to be bound by these terms. We
                recommend saving or printing a copy of these terms for your
                records.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
