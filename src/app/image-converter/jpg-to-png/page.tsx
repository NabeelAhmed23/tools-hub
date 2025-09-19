"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Image as ImageIcon,
  HelpCircle,
  Shield,
  Zap,
  FileImage,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";

export default function JpgToPngConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "JPG to PNG Converter",
    "description": "Convert JPEG images to PNG format online with transparency support and lossless quality. Free, professional image format conversion tool with secure processing.",
    "url": "https://www.the-tools-hub.com/image-converter/jpg-to-png",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Convert JPEG to PNG format",
      "Add transparency channel support",
      "Lossless image quality preservation",
      "Batch conversion support",
      "No file upload limits",
      "Privacy-focused server-side processing",
      "Professional image optimization"
    ],
    "screenshot": "https://www.the-tools-hub.com/og/jpg-to-png-converter.jpg"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert JPG to PNG",
    "description": "Complete step-by-step guide to convert JPEG images to PNG format online with transparency support",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Your JPEG Image",
        "text": "Select or drag and drop your JPG/JPEG image file (maximum 10MB). The tool accepts both .jpg and .jpeg file extensions.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-png#upload"
      },
      {
        "@type": "HowToStep",
        "name": "Configure Conversion Settings",
        "text": "Adjust quality settings (10-100%) and conversion options. Higher quality preserves more image detail but results in larger file sizes.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-png#settings"
      },
      {
        "@type": "HowToStep",
        "name": "Start Image Conversion",
        "text": "Click the 'Convert to PNG' button to process your image. The conversion happens on secure servers with lossless quality preservation.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-png#convert"
      },
      {
        "@type": "HowToStep",
        "name": "Download PNG Result",
        "text": "Download your converted PNG image with transparency support. The file maintains all image data with lossless compression.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-png#download"
      }
    ],
    "totalTime": "PT1M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": ["JPEG image file"],
    "tool": ["Web browser", "Internet connection"]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should I convert JPG to PNG format?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Converting JPG to PNG adds transparency channel support, provides lossless quality preservation, and is ideal for images with text, graphics, logos, or when you need transparent backgrounds. PNG format preserves all image data without the compression artifacts that JPEG introduces, making it perfect for professional graphics and web design."
        }
      },
      {
        "@type": "Question",
        "name": "Will the PNG file be larger than the original JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PNG files are typically 2-5 times larger than JPG files because PNG uses lossless compression while JPG uses lossy compression. However, PNG provides perfect image quality, supports transparency, and preserves all image data without any quality degradation, making the larger file size worthwhile for many applications."
        }
      },
      {
        "@type": "Question",
        "name": "Is the JPG to PNG conversion process secure and private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our conversion process is completely secure. All images are processed on encrypted servers and are automatically deleted immediately after conversion. We never store, log, or access your images beyond the conversion process. Your privacy is guaranteed with our zero-storage policy."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum file size limit for JPG to PNG conversion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can convert JPEG files up to 10MB in size. This limit ensures fast processing while accommodating most common image sizes including high-resolution photos and graphics. For larger files, consider compressing your JPEG first or splitting large images into smaller sections."
        }
      },
      {
        "@type": "Question",
        "name": "Does converting JPG to PNG improve image quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Converting from JPG to PNG doesn't recover quality lost in the original JPEG compression, but it prevents any further quality loss. The PNG will preserve the current image exactly as it is with lossless compression, and you gain transparency support for future editing needs."
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

      <main className="container mx-auto px-4 py-8" role="main">
        <div className="max-w-4xl mx-auto">
          {/* Skip to main content link for accessibility */}
          <a
            href="#converter-tool"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
            aria-label="Skip to converter tool"
          >
            Skip to converter tool
          </a>

          <ImageConverter
            sourceFormat="jpg"
            targetFormat="png"
            conversionKey="jpg-to-png"
            title="JPG to PNG Converter - Add Transparency Support"
            description="Convert JPEG images to PNG format online for free. Add transparency channel support, maintain lossless quality, and get perfect results for graphics and logos. Your files stay private with secure server-side processing."
          />

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
            aria-labelledby="benefits-heading"
          >
            <Card>
              <CardHeader>
                <CardTitle id="benefits-heading" className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" aria-hidden="true" />
                  <h2>Benefits of Converting JPG to PNG</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Transparency Support</h3>
                        <p className="text-sm text-muted-foreground">
                          PNG format supports alpha channel transparency, allowing you to create images with transparent backgrounds perfect for logos, graphics, and web design.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Lossless Quality</h3>
                        <p className="text-sm text-muted-foreground">
                          Unlike JPEG&apos;s lossy compression, PNG preserves every pixel of your image data without any quality degradation or compression artifacts.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileImage className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Better for Graphics</h3>
                        <p className="text-sm text-muted-foreground">
                          PNG excels with images containing text, line art, and graphics with sharp edges, maintaining crisp detail that JPEG might blur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ImageIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Web Compatibility</h3>
                        <p className="text-sm text-muted-foreground">
                          PNG images work perfectly across all modern web browsers and platforms, with universal support for transparency effects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Future-Proof Format</h3>
                        <p className="text-sm text-muted-foreground">
                          PNG is an open standard format that ensures your images remain accessible and editable for years to come.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Professional Results</h3>
                        <p className="text-sm text-muted-foreground">
                          Get publication-ready images suitable for print, digital media, and professional presentations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* How to Use Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
            aria-labelledby="howto-heading"
          >
            <Card>
              <CardHeader>
                <CardTitle id="howto-heading">
                  <h2>How to Convert JPG to PNG - Step by Step Guide</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Upload Your JPEG Image</h3>
                        <p className="text-sm text-muted-foreground">
                          Click the upload area or drag and drop your JPG/JPEG file. Our tool accepts files up to 10MB and supports both .jpg and .jpeg extensions. The upload is instant and secure.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Configure Quality Settings</h3>
                        <p className="text-sm text-muted-foreground">
                          Adjust the quality slider (10-100%) based on your needs. Higher quality settings preserve more detail but create larger files. For most uses, 90-100% quality is recommended.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Start the Conversion</h3>
                        <p className="text-sm text-muted-foreground">
                          Click &quot;Convert to PNG&quot; to begin processing. Our server-side Sharp image processor converts your file using professional algorithms while maintaining maximum quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Download Your PNG</h3>
                        <p className="text-sm text-muted-foreground">
                          Download your converted PNG file with transparency support. The file retains all image data with lossless compression and is ready for professional use.
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
            transition={{ delay: 0.4 }}
            className="mt-8"
            aria-labelledby="usecases-heading"
          >
            <Card>
              <CardHeader>
                <CardTitle id="usecases-heading">
                  <h2>When to Convert JPG to PNG - Common Use Cases</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Logo Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Convert logos to PNG for transparent backgrounds, perfect for overlaying on websites, documents, and marketing materials.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Web Graphics</h3>
                    <p className="text-sm text-muted-foreground">
                      Create web graphics with transparency effects, icons, and UI elements that blend seamlessly with any background color.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Print Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Prepare images for professional printing where lossless quality is essential for maintaining sharp text and graphics.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Digital Art</h3>
                    <p className="text-sm text-muted-foreground">
                      Preserve artwork quality for digital portfolios, ensuring every detail remains crisp and colors stay accurate.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Screenshots</h3>
                    <p className="text-sm text-muted-foreground">
                      Convert screenshot images to maintain text clarity and interface elements for documentation and tutorials.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">E-commerce</h3>
                    <p className="text-sm text-muted-foreground">
                      Create product images with transparent backgrounds for online stores, allowing products to stand out on any page design.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technical Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
            aria-labelledby="technical-heading"
          >
            <Card>
              <CardHeader>
                <CardTitle id="technical-heading">
                  <h2>Understanding JPG to PNG Conversion</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">JPEG vs PNG: Technical Differences</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    JPEG (Joint Photographic Experts Group) uses lossy compression optimized for photographs with smooth color gradients.
                    PNG (Portable Network Graphics) uses lossless compression that preserves every pixel, making it ideal for graphics with sharp edges, text, and transparency requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Conversion Process Details</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our conversion tool uses Sharp, a high-performance image processing library, to decode your JPEG file and re-encode it as PNG.
                    The process preserves the current image quality while adding transparency channel support. Since PNG uses lossless compression,
                    no additional quality loss occurs during conversion.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">File Size Considerations</h3>
                  <p className="text-sm text-muted-foreground">
                    Expect PNG files to be 2-5 times larger than equivalent JPEG files due to lossless compression. However, you gain perfect quality preservation,
                    transparency support, and better compression for images with large areas of solid colors or text.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
            aria-labelledby="faq-heading"
          >
            <Card>
              <CardHeader>
                <CardTitle id="faq-heading">
                  <h2>Frequently Asked Questions</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Why should I convert JPG to PNG format?</AccordionTrigger>
                    <AccordionContent>
                      Converting JPG to PNG adds transparency channel support, provides lossless quality preservation, and is ideal for images with text, graphics, logos, or when you need transparent backgrounds. PNG format preserves all image data without the compression artifacts that JPEG introduces, making it perfect for professional graphics and web design.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Will the PNG file be larger than the original JPG?</AccordionTrigger>
                    <AccordionContent>
                      Yes, PNG files are typically 2-5 times larger than JPG files because PNG uses lossless compression while JPG uses lossy compression. However, PNG provides perfect image quality, supports transparency, and preserves all image data without any quality degradation, making the larger file size worthwhile for many applications.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is the JPG to PNG conversion process secure and private?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our conversion process is completely secure. All images are processed on encrypted servers and are automatically deleted immediately after conversion. We never store, log, or access your images beyond the conversion process. Your privacy is guaranteed with our zero-storage policy.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What is the maximum file size limit for JPG to PNG conversion?</AccordionTrigger>
                    <AccordionContent>
                      You can convert JPEG files up to 10MB in size. This limit ensures fast processing while accommodating most common image sizes including high-resolution photos and graphics. For larger files, consider compressing your JPEG first or splitting large images into smaller sections.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Does converting JPG to PNG improve image quality?</AccordionTrigger>
                    <AccordionContent>
                      Converting from JPG to PNG doesn&apos;t recover quality lost in the original JPEG compression, but it prevents any further quality loss. The PNG will preserve the current image exactly as it is with lossless compression, and you gain transparency support for future editing needs.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Can I batch convert multiple JPG files to PNG?</AccordionTrigger>
                    <AccordionContent>
                      Currently, our tool processes one image at a time to ensure optimal quality and performance. However, you can quickly convert multiple files by repeating the simple upload and convert process for each image. This approach also maintains better privacy as files are processed individually.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>What happens to the original JPEG file after conversion?</AccordionTrigger>
                    <AccordionContent>
                      Your original JPEG file remains completely unchanged and stays on your device. Our conversion process only reads the uploaded file to create a new PNG version. You&apos;ll have both the original JPEG and the new PNG file available for download.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.section>

          {/* Privacy and Security Notice */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8"
            aria-labelledby="privacy-heading"
          >
            <Card>
              <CardHeader>
                <CardTitle id="privacy-heading" className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-600" aria-hidden="true" />
                  <h2>Privacy & Security Policy</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Zero Storage Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    We never store your images on our servers. All uploaded files are processed in memory and automatically deleted immediately after conversion. This ensures complete privacy and security of your sensitive images.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Encrypted Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    All file uploads and processing occur over encrypted HTTPS connections. Your images are protected during transmission and processing with enterprise-grade security measures.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Data Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    We don&apos;t collect, analyze, or store any metadata from your images. Our service is completely anonymous and requires no registration or personal information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </main>
    </>
  );
}