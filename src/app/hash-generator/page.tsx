"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hash, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { CopyButton } from "@/components/copy-button";
import { hashText, md5 } from "@/lib/crypto-utils";

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState({
    md5: "",
    sha1: "",
    sha256: "",
    sha512: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("sha256");

  const generateHashes = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const [sha1Hash, sha256Hash, sha512Hash] = await Promise.all([
        hashText(input, "SHA-1"),
        hashText(input, "SHA-256"),
        hashText(input, "SHA-512"),
      ]);

      setHashes({
        md5: md5(input),
        sha1: sha1Hash,
        sha256: sha256Hash,
        sha512: sha512Hash,
      });
    } catch (error) {
      console.error("Error generating hashes:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearAll = () => {
    setInput("");
    setHashes({
      md5: "",
      sha1: "",
      sha256: "",
      sha512: "",
    });
  };

  const hashInfo = {
    md5: {
      name: "MD5",
      description: "128-bit cryptographic hash (deprecated for security)",
      bits: "128 bits (32 hex characters)",
      warning:
        "MD5 is cryptographically broken and not suitable for security purposes",
    },
    sha1: {
      name: "SHA-1",
      description: "160-bit cryptographic hash (deprecated for security)",
      bits: "160 bits (40 hex characters)",
      warning: "SHA-1 is deprecated for cryptographic security",
    },
    sha256: {
      name: "SHA-256",
      description: "256-bit cryptographic hash, part of SHA-2 family",
      bits: "256 bits (64 hex characters)",
      warning: null,
    },
    sha512: {
      name: "SHA-512",
      description: "512-bit cryptographic hash, part of SHA-2 family",
      bits: "512 bits (128 hex characters)",
      warning: null,
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Generate Hash Values",
            description:
              "Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text input",
            step: [
              {
                "@type": "HowToStep",
                text: "Enter or paste your text into the input field",
              },
              {
                "@type": "HowToStep",
                text: "Click 'Generate Hashes' to create hash values",
              },
              {
                "@type": "HowToStep",
                text: "Select the desired hash algorithm tab",
              },
              {
                "@type": "HowToStep",
                text: "Copy the generated hash value",
              },
            ],
          }),
        }}
      />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hash Generator - MD5, SHA-1, SHA-256, SHA-512 Tools
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text
            input. Fast, secure hash generation tool with multiple algorithms
            and detailed security information for data integrity verification.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Hash className="w-6 h-6 text-primary" />
              <span>Text Input</span>
            </CardTitle>
            <CardDescription>Enter the text you want to hash</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your text here..."
              className="min-h-32 font-mono"
              rows={6}
              aria-label="Text input for hash generation"
            />

            <div className="flex space-x-4">
              <Button
                onClick={generateHashes}
                disabled={!input.trim() || loading}
                className="flex items-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Hash className="w-4 h-4" />
                    <span>Generate Hashes</span>
                  </>
                )}
              </Button>

              <Button variant="outline" onClick={clearAll}>
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>

        {(hashes.sha256 || hashes.md5 || hashes.sha1 || hashes.sha512) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Generated Hashes</CardTitle>
                <CardDescription>
                  Click on any hash to copy it to your clipboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="md5">MD5</TabsTrigger>
                    <TabsTrigger value="sha1">SHA-1</TabsTrigger>
                    <TabsTrigger value="sha256">SHA-256</TabsTrigger>
                    <TabsTrigger value="sha512">SHA-512</TabsTrigger>
                  </TabsList>

                  {Object.entries(hashInfo).map(([key, info]) => (
                    <TabsContent key={key} value={key} className="mt-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Algorithm:</span>
                            <p className="text-muted-foreground">{info.name}</p>
                          </div>
                          <div>
                            <span className="font-medium">Output Size:</span>
                            <p className="text-muted-foreground">{info.bits}</p>
                          </div>
                          <div>
                            <span className="font-medium">Description:</span>
                            <p className="text-muted-foreground">
                              {info.description}
                            </p>
                          </div>
                        </div>

                        {info.warning && (
                          <Alert>
                            <AlertDescription>
                              <strong>Security Warning:</strong> {info.warning}
                            </AlertDescription>
                          </Alert>
                        )}

                        <div className="flex space-x-2">
                          <div className="flex-1 p-3 bg-muted rounded-lg font-mono text-sm break-all">
                            {hashes[key as keyof typeof hashes] ||
                              "No hash generated"}
                          </div>
                          {hashes[key as keyof typeof hashes] && (
                            <CopyButton
                              text={hashes[key as keyof typeof hashes]}
                              size="default"
                            />
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Use the Hash Generator Tool</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Step-by-Step Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Enter or paste your text into the input field above</li>
                <li>Click the &quot;Generate Hashes&quot; button to create hash values for all four algorithms</li>
                <li>Select the desired hash algorithm tab (MD5, SHA-1, SHA-256, or SHA-512) to view specific results</li>
                <li>Review the algorithm information including output size and security considerations</li>
                <li>Click the copy button next to any hash value to copy it to your clipboard</li>
                <li>Use &quot;Clear All&quot; to reset the input and start with new text</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Why Choose Different Hash Algorithms?</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Each hash algorithm serves different purposes based on security requirements and compatibility needs:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li><strong>SHA-256:</strong> Recommended for modern security applications, blockchain, and general-purpose hashing</li>
                <li><strong>SHA-512:</strong> Higher security level with longer hash output, ideal for high-security applications</li>
                <li><strong>MD5:</strong> Legacy support only - use for non-security purposes like file integrity checks</li>
                <li><strong>SHA-1:</strong> Transitional use where legacy compatibility is required but being phased out</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>About Hash Functions</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="space-y-4">
              <p>
                Hash functions are mathematical algorithms that convert input
                data of any size into a fixed-size string of characters. They
                are commonly used for:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Common Uses:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>Data integrity verification</li>
                    <li>Password storage (with salt)</li>
                    <li>Digital signatures</li>
                    <li>Blockchain and cryptocurrency</li>
                    <li>File fingerprinting</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Security Considerations:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>MD5 and SHA-1 are deprecated for security</li>
                    <li>SHA-256 and SHA-512 are currently secure</li>
                    <li>Hash functions are one-way (irreversible)</li>
                    <li>Same input always produces same output</li>
                    <li>Small changes create completely different hashes</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <Hash className="h-4 w-4" />
                <AlertDescription>
                  <strong>Privacy Note:</strong> All hash generation is
                  performed locally in your browser. Your input text is never
                  sent to our servers.
                </AlertDescription>
              </Alert>
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
                <li><strong>Data Integrity:</strong> Verify that data hasn&apos;t been altered or corrupted during transmission or storage</li>
                <li><strong>Security Applications:</strong> Generate unique fingerprints for passwords, digital signatures, and authentication systems</li>
                <li><strong>Multiple Algorithms:</strong> Support for MD5, SHA-1, SHA-256, and SHA-512 for various compatibility requirements</li>
                <li><strong>Privacy Protection:</strong> All processing happens locally in your browser - no data is transmitted to our servers</li>
                <li><strong>Instant Results:</strong> Generate hash values immediately without waiting for server processing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Real-World Applications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Software Development:</strong> Generate checksums for file integrity verification and version control</li>
                <li><strong>Digital Forensics:</strong> Create unique identifiers for evidence files and maintain chain of custody</li>
                <li><strong>Blockchain Development:</strong> Generate SHA-256 hashes for cryptocurrency transactions and smart contracts</li>
                <li><strong>Password Security:</strong> Create secure hash values for password storage systems (with proper salting)</li>
                <li><strong>Data Deduplication:</strong> Identify duplicate files by comparing hash values instead of entire file contents</li>
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
                <h3 className="font-semibold mb-2">What&apos;s the difference between hash algorithms?</h3>
                <p className="text-sm text-muted-foreground">
                  Different hash algorithms produce different output lengths and security levels. SHA-256 (256 bits) and SHA-512 (512 bits) are currently considered secure, while MD5 (128 bits) and SHA-1 (160 bits) are deprecated for security applications due to vulnerability discoveries.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Can I reverse a hash to get the original text?</h3>
                <p className="text-sm text-muted-foreground">
                  No, hash functions are designed to be one-way. It&apos;s computationally infeasible to reverse a hash back to its original input. However, identical inputs will always produce identical hashes, which is why rainbow table attacks exist for common passwords.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold mb-2">Which hash algorithm should I use?</h3>
                <p className="text-sm text-muted-foreground">
                  For security applications, use SHA-256 or SHA-512. For legacy compatibility where security isn&apos;t critical, MD5 may be acceptable. Avoid using MD5 or SHA-1 for new security-sensitive applications as they have known vulnerabilities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is this tool secure for sensitive data?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, all hash generation happens locally in your browser using JavaScript. Your input text never leaves your device and is not sent to our servers. However, avoid hashing highly sensitive information like passwords without proper salting.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}
