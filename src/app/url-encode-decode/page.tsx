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
    description:
      "Encode and decode URLs with percent-encoding for safe URL transmission. Auto-detect encoding/decoding with support for all ASCII characters and special symbols.",
    url: "https://www.the-tools-hub.com/url-encode-decode",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "URL encoding (percent-encoding)",
      "URL decoding",
      "Auto-detection mode",
      "Reserved character handling",
      "Developer-friendly interface",
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
                  aria-label="URL input for encoding or decoding"
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
                  aria-label="URL encoding or decoding output"
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

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Use the URL Encoder/Decoder</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Step-by-Step Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Paste your URL or encoded text into the input field</li>
                <li>The tool automatically detects if your input needs encoding or decoding</li>
                <li>View the converted result in the output field instantly</li>
                <li>Use the &quot;Encode&quot; button to force encoding of plain text URLs</li>
                <li>Use the &quot;Decode&quot; button to force decoding of percent-encoded URLs</li>
                <li>Copy the result using the copy button or download it for later use</li>
                <li>Click &quot;Clear&quot; to reset both input and output fields</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Smart Auto-Detection Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>Automatic Processing:</strong> Detects percent-encoded characters (%) and automatically decodes</li>
                <li><strong>Real-time Conversion:</strong> Instant encoding/decoding as you type or paste content</li>
                <li><strong>Character Counter:</strong> Track input length for URL length optimization</li>
                <li><strong>Error Handling:</strong> Clear error messages for malformed encoded strings</li>
                <li><strong>Manual Override:</strong> Force specific operations with dedicated encode/decode buttons</li>
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
                <li><strong>Web Development:</strong> Safely encode URLs for form submissions, AJAX requests, and API calls</li>
                <li><strong>SEO Optimization:</strong> Create clean, encoded URLs for search engine compatibility</li>
                <li><strong>Data Security:</strong> Properly encode special characters to prevent URL manipulation attacks</li>
                <li><strong>Cross-Platform Compatibility:</strong> Ensure URLs work correctly across different browsers and systems</li>
                <li><strong>Privacy Protection:</strong> All encoding/decoding happens locally - no data sent to servers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Real-World Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Form Processing:</strong> Encode form data with special characters for safe HTTP transmission</li>
                <li><strong>Search Functionality:</strong> Encode search queries containing spaces, symbols, or international characters</li>
                <li><strong>API Development:</strong> Properly encode parameters for REST API requests and webhooks</li>
                <li><strong>Email Marketing:</strong> Encode tracking URLs and campaign parameters for email campaigns</li>
                <li><strong>Social Media Integration:</strong> Encode URLs for sharing on platforms that require proper encoding</li>
                <li><strong>File Management:</strong> Encode file names with special characters for web-safe URLs</li>
                <li><strong>Analytics Tracking:</strong> Encode UTM parameters and custom tracking variables</li>
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
                <h3 className="font-semibold mb-2">What is URL encoding and why is it necessary?</h3>
                <p className="text-sm text-muted-foreground">
                  URL encoding (percent-encoding) converts unsafe ASCII characters into a format that can be safely transmitted over the internet. It&apos;s necessary because URLs can only contain certain characters, and special characters like spaces, symbols, and international characters must be encoded to prevent errors and security issues.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Which characters need to be encoded in URLs?</h3>
                <p className="text-sm text-muted-foreground">
                  Reserved characters (:/?#[]@!$&apos;()*+,;=), unsafe characters (spaces, quotes, &lt;, &gt;, {"{, }, |, \\, ^, ~, `, %"}), and non-ASCII characters (international characters, emojis) should be encoded. Our tool automatically handles all these cases.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">How does the auto-detection feature work?</h3>
                <p className="text-sm text-muted-foreground">
                  Our tool uses intelligent detection: if your input contains percent signs (%) followed by hexadecimal characters, it assumes the text is already encoded and decodes it. Otherwise, it encodes the input. You can override this with the manual Encode/Decode buttons.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is it safe to use this tool with sensitive URLs?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, this tool is completely safe. All encoding and decoding operations happen locally in your browser using JavaScript. Your URLs are never transmitted to our servers, logged, or stored anywhere. Your data remains completely private.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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

    </div>
  );
}
