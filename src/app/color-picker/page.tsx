"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Palette, Copy, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { hexToRgb, rgbToHex, rgbToHsl } from "@/lib/color-utils";

interface ColorState {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
}

export default function ColorPicker() {
  const [color, setColor] = useState<ColorState>({
    hex: "#ff0000",
    rgb: { r: 255, g: 0, b: 0 },
    hsl: { h: 0, s: 100, l: 50 },
  });
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  useEffect(() => {
    if (copiedFormat) {
      const timer = setTimeout(() => setCopiedFormat(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [copiedFormat]);

  const updateColorFromHex = (hex: string) => {
    const rgb = hexToRgb(hex);
    if (rgb) {
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      setColor({ hex, rgb, hsl });
    }
  };

  const updateColorFromRgb = (r: number, g: number, b: number) => {
    const rgb = { r, g, b };
    const hex = rgbToHex(r, g, b);
    const hsl = rgbToHsl(r, g, b);
    setColor({ hex, rgb, hsl });
  };

  const copyToClipboard = async (text: string, format: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedFormat(format);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const CopyButton = ({ text, format }: { text: string; format: string }) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copyToClipboard(text, format)}
      className="shrink-0"
    >
      {copiedFormat === format ? (
        <Check className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </Button>
  );

  const hexFormat = color.hex;
  const rgbFormat = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`;
  const hslFormat = `hsl(${color.hsl.h}, ${color.hsl.s}%, ${color.hsl.l}%)`;
  const cssVariable = `--primary: ${color.hex};`;

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Color Picker & Converter",
            description:
              "Pick colors and convert between HEX, RGB, HSL formats with live preview and CSS variable export",
            url: "https://toolshub.com/color-picker",
            applicationCategory: "DesignApplication",
            operatingSystem: "Web Browser",
            features: [
              "Interactive color picker",
              "HEX, RGB, HSL conversion",
              "Live preview",
              "CSS variable export",
              "RGB sliders",
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
            Color Picker & Converter - HEX, RGB, HSL Tools
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional color picker and converter tool. Pick colors and
            convert between HEX, RGB, HSL formats with live preview. Generate
            CSS variables and color codes instantly for web design projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Color Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="w-6 h-6 text-primary" />
                <span>Color Preview</span>
              </CardTitle>
              <CardDescription>
                Live preview of your selected color
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className="w-full h-32 rounded-lg border-2 border-border"
                style={{ backgroundColor: color.hex }}
              />

              {/* HTML Color Picker */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Pick Color
                </label>
                <input
                  type="color"
                  value={color.hex}
                  onChange={(e) => updateColorFromHex(e.target.value)}
                  className="w-full h-12 rounded cursor-pointer border border-border"
                />
              </div>
            </CardContent>
          </Card>

          {/* RGB Sliders */}
          <Card>
            <CardHeader>
              <CardTitle>RGB Controls</CardTitle>
              <CardDescription>Adjust color using RGB sliders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Red: {color.rgb.r}
                </label>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={color.rgb.r}
                  onChange={(e) =>
                    updateColorFromRgb(
                      parseInt(e.target.value),
                      color.rgb.g,
                      color.rgb.b
                    )
                  }
                  className="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Green: {color.rgb.g}
                </label>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={color.rgb.g}
                  onChange={(e) =>
                    updateColorFromRgb(
                      color.rgb.r,
                      parseInt(e.target.value),
                      color.rgb.b
                    )
                  }
                  className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Blue: {color.rgb.b}
                </label>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={color.rgb.b}
                  onChange={(e) =>
                    updateColorFromRgb(
                      color.rgb.r,
                      color.rgb.g,
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Color Formats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Formats</CardTitle>
            <CardDescription>
              Copy color values in different formats
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">HEX</label>
                <div className="flex gap-2">
                  <Input
                    value={hexFormat}
                    onChange={(e) => updateColorFromHex(e.target.value)}
                    className="flex-1"
                  />
                  <CopyButton text={hexFormat} format="hex" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">RGB</label>
                <div className="flex gap-2">
                  <Input value={rgbFormat} readOnly className="flex-1" />
                  <CopyButton text={rgbFormat} format="rgb" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">HSL</label>
                <div className="flex gap-2">
                  <Input value={hslFormat} readOnly className="flex-1" />
                  <CopyButton text={hslFormat} format="hsl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">CSS Variable</label>
                <div className="flex gap-2">
                  <Input value={cssVariable} readOnly className="flex-1" />
                  <CopyButton text={cssVariable} format="css" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* RGB Number Inputs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>RGB Values</CardTitle>
            <CardDescription>Enter specific RGB values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Red</label>
                <Input
                  type="number"
                  min="0"
                  max="255"
                  value={color.rgb.r}
                  onChange={(e) =>
                    updateColorFromRgb(
                      parseInt(e.target.value) || 0,
                      color.rgb.g,
                      color.rgb.b
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Green</label>
                <Input
                  type="number"
                  min="0"
                  max="255"
                  value={color.rgb.g}
                  onChange={(e) =>
                    updateColorFromRgb(
                      color.rgb.r,
                      parseInt(e.target.value) || 0,
                      color.rgb.b
                    )
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Blue</label>
                <Input
                  type="number"
                  min="0"
                  max="255"
                  value={color.rgb.b}
                  onChange={(e) =>
                    updateColorFromRgb(
                      color.rgb.r,
                      color.rgb.g,
                      parseInt(e.target.value) || 0
                    )
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-semibold">Color Format Guide</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">HEX Colors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Hexadecimal color codes use six digits to represent RGB
                  values. Perfect for web development and CSS styling. Format:
                  #RRGGBB (e.g., #FF0000 for red).
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">RGB Colors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  RGB represents colors using Red, Green, and Blue values from
                  0-255. Ideal for digital displays and programming. Format:
                  rgb(255, 0, 0).
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">HSL Colors</h3>
                <p className="text-sm text-muted-foreground">
                  HSL uses Hue, Saturation, and Lightness values. More intuitive
                  for color adjustments and design work. Format: hsl(0, 100%,
                  50%).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-semibold">Color Picker Features</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">
                  Interactive Color Selection
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use the visual color picker or input specific values in any
                  format. Real-time conversion between HEX, RGB, and HSL formats
                  with instant preview.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">CSS Variable Export</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Generate CSS custom properties for modern web development.
                  Copy color codes directly to clipboard in any format for
                  immediate use in your projects.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Professional Design Tool</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for web designers, developers, and digital artists.
                  Accurate color representation across different formats ensures
                  consistency in your designs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-8">
          <Palette className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Note:</strong> All color processing happens in your
            browser. No color data is sent to our servers or stored anywhere.
          </AlertDescription>
        </Alert>
      </motion.div>
    </div>
  );
}
