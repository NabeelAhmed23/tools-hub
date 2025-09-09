import { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "PNG to WebP Converter - Free Online PNG to WebP Conversion Tool",
  description: "Convert PNG images to WebP format online while preserving transparency. Get better compression than PNG with modern web standards. Free and secure conversion.",
  keywords: "png to webp converter, webp converter, transparency preservation, image optimization, modern web format, lossless conversion",
  openGraph: {
    title: "Free PNG to WebP Converter - Preserve Transparency with Better Compression",
    description: "Convert PNG images to WebP format while maintaining transparency and achieving better compression ratios.",
    type: "website",
    url: "https://toolshub.com/image-converter/png-to-webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to WebP Converter - Modern Web Optimization",
    description: "Convert PNG images to WebP format with transparency support and superior compression.",
  },
  alternates: {
    canonical: "https://toolshub.com/image-converter/png-to-webp",
  },
};

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
      
      <ImageConverter
        sourceFormat="png"
        targetFormat="webp"
        conversionKey="png-to-webp"
        title="PNG to WebP Converter - Preserve Transparency with Better Compression"
        description="Convert PNG images to modern WebP format while preserving transparency and achieving superior compression. Perfect for graphics, logos, and web optimization with both lossless and lossy options available."
      />
    </>
  );
}