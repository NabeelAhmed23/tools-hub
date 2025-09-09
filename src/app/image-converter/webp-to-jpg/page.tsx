import { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "WebP to JPG Converter - Free Online WebP to JPEG Conversion Tool",
  description: "Convert WebP images to JPG/JPEG format online for maximum compatibility across all devices and platforms. Perfect for sharing, printing, and universal support.",
  keywords: "webp to jpg converter, webp to jpeg, image converter, universal compatibility, device support, image conversion",
  openGraph: {
    title: "Free WebP to JPG Converter - Universal Device Compatibility",
    description: "Convert WebP images to JPEG format for maximum compatibility across all devices, browsers, and platforms.",
    type: "website",
    url: "https://toolshub.com/image-converter/webp-to-jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to JPG Converter - Universal Compatibility",
    description: "Convert WebP images to JPEG format for compatibility with all devices and platforms.",
  },
  alternates: {
    canonical: "https://toolshub.com/image-converter/webp-to-jpg",
  },
};

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
      
      <ImageConverter
        sourceFormat="webp"
        targetFormat="jpeg"
        conversionKey="webp-to-jpg"
        title="WebP to JPG Converter - Universal Device Compatibility"
        description="Convert WebP images to JPEG format for maximum compatibility across all devices, browsers, and platforms. Perfect for sharing, printing, and when universal support is needed. Choose background colors for transparent areas."
      />
    </>
  );
}