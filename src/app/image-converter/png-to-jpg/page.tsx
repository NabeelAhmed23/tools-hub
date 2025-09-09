import { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "PNG to JPG Converter - Free Online PNG to JPEG Conversion Tool",
  description: "Convert PNG images to JPG/JPEG format online for free. Reduce file sizes significantly while maintaining quality. Perfect for sharing, uploading, and universal compatibility.",
  keywords: "png to jpg converter, png to jpeg, image converter, file size reduction, image compression, universal compatibility",
  openGraph: {
    title: "Free PNG to JPG Converter - Reduce File Size by 70%",
    description: "Convert PNG images to JPEG format for smaller file sizes and universal compatibility. Fast and secure conversion.",
    type: "website",
    url: "https://toolshub.com/image-converter/png-to-jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to JPG Converter - Optimize File Size",
    description: "Convert PNG images to JPEG format and significantly reduce file sizes for faster sharing and uploading.",
  },
  alternates: {
    canonical: "https://toolshub.com/image-converter/png-to-jpg",
  },
};

export default function PngToJpgConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "PNG to JPG Converter",
    "description": "Convert PNG images to JPEG format for significantly smaller file sizes and universal compatibility across all devices and platforms.",
    "url": "https://toolshub.com/image-converter/png-to-jpg",
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
      "Significantly smaller file sizes",
      "Universal device compatibility",
      "Background color selection",
      "Quality optimization",
      "Faster upload and sharing"
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert PNG to JPG",
    "description": "Convert PNG images to JPEG format for smaller file sizes and better compatibility",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload PNG Image",
        "text": "Select or drag your PNG image file (transparent images supported)"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Background Color",
        "text": "Select background color for transparent areas (white recommended)"
      },
      {
        "@type": "HowToStep",
        "name": "Set Quality Level",
        "text": "Adjust JPEG quality (90% recommended for best balance)"
      },
      {
        "@type": "HowToStep",
        "name": "Download JPEG",
        "text": "Get your converted JPEG file with optimized file size"
      }
    ]
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
          "text": "JPEG format doesn't support transparency. Our converter automatically fills transparent areas with your chosen background color (white by default). You can customize this color before conversion."
        }
      },
      {
        "@type": "Question",
        "name": "Will I lose image quality converting PNG to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JPEG uses lossy compression, so there may be minimal quality loss. However, with 90% quality settings, the difference is barely noticeable while achieving much smaller file sizes."
        }
      },
      {
        "@type": "Question",
        "name": "When should I convert PNG to JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Convert PNG to JPG for photographs, when you need smaller file sizes, faster uploads, universal compatibility, or when transparency is not needed."
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
        targetFormat="jpeg"
        conversionKey="png-to-jpg"
        title="PNG to JPG Converter - Reduce File Size by 70%"
        description="Convert PNG images to JPEG format for significantly smaller file sizes and universal compatibility. Perfect for photographs, sharing, and when transparency is not needed. Choose background colors for transparent areas."
      />
    </>
  );
}