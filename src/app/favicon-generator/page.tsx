"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Upload, Download, Copy } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
import { faviconSizes, generateFaviconFromImage, generateWebManifest, generateHtmlSnippet } from "@/lib/favicon-utils";

interface GeneratedFavicon {
  size: number;
  name: string;
  blob: Blob;
  url: string;
}

export default function FaviconGenerator() {
  const [sourceImage, setSourceImage] = useState<File | null>(null);
  const [sourceImageUrl, setSourceImageUrl] = useState<string>("");
  const [appName, setAppName] = useState("My App");
  const [generatedFavicons, setGeneratedFavicons] = useState<GeneratedFavicon[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    if (sourceImageUrl) {
      URL.revokeObjectURL(sourceImageUrl);
    }

    setSourceImage(file);
    setSourceImageUrl(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const generateAllFavicons = async () => {
    if (!sourceImage) return;

    setIsGenerating(true);

    try {
      // Clean up previous URLs
      generatedFavicons.forEach(favicon => URL.revokeObjectURL(favicon.url));

      const newFavicons: GeneratedFavicon[] = [];

      for (const faviconConfig of faviconSizes) {
        try {
          const blob = await generateFaviconFromImage(sourceImage, faviconConfig.size);
          const url = URL.createObjectURL(blob);

          newFavicons.push({
            size: faviconConfig.size,
            name: faviconConfig.name,
            blob,
            url
          });
        } catch (error) {
          console.error(`Error generating ${faviconConfig.size}x${faviconConfig.size} favicon:`, error);
        }
      }

      setGeneratedFavicons(newFavicons);
    } catch (error) {
      console.error("Error generating favicons:", error);
      alert("Error generating favicons. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadIndividualFavicon = (favicon: GeneratedFavicon) => {
    const link = document.createElement("a");
    link.href = favicon.url;
    link.download = favicon.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllAsZip = async () => {
    if (generatedFavicons.length === 0) return;

    try {
      // Dynamic import of JSZip to reduce bundle size
      const JSZip = (await import("jszip")).default;
      const { saveAs } = await import("file-saver");

      const zip = new JSZip();

      // Add favicon files
      for (const favicon of generatedFavicons) {
        zip.file(favicon.name, favicon.blob);
      }

      // Add web manifest
      const manifest = generateWebManifest(appName);
      zip.file("site.webmanifest", manifest);

      // Add HTML snippet as reference
      const htmlSnippet = generateHtmlSnippet();
      zip.file("favicon-html-snippet.txt", htmlSnippet);

      // Generate and download ZIP
      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "favicons.zip");

    } catch (error) {
      console.error("Error creating ZIP:", error);
      alert("Error creating ZIP file. You can download individual files instead.");
    }
  };

  const htmlSnippet = generateHtmlSnippet();

  const copyHtmlSnippet = async () => {
    try {
      await navigator.clipboard.writeText(htmlSnippet);
      alert("HTML snippet copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy HTML snippet:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Favicon Generator",
            description: "Generate complete favicon sets from any image with all standard sizes and HTML snippet",
            url: "https://toolshub.com/favicon-generator",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web Browser",
            features: [
              "Multiple favicon sizes",
              "ZIP download package",
              "HTML snippet generation",
              "Apple Touch Icon support",
              "Web manifest creation",
            ],
          }),
        }}
      />

      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Favicon Generator - Create Complete Favicon Sets
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate complete favicon sets from any image with all standard sizes and HTML snippet included. Perfect for websites and web apps with Apple Touch Icon support and web manifest generation.
          </p>
        </div>

        {/* File Upload Area */}
        {!sourceImage && (
          <Card className="mb-8">
            <CardContent className="p-8">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragOver
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/25"
                }`}
                onDrop={handleDrop}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
              >
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload your image</h3>
                <p className="text-muted-foreground mb-4">
                  Square images work best. We&apos;ll center-crop rectangular images.
                </p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  Choose Image
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                  className="hidden"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Source Image & Settings */}
        {sourceImage && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Source Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-full h-64 bg-muted rounded flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sourceImageUrl}
                    alt="Source image for favicon generation"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  {sourceImage.name} ({Math.round(sourceImage.size / 1024)} KB)
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSourceImage(null);
                    setSourceImageUrl("");
                    setGeneratedFavicons([]);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                >
                  Change Image
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Configure your favicon package
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">App Name (for manifest)</label>
                  <Input
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="My Awesome App"
                  />
                </div>

                <Button
                  onClick={generateAllFavicons}
                  disabled={isGenerating}
                  className="w-full"
                >
                  {isGenerating ? "Generating Favicons..." : "Generate All Favicons"}
                </Button>

                {generatedFavicons.length > 0 && (
                  <Button
                    onClick={downloadAllAsZip}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download ZIP Package
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Generated Favicons Grid */}
        {generatedFavicons.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Generated Favicons</CardTitle>
              <CardDescription>
                All favicon sizes ready for download
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {generatedFavicons.map((favicon, index) => (
                  <div key={index} className="text-center p-4 border border-border rounded">
                    <div
                      className="mx-auto mb-2 bg-muted rounded flex items-center justify-center"
                      style={{
                        width: Math.min(favicon.size, 64),
                        height: Math.min(favicon.size, 64)
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={favicon.url}
                        alt={`Generated favicon ${favicon.size}x${favicon.size} pixels`}
                        className="rounded"
                        style={{
                          width: Math.min(favicon.size, 64),
                          height: Math.min(favicon.size, 64)
                        }}
                      />
                    </div>
                    <div className="text-sm font-medium">{favicon.size}×{favicon.size}</div>
                    <div className="text-xs text-muted-foreground mb-2">{favicon.name}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => downloadIndividualFavicon(favicon)}
                      className="w-full"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* HTML Snippet */}
        {generatedFavicons.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>HTML Code Snippet</CardTitle>
              <CardDescription>
                Add this code to the &lt;head&gt; section of your HTML
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Textarea
                  value={htmlSnippet}
                  readOnly
                  rows={12}
                  className="font-mono text-sm resize-none"
                />
                <Button
                  onClick={copyHtmlSnippet}
                  className="absolute top-2 right-2"
                  size="sm"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Alert className="mb-8">
          <Star className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Note:</strong> All favicon generation happens in your browser.
            Your images are not uploaded to any server and remain completely private.
          </AlertDescription>
        </Alert>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}