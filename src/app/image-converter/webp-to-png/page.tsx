import { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "WebP to PNG Converter - Free Online WebP to PNG Conversion Tool",
  description: "Convert WebP images to PNG format online with preserved transparency and lossless quality. Perfect for graphics, logos, and when transparency is needed.",
  keywords: "webp to png converter, transparency preservation, lossless conversion, graphics converter, logo converter, image transparency",
  openGraph: {
    title: "Free WebP to PNG Converter - Preserve Transparency and Quality",
    description: "Convert WebP images to PNG format with preserved transparency and lossless quality for graphics and logos.",
    type: "website",
    url: "https://toolshub.com/image-converter/webp-to-png",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to PNG Converter - Lossless Quality",
    description: "Convert WebP images to PNG format with preserved transparency and perfect quality for graphics.",
  },
  alternates: {
    canonical: "https://toolshub.com/image-converter/webp-to-png",
  },
};

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
      
      <ImageConverter
        sourceFormat="webp"
        targetFormat="png"
        conversionKey="webp-to-png"
        title="WebP to PNG Converter - Preserve Transparency and Quality"
        description="Convert WebP images to PNG format with preserved transparency and lossless quality. Perfect for graphics, logos, and applications requiring universal compatibility with transparency support."
      />
    </>
  );
}