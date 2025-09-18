"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  ArrowUpDown,
  Download,
  FileText,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { CopyButton } from "@/components/copy-button";
import { encodeBase64, decodeBase64 } from "@/lib/crypto-utils";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = (mode: "encode" | "decode", input: string) => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }

    try {
      setError("");
      if (mode === "encode") {
        const encoded = encodeBase64(input);
        setOutput(encoded);
      } else {
        const decoded = decodeBase64(input);
        setOutput(decoded);
      }
    } catch {
      setError(
        mode === "encode" ? "Failed to encode text" : "Invalid Base64 string"
      );
      setOutput("");
    }
  };

  const switchMode = () => {
    const newMode = mode === "encode" ? "decode" : "encode";
    setMode(newMode);

    // If there's output, use it as new input
    if (output) {
      setInput(output);
      setOutput("");
      setError("");
    }
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const downloadAsFile = () => {
    if (!output) return;

    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `base64-${mode}d.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    process(mode, input);
  }, [input, mode]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Base64 Encoder/Decoder",
    description:
      "Free Base64 encoder and decoder with UTF-8 support. Convert text to Base64 and decode Base64 strings back to text with privacy protection.",
    url: "https://www.the-tools-hub.com/base64",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Base64 encoding and decoding",
      "UTF-8 character support",
      "Bidirectional conversion",
      "Download results as file",
      "Privacy-focused - no server processing",
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
            Base64 Encoder/Decoder - Convert Text to Base64
          </h1>
          <p className="text-lg text-muted-foreground">
            Free Base64 encoder and decoder with UTF-8 support. Convert text to
            Base64 and decode Base64 strings back to text. Perfect for data
            transmission and storage with complete privacy protection.
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-6 h-6 text-primary" />
                <span>Base64 {mode === "encode" ? "Encoder" : "Decoder"}</span>
              </div>
              <Button
                variant="outline"
                onClick={switchMode}
                className="flex items-center space-x-2"
              >
                <ArrowUpDown className="w-4 h-4" />
                <span>Switch to {mode === "encode" ? "Decode" : "Encode"}</span>
              </Button>
            </CardTitle>
            <CardDescription>
              {mode === "encode"
                ? "Enter text to encode to Base64"
                : "Enter Base64 string to decode to text"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Input ({mode === "encode" ? "Plain Text" : "Base64"})
                </label>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    mode === "encode"
                      ? "Enter text to encode..."
                      : "Enter Base64 string to decode..."
                  }
                  className="min-h-32 font-mono"
                  rows={6}
                  aria-label={mode === "encode" ? "Text input for Base64 encoding" : "Base64 input for decoding"}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">
                    Output ({mode === "encode" ? "Base64" : "Plain Text"})
                  </label>
                  <div className="flex space-x-2">
                    {output && (
                      <>
                        <CopyButton text={output} size="sm" />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={downloadAsFile}
                          className="flex items-center space-x-1"
                        >
                          <Download className="w-3 h-3" />
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                <Textarea
                  value={output}
                  readOnly
                  className="min-h-32 font-mono bg-muted/50"
                  rows={6}
                  placeholder={error || "Output will appear here..."}
                  aria-label={mode === "encode" ? "Base64 encoded output" : "Decoded text output"}
                />
              </div>

              {error && (
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex space-x-4">
                <Button onClick={clear} variant="outline">
                  Clear All
                </Button>
                {input && (
                  <div className="text-sm text-muted-foreground flex items-center space-x-4">
                    <span>Input: {input.length} characters</span>
                    {output && <span>Output: {output.length} characters</span>}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <h2 className="text-xl font-semibold">About Base64 Encoding</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Base64 is a binary-to-text encoding scheme that represents
                binary data in an ASCII string format. It&apos;s commonly used
                for:
              </p>
              <ul className="space-y-1 text-sm mt-3">
                <li>Email attachments (MIME)</li>
                <li>Data URLs in web development</li>
                <li>API data transmission</li>
                <li>Storing binary data in text format</li>
                <li>Configuration files</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Encoding Details</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="space-y-3">
                <div>
                  <strong>Character Set:</strong>
                  <p className="text-xs font-mono mt-1 p-2 bg-muted rounded break-all">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
                  </p>
                </div>
                <div>
                  <strong>Padding:</strong>
                  <p className="text-sm">
                    Uses &apos;=&apos; for padding when needed
                  </p>
                </div>
                <div>
                  <strong>Size Increase:</strong>
                  <p className="text-sm">~33% larger than original data</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-8">
          <Code className="h-4 w-4" />
          <AlertDescription>
            <strong>UTF-8 Support:</strong> This tool properly handles Unicode
            characters by using UTF-8 encoding, ensuring that international
            characters are correctly encoded and decoded.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Use the Base64 Encoder/Decoder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Step-by-Step Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Choose your operation: encoding (text to Base64) or decoding (Base64 to text)</li>
                <li>Enter your text in the input field - the tool supports all Unicode characters</li>
                <li>The conversion happens automatically as you type - no need to click any buttons</li>
                <li>Use the "Switch" button to change between encoding and decoding modes</li>
                <li>Copy the output using the copy button or download it as a text file</li>
                <li>Use "Clear All" to reset both input and output fields for a fresh start</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Advanced Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Bidirectional Conversion:</strong> Easily switch between encoding and decoding with one click</li>
                <li><strong>Unicode Support:</strong> Full UTF-8 support for international characters and emojis</li>
                <li><strong>Real-time Processing:</strong> Instant conversion as you type with automatic error detection</li>
                <li><strong>File Download:</strong> Save your results as text files for later use</li>
                <li><strong>Character Count:</strong> Monitor input and output lengths for data size planning</li>
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
                <li><strong>Data Safety:</strong> Convert binary data to text format for safe transmission through text-only channels</li>
                <li><strong>Web Development:</strong> Embed images and files directly in HTML, CSS, or JavaScript using data URLs</li>
                <li><strong>API Integration:</strong> Encode binary data for JSON APIs that don't support binary formats</li>
                <li><strong>Email Compatibility:</strong> MIME encoding for email attachments and content</li>
                <li><strong>Privacy Protection:</strong> All processing happens locally - your data never leaves your browser</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Real-World Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Web Development:</strong> Create data URLs for images, fonts, and other assets to reduce HTTP requests</li>
                <li><strong>Configuration Files:</strong> Store binary data in XML, JSON, or YAML configuration files</li>
                <li><strong>Database Storage:</strong> Store binary data in text-based database fields</li>
                <li><strong>Email Systems:</strong> Encode attachments for MIME-compliant email transmission</li>
                <li><strong>API Development:</strong> Transfer binary data through REST APIs that only support text</li>
                <li><strong>Legacy System Integration:</strong> Interface with older systems that require text-based data exchange</li>
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
                <h3 className="font-semibold mb-2">What is Base64 encoding used for?</h3>
                <p className="text-sm text-muted-foreground">
                  Base64 encoding converts binary data into text format using only printable ASCII characters. It's commonly used for email attachments, data URLs in web development, API data transmission, and storing binary data in text-based formats like JSON or XML.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Does Base64 encoding provide security or encryption?</h3>
                <p className="text-sm text-muted-foreground">
                  No, Base64 is not encryption or security - it's simply an encoding method. Anyone can easily decode Base64 strings back to their original form. It's designed for data compatibility, not security. Never use Base64 alone to protect sensitive information.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Why does Base64 make data larger?</h3>
                <p className="text-sm text-muted-foreground">
                  Base64 increases data size by approximately 33% because it uses 6 bits per character instead of 8 bits. This trade-off ensures compatibility with text-only systems and prevents data corruption during transmission through systems that modify binary data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I encode any type of file or data?</h3>
                <p className="text-sm text-muted-foreground">
                  This tool is designed for text input with full Unicode support. For binary files (images, documents, etc.), you would need to first convert them to binary data. Our tool focuses on text encoding/decoding with proper UTF-8 character handling.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">Base64 Examples</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Plain Text:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono break-words">
                    Hello, World! 👋
                  </code>
                </div>
                <div>
                  <strong>Base64:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono break-all">
                    SGVsbG8sIFdvcmxkISDwn5GN
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Plain Text:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono break-words">
                    The quick brown fox
                  </code>
                </div>
                <div>
                  <strong>Base64:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono break-all">
                    VGhlIHF1aWNrIGJyb3duIGZveA==
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
