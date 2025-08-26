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
import AdPlaceholder from "@/components/AdPlaceholder";
import { CopyButton } from "@/components/copy-button";
import { encodeBase64, decodeBase64 } from "@/lib/crypto-utils";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = () => {
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
    } catch (err) {
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

  // Auto-process when input changes
  useEffect(() => {
    process();
  }, [input, mode]);

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
            Base64 Encoder / Decoder
          </h1>
          <p className="text-lg text-muted-foreground">
            Encode and decode text using Base64 encoding with UTF-8 support
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
                <span>About Base64 Encoding</span>
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
                <span>Encoding Details</span>
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

        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
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

      <AdPlaceholder id="adsense-bottom" className="mt-8" />
    </div>
  );
}
