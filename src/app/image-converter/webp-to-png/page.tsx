"use client";

import { motion } from "framer-motion";
import ImageConverter from "@/components/ImageConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileImage, Zap, Layers, CheckCircle, Eye } from "lucide-react";

export default function WebpToPngConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "WebP to PNG Converter",
    "description": "Convert WebP images to PNG format with preserved transparency and lossless quality. Perfect for graphics, logos, and applications requiring transparency support.",
    "url": "https://toolshub.com/image-converter/webp-to-png",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Convert WebP to PNG format",
      "Preserve transparency perfectly",
      "Lossless image quality",
      "Perfect for graphics and logos",
      "Better compatibility support",
      "High-quality conversion"
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert WebP to PNG",
    "description": "Convert WebP images to PNG format with preserved transparency and lossless quality",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload WebP Image",
        "text": "Select or drag your WebP image file (transparency supported)"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Quality Settings",
        "text": "Set PNG optimization level (90% recommended for balance)"
      },
      {
        "@type": "HowToStep",
        "name": "Convert to PNG",
        "text": "Process your image with lossless PNG conversion"
      },
      {
        "@type": "HowToStep",
        "name": "Download PNG File",
        "text": "Save your PNG image with preserved transparency and quality"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why convert WebP to PNG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Convert WebP to PNG for better compatibility with older software, when you need lossless quality, for graphics and logos, or when working with applications that don't support WebP format."
        }
      },
      {
        "@type": "Question",
        "name": "Is transparency preserved when converting WebP to PNG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, both WebP and PNG support transparency. All transparent areas in your WebP image will be perfectly preserved in the converted PNG file."
        }
      },
      {
        "@type": "Question",
        "name": "Will the PNG file be larger than the WebP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PNG files are typically larger than WebP because WebP has better compression algorithms. However, PNG provides universal compatibility and lossless quality that may be worth the larger file size."
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

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Skip to main content for accessibility */}
        <a href="#converter-tool" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50">
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
              WebP to PNG Converter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Convert WebP images to PNG format with perfect transparency preservation and lossless quality.
              Ideal for graphics, logos, and professional designs requiring universal compatibility.
            </p>
          </motion.div>

          {/* Converter Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="converter-tool"
            role="main"
            aria-label="WebP to PNG image converter"
          >
            <ImageConverter
              sourceFormat="webp"
              targetFormat="png"
              conversionKey="webp-to-png"
              title="WebP to PNG Converter - Preserve Transparency and Quality"
              description="Convert WebP images to PNG format with preserved transparency and lossless quality. Perfect for graphics, logos, and applications requiring universal compatibility with transparency support."
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
              Why Convert WebP to PNG?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Layers className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Perfect Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    PNG preserves transparency flawlessly, making it ideal for logos, graphics, and designs
                    that need clear backgrounds without any quality loss.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Eye className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Lossless Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    PNG provides completely lossless compression, ensuring your converted images maintain
                    every pixel of detail from the original WebP file.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Universal Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    PNG is supported by virtually every application, design software, and platform,
                    ensuring your images work everywhere without compatibility issues.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <FileImage className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Graphics & Logos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Perfect for converting graphics, logos, icons, and illustrations where transparency
                    and crisp edges are essential for professional presentation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Zap className="w-12 h-12 text-yellow-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Professional Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Maintain professional standards with PNG&apos;s superior handling of graphics,
                    sharp text, and detailed illustrations without compression artifacts.
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
              How to Convert WebP to PNG
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Upload Your WebP Image</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Click the upload area or drag and drop your WebP image file. The converter supports all WebP variations
                          including those with transparency, animation, and different compression levels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configure PNG Settings</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Choose your PNG optimization level. Higher settings preserve maximum quality while lower settings
                          reduce file size. 90% is recommended for the best balance of quality and file size.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Process Conversion</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          The converter will process your WebP image and convert it to PNG format while preserving
                          all transparency information and maintaining lossless quality throughout the conversion.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Download Your PNG</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Once conversion is complete, download your PNG file. The converted image will have perfect
                          transparency preservation and work universally across all applications and platforms.
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
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Logo & Brand Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Convert WebP logos and brand assets to PNG for universal compatibility across
                    all design software, presentations, and marketing materials.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Company logos with transparency</li>
                    <li>Brand icons and symbols</li>
                    <li>Marketing graphics and banners</li>
                    <li>Presentation slides and documents</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ensure broader browser support and compatibility with older systems that may not
                    fully support WebP format while maintaining transparency.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Fallback images for older browsers</li>
                    <li>UI elements and icons</li>
                    <li>Background graphics with transparency</li>
                    <li>Legacy system compatibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Professional Graphics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Convert illustrations, infographics, and professional graphics to PNG for use in
                    design software and professional workflows requiring lossless quality.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Technical illustrations and diagrams</li>
                    <li>Infographics and data visualizations</li>
                    <li>Print design and publishing</li>
                    <li>Professional photo editing workflows</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Software Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ensure compatibility with applications and systems that require PNG format for
                    proper transparency handling and image processing.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Desktop application assets</li>
                    <li>Game development resources</li>
                    <li>Document templates and forms</li>
                    <li>Legacy software requirements</li>
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
                      WebP is a modern image format developed by Google offering excellent compression and quality.
                      However, it&apos;s not universally supported, especially in older applications and systems.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>Developed by Google in 2010</li>
                      <li>Superior compression algorithms</li>
                      <li>Supports transparency and animation</li>
                      <li>25-35% smaller than equivalent PNG</li>
                      <li>Limited support in older software</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About PNG Format</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      PNG (Portable Network Graphics) is the gold standard for lossless image compression
                      with transparency support, universally supported since 1996.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>Universal compatibility since 1996</li>
                      <li>Lossless compression technology</li>
                      <li>Perfect transparency support</li>
                      <li>Ideal for graphics and logos</li>
                      <li>Supported by all applications</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Conversion Process</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our converter processes your WebP images entirely in your browser using advanced web technologies.
                    The conversion maintains perfect transparency and provides lossless quality. All alpha channel information
                    from your WebP image is perfectly preserved in the resulting PNG file, ensuring no loss of transparency data.
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
                      Why should I convert WebP to PNG instead of keeping the WebP format?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Convert WebP to PNG for universal compatibility, especially with older applications and design software.
                      PNG provides lossless quality and perfect transparency preservation, making it ideal for graphics, logos,
                      and professional designs where quality cannot be compromised.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transparency">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Is transparency perfectly preserved when converting WebP to PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Yes, absolutely. Both WebP and PNG support full alpha channel transparency. All transparent and
                      semi-transparent areas in your WebP image will be perfectly preserved in the converted PNG file
                      with no loss of transparency information.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="quality-loss">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Will I lose image quality when converting WebP to PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      No quality loss occurs during conversion. PNG uses lossless compression, which means every pixel
                      of your original WebP image is preserved exactly. The conversion maintains perfect image fidelity
                      while providing universal compatibility.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="file-size">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Will the PNG file be much larger than the WebP file?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      PNG files are typically larger than WebP because WebP has more advanced compression algorithms.
                      However, the trade-off provides universal compatibility and lossless quality. For graphics and logos,
                      the slightly larger file size is usually worth the benefits.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="animated-webp">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Can I convert animated WebP images to PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      PNG doesn&apos;t support animation, so only the first frame of an animated WebP will be converted
                      to PNG. If you need to preserve animation, consider keeping the WebP format or converting to
                      an animated format like GIF (though this may reduce quality).
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="best-use-cases">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      When should I use PNG instead of WebP?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Use PNG when you need maximum compatibility, working with graphics/logos requiring transparency,
                      using older design software, or when lossless quality is critical. PNG is ideal for professional
                      graphics, logos, icons, and any image where transparency and universal support are essential.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="privacy">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Is my image data secure during conversion?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Absolutely secure. All image processing happens locally in your browser using client-side JavaScript.
                      Your images are never uploaded to our servers or transmitted over the internet. This ensures
                      complete privacy and security of your files throughout the conversion process.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="software-support">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Which applications support PNG vs WebP?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      PNG is supported by virtually every application, design software, and system since 1996.
                      WebP support is growing but still limited in many professional design applications, older software,
                      and some specialized systems. Converting to PNG ensures universal compatibility.
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
                      This WebP to PNG converter operates entirely within your browser. Your images are processed
                      locally using client-side JavaScript technology, which means your files never leave your device.
                      No uploads, no server processing, no data collection - just fast, secure, and private image conversion
                      with perfect transparency preservation and lossless quality.
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