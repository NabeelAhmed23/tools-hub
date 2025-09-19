import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.the-tools-hub.com";

  const tools = [
    "password-generator",
    "password-strength-checker",
    "hash-generator",
    "base64",
    "url-encode-decode",
    "uuid-generator",
    "qr-generator",
    "my-ip",
    "bmi-calculator",
    "age-calculator",
    "loan-calculator",
    "currency-converter",
    "unit-converter",
    "percentage-calculator",
    "date-difference",
    "gpa-calculator",
    "color-picker",
    "image-compressor",
    "favicon-generator",
    "gradient-generator",
    "emoji-picker",
    "image-converter/jpg-to-png",
    "image-converter/jpg-to-webp",
    "image-converter/png-to-jpg",
    "image-converter/png-to-webp",
    "image-converter/webp-to-jpg",
    "image-converter/webp-to-png",
    "about",
    "privacy-policy",
    "terms-of-service",
    "cookie-policy",
    "contact",
  ];

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...toolPages,
  ];
}
