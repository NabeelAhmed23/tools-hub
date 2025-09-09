import { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "JPG to PNG Converter - Free Online JPEG to PNG Conversion Tool",
  description: "Convert JPG/JPEG images to PNG format online for free. Add transparency support, maintain image quality, and get lossless conversion. No registration required - your files stay private.",
  keywords: "jpg to png converter, jpeg to png, image converter, format conversion, transparency, lossless conversion",
  openGraph: {
    title: "Free JPG to PNG Converter - Online Image Format Conversion",
    description: "Convert JPEG images to PNG format with transparency support. Fast, free, and secure conversion tool.",
    type: "website",
    url: "https://toolshub.com/image-converter/jpg-to-png",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to PNG Converter - Free Online Tool",
    description: "Convert JPEG images to PNG format with transparency support and lossless quality.",
  },
  alternates: {
    canonical: "https://toolshub.com/image-converter/jpg-to-png",
  },
};

export default function JpgToPngConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "JPG to PNG Converter",
    "description": "Convert JPEG images to PNG format online with transparency support and lossless quality. Free, fast, and secure image format conversion tool.",
    "url": "https://toolshub.com/image-converter/jpg-to-png",
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
      "Lossless image quality",
      "Batch conversion support",
      "No file upload limits",
      "Privacy-focused processing"
    ],
    "screenshot": "https://toolshub.com/og/jpg-to-png-converter.jpg"
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert JPG to PNG",
    "description": "Step-by-step guide to convert JPEG images to PNG format online",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Image",
        "text": "Select or drag and drop your JPG/JPEG image file (max 10MB)"
      },
      {
        "@type": "HowToStep", 
        "name": "Configure Settings",
        "text": "Adjust quality settings and conversion options as needed"
      },
      {
        "@type": "HowToStep",
        "name": "Convert Image", 
        "text": "Click the 'Convert to PNG' button to start the conversion process"
      },
      {
        "@type": "HowToStep",
        "name": "Download Result",
        "text": "Download your converted PNG image with transparency support"
      }
    ],
    "totalTime": "PT1M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD", 
      "value": "0"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why convert JPG to PNG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Converting JPG to PNG adds transparency support, provides lossless quality, and is better for images with text, graphics, or when you need transparent backgrounds. PNG format preserves all image data without compression artifacts."
        }
      },
      {
        "@type": "Question", 
        "name": "Will the PNG file be larger than the original JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PNG files are typically larger than JPG files because PNG uses lossless compression while JPG uses lossy compression. However, PNG provides perfect image quality and transparency support that JPG cannot offer."
        }
      },
      {
        "@type": "Question",
        "name": "Is the conversion process secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all conversions are processed on secure servers and files are immediately deleted after conversion. We never store or access your images beyond the conversion process, ensuring complete privacy."
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
      
      <ImageConverter
        sourceFormat="jpg"
        targetFormat="png"
        conversionKey="jpg-to-png"
        title="JPG to PNG Converter - Add Transparency Support"
        description="Convert JPEG images to PNG format online for free. Add transparency channel support, maintain lossless quality, and get perfect results for graphics and logos. Your files stay private with server-side processing."
      />
    </>
  );
}