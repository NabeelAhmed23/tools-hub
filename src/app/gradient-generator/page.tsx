"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rainbow, Copy, Download, Plus, Minus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
import { generateGradientCSS, gradientPresets, type ColorStop, type GradientConfig } from "@/lib/gradient-utils";

export default function GradientGenerator() {
  const [gradientType, setGradientType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState(90);
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { color: "#ff6b6b", position: 0 },
    { color: "#4ecdc4", position: 100 }
  ]);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const gradientCSS = generateGradientCSS(colorStops, angle, gradientType);

  useEffect(() => {
    if (copiedFormat) {
      const timer = setTimeout(() => setCopiedFormat(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedFormat]);

  const addColorStop = () => {
    if (colorStops.length < 6) {
      const newPosition = colorStops.length === 0 ? 50 :
        (colorStops[colorStops.length - 1].position + colorStops[0].position) / 2;

      setColorStops([...colorStops, { color: "#ffffff", position: newPosition }]);
    }
  };

  const removeColorStop = (index: number) => {
    if (colorStops.length > 2) {
      setColorStops(colorStops.filter((_, i) => i !== index));
    }
  };

  const updateColorStop = (index: number, updates: Partial<ColorStop>) => {
    const newStops = colorStops.map((stop, i) =>
      i === index ? { ...stop, ...updates } : stop
    );
    setColorStops(newStops);
  };

  const loadPreset = (preset: GradientConfig) => {
    setGradientType(preset.type);
    setAngle(preset.angle);
    setColorStops([...preset.stops]);
  };

  const copyToClipboard = async (text: string, format: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(format);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const downloadAsPNG = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 400;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create gradient based on type
    let gradient;
    if (gradientType === "linear") {
      const radians = (angle - 90) * (Math.PI / 180);
      const x1 = 200 - Math.cos(radians) * 200;
      const y1 = 200 - Math.sin(radians) * 200;
      const x2 = 200 + Math.cos(radians) * 200;
      const y2 = 200 + Math.sin(radians) * 200;
      gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    } else {
      gradient = ctx.createRadialGradient(200, 200, 0, 200, 200, 200);
    }

    // Add color stops
    colorStops
      .sort((a, b) => a.position - b.position)
      .forEach(stop => {
        gradient.addColorStop(stop.position / 100, stop.color);
      });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    canvas.toBlob(blob => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "gradient.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    });
  };

  // Format outputs
  const cssOutput = `background: ${gradientCSS};`;
  const scssOutput = `$gradient: ${gradientCSS};`;
  const tailwindOutput = `backgroundImage: {
  'custom-gradient': '${gradientCSS}'
}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Gradient Generator",
            description: "Create beautiful CSS gradients with live preview and multiple export formats",
            url: "https://toolshub.com/gradient-generator",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            features: [
              "Linear and radial gradients",
              "Multiple color stops",
              "Live preview",
              "CSS, SCSS, Tailwind export",
              "PNG download",
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
            CSS Gradient Generator - Create Beautiful Gradients
          </h1>
          <p className="text-lg text-muted-foreground">
            Create beautiful CSS gradients with live preview and multiple export formats. Generate linear and radial gradients, export as CSS, SCSS, or Tailwind config with instant preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Controls */}
          <div className="space-y-6">
            {/* Gradient Type */}
            <Card>
              <CardHeader>
                <CardTitle>Gradient Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    variant={gradientType === "linear" ? "default" : "outline"}
                    onClick={() => setGradientType("linear")}
                  >
                    Linear
                  </Button>
                  <Button
                    variant={gradientType === "radial" ? "default" : "outline"}
                    onClick={() => setGradientType("radial")}
                  >
                    Radial
                  </Button>
                </div>

                {gradientType === "linear" && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">
                      Angle: {angle}°
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={angle}
                      onChange={(e) => setAngle(parseInt(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Color Stops */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Color Stops
                  <Button
                    size="sm"
                    onClick={addColorStop}
                    disabled={colorStops.length >= 6}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {colorStops
                  .sort((a, b) => a.position - b.position)
                  .map((stop, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border border-border rounded">
                      <input
                        type="color"
                        value={stop.color}
                        onChange={(e) => updateColorStop(index, { color: e.target.value })}
                        className="w-12 h-8 rounded cursor-pointer border border-border"
                      />

                      <div className="flex-1 space-y-2">
                        <Input
                          type="text"
                          value={stop.color}
                          onChange={(e) => updateColorStop(index, { color: e.target.value })}
                        />
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={stop.position}
                          onChange={(e) => updateColorStop(index, { position: parseFloat(e.target.value) })}
                          placeholder="Position %"
                        />
                      </div>

                      {colorStops.length > 2 && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeColorStop(index)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
              </CardContent>
            </Card>

            {/* Presets */}
            <Card>
              <CardHeader>
                <CardTitle>Presets</CardTitle>
                <CardDescription>
                  Click a preset to apply it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {gradientPresets.map((preset, index) => (
                    <div
                      key={index}
                      className="h-12 rounded cursor-pointer border-2 border-border hover:border-primary transition-colors"
                      style={{
                        background: generateGradientCSS(preset.stops, preset.angle, preset.type)
                      }}
                      onClick={() => loadPreset(preset)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className="w-full h-64 rounded-lg border border-border"
                  style={{ background: gradientCSS }}
                />

                <div className="flex gap-2">
                  <Button onClick={downloadAsPNG} size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download PNG
                  </Button>
                  <Button
                    onClick={() => copyToClipboard(gradientCSS, "preview")}
                    variant="outline"
                    size="sm"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copiedFormat === "preview" ? "Copied!" : "Copy CSS"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Export Formats */}
            <Card>
              <CardHeader>
                <CardTitle>Export Formats</CardTitle>
                <CardDescription>
                  Copy code in different formats
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">CSS</label>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(cssOutput, "css")}
                    >
                      {copiedFormat === "css" ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <Textarea
                    value={cssOutput}
                    readOnly
                    rows={2}
                    className="font-mono text-sm resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">SCSS Variable</label>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(scssOutput, "scss")}
                    >
                      {copiedFormat === "scss" ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <Textarea
                    value={scssOutput}
                    readOnly
                    rows={2}
                    className="font-mono text-sm resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Tailwind Config</label>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(tailwindOutput, "tailwind")}
                    >
                      {copiedFormat === "tailwind" ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <Textarea
                    value={tailwindOutput}
                    readOnly
                    rows={3}
                    className="font-mono text-sm resize-none"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mb-8">
          <Rainbow className="h-4 w-4" />
          <AlertDescription>
            <strong>Tip:</strong> Linear gradients flow in a straight line at the specified angle.
            Radial gradients emanate from the center outward in a circular pattern.
          </AlertDescription>
        </Alert>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}