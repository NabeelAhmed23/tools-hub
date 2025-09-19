"use client";

import { motion } from "framer-motion";
import ImageConverter from "@/components/ImageConverter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileImage, Zap, TrendingDown, Globe, CheckCircle } from "lucide-react";

export default function PngToWebpConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "PNG to WebP Converter",
    "description": "Convert PNG images to WebP format while preserving transparency and achieving better compression. Ideal for modern web development and performance optimization.",
    "url": "https://toolshub.com/image-converter/png-to-webp",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Convert PNG to WebP format",
      "Preserve transparency support",
      "Better compression than PNG",
      "Lossless and lossy options",
      "Modern web standard",
      "Smaller file sizes"
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert PNG to WebP",
    "description": "Convert PNG images to WebP format with transparency preservation and optimized compression",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload PNG Image",
        "text": "Select your PNG image (transparency and graphics supported)"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Compression Type",
        "text": "Select lossless for graphics or lossy for photographs"
      },
      {
        "@type": "HowToStep",
        "name": "Convert to WebP",
        "text": "Process your image with optimized WebP compression"
      },
      {
        "@type": "HowToStep",
        "name": "Download Result",
        "text": "Save your WebP image with preserved transparency and smaller size"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does PNG to WebP conversion preserve transparency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, WebP fully supports transparency. When converting from PNG to WebP, all transparent areas are preserved exactly as in the original image."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use lossless or lossy WebP for PNG conversion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use lossless WebP for graphics, logos, and images with sharp edges or text. Use lossy WebP for photographs and complex images where some quality loss is acceptable for better compression."
        }
      },
      {
        "@type": "Question",
        "name": "How much smaller will my WebP file be compared to PNG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP typically achieves 25-50% better compression than PNG, depending on the image content. Graphics and logos see the most dramatic size reductions while maintaining perfect quality."
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

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Skip to main content for accessibility */}
        <a href="#converter-tool" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded-md z-50">
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
              PNG to WebP Converter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Convert PNG images to modern WebP format while preserving transparency and achieving superior compression.
              Perfect for web optimization, graphics, and reducing file sizes without quality loss.
            </p>
          </motion.div>

          {/* Converter Tool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="converter-tool"
            role="main"
            aria-label="PNG to WebP image converter"
          >
            <ImageConverter
              sourceFormat="png"
              targetFormat="webp"
              conversionKey="png-to-webp"
              title="PNG to WebP Converter - Preserve Transparency with Better Compression"
              description="Convert PNG images to modern WebP format while preserving transparency and achieving superior compression. Perfect for graphics, logos, and web optimization with both lossless and lossy options available."
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
              Why Convert PNG to WebP?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <TrendingDown className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Superior Compression</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    WebP achieves 25-50% better compression than PNG while maintaining the same quality,
                    significantly reducing file sizes for faster web loading.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Transparency Preserved</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    WebP fully supports transparency just like PNG. All transparent areas in your PNG
                    images are perfectly preserved in the converted WebP files.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Globe className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Modern Web Standard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    WebP is supported by all modern browsers and is the preferred format for web optimization,
                    providing better performance and user experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <Zap className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Flexible Compression</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Choose between lossless compression for graphics and logos, or lossy compression
                    for photographs, giving you complete control over quality and file size.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <FileImage className="w-12 h-12 text-teal-600 mb-4" aria-hidden="true" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Perfect for Graphics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ideal for converting logos, icons, graphics, and illustrations where you need
                    transparency support with maximum compression efficiency.
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
              How to Convert PNG to WebP
            </h2>
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Upload Your PNG Image</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Click the upload area or drag and drop your PNG image file. The converter supports all PNG variations
                          including those with transparency, different color depths, and various compression levels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Choose Compression Mode</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Select lossless compression for graphics, logos, and images requiring perfect quality,
                          or lossy compression for photos where some quality trade-off is acceptable for better compression.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Configure Quality Settings</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          For lossy compression, adjust the quality slider to balance file size and image quality.
                          Higher values preserve more detail but result in larger files.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Download Your WebP</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Once conversion is complete, download your optimized WebP file. The converted image will have
                          superior compression while maintaining transparency and visual quality.
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
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Web Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Convert PNG images to WebP for significantly faster website loading times while
                    maintaining visual quality and transparency support.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Website images and graphics</li>
                    <li>Product photos with transparency</li>
                    <li>Blog post illustrations</li>
                    <li>Background images and textures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Logo & Brand Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Convert brand assets and logos to WebP for better web performance while preserving
                    transparency and maintaining professional quality standards.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Company logos with transparency</li>
                    <li>Brand icons and symbols</li>
                    <li>Marketing graphics</li>
                    <li>Social media assets</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">E-commerce & Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Optimize product images for faster loading e-commerce sites while maintaining
                    the transparency needed for professional product photography.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>Product photos with clear backgrounds</li>
                    <li>Category thumbnails and previews</li>
                    <li>Gallery images and zoom details</li>
                    <li>Mobile-optimized product images</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">App & UI Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Optimize UI elements and app assets for modern web applications and mobile apps
                    that support WebP format for better performance.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>UI icons and interface elements</li>
                    <li>App screenshots and previews</li>
                    <li>Dashboard graphics and charts</li>
                    <li>Progressive web app assets</li>
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About PNG Format</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      PNG (Portable Network Graphics) is a lossless compression format that&apos;s been the standard
                      for web graphics with transparency since 1996, but has larger file sizes.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>Lossless compression technology</li>
                      <li>Full transparency support</li>
                      <li>Universal browser support</li>
                      <li>Larger file sizes than WebP</li>
                      <li>Perfect for graphics and logos</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About WebP Format</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      WebP is a modern image format developed by Google that provides superior compression
                      algorithms while supporting both lossless and lossy compression with transparency.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <li>25-50% better compression than PNG</li>
                      <li>Supports both lossless and lossy modes</li>
                      <li>Full transparency and animation support</li>
                      <li>Modern browser support (95%+ coverage)</li>
                      <li>Ideal for web performance optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Conversion Process</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our converter processes your PNG images entirely in your browser using advanced web technologies.
                    You can choose between lossless conversion (perfect quality) or lossy conversion (smaller file sizes).
                    All transparency information is perfectly preserved in both modes, ensuring your graphics maintain
                    their professional appearance while benefiting from WebP&apos;s superior compression.
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
                  <AccordionItem value="why-webp">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Why should I convert PNG to WebP instead of keeping PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Convert PNG to WebP for significantly better compression (25-50% smaller files) while maintaining
                      the same quality and transparency support. WebP is the modern standard for web images,
                      providing faster loading times and better user experience.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transparency">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Does WebP support transparency like PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Yes, WebP fully supports transparency (alpha channel) just like PNG. All transparent and
                      semi-transparent areas in your PNG images will be perfectly preserved in the converted WebP files
                      with no loss of transparency information.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lossless-vs-lossy">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Should I use lossless or lossy WebP compression?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Use lossless WebP for graphics, logos, icons, and images with sharp edges or text where perfect
                      quality is essential. Use lossy WebP for photographs and complex images where some quality
                      trade-off is acceptable for dramatically smaller file sizes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="file-size">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      How much smaller will my WebP file be compared to PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      WebP typically achieves 25-50% better compression than PNG, depending on the image content.
                      Graphics and logos with large areas of solid color see the most dramatic size reductions,
                      while complex images with many details see moderate but still significant improvements.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="browser-support">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Do all browsers support WebP format?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      WebP is supported by over 95% of modern browsers including Chrome, Firefox, Safari, and Edge.
                      For websites, you can implement progressive enhancement by providing WebP images with PNG fallbacks
                      for maximum compatibility across all browsers.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="quality-comparison">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      Will I lose image quality when converting PNG to WebP?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      With lossless WebP, there&apos;s absolutely no quality loss - every pixel is preserved exactly.
                      With lossy WebP at high quality settings (80-90%), quality loss is minimal and often imperceptible
                      while achieving much better compression than PNG.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="use-cases">
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      When should I use WebP instead of PNG?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                      Use WebP for web images, mobile apps, and any application where file size matters for performance.
                      WebP is ideal for websites, e-commerce, progressive web apps, and modern applications that prioritize
                      fast loading times while maintaining visual quality.
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
                      This PNG to WebP converter operates entirely within your browser. Your images are processed
                      locally using client-side JavaScript technology, which means your files never leave your device.
                      No uploads, no server processing, no data collection - just fast, secure, and private image conversion
                      with superior compression and perfect transparency preservation.
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