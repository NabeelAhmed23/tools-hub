

export const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "WebApplication"],
  name: "Professional Favicon Generator",
  description:
    "Generate complete favicon sets from any image with all standard sizes, ICO files, web manifest, and HTML snippet. Server-side Sharp processing for optimal quality and browser compatibility.",
  url: "https://toolshub.com/favicon-generator",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web Browser",
  browserRequirements: "HTML5, JavaScript enabled",
  softwareVersion: "2.0",
  author: {
    "@type": "Organization",
    name: "ToolsHub",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Generate 8 PNG favicon sizes (16x16 to 512x512 pixels)",
    "Create professional multi-resolution ICO files",
    "Generate Apple Touch Icons for iOS devices",
    "Create Android Chrome icons for PWA applications",
    "Generate PWA web manifest file",
    "Provide ready-to-use HTML implementation code",
    "Support custom background colors for transparency",
    "Server-side Sharp processing for optimal quality",
    "Instant ZIP download package",
    "Privacy-focused processing without data storage",
  ],
  screenshot: "https://toolshub.com/og/favicon-generator.jpg",
};

export const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create Professional Favicons",
  description:
    "Complete step-by-step guide to create professional favicon sets for websites and web applications",
  totalTime: "PT5M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  tool: [
    {
      "@type": "HowToTool",
      name: "Professional Favicon Generator",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Prepare Source Image",
      text: "Upload a high-quality square image (PNG, JPEG, WebP, or GIF up to 10MB). Ensure your logo is clearly visible at small sizes with good contrast.",
    },
    {
      "@type": "HowToStep",
      name: "Configure Settings",
      text: "Set your application name for the PWA manifest and choose a background color for transparent images.",
    },
    {
      "@type": "HowToStep",
      name: "Generate Favicon Set",
      text: "Click 'Generate Complete Favicon Set' to create all favicon sizes using server-side Sharp processing.",
    },
    {
      "@type": "HowToStep",
      name: "Download and Install",
      text: "Download the ZIP package containing all favicon files, web manifest, and HTML implementation code. Extract and upload files to your website root directory.",
    },
  ],
};

export const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What file formats does the favicon generator support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our favicon generator supports JPEG, PNG, WebP, and GIF input formats up to 10MB. The output includes optimized PNG files for each size and a professional ICO file for maximum browser compatibility.",
      },
    },
    {
      "@type": "Question",
      name: "Why do I need multiple favicon sizes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Different devices and platforms require different favicon sizes. iOS uses 180×180 for Apple Touch Icons, Android uses 192×192 and 512×512 for PWA applications, while desktop browsers typically use 16×16 and 32×32 pixels. Having all sizes ensures perfect display across all devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is the favicon generation process secure and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! All favicon generation happens on secure servers with immediate processing. Your images are processed in real-time without being stored, cached, or accessed beyond the conversion process, ensuring complete privacy.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the favicon ZIP package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ZIP package includes 8 PNG favicon sizes, a multi-resolution ICO file, Apple Touch Icon, Android Chrome icons, PWA web manifest file, and a ready-to-use HTML implementation snippet with all necessary meta tags.",
      },
    },
  ],
};
