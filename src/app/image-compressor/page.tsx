"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, Upload, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
import { resizeImage, downloadBlob, calculateResizeDimensions } from "@/lib/image-utils";

interface ImageData {
  file: File;
  url: string;
  width: number;
  height: number;
  size: number;
}

interface ProcessedImage {
  blob: Blob;
  url: string;
  size: number;
}

export default function ImageCompressor() {
  const [originalImage, setOriginalImage] = useState<ImageData | null>(null);
  const [processedImage, setProcessedImage] = useState<ProcessedImage | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [settings, setSettings] = useState({
    quality: 0.8,
    maxWidth: "",
    maxHeight: "",
    format: "jpeg" as "jpeg" | "png" | "webp"
  });
  const [dragOver, setDragOver] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup object URLs on unmount or image change
  useEffect(() => {
    return () => {
      if (originalImage?.url) {
        URL.revokeObjectURL(originalImage.url);
      }
      if (processedImage?.url) {
        URL.revokeObjectURL(processedImage.url);
      }
    };
  }, [originalImage?.url, processedImage?.url]);

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    // Clean up previous image URL if it exists
    if (originalImage?.url) {
      URL.revokeObjectURL(originalImage.url);
    }
    if (processedImage?.url) {
      URL.revokeObjectURL(processedImage.url);
      setProcessedImage(null);
    }

    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      setOriginalImage({
        file,
        url,
        width: img.width,
        height: img.height,
        size: file.size
      });
      // Don't revoke URL here - we need it for display
    };

    img.src = url;
  }, [originalImage?.url, processedImage?.url]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const processImage = async () => {
    if (!originalImage) return;

    setIsProcessing(true);

    try {
      const maxWidth = settings.maxWidth ? parseInt(settings.maxWidth) : undefined;
      const maxHeight = settings.maxHeight ? parseInt(settings.maxHeight) : undefined;

      const blob = await resizeImage(
        originalImage.file,
        maxWidth,
        maxHeight,
        settings.quality,
        settings.format
      );

      const url = URL.createObjectURL(blob);

      setProcessedImage({
        blob,
        url,
        size: blob.size
      });
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Error processing image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (!processedImage || !originalImage) return;

    const extension = settings.format === "jpeg" ? "jpg" : settings.format;
    const fileName = `compressed_${originalImage.file.name.split(".")[0]}.${extension}`;
    downloadBlob(processedImage.blob, fileName);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const compressionRatio = originalImage && processedImage
    ? ((1 - processedImage.size / originalImage.size) * 100).toFixed(1)
    : "0";

  const previewDimensions = originalImage ? calculateResizeDimensions(
    originalImage.width,
    originalImage.height,
    settings.maxWidth ? parseInt(settings.maxWidth) : undefined,
    settings.maxHeight ? parseInt(settings.maxHeight) : undefined
  ) : null;

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Image Compressor & Resizer",
            description: "Compress and resize images directly in browser with quality control and multiple formats",
            url: "https://toolshub.com/image-compressor",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            features: [
              "Client-side image processing",
              "Quality adjustment",
              "Multiple output formats",
              "Drag and drop interface",
              "No file uploads required",
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
            Image Compressor & Resizer
          </h1>
          <p className="text-lg text-muted-foreground">
            Compress and resize images directly in your browser - no uploads required
          </p>
        </div>

        {/* File Upload Area */}
        {!originalImage && (
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
                <h3 className="text-lg font-medium mb-2">Drop your image here</h3>
                <p className="text-muted-foreground mb-4">
                  or click to select a file
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

        {/* Image Processing Interface */}
        {originalImage && (
          <>
            {/* Settings */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Compression Settings</CardTitle>
                <CardDescription>
                  Adjust quality and dimensions for optimal results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Quality: {Math.round(settings.quality * 100)}%
                      {settings.format === 'png' && (
                        <span className="text-xs text-muted-foreground ml-2">(PNG ignores quality - always lossless)</span>
                      )}
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.1"
                      value={settings.quality}
                      onChange={(e) => setSettings(prev => ({ ...prev, quality: parseFloat(e.target.value) }))}
                      className={`w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer ${
                        settings.format === 'png' ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={settings.format === 'png'}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Max Width (px)</label>
                    <Input
                      type="number"
                      placeholder="Auto"
                      value={settings.maxWidth}
                      onChange={(e) => setSettings(prev => ({ ...prev, maxWidth: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Max Height (px)</label>
                    <Input
                      type="number"
                      placeholder="Auto"
                      value={settings.maxHeight}
                      onChange={(e) => setSettings(prev => ({ ...prev, maxHeight: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Output Format</label>
                    <select
                      value={settings.format}
                      onChange={(e) => setSettings(prev => ({ ...prev, format: e.target.value as "jpeg" | "png" | "webp" }))}
                      className="w-full p-2 border border-border rounded-md bg-background"
                    >
                      <option value="jpeg">JPEG</option>
                      <option value="png">PNG</option>
                      <option value="webp">WebP</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={processImage} disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Compress Image"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Clean up URLs before clearing state
                      if (originalImage?.url) {
                        URL.revokeObjectURL(originalImage.url);
                      }
                      if (processedImage?.url) {
                        URL.revokeObjectURL(processedImage.url);
                      }
                      setOriginalImage(null);
                      setProcessedImage(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                  >
                    Clear
                  </Button>
                </div>

                {settings.format === 'png' && (
                  <Alert>
                    <ImageIcon className="h-4 w-4" />
                    <AlertDescription>
                      <strong>PNG Format:</strong> PNG is a lossless format that preserves all image data. 
                      Converting from JPEG to PNG will often increase file size significantly as the original 
                      JPEG compression is removed. Use PNG only when you need transparency or perfect quality.
                    </AlertDescription>
                  </Alert>
                )}

                {settings.format === 'webp' && (
                  <Alert>
                    <ImageIcon className="h-4 w-4" />
                    <AlertDescription>
                      <strong>WebP Format:</strong> WebP typically provides 25-35% better compression than JPEG 
                      with similar quality. It supports both lossy and lossless compression.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Image Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Original Image */}
              <Card>
                <CardHeader>
                  <CardTitle>Original Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={originalImage.url}
                    alt="Original image to be compressed"
                    className="w-full h-64 object-contain bg-muted rounded"
                  />
                  <div className="text-sm space-y-1">
                    <div>Size: {formatFileSize(originalImage.size)}</div>
                    <div>Dimensions: {originalImage.width} × {originalImage.height}</div>
                    <div>Format: {originalImage.file.type}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Processed Image */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {processedImage ? "Compressed Image" : "Preview"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {processedImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={processedImage.url}
                      alt="Compressed image result"
                      className="w-full h-64 object-contain bg-muted rounded"
                    />
                  ) : (
                    <div className="w-full h-64 bg-muted rounded flex items-center justify-center">
                      <span className="text-muted-foreground">Click &quot;Compress Image&quot; to see result</span>
                    </div>
                  )}

                  <div className="text-sm space-y-1">
                    {processedImage ? (
                      <>
                        <div>Size: {formatFileSize(processedImage.size)}</div>
                        <div className={`font-medium ${
                          parseFloat(compressionRatio) > 0 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {parseFloat(compressionRatio) > 0 
                            ? `Reduced by ${compressionRatio}%`
                            : `Increased by ${Math.abs(parseFloat(compressionRatio))}%`
                          }
                        </div>
                      </>
                    ) : previewDimensions ? (
                      <>
                        <div>Preview size: {
                          settings.format === 'png' 
                            ? formatFileSize(originalImage.size * 1.5) // PNG is often larger than original JPEG
                            : formatFileSize(originalImage.size * settings.quality)
                        }</div>
                        <div>Dimensions: {previewDimensions.width} × {previewDimensions.height}</div>
                      </>
                    ) : null}
                    <div>Format: image/{settings.format}</div>
                  </div>

                  {processedImage && (
                    <Button onClick={downloadImage} className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Compressed Image
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}

        <Alert className="mb-8">
          <ImageIcon className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Note:</strong> All image processing happens in your browser.
            Your images never leave your device and are not uploaded to any server.
          </AlertDescription>
        </Alert>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}