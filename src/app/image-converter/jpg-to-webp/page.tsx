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
  Globe,
  Gauge,
} from "lucide-react";
import ImageConverter from "@/components/ImageConverter";


export default function JpgToWebpConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "JPG to WebP Converter",
    "description": "Convert JPEG images to WebP format online with up to 80% file size reduction and advanced compression. Free, professional image optimization tool with secure processing.",
    "url": "https://www.the-tools-hub.com/image-converter/jpg-to-webp",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Convert JPEG to WebP format",
      "Up to 80% file size reduction",
      "Advanced compression algorithm",
      "Faster web page loading",
      "Modern browser support",
      "Quality preservation options",
      "Privacy-focused server-side processing",
      "Professional web optimization"
    ],
    "screenshot": "https://www.the-tools-hub.com/og/jpg-to-webp-converter.jpg"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert JPG to WebP",
    "description": "Complete step-by-step guide to convert JPEG images to WebP format online with advanced compression",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Your JPEG Image",
        "text": "Select or drag and drop your JPG/JPEG image file (maximum 10MB). The tool accepts both .jpg and .jpeg file extensions.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-webp#upload"
      },
      {
        "@type": "HowToStep",
        "name": "Configure Compression Settings",
        "text": "Adjust quality settings (10-100%). For WebP, 85% quality provides optimal balance between file size and image quality.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-webp#settings"
      },
      {
        "@type": "HowToStep",
        "name": "Start WebP Conversion",
        "text": "Click the 'Convert to WebP' button to process your image. Advanced WebP compression algorithms reduce file size significantly.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-webp#convert"
      },
      {
        "@type": "HowToStep",
        "name": "Download Optimized WebP",
        "text": "Download your converted WebP image with up to 80% file size reduction. Perfect for web optimization and faster loading.",
        "url": "https://www.the-tools-hub.com/image-converter/jpg-to-webp#download"
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
        "name": "What are the benefits of WebP over JPG format?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP provides 25-80% better compression than JPG with similar or better quality, faster web loading times, universal modern browser support, and both lossy and lossless compression options. WebP also supports animation and transparency, making it more versatile than JPEG."
        }
      },
      {
        "@type": "Question",
        "name": "Are WebP images supported by all browsers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP is supported by all modern browsers including Chrome, Firefox, Safari (14+), and Edge. Browser support is now over 95% globally. For maximum compatibility, you can implement fallback strategies or use picture elements with multiple format options."
        }
      },
      {
        "@type": "Question",
        "name": "What quality setting should I use for WebP conversion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most images, 85% quality provides the optimal balance between file size and image quality. Use higher quality (90-95%) for critical images, portraits, or detailed graphics. Use lower quality (70-80%) for maximum compression when file size is most important."
        }
      },
      {
        "@type": "Question",
        "name": "How much smaller are WebP files compared to JPEG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP files are typically 25-80% smaller than equivalent JPEG files, depending on the image content and quality settings. The advanced compression algorithm achieves better results especially with images containing gradients, textures, and complex details."
        }
      },
      {
        "@type": "Question",
        "name": "Is the JPG to WebP conversion process secure?",
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
            sourceFormat="jpg"
            targetFormat="webp"
            conversionKey="jpg-to-webp"
            title="JPG to WebP Converter - Optimize Images for Web"
            description="Convert JPEG images to modern WebP format for better compression and faster loading. Get up to 80% smaller file sizes while maintaining excellent image quality. Perfect for web optimization and performance improvement."
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
                  <h2>Benefits of Converting JPG to WebP</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Gauge className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Superior Compression</h3>
                        <p className="text-sm text-muted-foreground">
                          WebP achieves 25-80% better compression than JPEG with the same visual quality, using advanced lossy and lossless compression algorithms.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Faster Web Loading</h3>
                        <p className="text-sm text-muted-foreground">
                          Smaller file sizes mean faster page loading times, improved user experience, and better Core Web Vitals scores for SEO.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Universal Browser Support</h3>
                        <p className="text-sm text-muted-foreground">
                          WebP is supported by 95%+ of browsers including Chrome, Firefox, Safari, and Edge, making it safe for modern web development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <ImageIcon className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Modern Format Features</h3>
                        <p className="text-sm text-muted-foreground">
                          WebP supports both transparency and animation, combining the best features of PNG and GIF in a single, efficient format.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">SEO Performance</h3>
                        <p className="text-sm text-muted-foreground">
                          Faster loading images improve page speed scores, contributing to better search engine rankings and user engagement metrics.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <h3 className="font-semibold text-sm">Bandwidth Savings</h3>
                        <p className="text-sm text-muted-foreground">
                          Reduced file sizes save bandwidth costs for websites and improve experience for users on slow or limited internet connections.
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
                  <h2>How to Convert JPG to WebP - Step by Step Guide</h2>
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
                        <h3 className="font-semibold mb-2">Configure Compression Settings</h3>
                        <p className="text-sm text-muted-foreground">
                          Adjust the quality slider (10-100%) based on your needs. For WebP, 85% quality provides optimal balance between file size and image quality for most web use cases.
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
                        <h3 className="font-semibold mb-2">Start WebP Conversion</h3>
                        <p className="text-sm text-muted-foreground">
                          Click &quot;Convert to WebP&quot; to begin processing. Our server-side processor uses Google&apos;s advanced WebP algorithms to achieve maximum compression while preserving image quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Download Optimized WebP</h3>
                        <p className="text-sm text-muted-foreground">
                          Download your converted WebP image with significant file size reduction. The optimized image is perfect for web use and faster page loading.
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
                  <h2>When to Convert JPG to WebP - Common Use Cases</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Website Optimization</h3>
                    <p className="text-sm text-muted-foreground">
                      Convert website images to WebP for faster loading times, improved Core Web Vitals, and better search engine rankings.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">E-commerce Products</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimize product images to reduce bandwidth costs and provide faster browsing experience for online shoppers.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Mobile Applications</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce app size and improve performance on mobile devices where bandwidth and storage are limited.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Blog Content</h3>
                    <p className="text-sm text-muted-foreground">
                      Speed up blog loading times and improve reader experience with smaller image files that maintain visual quality.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Social Media</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimize images for social media platforms that support WebP, ensuring faster uploads and better performance.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Progressive Web Apps</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhance PWA performance with smaller image assets that load quickly on any network condition.
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
                  <h2>Understanding JPG to WebP Conversion</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">WebP Technology Overview</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    WebP is a modern image format developed by Google that provides superior compression compared to JPEG. It uses advanced
                    predictive coding and variable block size segmentation to achieve better compression ratios while maintaining visual quality.
                    WebP supports both lossy compression (like JPEG) and lossless compression (like PNG).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Compression Algorithm Details</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our conversion tool uses Google&apos;s libwebp library to encode images with optimal settings. The VP8 codec used in WebP
                    provides better prediction models and entropy coding compared to JPEG&apos;s DCT-based compression, resulting in significant
                    file size reductions without visible quality loss.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Browser Support and Compatibility</h3>
                  <p className="text-sm text-muted-foreground">
                    WebP enjoys excellent browser support with over 95% global coverage. All modern browsers including Chrome (23+),
                    Firefox (65+), Safari (14+), and Edge (18+) support WebP. For legacy browser support, implement fallback strategies
                    using the HTML picture element or server-side user agent detection.
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
                    <AccordionTrigger>What are the benefits of WebP over JPG format?</AccordionTrigger>
                    <AccordionContent>
                      WebP provides 25-80% better compression than JPG with similar or better quality, faster web loading times, universal modern browser support, and both lossy and lossless compression options. WebP also supports animation and transparency, making it more versatile than JPEG.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Are WebP images supported by all browsers?</AccordionTrigger>
                    <AccordionContent>
                      WebP is supported by all modern browsers including Chrome, Firefox, Safari (14+), and Edge. Browser support is now over 95% globally. For maximum compatibility, you can implement fallback strategies or use picture elements with multiple format options.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What quality setting should I use for WebP conversion?</AccordionTrigger>
                    <AccordionContent>
                      For most images, 85% quality provides the optimal balance between file size and image quality. Use higher quality (90-95%) for critical images, portraits, or detailed graphics. Use lower quality (70-80%) for maximum compression when file size is most important.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How much smaller are WebP files compared to JPEG?</AccordionTrigger>
                    <AccordionContent>
                      WebP files are typically 25-80% smaller than equivalent JPEG files, depending on the image content and quality settings. The advanced compression algorithm achieves better results especially with images containing gradients, textures, and complex details.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Is the JPG to WebP conversion process secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our conversion process is completely secure. All images are processed on encrypted servers and automatically deleted immediately after conversion. We never store, log, or access your images beyond the conversion process, ensuring complete privacy.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>Can I use WebP images for print materials?</AccordionTrigger>
                    <AccordionContent>
                      WebP is primarily designed for web use. While some modern design software supports WebP, it&apos;s recommended to use PNG or TIFF formats for print materials to ensure compatibility with professional printing workflows and color management systems.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>What happens to image metadata during conversion?</AccordionTrigger>
                    <AccordionContent>
                      WebP supports basic metadata including color profiles and EXIF data. Our converter preserves essential color information but removes potentially sensitive metadata like GPS coordinates and camera details to protect your privacy.
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