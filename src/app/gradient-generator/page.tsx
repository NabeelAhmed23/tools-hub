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

import {
  generateGradientCSS,
  gradientPresets,
  type ColorStop,
  type GradientConfig,
} from "@/lib/gradient-utils";

export default function GradientGenerator() {
  const [gradientType, setGradientType] = useState<"linear" | "radial">(
    "linear"
  );
  const [angle, setAngle] = useState(90);
  const [colorStops, setColorStops] = useState<ColorStop[]>([
    { color: "#ff6b6b", position: 0 },
    { color: "#4ecdc4", position: 100 },
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
      const newPosition =
        colorStops.length === 0
          ? 50
          : (colorStops[colorStops.length - 1].position +
              colorStops[0].position) /
            2;

      setColorStops([
        ...colorStops,
        { color: "#ffffff", position: newPosition },
      ]);
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
      .forEach((stop) => {
        gradient.addColorStop(stop.position / 100, stop.color);
      });

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    canvas.toBlob((blob) => {
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
            description:
              "Create beautiful CSS gradients with live preview and multiple export formats",
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
            Create beautiful CSS gradients with live preview and multiple export
            formats. Generate linear and radial gradients, export as CSS, SCSS,
            or Tailwind config with instant preview.
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
                      aria-label="Gradient angle slider"
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
                    aria-label="Add color stop"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {colorStops
                  .sort((a, b) => a.position - b.position)
                  .map((stop, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border border-border rounded"
                    >
                      <input
                        type="color"
                        value={stop.color}
                        onChange={(e) =>
                          updateColorStop(index, { color: e.target.value })
                        }
                        aria-label={`Color picker for stop ${index + 1}`}
                        className="w-12 h-8 rounded cursor-pointer border border-border"
                      />

                      <div className="flex-1 space-y-2">
                        <Input
                          type="text"
                          value={stop.color}
                          onChange={(e) =>
                            updateColorStop(index, { color: e.target.value })
                          }
                          aria-label={`Color code for stop ${index + 1}`}
                        />
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={stop.position}
                          onChange={(e) =>
                            updateColorStop(index, {
                              position: parseFloat(e.target.value),
                            })
                          }
                          placeholder="Position %"
                          aria-label={`Position percentage for stop ${index + 1}`}
                        />
                      </div>

                      {colorStops.length > 2 && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeColorStop(index)}
                          aria-label={`Remove color stop ${index + 1}`}
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
                <CardDescription>Click a preset to apply it</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {gradientPresets.map((preset, index) => (
                    <div
                      key={index}
                      className="h-12 rounded cursor-pointer border-2 border-border hover:border-primary transition-colors"
                      style={{
                        background: generateGradientCSS(
                          preset.stops,
                          preset.angle,
                          preset.type
                        ),
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
                      aria-label="Copy CSS gradient code"
                    >
                      {copiedFormat === "css" ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <Textarea
                    value={cssOutput}
                    readOnly
                    rows={2}
                    aria-label="CSS gradient code output"
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
                      aria-label="Copy SCSS gradient variable"
                    >
                      {copiedFormat === "scss" ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <Textarea
                    value={scssOutput}
                    readOnly
                    rows={2}
                    aria-label="SCSS gradient variable output"
                    className="font-mono text-sm resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">
                      Tailwind Config
                    </label>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() =>
                        copyToClipboard(tailwindOutput, "tailwind")
                      }
                      aria-label="Copy Tailwind CSS gradient config"
                    >
                      {copiedFormat === "tailwind" ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  <Textarea
                    value={tailwindOutput}
                    readOnly
                    rows={3}
                    aria-label="Tailwind CSS gradient config output"
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
            <strong>Tip:</strong> Linear gradients flow in a straight line at
            the specified angle. Radial gradients emanate from the center
            outward in a circular pattern.
          </AlertDescription>
        </Alert>

        {/* How to Use Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">How to Use the CSS Gradient Generator</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Step-by-Step Instructions</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Choose between Linear or Radial gradient types using the buttons</li>
                <li>For linear gradients, adjust the angle using the slider (0° to 360°)</li>
                <li>Add color stops by clicking the plus button (up to 6 colors supported)</li>
                <li>Select colors using the color picker or enter hex codes manually</li>
                <li>Adjust position percentages for each color stop to control the gradient flow</li>
                <li>Use preset gradients for quick inspiration and starting points</li>
                <li>Preview your gradient in real-time in the preview panel</li>
                <li>Copy CSS, SCSS, or Tailwind code using the export buttons</li>
                <li>Download your gradient as a PNG image for design mockups</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-2">Advanced Gradient Techniques</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Create sophisticated gradients by combining multiple color stops with precise positioning. Linear gradients work best for backgrounds, buttons, and overlays, while radial gradients are perfect for spotlight effects, buttons, and decorative elements. Experiment with angle adjustments to create diagonal flows that complement your design layout.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits and Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-semibold">Benefits of CSS Gradients</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Performance and Scalability</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  CSS gradients are vector-based and scale perfectly across all screen sizes without quality loss. They load faster than image files, reduce HTTP requests, and consume less bandwidth. Modern browsers hardware-accelerate gradient rendering for smooth performance across devices.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Design Flexibility</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create unlimited color combinations without needing image editing software. Easily modify colors, positions, and angles through CSS. Gradients work seamlessly with responsive design, dark mode themes, and can be combined with other CSS effects like shadows and transitions.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Modern Web Standards</h3>
                <p className="text-sm text-muted-foreground">
                  CSS gradients are supported by all modern browsers and provide fallback options for older browsers. They integrate perfectly with CSS frameworks like Tailwind CSS, Bootstrap, and custom design systems. Use them for backgrounds, borders, text effects, and complex UI elements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-semibold">Gradient Applications in Web Design</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">User Interface Elements</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Enhance buttons, navigation bars, and form elements with subtle gradients that provide depth and visual hierarchy. Create hover effects and state changes that guide user interaction. Use gradients for progress bars, loading indicators, and status badges.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Background Design</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Design compelling hero sections, card backgrounds, and section dividers using gradient backgrounds. Create overlay effects for images and videos. Implement branded color schemes that reinforce your visual identity across web pages and applications.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Creative Effects and Branding</h3>
                <p className="text-sm text-muted-foreground">
                  Generate Instagram-style story backgrounds, product showcase effects, and artistic elements. Use gradients for logo backgrounds, promotional banners, and social media graphics. Create color schemes that match your brand guidelines and design system requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Formats Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">Export Formats and Integration Guide</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">CSS Integration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Copy the generated CSS background property directly into your stylesheets. Works with inline styles, external CSS files, and CSS-in-JS solutions. Perfect for React, Vue, Angular, and vanilla HTML projects. Use the background property on any element that supports CSS backgrounds.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">SCSS and Sass Variables</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Save gradients as SCSS variables for reusable design tokens in your preprocessor workflow. Easily maintain consistent gradients across large projects and design systems. Combine with mixins and functions for dynamic gradient generation based on theme variables.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tailwind CSS Configuration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Add custom gradients to your Tailwind CSS configuration file for utility-first development. Use generated gradients as background image utilities throughout your project. Perfect for component libraries and design system implementations with consistent gradient patterns.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">PNG Download for Design Tools</h3>
              <p className="text-sm text-muted-foreground">
                Download gradients as high-quality PNG images for use in design software like Figma, Sketch, Adobe XD, and Photoshop. Create textures, overlays, and background elements for print design, presentations, and marketing materials. Perfect for design mockups and client presentations.
              </p>
            </div>
          </CardContent>
        </Card>

        <Alert className="mb-8">
          <Rainbow className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Note:</strong> All gradient generation happens in your browser. No gradient data is sent to our servers or stored anywhere. Your creative work remains completely private.
          </AlertDescription>
        </Alert>
      </motion.div>

    </div>
  );
}
