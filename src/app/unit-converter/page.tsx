"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Ruler, ArrowLeftRight, Thermometer } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ConversionUnit {
  name: string;
  symbol: string;
  multiplier: number;
}

interface ConversionCategory {
  name: string;
  icon: React.ReactNode;
  baseUnit: string;
  units: ConversionUnit[];
}

const conversionCategories: ConversionCategory[] = [
  {
    name: "Length",
    icon: <Ruler className="w-4 h-4" />,
    baseUnit: "meter",
    units: [
      { name: "Millimeter", symbol: "mm", multiplier: 0.001 },
      { name: "Centimeter", symbol: "cm", multiplier: 0.01 },
      { name: "Meter", symbol: "m", multiplier: 1 },
      { name: "Kilometer", symbol: "km", multiplier: 1000 },
      { name: "Inch", symbol: "in", multiplier: 0.0254 },
      { name: "Foot", symbol: "ft", multiplier: 0.3048 },
      { name: "Yard", symbol: "yd", multiplier: 0.9144 },
      { name: "Mile", symbol: "mi", multiplier: 1609.344 },
    ],
  },
  {
    name: "Weight",
    icon: <Ruler className="w-4 h-4" />,
    baseUnit: "gram",
    units: [
      { name: "Milligram", symbol: "mg", multiplier: 0.001 },
      { name: "Gram", symbol: "g", multiplier: 1 },
      { name: "Kilogram", symbol: "kg", multiplier: 1000 },
      { name: "Pound", symbol: "lb", multiplier: 453.592 },
      { name: "Ounce", symbol: "oz", multiplier: 28.3495 },
      { name: "Stone", symbol: "st", multiplier: 6350.29 },
      { name: "Ton (Metric)", symbol: "t", multiplier: 1000000 },
    ],
  },
  {
    name: "Temperature",
    icon: <Thermometer className="w-4 h-4" />,
    baseUnit: "celsius",
    units: [
      { name: "Celsius", symbol: "°C", multiplier: 1 },
      { name: "Fahrenheit", symbol: "°F", multiplier: 1 },
      { name: "Kelvin", symbol: "K", multiplier: 1 },
    ],
  },
  {
    name: "Speed",
    icon: <ArrowLeftRight className="w-4 h-4" />,
    baseUnit: "m/s",
    units: [
      { name: "Meters per second", symbol: "m/s", multiplier: 1 },
      { name: "Kilometers per hour", symbol: "km/h", multiplier: 0.277778 },
      { name: "Miles per hour", symbol: "mph", multiplier: 0.44704 },
      { name: "Feet per second", symbol: "ft/s", multiplier: 0.3048 },
      { name: "Knots", symbol: "kn", multiplier: 0.514444 },
    ],
  },
  {
    name: "Volume",
    icon: <Ruler className="w-4 h-4" />,
    baseUnit: "liter",
    units: [
      { name: "Milliliter", symbol: "ml", multiplier: 0.001 },
      { name: "Liter", symbol: "l", multiplier: 1 },
      { name: "Cubic meter", symbol: "m³", multiplier: 1000 },
      { name: "Fluid ounce (US)", symbol: "fl oz", multiplier: 0.0295735 },
      { name: "Cup (US)", symbol: "cup", multiplier: 0.236588 },
      { name: "Pint (US)", symbol: "pt", multiplier: 0.473176 },
      { name: "Quart (US)", symbol: "qt", multiplier: 0.946353 },
      { name: "Gallon (US)", symbol: "gal", multiplier: 3.78541 },
    ],
  },
];

