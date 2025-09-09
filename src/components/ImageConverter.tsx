"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Upload, Download, Image as ImageIcon, Settings, AlertCircle, CheckCircle } from "lucide-react";
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
import {
  convertImage,
  downloadBlob,
  formatFileSize,
  generateFileName,
  validateImageFile,
  getConversionDescription,
  DEFAULT_SETTINGS,
  type ConversionResult,
  type ConversionSettings,
} from "@/lib/image-converter-utils";

interface ImageConverterProps {
  sourceFormat: 'jpg' | 'png' | 'webp';
  targetFormat: 'jpeg' | 'png' | 'webp';
  conversionKey: string;
  title: string;
  description: string;
}

export default function ImageConverter({
  sourceFormat,
  targetFormat,
  conversionKey,
  title,
  description
}: ImageConverterProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string>('');
  const [dragOver, setDragOver] = useState(false);
  const [settings, setSettings] = useState<ConversionSettings>(
    DEFAULT_SETTINGS[conversionKey] || { quality: 90, backgroundColor: '#ffffff' }
  );

  const fileInputRef = useRef<HTMLInputElement>(null);
  const conversionInfo = getConversionDescription(sourceFormat, targetFormat);

  const handleFileSelect = useCallback((file: File) => {
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || 'Invalid file');
      return;
    }

    // Check if file format matches expected source format
    const expectedTypes = sourceFormat === 'jpg' ? ['image/jpeg', 'image/jpg'] : [`image/${sourceFormat}`];
    if (!expectedTypes.includes(file.type)) {
      setError(`Please select a ${sourceFormat.toUpperCase()} file`);
      return;
    }

    setSelectedFile(file);
    setConversionResult(null);
    setError('');
  }, [sourceFormat]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError('');

    try {
      const result = await convertImage(selectedFile, targetFormat, settings);
      setConversionResult(result);
    } catch (error) {
      console.error('Conversion error:', error);
      setError(error instanceof Error ? error.message : 'Conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!conversionResult || !selectedFile) return;
    
    const filename = generateFileName(selectedFile.name, targetFormat);
    downloadBlob(conversionResult.blob, filename);
  };

  const handleClear = () => {
    setSelectedFile(null);
    setConversionResult(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Benefits Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Why Convert {sourceFormat.toUpperCase()} to {targetFormat.toUpperCase()}?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {conversionInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* File Upload Section */}
        {!selectedFile && (
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
                  Drop your {sourceFormat.toUpperCase()} image here
                </h3>
                <p className="text-muted-foreground mb-4">
                  or click to select a file (max 10MB)
                </p>
                <Button onClick={() => fileInputRef.current?.click()}>
                  Choose {sourceFormat.toUpperCase()} File
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={sourceFormat === 'jpg' ? 'image/jpeg,image/jpg' : `image/${sourceFormat}`}
                  onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                  className="hidden"
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error Display */}
        {error && (
          <Alert className="mb-8" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Conversion Interface */}
        {selectedFile && (
          <>
            {/* Settings Panel */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Conversion Settings
                </CardTitle>
                <CardDescription>
                  Customize the output quality and format options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Quality: {settings.quality}%
                      {targetFormat === 'png' && settings.quality === 100 && (
                        <span className="text-xs text-muted-foreground ml-2">(Lossless)</span>
                      )}
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      step="5"
                      value={settings.quality}
                      onChange={(e) => setSettings(prev => ({ ...prev, quality: parseInt(e.target.value) }))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {targetFormat === 'jpeg' && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">
                        Background Color (for transparency)
                      </label>
                      <Input
                        type="color"
                        value={settings.backgroundColor}
                        onChange={(e) => setSettings(prev => ({ ...prev, backgroundColor: e.target.value }))}
                        className="w-full h-10"
                      />
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button 
                    onClick={handleConvert} 
                    disabled={isConverting}
                    className="flex-1"
                  >
                    {isConverting ? "Converting..." : `Convert to ${targetFormat.toUpperCase()}`}
                  </Button>
                  <Button variant="outline" onClick={handleClear}>
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* File Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Original File Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Original File</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div><strong>Name:</strong> {selectedFile.name}</div>
                    <div><strong>Size:</strong> {formatFileSize(selectedFile.size)}</div>
                    <div><strong>Type:</strong> {selectedFile.type}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Conversion Result */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {conversionResult ? "Converted File" : "Conversion Preview"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {conversionResult ? (
                    <div className="space-y-4">
                      <div className="space-y-2 text-sm">
                        <div><strong>Size:</strong> {formatFileSize(conversionResult.convertedSize)}</div>
                        <div><strong>Format:</strong> {conversionResult.convertedFormat}</div>
                        <div className={`font-medium ${
                          conversionResult.compressionRatio > 0 
                            ? 'text-green-600' 
                            : 'text-amber-600'
                        }`}>
                          <strong>Size Change:</strong> {
                            conversionResult.compressionRatio > 0 
                              ? `${conversionResult.compressionRatio.toFixed(1)}% smaller`
                              : `${Math.abs(conversionResult.compressionRatio).toFixed(1)}% larger`
                          }
                        </div>
                        <div><strong>Dimensions:</strong> {conversionResult.convertedDimensions}</div>
                      </div>
                      <Button onClick={handleDownload} className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download {targetFormat.toUpperCase()} File
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground py-8">
                      Click &quot;Convert&quot; to process your image
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Privacy Notice */}
        <Alert className="mb-8">
          <ImageIcon className="h-4 w-4" />
          <AlertDescription>
            <strong>Server-Side Processing:</strong> Your images are processed on our secure servers and immediately deleted after conversion. 
            We never store or access your images beyond the conversion process.
          </AlertDescription>
        </Alert>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}