"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, AlertTriangle } from "lucide-react";
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
import { encodeURL, decodeURL } from "@/lib/crypto-utils";

export default function URLEncodeDecode() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const encode = (input: string) => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }

    try {
      setError("");
      const encoded = encodeURL(input);
      setOutput(encoded);
    } catch {
      setError("Failed to encode URL");
      setOutput("");
    }
  };

  const decode = (input: string) => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }

    try {
      setError("");
      const decoded = decodeURL(input);
      setOutput(decoded);
    } catch {
      setError("Invalid URL encoded string");
      setOutput("");
    }
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const detectAndProcess = (input: string) => {
    if (!input.trim()) return;

    // Simple heuristic: if it contains %, it's likely encoded
    if (input.includes("%")) {
      decode(input);
    } else {
      encode(input);
    }
  };

  useEffect(() => {
    detectAndProcess(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "URL Encoder/Decoder - Percent Encoding Tool",
    description: "Encode and decode URLs with percent-encoding for safe URL transmission. Auto-detect encoding/decoding with support for all ASCII characters and special symbols.",
    url: "https://www.the-tools-hub.com/url-encode-decode",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "URL encoding (percent-encoding)",
      "URL decoding",
      "Auto-detection mode",
      "Reserved character handling",
      "Developer-friendly interface"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            URL Encoder / Decoder
          </h1>
          <p className="text-lg text-muted-foreground">
            Encode and decode URLs with percent-encoding for safe URL
            transmission
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Link className="w-6 h-6 text-primary" />
              <span>URL Encoding Tool</span>
            </CardTitle>
            <CardDescription>
              Auto-detects whether to encode or decode based on input content
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Input</label>
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter URL or URL-encoded text..."
                  className="min-h-24 font-mono"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium">Output</label>
                  {output && <CopyButton text={output} size="sm" />}
                </div>
                <Textarea
                  value={output}
                  readOnly
                  className="min-h-24 font-mono bg-muted/50"
                  rows={4}
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
                <Button onClick={() => encode(input)} variant="outline">
                  Encode
                </Button>
                <Button onClick={() => decode(input)} variant="outline">
                  Decode
                </Button>
                <Button onClick={clear} variant="outline">
                  Clear
                </Button>
                {input && (
                  <div className="text-sm text-muted-foreground flex items-center">
                    <span>Characters: {input.length}</span>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>URL Encoding Basics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                URL encoding (percent-encoding) converts unsafe ASCII characters
                into a format that can be transmitted over the Internet.
              </p>
              <div className="mt-4 space-y-2">
                <h4 className="font-semibold">Common Encodings:</h4>
                <div className="text-sm space-y-1 font-mono bg-muted p-3 rounded">
                  <div>Space → %20</div>
                  <div>! → %21</div>
                  <div># → %23</div>
                  <div>$ → %24</div>
                  <div>% → %25</div>
                  <div>& → %26</div>
                  <div>+ → %2B</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>When to Use URL Encoding</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-1 text-sm">
                <li>Query parameters with special characters</li>
                <li>Form data submission</li>
                <li>File names in URLs</li>
                <li>Search terms with spaces/symbols</li>
                <li>API parameters</li>
                <li>Email addresses in URLs</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold">Reserved Characters:</h4>
                <code className="text-xs">:/?#[]@!$&amp;&apos;()*+,;=</code>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-1 gap-2">
                <div>
                  <strong>Original:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono">
                    https://example.com/search?q=hello world&category=web
                    development
                  </code>
                </div>
                <div>
                  <strong>Encoded:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono text-xs break-all">
                    https://example.com/search?q=hello%20world&category=web%20development
                  </code>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <div>
                  <strong>Original:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono">
                    user@example.com
                  </code>
                </div>
                <div>
                  <strong>Encoded:</strong>
                  <code className="block mt-1 p-2 bg-muted rounded font-mono">
                    user%40example.com
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
