"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Hash, Loader2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
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
      warning: "MD5 is cryptographically broken and not suitable for security purposes",
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
            "name": "How to Generate Hash Values",
            "description": "Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text input",
            "step": [
              {
                "@type": "HowToStep",
                "text": "Enter or paste your text into the input field"
              },
              {
                "@type": "HowToStep", 
                "text": "Click 'Generate Hashes' to create hash values"
              },
              {
                "@type": "HowToStep",
                "text": "Select the desired hash algorithm tab"
              },
              {
                "@type": "HowToStep",
                "text": "Copy the generated hash value"
              }
            ]
          })
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
            Hash Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate MD5, SHA-1, SHA-256, and SHA-512 hash values from text input
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Hash className="w-6 h-6 text-primary" />
              <span>Text Input</span>
            </CardTitle>
            <CardDescription>
              Enter the text you want to hash
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your text here..."
              className="min-h-32 font-mono"
              rows={6}
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
                            <p className="text-muted-foreground">{info.description}</p>
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
                            {hashes[key as keyof typeof hashes] || "No hash generated"}
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
            <CardTitle>About Hash Functions</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="space-y-4">
              <p>
                Hash functions are mathematical algorithms that convert input data of any size 
                into a fixed-size string of characters. They are commonly used for:
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
                  <h4 className="font-semibold mb-2">Security Considerations:</h4>
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
                  <strong>Privacy Note:</strong> All hash generation is performed locally in your browser. 
                  Your input text is never sent to our servers.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}