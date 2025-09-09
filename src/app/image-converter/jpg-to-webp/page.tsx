import { Metadata } from "next";
import ImageConverter from "@/components/ImageConverter";

export const metadata: Metadata = {
  title: "JPG to WebP Converter - Free Online JPEG to WebP Conversion Tool",
  description: "Convert JPG/JPEG images to modern WebP format online. Get 25-35% smaller file sizes with better compression and faster web loading. Free and secure conversion.",
  keywords: "jpg to webp converter, jpeg to webp, webp converter, image optimization, file size reduction, web performance",
  openGraph: {
    title: "Free JPG to WebP Converter - Reduce File Size by 30%",
    description: "Convert JPEG images to WebP format for better compression and faster web loading. Professional quality results.",
    type: "website",
    url: "https://toolshub.com/image-converter/jpg-to-webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to WebP Converter - Optimize Images for Web",
    description: "Convert JPEG images to WebP format and reduce file sizes by up to 35% while maintaining quality.",
  },
  alternates: {
    canonical: "https://toolshub.com/image-converter/jpg-to-webp",
  },
};

export default function JpgToWebpConverter() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "name": "JPG to WebP Converter",
    "description": "Convert JPEG images to modern WebP format for better compression and faster web loading. Reduce file sizes by 25-35% while maintaining image quality.",
    "url": "https://toolshub.com/image-converter/jpg-to-webp",
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
      "25-35% smaller file sizes",
      "Better compression algorithm",
      "Faster web page loading",
      "Modern browser support",
      "Quality preservation options"
    ]
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert JPG to WebP",
    "description": "Convert JPEG images to WebP format for optimized web performance",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload JPEG Image",
        "text": "Select or drag your JPG/JPEG image file (up to 10MB supported)"
      },
      {
        "@type": "HowToStep",
        "name": "Adjust Quality Settings",
        "text": "Set compression quality (85% recommended for optimal balance)"
      },
      {
        "@type": "HowToStep",
        "name": "Convert to WebP",
        "text": "Click convert button to transform your image to WebP format"
      },
      {
        "@type": "HowToStep",
        "name": "Download Optimized Image",
        "text": "Save your WebP image with significantly reduced file size"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the benefits of WebP over JPG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP provides 25-35% better compression than JPG with similar quality, faster web loading times, modern browser support, and both lossy and lossless compression options."
        }
      },
      {
        "@type": "Question",
        "name": "Are WebP images supported by all browsers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "WebP is supported by all modern browsers including Chrome, Firefox, Safari, and Edge. For older browsers, you can provide JPG fallbacks."
        }
      },
      {
        "@type": "Question",
        "name": "What quality setting should I use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most images, 85% quality provides the best balance between file size and image quality. Use higher quality (90-95%) for important images or lower (70-80%) for maximum compression."
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
        targetFormat="webp"
        conversionKey="jpg-to-webp"
        title="JPG to WebP Converter - Optimize Images for Web"
        description="Convert JPEG images to modern WebP format for better compression and faster loading. Get 25-35% smaller file sizes while maintaining excellent image quality. Perfect for web optimization and performance improvement."
      />
    </>
  );
}