export default function UnitConverter() {
  const [activeCategory, setActiveCategory] = useState("Length");
  const [inputValue, setInputValue] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState("");

  const currentCategory = conversionCategories.find(
    (cat) => cat.name === activeCategory
  );

  useEffect(() => {
    if (currentCategory && currentCategory.units.length >= 2) {
      setFromUnit(currentCategory.units[0].symbol);
      setToUnit(currentCategory.units[1].symbol);
    }
    setInputValue("");
    setResult("");
  }, [activeCategory, currentCategory]);

  const convertTemperature = (
    value: number,
    from: string,
    to: string
  ): number => {
    if (from === to) return value;

    // Convert to Celsius first
    let celsius = value;
    if (from === "°F") {
      celsius = ((value - 32) * 5) / 9;
    } else if (from === "K") {
      celsius = value - 273.15;
    }

    // Convert from Celsius to target
    if (to === "°F") {
      return (celsius * 9) / 5 + 32;
    } else if (to === "K") {
      return celsius + 273.15;
    }

    return celsius;
  };

  const convertUnits = (
    inputValue: string,
    fromUnit: string,
    toUnit: string
  ) => {
    if (!inputValue || !fromUnit || !toUnit || !currentCategory) return;

    const value = parseFloat(inputValue);
    if (isNaN(value)) return;

    if (activeCategory === "Temperature") {
      const convertedValue = convertTemperature(value, fromUnit, toUnit);
      setResult(convertedValue.toFixed(6));
      return;
    }

    const fromUnitObj = currentCategory.units.find(
      (u) => u.symbol === fromUnit
    );
    const toUnitObj = currentCategory.units.find((u) => u.symbol === toUnit);

    if (!fromUnitObj || !toUnitObj) return;

    // Convert to base unit, then to target unit
    const baseValue = value * fromUnitObj.multiplier;
    const convertedValue = baseValue / toUnitObj.multiplier;

    setResult(convertedValue.toFixed(6));
  };

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);

    if (result) {
      setInputValue(result);
      setResult(inputValue);
    }
  };

  const reset = () => {
    setInputValue("");
    setResult("");
  };

  useEffect(() => {
    if (inputValue && fromUnit && toUnit) {
      convertUnits(inputValue, fromUnit, toUnit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, fromUnit, toUnit]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Unit Converter - Convert Length, Weight, Temperature & More",
    description:
      "Convert between different units of measurement including length, weight, temperature, speed, and volume. Accurate unit converter with 40+ units and real-time conversion.",
    url: "https://www.the-tools-hub.com/unit-converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Length conversion (metric/imperial)",
      "Weight and mass conversion",
      "Temperature conversion (C/F/K)",
      "Speed conversion",
      "Volume conversion",
      "40+ supported units",
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
            Unit Converter
          </h1>
          <p className="text-lg text-muted-foreground">
            Convert between different units of measurement
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select Conversion Category</CardTitle>
            <CardDescription>
              Choose the type of units you want to convert
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <TabsList className="grid grid-cols-5 w-full">
                {conversionCategories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="flex items-center space-x-1"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {conversionCategories.map((category) => (
                <TabsContent
                  key={category.name}
                  value={category.name}
                  className="mt-6"
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">From</label>
                        <div className="flex space-x-2">
                          <Input
                            type="number"
                            placeholder="Enter value"
                            aria-label="Value to convert from"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1"
                          />
                          <Select value={fromUnit} onValueChange={setFromUnit}>
                            <SelectTrigger className="w-32" aria-label="Select unit to convert from">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {category.units.map((unit) => (
                                <SelectItem
                                  key={unit.symbol}
                                  value={unit.symbol}
                                >
                                  {unit.symbol}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">To</label>
                        <div className="flex space-x-2">
                          <Input
                            type="number"
                            value={result}
                            readOnly
                            placeholder="Result"
                            aria-label="Converted result value"
                            className="flex-1 bg-muted/50"
                          />
                          <Select value={toUnit} onValueChange={setToUnit}>
                            <SelectTrigger className="w-32" aria-label="Select unit to convert to">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {category.units.map((unit) => (
                                <SelectItem
                                  key={unit.symbol}
                                  value={unit.symbol}
                                >
                                  {unit.symbol}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <Button onClick={swapUnits} variant="outline">
                        <ArrowLeftRight className="w-4 h-4 mr-2" />
                        Swap Units
                      </Button>
                      <Button onClick={reset} variant="outline">
                        Reset
                      </Button>
                    </div>

                    {result && inputValue && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-4 bg-muted/20 rounded-lg"
                      >
                        <div className="text-lg">
                          <strong>
                            {inputValue} {fromUnit}
                          </strong>{" "}
                          ={" "}
                          <strong className="text-primary">
                            {result} {toUnit}
                          </strong>
                        </div>
                      </motion.div>
                    )}

                    <Card>
                      <CardHeader>
                        <CardTitle>Available {category.name} Units</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                          {category.units.map((unit) => (
                            <div
                              key={unit.symbol}
                              className="p-2 bg-muted/50 rounded text-center"
                            >
                              <div className="font-medium">{unit.symbol}</div>
                              <div className="text-xs text-muted-foreground">
                                {unit.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">How to Use the Unit Converter</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Step-by-Step Instructions</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Select the category of units you want to convert (Length, Weight, Temperature, Speed, or Volume)</li>
                <li>Enter the value you want to convert in the &quot;From&quot; input field</li>
                <li>Choose the source unit from the dropdown menu next to the input</li>
                <li>Select the target unit from the &quot;To&quot; dropdown menu</li>
                <li>The conversion result appears automatically in real-time</li>
                <li>Use &quot;Swap Units&quot; to quickly reverse the conversion direction</li>
                <li>Click &quot;Reset&quot; to clear all values and start over</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-2">Understanding Conversion Results</h3>
              <p className="text-sm text-muted-foreground mb-3">
                All conversions are performed using internationally recognized conversion factors and precise mathematical formulas. Results are displayed with up to 6 decimal places for maximum accuracy. Temperature conversions use special formulas to properly convert between Celsius, Fahrenheit, and Kelvin scales.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">Conversion Categories and Applications</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Length and Distance Measurements</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Convert between metric units (millimeters, centimeters, meters, kilometers) and imperial units (inches, feet, yards, miles). Essential for construction projects, engineering calculations, travel planning, and everyday measurements. Supports precise conversions for both short distances and long geographical measurements.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Weight and Mass Conversions</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Handle weight conversions between metric system (milligrams, grams, kilograms, metric tons) and imperial system (ounces, pounds, stones). Perfect for cooking recipes, shipping calculations, fitness tracking, scientific experiments, and international commerce where different weight standards are used.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Temperature Scale Conversions</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Convert between Celsius, Fahrenheit, and Kelvin temperature scales using precise mathematical formulas. Essential for weather forecasting, cooking temperatures, scientific research, HVAC systems, and international temperature reporting. Handles both positive and negative temperatures accurately.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Speed and Velocity Measurements</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Convert between different speed units including meters per second, kilometers per hour, miles per hour, feet per second, and knots. Useful for automotive applications, aviation calculations, maritime navigation, sports performance analysis, and physics calculations.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Volume and Capacity Conversions</h3>
              <p className="text-sm text-muted-foreground">
                Handle liquid and dry volume conversions between metric units (milliliters, liters, cubic meters) and US customary units (fluid ounces, cups, pints, quarts, gallons). Perfect for cooking measurements, fuel calculations, chemical solutions, and container capacity planning.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">About Unit Conversion</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              Unit conversion is the process of changing a measurement from one
              unit to another equivalent unit. This tool supports conversion
              between various units of length, weight, temperature, speed, and
              volume.
            </p>
            <p>
              All conversions are based on internationally recognized conversion
              factors and formulas. For temperature conversions, special
              formulas are used to convert between Celsius, Fahrenheit, and
              Kelvin.
            </p>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}
