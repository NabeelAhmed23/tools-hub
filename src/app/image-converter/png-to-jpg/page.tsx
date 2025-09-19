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
  Shield,
  Zap,
  Globe,
  Download,
  Palette,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";


export default function PngToJpgConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "PNG to JPG Converter",
    "description": "Convert PNG images to JPG/JPEG format online with up to 90% file size reduction and excellent quality. Free, professional image optimization tool with secure processing.",
    "url": "https://www.the-tools-hub.com/image-converter/png-to-jpg",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Convert PNG to JPEG format",
      "Up to 90% file size reduction",
      "Universal device compatibility",
      "Background color selection for transparency",
      "Quality optimization controls",
      "Faster upload and sharing",
      "Privacy-focused server-side processing",
      "Professional image optimization"
    ],
    "screenshot": "https://www.the-tools-hub.com/og/png-to-jpg-converter.jpg"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert PNG to JPG",
    "description": "Complete step-by-step guide to convert PNG images to JPEG format online with file size optimization",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Your PNG Image",
        "text": "Select or drag and drop your PNG image file (maximum 10MB). The tool supports transparent PNG images and all PNG variants.",
        "url": "https://www.the-tools-hub.com/image-converter/png-to-jpg#upload"
      },
      {
        "@type": "HowToStep",
        "name": "Configure Background and Quality",
        "text": "Choose background color for transparent areas (white recommended) and adjust quality settings (90% optimal for most images).",
        "url": "https://www.the-tools-hub.com/image-converter/png-to-jpg#settings"
      },
      {
        "@type": "HowToStep",
        "name": "Start JPG Conversion",
        "text": "Click the 'Convert to JPG' button to process your image. Advanced compression algorithms optimize file size.",
        "url": "https://www.the-tools-hub.com/image-converter/png-to-jpg#convert"
      },
      {
        "@type": "HowToStep",
        "name": "Download Optimized JPG",
        "text": "Download your converted JPEG file with up to 90% file size reduction. Perfect for web use and sharing.",
        "url": "https://www.the-tools-hub.com/image-converter/png-to-jpg#download"
      }
    ],
    "totalTime": "PT1M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": ["PNG image file"],
    "tool": ["Web browser", "Internet connection"]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What happens to transparent areas in PNG when converting to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPEG format doesn't support transparency. Our converter automatically fills transparent areas with your chosen background color (white by default). You can customize this color before conversion to match your needs, ensuring the best visual result for your specific use case."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose image quality converting PNG to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPEG uses lossy compression, so there may be minimal quality loss. However, with 90% quality settings, the difference is barely noticeable while achieving 70-90% smaller file sizes. For photographs, JPEG often provides better compression than PNG without visible quality loss."
        }
      },
      {
        "@type": "Question",
        "name": "When should I convert PNG to JPG format?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Convert PNG to JPG for photographs, when you need smaller file sizes, faster uploads, universal compatibility, or when transparency is not needed. JPG is ideal for complex images with many colors, gradients, and photographic content."
        }
      },
      {
        "@type": "Question",
        "name": "How much smaller will my JPG file be compared to PNG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPG files are typically 70-90% smaller than equivalent PNG files, especially for photographs and complex images. The exact size reduction depends on image content, but significant savings are common for most real-world images."
        }
      },
      {
        "@type": "Question",
        "name": "Is the PNG to JPG conversion process secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our conversion process is completely secure. All images are processed on encrypted servers and automatically deleted immediately after conversion. We never store, log, or access your images beyond the conversion process, ensuring complete privacy."
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
            sourceFormat="png"
            targetFormat="jpeg"
            conversionKey="png-to-jpg"
            title="PNG to JPG Converter - Reduce File Size by 90%"
            description="Convert PNG images to JPEG format for significantly smaller file sizes and universal compatibility. Perfect for photographs, sharing, and when transparency is not needed. Choose background colors for transparent areas."
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
                  <h2>Benefits of Converting PNG to JPG</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Download className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Massive File Size Reduction</h3>
                        <p className="text-sm text-muted-foreground">
                          Reduce file sizes by 70-90% compared to PNG, making images perfect for web use, email sharing, and faster uploads while maintaining excellent visual quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Universal Compatibility</h3>
                        <p className="text-sm text-muted-foreground">
                          JPEG is supported by every device, browser, and application, ensuring your images work everywhere without compatibility issues.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Faster Loading & Sharing</h3>
                        <p className="text-sm text-muted-foreground">
                          Smaller file sizes mean faster website loading, quicker email attachments, and improved user experience across all platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Palette className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Background Color Control</h3>
                        <p className="text-sm text-muted-foreground">
                          Customize background colors for transparent PNG areas, ensuring your images look perfect when transparency isn&apos;t needed.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <ImageIcon className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Optimal for Photographs</h3>
                        <p className="text-sm text-muted-foreground">
                          JPEG compression is specifically designed for photographic content, providing better results than PNG for complex images with gradients.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Storage Savings</h3>
                        <p className="text-sm text-muted-foreground">
                          Save significant disk space and reduce cloud storage costs with dramatically smaller file sizes that maintain visual quality.
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
                  <h2>How to Convert PNG to JPG - Step by Step Guide</h2>
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
                        <h3 className="font-semibold mb-2">Upload Your PNG Image</h3>
                        <p className="text-sm text-muted-foreground">
                          Click the upload area or drag and drop your PNG file. Our tool accepts files up to 10MB and handles transparent PNG images perfectly.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Configure Background & Quality</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose a background color for transparent areas (white recommended) and adjust quality settings (90% optimal for most photographs).
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
                        <h3 className="font-semibold mb-2">Start JPG Conversion</h3>
                        <p className="text-sm text-muted-foreground">
                          Click &quot;Convert to JPG&quot; to begin processing. Our server-side processor uses advanced JPEG compression algorithms for optimal results.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Download Optimized JPG</h3>
                        <p className="text-sm text-muted-foreground">
                          Download your converted JPEG file with massive file size reduction. Perfect for web use, sharing, and storage efficiency.
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
                  <h2>When to Convert PNG to JPG - Common Use Cases</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Photo Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce photo file sizes for faster uploading to social media, cloud storage, and sharing platforms while maintaining visual quality.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Website Images</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimize website images for faster loading times and better user experience when transparency is not required.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Email Attachments</h3>
                    <p className="text-sm text-muted-foreground">
                      Create smaller email attachments that send faster and don&apos;t exceed size limits while preserving image quality.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Mobile Apps</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce app size and improve performance with smaller image assets that load quickly on mobile devices.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Print Materials</h3>
                    <p className="text-sm text-muted-foreground">
                      Convert images for print when transparency isn&apos;t needed and you want maximum compatibility with printing software.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Backup & Archive</h3>
                    <p className="text-sm text-muted-foreground">
                      Save storage space in backup systems and photo archives with significantly smaller file sizes.
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
                  <h2>Understanding PNG to JPG Conversion</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">PNG vs JPEG: Format Differences</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    PNG uses lossless compression ideal for graphics with transparency, while JPEG uses lossy compression optimized for photographs.
                    JPEG achieves much smaller file sizes for complex images with many colors and gradients, making it perfect for photographic content
                    where transparency isn&apos;t needed.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Transparency Handling Process</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Since JPEG doesn&apos;t support transparency, our converter automatically replaces transparent areas with your chosen background color.
                    This process ensures smooth, professional-looking results while maintaining the overall image composition and visual appeal.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Compression and Quality Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Our tool uses advanced JPEG compression algorithms with customizable quality settings. At 90% quality, most images show no
                    visible quality loss while achieving 70-90% file size reduction. Lower quality settings provide even smaller files when
                    maximum compression is more important than perfect quality.
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
                    <AccordionTrigger>What happens to transparent areas in PNG when converting to JPG?</AccordionTrigger>
                    <AccordionContent>
                      JPEG format doesn&apos;t support transparency. Our converter automatically fills transparent areas with your chosen background color (white by default). You can customize this color before conversion to match your needs, ensuring the best visual result for your specific use case.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Will I lose image quality converting PNG to JPG?</AccordionTrigger>
                    <AccordionContent>
                      JPEG uses lossy compression, so there may be minimal quality loss. However, with 90% quality settings, the difference is barely noticeable while achieving 70-90% smaller file sizes. For photographs, JPEG often provides better compression than PNG without visible quality loss.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>When should I convert PNG to JPG format?</AccordionTrigger>
                    <AccordionContent>
                      Convert PNG to JPG for photographs, when you need smaller file sizes, faster uploads, universal compatibility, or when transparency is not needed. JPG is ideal for complex images with many colors, gradients, and photographic content.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How much smaller will my JPG file be compared to PNG?</AccordionTrigger>
                    <AccordionContent>
                      JPG files are typically 70-90% smaller than equivalent PNG files, especially for photographs and complex images. The exact size reduction depends on image content, but significant savings are common for most real-world images.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Is the PNG to JPG conversion process secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our conversion process is completely secure. All images are processed on encrypted servers and automatically deleted immediately after conversion. We never store, log, or access your images beyond the conversion process, ensuring complete privacy.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Can I choose different background colors for transparency?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our converter allows you to select any background color for transparent areas. While white is the default and most common choice, you can pick any color that matches your design needs or the intended use of the image.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>What quality setting should I use for PNG to JPG conversion?</AccordionTrigger>
                    <AccordionContent>
                      For most images, 90% quality provides the optimal balance between file size and visual quality. Use 95-100% for critical images where quality is paramount, or 70-85% when maximum file size reduction is more important than perfect quality.
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