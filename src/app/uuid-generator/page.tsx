"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Fingerprint, RefreshCw, Download, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdPlaceholder from "@/components/AdPlaceholder";
import { CopyButton } from "@/components/copy-button";
import { generateUUID } from "@/lib/crypto-utils";

export default function UUIDGenerator() {
  const [quantity, setQuantity] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);

  const generateUUIDs = (quantity: number) => {
    const newUuids = Array.from({ length: quantity }, () => generateUUID());
    setUuids(newUuids);
  };

  const generateMore = (quantity: number) => {
    const newUuids = Array.from({ length: quantity }, () => generateUUID());
    setUuids((prev) => [...prev, ...newUuids]);
  };

  const clearAll = () => {
    setUuids([]);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
  };

  const downloadAsFile = () => {
    if (uuids.length === 0) return;

    const content = uuids.join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `uuids-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    generateUUIDs(quantity);
  }, [quantity]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "UUID v4 Generator - Unique Identifier Generator",
    description: "Generate cryptographically secure UUID version 4 identifiers in bulk. RFC 4122 compliant UUID generator for database keys, API tracking, and distributed systems.",
    url: "https://www.the-tools-hub.com/uuid-generator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "UUID v4 generation",
      "Bulk generation (1-100)",
      "RFC 4122 compliant",
      "Cryptographically secure",
      "Export to file"
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
            UUID v4 Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate cryptographically secure UUID version 4 identifiers
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Fingerprint className="w-6 h-6 text-primary" />
              <span>UUID Generation Options</span>
            </CardTitle>
            <CardDescription>
              Configure how many UUIDs to generate
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Quantity</label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.min(100, Math.max(1, parseInt(e.target.value) || 1))
                    )
                  }
                  className="w-24"
                />
              </div>
              <div className="flex-1" />
              <div className="text-sm text-muted-foreground">1-100 UUIDs</div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Button
                onClick={() => generateUUIDs(quantity)}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Generate New</span>
              </Button>

              {uuids.length > 0 && (
                <>
                  <Button
                    onClick={() => generateMore(quantity)}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Generate More</span>
                  </Button>

                  <Button
                    onClick={copyAll}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <span>Copy All</span>
                  </Button>

                  <Button
                    onClick={downloadAsFile}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </Button>

                  <Button
                    onClick={clearAll}
                    variant="outline"
                    className="flex items-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Clear</span>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {uuids.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Generated UUIDs ({uuids.length})</CardTitle>
                <CardDescription>
                  Click any UUID to copy it to your clipboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {uuids.map((uuid, index) => (
                    <motion.div
                      key={`${uuid}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center space-x-2 p-2 hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      <span className="text-xs text-muted-foreground w-8">
                        {index + 1}
                      </span>
                      <code className="flex-1 font-mono text-sm bg-muted/20 p-2 rounded">
                        {uuid}
                      </code>
                      <CopyButton text={uuid} size="sm" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>About UUID v4</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                UUID (Universally Unique Identifier) version 4 uses random or
                pseudo-random numbers. The format is:
              </p>
              <code className="block mt-2 p-2 bg-muted rounded text-xs">
                xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
              </code>
              <div className="mt-3 space-y-2 text-sm">
                <div>
                  <strong>x:</strong> Random hexadecimal digit
                </div>
                <div>
                  <strong>4:</strong> Version identifier
                </div>
                <div>
                  <strong>y:</strong> 8, 9, A, or B (variant bits)
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UUID Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-1 text-sm">
                <li>Database primary keys</li>
                <li>API request/response IDs</li>
                <li>Session identifiers</li>
                <li>File naming</li>
                <li>Distributed system identifiers</li>
                <li>Transaction tracking</li>
                <li>Message queue IDs</li>
                <li>Microservice correlation IDs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>UUID Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Uniqueness</h4>
                <p className="text-muted-foreground">
                  Extremely low probability of duplication (practically zero for
                  reasonable numbers)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Format</h4>
                <p className="text-muted-foreground">
                  36 characters: 32 hexadecimal digits + 4 hyphens
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Standards</h4>
                <p className="text-muted-foreground">
                  RFC 4122 compliant, widely supported across languages and
                  systems
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" className="mt-8" />
    </div>
  );
}
