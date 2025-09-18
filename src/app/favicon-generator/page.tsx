"use client";

import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Upload,
  Download,
  Copy,
  CheckCircle,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
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

import { jsonLdApp, jsonLdFAQ, jsonLdHowTo } from "./schema";

export default function FaviconGenerator() {
  const [sourceImage, setSourceImage] = useState<File | null>(null);
  const [sourceImageUrl, setSourceImageUrl] = useState<string>("");
  const [appName, setAppName] = useState("My App");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [isGenerating, setIsGenerating] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string>("");
  const [zipBlob, setZipBlob] = useState<Blob | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10MB");
      return;
    }

    if (sourceImageUrl) {
      URL.revokeObjectURL(sourceImageUrl);
    }

    setSourceImage(file);
    setSourceImageUrl(URL.createObjectURL(file));
    setError("");
    setZipBlob(null);
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
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", sourceImage);
      formData.append("appName", appName);
      formData.append("backgroundColor", backgroundColor);

      const response = await fetch("/api/tools/favicon/make", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate favicons");
      }

      const blob = await response.blob();
      setZipBlob(blob);
    } catch (error) {
      console.error("Error generating favicons:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Error generating favicons. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadZip = () => {
    if (!zipBlob || !sourceImage) return;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(zipBlob);
    link.download = `${appName.replace(/[^a-zA-Z0-9]/g, "_")}_favicons.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  const htmlSnippet = useMemo(
    () => `<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<!-- Optional: Theme color for mobile browsers -->
<meta name="theme-color" content="${backgroundColor}">

<!-- Optional: Microsoft tile -->
<meta name="msapplication-TileImage" content="/android-chrome-192x192.png">
<meta name="msapplication-TileColor" content="${backgroundColor}">`,
    [backgroundColor]
  );

  const copyHtmlSnippet = async () => {
    try {
      await navigator.clipboard.writeText(htmlSnippet);
    } catch (error) {
      console.error("Failed to copy HTML snippet:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Favicon Generator - Complete Favicon Sets
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Generate professional favicon sets from any image with server-side
            processing for optimal quality. Get all standard sizes, ICO files,
            web manifest, and ready-to-use HTML code in one download package.
          </p>
        </div>

        {/* Benefits Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Why Use Our Professional Favicon Generator?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Complete Package</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 8 PNG sizes from 16x16 to 512x512 pixels</li>
                  <li>• Professional ICO file with multiple resolutions</li>
                  <li>• Apple Touch Icon for iOS devices</li>
                  <li>• Android Chrome icons for PWAs</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Professional Quality</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Server-side Sharp processing for best quality</li>
                  <li>• Optimized PNG compression</li>
                  <li>• Perfect scaling algorithms</li>
                  <li>• Custom background color support</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Ready to Use</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• PWA manifest file included</li>
                  <li>• Complete HTML snippet provided</li>
                  <li>• Browser compatibility ensured</li>
                  <li>• SEO optimization included</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Privacy & Speed</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Server-side processing for speed</li>
                  <li>• No data stored or tracked</li>
                  <li>• Instant ZIP download</li>
                  <li>• Works with all image formats</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Error Display */}
        {error && (
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

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
                <h3 className="text-lg font-medium mb-2">
                  Upload your logo or image
                </h3>
                <p className="text-muted-foreground mb-4">
                  Square images work best (PNG, JPEG, WebP, GIF up to 10MB).
                  We&apos;ll automatically center-crop rectangular images for
                  optimal favicon display.
                </p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  Choose Image File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.target.files && handleFileSelect(e.target.files[0])
                  }
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
                <CardDescription>
                  Preview of your uploaded image
                </CardDescription>
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
                    setZipBlob(null);
                    setError("");
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                >
                  Change Image
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Favicon Settings</CardTitle>
                <CardDescription>
                  Configure your favicon package settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    App Name (for PWA manifest)
                  </label>
                  <Input
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    placeholder="My Awesome App"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Background Color
                  </label>
                  <div className="flex items-center gap-2">
                    <Input
                      type="color"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      className="w-12 h-10 p-1 border rounded cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={backgroundColor}
                      onChange={(e) => setBackgroundColor(e.target.value)}
                      placeholder="#ffffff"
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Used when converting transparent images to formats that
                    don&apos;t support transparency
                  </p>
                </div>

                <Button
                  onClick={generateAllFavicons}
                  disabled={isGenerating}
                  className="w-full"
                >
                  {isGenerating
                    ? "Generating Professional Favicons..."
                    : "Generate Complete Favicon Set"}
                </Button>

                {zipBlob && (
                  <Button
                    onClick={downloadZip}
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download ZIP Package ({Math.round(zipBlob.size / 1024)} KB)
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* What's Included Section */}
        {zipBlob && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>✅ Your Favicon Package is Ready!</CardTitle>
              <CardDescription>
                Your ZIP file contains all the files you need for professional
                favicon implementation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Image Files Included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <strong>favicon.ico</strong> - Multi-resolution ICO file
                    </li>
                    <li>
                      • <strong>favicon-16x16.png</strong> - Standard browser
                      favicon
                    </li>
                    <li>
                      • <strong>favicon-32x32.png</strong> - High-res browser
                      favicon
                    </li>
                    <li>
                      • <strong>favicon-48x48.png</strong> - Windows taskbar
                      icon
                    </li>
                    <li>
                      • <strong>favicon-64x64.png</strong> - High-density
                      display
                    </li>
                    <li>
                      • <strong>favicon-96x96.png</strong> - Desktop shortcut
                      icon
                    </li>
                    <li>
                      • <strong>apple-touch-icon.png</strong> - iOS/Safari icon
                      (180×180)
                    </li>
                    <li>
                      • <strong>android-chrome-192x192.png</strong> - Android
                      icon
                    </li>
                    <li>
                      • <strong>android-chrome-512x512.png</strong> - PWA splash
                      icon
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Configuration Files:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <strong>site.webmanifest</strong> - PWA manifest file
                    </li>
                    <li>
                      • <strong>favicon-html-snippet.txt</strong> - Ready HTML
                      code
                    </li>
                  </ul>
                  <h4 className="font-medium mb-3 mt-4">Next Steps:</h4>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    <li>1. Extract the ZIP file</li>
                    <li>2. Upload all files to your website root</li>
                    <li>3. Copy the HTML code to your &lt;head&gt; section</li>
                    <li>4. Test your favicon across different devices</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* HTML Snippet */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>HTML Implementation Code</CardTitle>
            <CardDescription>
              Add this code to the &lt;head&gt; section of your HTML pages
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
            <Alert>
              <Star className="h-4 w-4" />
              <AlertDescription>
                <strong>Pro Tip:</strong> Place favicon files in your
                website&apos;s root directory (/favicon.ico,
                /apple-touch-icon.png, etc.) for maximum browser compatibility.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* How-To Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Create Professional Favicons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Step 1: Prepare Your Image</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • Use a square image for best results (512×512px ideal)
                  </li>
                  <li>• Ensure your logo is clearly visible at small sizes</li>
                  <li>• Use high contrast colors for better visibility</li>
                  <li>
                    • Avoid fine details that won&apos;t show at 16×16 pixels
                  </li>
                </ul>

                <h4 className="font-medium mb-3 mt-4">
                  Step 2: Upload & Configure
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Drag and drop or click to upload your image</li>
                  <li>• Set your app name for the PWA manifest</li>
                  <li>• Choose background color for transparent images</li>
                  <li>• Click &quot;Generate Complete Favicon Set&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Step 3: Download & Install</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Download the complete ZIP package</li>
                  <li>
                    • Extract all files to your website&apos;s root directory
                  </li>
                  <li>• Copy the HTML snippet to your &lt;head&gt; section</li>
                  <li>• Test on different devices and browsers</li>
                </ul>

                <h4 className="font-medium mb-3 mt-4">Best Practices</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Test your favicon at actual browser size (16×16px)</li>
                  <li>• Use simple, recognizable shapes and symbols</li>
                  <li>• Ensure sufficient contrast with browser backgrounds</li>
                  <li>• Update favicons when you rebrand your website</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">
                  What file formats are supported?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our favicon generator supports JPEG, PNG, WebP, and GIF input
                  formats up to 10MB. The output includes optimized PNG files
                  and a professional ICO file for maximum compatibility.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Why do I need so many favicon sizes?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Different devices and platforms use different favicon sizes.
                  iOS uses 180×180 for Apple Touch Icons, Android uses 192×192
                  and 512×512 for PWAs, while desktop browsers typically use
                  16×16 and 32×32 pixels. Having all sizes ensures your favicon
                  looks perfect everywhere.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  Is my image data secure and private?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Yes! All favicon generation happens on our secure servers and
                  your images are processed immediately without being stored. We
                  never save, cache, or access your images beyond the conversion
                  process.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  What&apos;s the difference between ICO and PNG favicons?
                </h4>
                <p className="text-sm text-muted-foreground">
                  ICO files can contain multiple resolutions in a single file
                  and are supported by all browsers, especially older versions.
                  PNG favicons offer better compression and quality but require
                  separate files for each size. Our generator provides both
                  formats for maximum compatibility.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="mb-8">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Professional Quality:</strong> Our server-side Sharp
            processing ensures optimal image quality and compression. All
            favicons are generated with industry-standard specifications for
            perfect compatibility across browsers and devices.
          </AlertDescription>
        </Alert>
      </motion.div>

    </div>
  );
}
