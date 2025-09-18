"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { QrCode, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import QRCodeLib from "qrcode";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState("256");
  const [errorLevel, setErrorLevel] = useState("M");
  const [qrCodeDataURL, setQrCodeDataURL] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = async (
    text: string,
    size: string,
    errorLevel: string
  ) => {
    if (!text.trim()) {
      setQrCodeDataURL("");
      return;
    }

    try {
      const options = {
        errorCorrectionLevel: errorLevel as "L" | "M" | "Q" | "H",
        width: parseInt(size),
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      };

      if (canvasRef.current) {
        await QRCodeLib.toCanvas(canvasRef.current, text, options);
        const dataURL = canvasRef.current.toDataURL("image/png");
        setQrCodeDataURL(dataURL);
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadPNG = () => {
    if (!qrCodeDataURL) return;

    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrCodeDataURL;
    link.click();
  };

  const downloadSVG = async () => {
    if (!text.trim()) return;

    try {
      const options = {
        errorCorrectionLevel: errorLevel as "L" | "M" | "Q" | "H",
        width: parseInt(size),
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      };

      const svgString = await QRCodeLib.toString(text, {
        ...options,
        type: "svg",
      });

      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "qrcode.svg";
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating SVG:", error);
    }
  };

  useEffect(() => {
    generateQRCode(text, size, errorLevel);
  }, [text, size, errorLevel]);

  const errorLevelInfo = useMemo(
    () => ({
      L: "~7% correction",
      M: "~15% correction",
      Q: "~25% correction",
      H: "~30% correction",
    }),
    []
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "QR Code Generator - Create Custom QR Codes Online",
    description:
      "Generate QR codes from text, URLs, or any data with customizable size and error correction. Download as PNG or SVG for business cards, marketing, and sharing.",
    url: "https://www.the-tools-hub.com/qr-generator",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Custom QR code generation",
      "Multiple size options",
      "Error correction levels",
      "PNG and SVG download",
      "Real-time preview",
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            QR Code Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate QR codes from text, URLs, or any data with customizable
            options
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <QrCode className="w-6 h-6 text-primary" />
                <span>QR Code Settings</span>
              </CardTitle>
              <CardDescription>
                Configure your QR code content and appearance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Content</label>
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text, URL, email, phone number, or any data..."
                  className="min-h-32"
                  rows={6}
                  aria-label="QR code content input"
                />
                <div className="text-xs text-muted-foreground">
                  {text.length} characters
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Size</label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="128">128px</SelectItem>
                      <SelectItem value="256">256px</SelectItem>
                      <SelectItem value="512">512px</SelectItem>
                      <SelectItem value="1024">1024px</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Error Correction
                  </label>
                  <Select value={errorLevel} onValueChange={setErrorLevel}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="L">Low (L)</SelectItem>
                      <SelectItem value="M">Medium (M)</SelectItem>
                      <SelectItem value="Q">Quartile (Q)</SelectItem>
                      <SelectItem value="H">High (H)</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="text-xs text-muted-foreground">
                    {errorLevel}:{" "}
                    {errorLevelInfo[errorLevel as keyof typeof errorLevelInfo]}
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <strong>Tip:</strong> Higher error correction allows the QR
                  code to be read even if partially damaged or obscured.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generated QR Code</CardTitle>
              <CardDescription>
                Preview and download your QR code
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                {text ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border rounded-lg p-4 bg-white"
                  >
                    <canvas
                      ref={canvasRef}
                      className="max-w-full h-auto"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center w-64 h-64 border-2 border-dashed border-muted-foreground/30 rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <QrCode className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">
                        Enter content to generate QR code
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {qrCodeDataURL && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    onClick={downloadPNG}
                    className="flex items-center space-x-2 flex-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PNG</span>
                  </Button>
                  <Button
                    onClick={downloadSVG}
                    variant="outline"
                    className="flex items-center space-x-2 flex-1"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download SVG</span>
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>QR Code Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-1 text-sm">
                <li>
                  <strong>URLs:</strong> Share website links easily
                </li>
                <li>
                  <strong>Contact Info:</strong> vCard format for business cards
                </li>
                <li>
                  <strong>WiFi:</strong> WIFI:T:WPA;S:NetworkName;P:password;;
                </li>
                <li>
                  <strong>Email:</strong> mailto:user@example.com
                </li>
                <li>
                  <strong>Phone:</strong> tel:+1234567890
                </li>
                <li>
                  <strong>SMS:</strong> sms:+1234567890
                </li>
                <li>
                  <strong>Location:</strong> geo:37.7749,-122.4194
                </li>
                <li>
                  <strong>App Store:</strong> Direct app downloads
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-1 text-sm">
                <li>Test your QR code with multiple devices</li>
                <li>Ensure sufficient contrast (dark on light)</li>
                <li>Leave quiet zone (white space) around code</li>
                <li>Don&apos;t make QR codes too small for scanning</li>
                <li>Use higher error correction for damaged surfaces</li>
                <li>Keep content concise for better scanning</li>
                <li>Provide fallback text/instructions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Example QR Code Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div>
                  <strong>Website URL:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded text-xs">
                    https://example.com
                  </code>
                </div>
                <div>
                  <strong>Email:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded text-xs">
                    mailto:contact@example.com?subject=Hello
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <strong>WiFi Network:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded text-xs">
                    WIFI:T:WPA;S:MyNetwork;P:password123;;
                  </code>
                </div>
                <div>
                  <strong>Phone Call:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded text-xs">
                    tel:+1-555-123-4567
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Use the QR Code Generator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Step-by-Step Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enter your content in the text area - this can be any text, URL, email, phone number, or formatted data</li>
                <li>Choose your preferred QR code size from 128px to 1024px based on where you&apos;ll use it</li>
                <li>Select error correction level: Low for clean environments, High for damaged or dirty surfaces</li>
                <li>Preview your QR code in real-time as you type or adjust settings</li>
                <li>Download your QR code as PNG for web use or SVG for scalable printing</li>
                <li>Test your QR code with multiple devices before using in production</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Advanced Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Multiple Formats:</strong> Support for URLs, emails, phone numbers, WiFi credentials, and plain text</li>
                <li><strong>Error Correction:</strong> Choose from Low (7%), Medium (15%), Quartile (25%), or High (30%) correction levels</li>
                <li><strong>High Resolution:</strong> Generate QR codes up to 1024px for professional printing applications</li>
                <li><strong>Real-time Preview:</strong> See your QR code update instantly as you type or change settings</li>
                <li><strong>Multiple Download Options:</strong> PNG for web use and SVG for vector graphics and scalable printing</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Benefits and Use Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Marketing Efficiency:</strong> Bridge physical and digital marketing by adding QR codes to brochures, business cards, and advertisements</li>
                <li><strong>Contactless Sharing:</strong> Share WiFi passwords, contact information, and website links without typing or verbal communication</li>
                <li><strong>Professional Branding:</strong> Create consistent, high-quality QR codes that maintain your brand&apos;s professional appearance</li>
                <li><strong>Cross-Platform Compatibility:</strong> QR codes work on all modern smartphones and devices without requiring specific apps</li>
                <li><strong>Privacy Protection:</strong> All QR code generation happens locally in your browser - no data is sent to external servers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Real-World Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Business Cards:</strong> Include contact information, LinkedIn profiles, or portfolio websites for instant networking</li>
                <li><strong>Restaurant Menus:</strong> Create touchless menu access for customers using their smartphones</li>
                <li><strong>Event Management:</strong> Share event details, registration links, or location information with attendees</li>
                <li><strong>Product Packaging:</strong> Link to user manuals, warranty information, or customer support resources</li>
                <li><strong>Real Estate:</strong> Provide property details, virtual tours, or contact information on signs and flyers</li>
                <li><strong>Educational Materials:</strong> Link to additional resources, videos, or interactive content in textbooks and handouts</li>
                <li><strong>WiFi Sharing:</strong> Allow guests to connect to your network instantly without sharing passwords verbally</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">What&apos;s the difference between error correction levels?</h3>
                <p className="text-sm text-muted-foreground">
                  Error correction allows QR codes to be read even when partially damaged. Low (7%) is suitable for clean digital displays, Medium (15%) for normal printing, Quartile (25%) for outdoor use, and High (30%) for surfaces that may get dirty or damaged. Higher correction means larger QR codes.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">What&apos;s the maximum amount of data I can encode?</h3>
                <p className="text-sm text-muted-foreground">
                  QR codes can store up to 4,296 alphanumeric characters or 7,089 numeric characters. However, more data creates denser, harder-to-scan codes. For best results, keep URLs under 100 characters and use URL shorteners for longer links.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Should I choose PNG or SVG format?</h3>
                <p className="text-sm text-muted-foreground">
                  Use PNG for web display, social media, and digital screens where file size matters. Choose SVG for printing, business cards, and situations where you need to scale the QR code to different sizes without quality loss. SVG files are vector-based and infinitely scalable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How do I create a WiFi QR code?</h3>
                <p className="text-sm text-muted-foreground">
                  Use this format: WIFI:T:WPA;S:NetworkName;P:password;; Replace &quot;WPA&quot; with your security type (WPA, WEP, or leave blank for open), &quot;NetworkName&quot; with your WiFi name, and &quot;password&quot; with your WiFi password. The double semicolon at the end is required.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}
