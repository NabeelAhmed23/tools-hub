"use client";

import { motion } from "framer-motion";
import ImageConverter from "@/components/ImageConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileImage, Zap, Users, Globe, CheckCircle } from "lucide-react";

export default function WebpToJpgConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "WebP to JPG Converter",
    "description": "Convert WebP images to JPEG format for maximum compatibility across all devices, browsers, and platforms. Perfect for sharing, printing, and universal support.",
    "url": "https://toolshub.com/image-converter/webp-to-jpg",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Convert WebP to JPEG format",
      "Universal device compatibility",
      "Perfect for sharing and printing",
      "Quality preservation options",
      "Background color selection",
      "Optimized file sizes"
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert WebP to JPG",
    "description": "Convert WebP images to JPEG format for universal compatibility and sharing",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload WebP Image",
        "text": "Select or drag your WebP image file to the converter"
      },
      {
        "@type": "HowToStep",
        "name": "Set Quality Options",
        "text": "Choose JPEG quality level (90% recommended for best results)"
      },
      {
        "@type": "HowToStep",
        "name": "Handle Transparency",
        "text": "Select background color for any transparent areas"
      },
      {
        "@type": "HowToStep",
        "name": "Download JPEG",
        "text": "Get your converted JPEG file with universal compatibility"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why convert WebP to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Convert WebP to JPG for universal compatibility with all devices, older browsers, printing services, and platforms that don't support WebP format yet."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose quality converting WebP to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With 90% quality settings, quality loss is minimal and barely noticeable. JPEG provides excellent compatibility while maintaining good image quality."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to transparency in WebP when converting to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPEG doesn't support transparency. Our converter automatically fills transparent areas with your chosen background color (white by default) for a clean result."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Skip to main content for accessibility */}
        <a href="#converter-tool" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Skip to converter tool
        </a>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              WebP to JPG Converter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Convert WebP images to JPEG format for universal compatibility across all devices, browsers, and platforms.
              Perfect for sharing, printing, and when maximum support is needed.
            </p>
          </motion.div>

          {/* Converter Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="converter-tool"
            role="main"
            aria-label="WebP to JPG image converter"
          >
            <ImageConverter
              sourceFormat="webp"
              targetFormat="jpeg"
              conversionKey="webp-to-jpg"
              title="WebP to JPG Converter - Universal Device Compatibility"
              description="Convert WebP images to JPEG format for maximum compatibility across all devices, browsers, and platforms. Perfect for sharing, printing, and when universal support is needed. Choose background colors for transparent areas."
            />
          </motion.div>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
            aria-labelledby="benefits-heading"
          >
            <h2 id="benefits-heading" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Why Convert WebP to JPG?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Globe className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Universal Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    JPEG is supported by every device, browser, and platform. Ensure your images work everywhere,
                    from old mobile phones to professional printing services.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Users className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Perfect for Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share images confidently across social media, email, and messaging platforms.
                    JPEG works seamlessly on all platforms without compatibility issues.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <FileImage className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Professional Printing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Most printing services and professional software prefer JPEG format.
                    Convert WebP to JPG for reliable printing and professional workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Zap className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Optimized Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose quality levels from 1-100% to balance file size and image quality.
                    90% quality provides excellent results for most use cases.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-teal-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Transparency Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Transparent areas in WebP images are automatically filled with your chosen background color,
                    creating clean, professional-looking JPEG images.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Shield className="w-12 h-12 text-red-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Privacy Protected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your images are processed locally in your browser. No uploads to external servers,
                    ensuring complete privacy and security of your files.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* How to Use Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
            aria-labelledby="howto-heading"
          >
            <h2 id="howto-heading" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How to Convert WebP to JPG
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Upload Your WebP Image</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Click the upload area or drag and drop your WebP image file. The converter supports all WebP variations
                          including those with transparency and animation frames.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configure Quality Settings</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Choose your preferred JPEG quality level (1-100%). Higher values mean better quality but larger file sizes.
                          90% is recommended for the best balance of quality and file size.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Handle Transparency</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          If your WebP image has transparent areas, choose a background color to fill them.
                          White is the default and works well for most images, but you can select any color.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Download Your JPEG</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Once conversion is complete, download your JPEG file. The converted image will have universal
                          compatibility and work on all devices and platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Use Cases Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
            aria-labelledby="usecases-heading"
          >
            <h2 id="usecases-heading" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Common Use Cases
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Social Media Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Convert WebP images to JPEG for guaranteed compatibility across all social media platforms,
                    messaging apps, and email services.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Facebook, Instagram, Twitter posts</li>
                    <li>WhatsApp, Telegram, iMessage sharing</li>
                    <li>Email attachments</li>
                    <li>Profile pictures and covers</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Professional Workflows</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ensure compatibility with professional software, printing services,
                    and legacy systems that require JPEG format.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Commercial printing services</li>
                    <li>Photo editing software compatibility</li>
                    <li>Document management systems</li>
                    <li>Legacy application support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Website Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Convert modern WebP images to JPEG for broader browser support and compatibility
                    with older systems and content management platforms.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Legacy browser support</li>
                    <li>CMS platform compatibility</li>
                    <li>Email newsletter images</li>
                    <li>Backup format for progressive enhancement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Device Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ensure your images work on all devices, including older smartphones, tablets,
                    and computers that don&apos;t support WebP format.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Older Android and iOS devices</li>
                    <li>Legacy Windows and Mac systems</li>
                    <li>Digital photo frames</li>
                    <li>E-book readers and tablets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Technical Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
            aria-labelledby="technical-heading"
          >
            <h2 id="technical-heading" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Technical Information
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About WebP Format</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WebP is a modern image format developed by Google that provides superior compression compared to JPEG and PNG.
                      However, it&apos;s not universally supported across all devices and platforms.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>Developed by Google in 2010</li>
                      <li>Supports both lossy and lossless compression</li>
                      <li>Can include transparency and animation</li>
                      <li>25-35% smaller file sizes than JPEG</li>
                      <li>Limited support on older devices</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About JPEG Format</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      JPEG (Joint Photographic Experts Group) is the most widely supported image format,
                      working on virtually every device, browser, and application since 1992.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>Universal compatibility since 1992</li>
                      <li>Excellent compression for photographs</li>
                      <li>Adjustable quality levels (1-100%)</li>
                      <li>No transparency support</li>
                      <li>Ideal for sharing and printing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Conversion Process</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our converter processes your WebP images entirely in your browser using modern web technologies.
                    The conversion preserves image quality while ensuring compatibility. Transparent areas are automatically
                    filled with your chosen background color since JPEG doesn&apos;t support transparency.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16"
            aria-labelledby="faq-heading"
          >
            <h2 id="faq-heading" className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="why-convert">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Why should I convert WebP to JPG instead of keeping the WebP format?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Convert WebP to JPG for universal compatibility. While WebP offers better compression,
                      JPEG works on all devices, browsers, and platforms without exception. This is essential for sharing,
                      printing, and professional workflows where compatibility is critical.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="quality-loss">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Will I lose image quality when converting WebP to JPG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Quality loss is minimal when using appropriate settings. With 90% quality, the difference is barely
                      noticeable to the human eye. The trade-off between quality and universal compatibility is usually worth it,
                      especially for sharing and printing purposes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transparency">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      What happens to transparent areas in my WebP image?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Since JPEG doesn&apos;t support transparency, our converter automatically fills transparent areas
                      with your chosen background color. You can select white, black, or any custom color.
                      White is the default as it works well for most images.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="file-size">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      How does the file size compare between WebP and JPG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      JPEG files are typically 25-35% larger than equivalent WebP files. However, JPEG still provides
                      excellent compression for photographs. You can adjust the quality setting to balance file size
                      and image quality according to your needs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="batch-conversion">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Can I convert multiple WebP images to JPG at once?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Currently, our converter processes one image at a time to ensure optimal quality and performance.
                      This approach allows for better error handling and gives you control over individual image settings
                      like quality level and background color.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Is my image data secure during conversion?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Absolutely. All image processing happens locally in your browser using client-side JavaScript.
                      Your images are never uploaded to our servers or transmitted over the internet.
                      This ensures complete privacy and security of your files.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="compatibility">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Which devices and platforms support JPG vs WebP?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      JPEG is supported by virtually every device, browser, and application since 1992.
                      WebP support is growing but still limited on older devices, some mobile browsers,
                      and many professional applications. Converting to JPEG ensures your images work everywhere.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="animated-webp">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Can I convert animated WebP images to JPG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Yes, but since JPEG doesn&apos;t support animation, only the first frame of an animated WebP
                      will be converted to JPEG. If you need to preserve animation, consider converting to GIF format instead,
                      though this may result in lower quality and larger file sizes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.section>

          {/* Privacy Notice */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-16"
            aria-labelledby="privacy-heading"
          >
            <Card className="border-0 shadow-lg bg-green-50 dark:bg-green-900/20 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 id="privacy-heading" className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Your Privacy is Protected
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      This WebP to JPG converter operates entirely within your browser. Your images are processed
                      locally using client-side JavaScript technology, which means your files never leave your device.
                      No uploads, no server processing, no data collection - just fast, secure, and private image conversion.
                      You maintain complete control over your images throughout the entire conversion process.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </>
  );
}