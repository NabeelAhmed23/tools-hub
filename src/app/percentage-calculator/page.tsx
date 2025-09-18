"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Percent,
  Calculator,
  TrendingUp,
  TrendingDown,
  Tag,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PercentageCalculator() {
  // Percentage of a number
  const [percentValue, setPercentValue] = useState("");
  const [baseValue, setBaseValue] = useState("");
  const [percentResult, setPercentResult] = useState("");

  // Percentage change
  const [originalValue, setOriginalValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const [changeResult, setChangeResult] = useState("");
  const [changeType, setChangeType] = useState("");

  // Discount calculator
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");

  const calculatePercentage = () => {
    const percent = parseFloat(percentValue);
    const base = parseFloat(baseValue);

    if (isNaN(percent) || isNaN(base)) return;

    const result = (percent / 100) * base;
    setPercentResult(result.toFixed(2));
  };

  const calculatePercentageChange = () => {
    const original = parseFloat(originalValue);
    const newVal = parseFloat(newValue);

    if (isNaN(original) || isNaN(newVal) || original === 0) return;

    const change = ((newVal - original) / original) * 100;
    setChangeResult(Math.abs(change).toFixed(2));
    setChangeType(change >= 0 ? "increase" : "decrease");
  };

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercent);

    if (isNaN(price) || isNaN(discount)) return;

    const discountAmount = (discount / 100) * price;
    const final = price - discountAmount;

    setFinalPrice(final.toFixed(2));
    setSavingsAmount(discountAmount.toFixed(2));
  };

  const resetPercentage = () => {
    setPercentValue("");
    setBaseValue("");
    setPercentResult("");
  };

  const resetChange = () => {
    setOriginalValue("");
    setNewValue("");
    setChangeResult("");
    setChangeType("");
  };

  const resetDiscount = () => {
    setOriginalPrice("");
    setDiscountPercent("");
    setFinalPrice("");
    setSavingsAmount("");
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Percentage Calculator - Calculate Percentages & Discounts",
    description:
      "Calculate percentages, percentage changes, and discounts online. Easy-to-use percentage calculator with multiple calculation modes for business, finance, and everyday use.",
    url: "https://www.the-tools-hub.com/percentage-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Percentage calculation",
      "Percentage change calculator",
      "Discount calculator",
      "Multiple calculation modes",
      "Real-time results",
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
            Percentage Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate percentages, percentage changes, and discounts
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <Tabs defaultValue="percentage" className="w-full">
              <div className="p-6 pb-0">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger
                    value="percentage"
                    className="flex items-center space-x-2"
                  >
                    <Percent className="w-4 h-4" />
                    <span className="hidden sm:inline">Find Percentage</span>
                    <span className="sm:hidden">%</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="change"
                    className="flex items-center space-x-2"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="hidden sm:inline">% Change</span>
                    <span className="sm:hidden">Δ%</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="discount"
                    className="flex items-center space-x-2"
                  >
                    <Tag className="w-4 h-4" />
                    <span className="hidden sm:inline">Discount</span>
                    <span className="sm:hidden">$</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="percentage" className="p-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calculator className="w-5 h-5" />
                      <span>Find Percentage of a Number</span>
                    </CardTitle>
                    <CardDescription>
                      Calculate what percentage of a number equals another
                      number
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Percentage (%)
                        </label>
                        <Input
                          type="number"
                          placeholder="Enter percentage"
                          aria-label="Percentage value"
                          value={percentValue}
                          onChange={(e) => setPercentValue(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Of Number</label>
                        <Input
                          type="number"
                          placeholder="Enter base number"
                          aria-label="Base number for percentage calculation"
                          value={baseValue}
                          onChange={(e) => setBaseValue(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button onClick={calculatePercentage} className="flex-1">
                        Calculate
                      </Button>
                      <Button variant="outline" onClick={resetPercentage}>
                        Reset
                      </Button>
                    </div>

                    {percentResult && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-muted/20 rounded-lg text-center"
                      >
                        <div className="text-lg mb-2">
                          <strong>{percentValue}%</strong> of{" "}
                          <strong>{baseValue}</strong> =
                          <strong className="text-primary ml-2">
                            {percentResult}
                          </strong>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {percentValue}% × {baseValue} = {percentResult}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="change" className="p-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Percentage Increase/Decrease</span>
                    </CardTitle>
                    <CardDescription>
                      Calculate the percentage change between two values
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Original Value
                        </label>
                        <Input
                          type="number"
                          placeholder="Enter original value"
                          value={originalValue}
                          onChange={(e) => setOriginalValue(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">New Value</label>
                        <Input
                          type="number"
                          placeholder="Enter new value"
                          value={newValue}
                          onChange={(e) => setNewValue(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        onClick={calculatePercentageChange}
                        className="flex-1"
                      >
                        Calculate Change
                      </Button>
                      <Button variant="outline" onClick={resetChange}>
                        Reset
                      </Button>
                    </div>

                    {changeResult && changeType && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-muted/20 rounded-lg text-center"
                      >
                        <div className="flex items-center justify-center space-x-2 text-lg mb-2">
                          {changeType === "increase" ? (
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          ) : (
                            <TrendingDown className="w-5 h-5 text-red-600" />
                          )}
                          <span>
                            <strong
                              className={
                                changeType === "increase"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {changeResult}% {changeType}
                            </strong>
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          From {originalValue} to {newValue}
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discount" className="p-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Tag className="w-5 h-5" />
                      <span>Discount Calculator</span>
                    </CardTitle>
                    <CardDescription>
                      Calculate final price after applying a discount percentage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Original Price ($)
                        </label>
                        <Input
                          type="number"
                          placeholder="Enter original price"
                          value={originalPrice}
                          onChange={(e) => setOriginalPrice(e.target.value)}
                          step="0.01"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Discount (%)
                        </label>
                        <Input
                          type="number"
                          placeholder="Enter discount percentage"
                          value={discountPercent}
                          onChange={(e) => setDiscountPercent(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button onClick={calculateDiscount} className="flex-1">
                        Calculate Discount
                      </Button>
                      <Button variant="outline" onClick={resetDiscount}>
                        Reset
                      </Button>
                    </div>

                    {finalPrice && savingsAmount && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                            <div className="text-sm text-muted-foreground mb-1">
                              Final Price
                            </div>
                            <div className="text-2xl font-bold text-green-600">
                              ${finalPrice}
                            </div>
                          </div>
                          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                            <div className="text-sm text-muted-foreground mb-1">
                              You Save
                            </div>
                            <div className="text-2xl font-bold text-orange-600">
                              ${savingsAmount}
                            </div>
                          </div>
                        </div>
                        <div className="text-center text-sm text-muted-foreground">
                          {discountPercent}% discount on ${originalPrice} = $
                          {savingsAmount} savings
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Common Percentage Calculations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong>Find percentage:</strong> (Part ÷ Whole) × 100
              </div>
              <div>
                <strong>Find the part:</strong> (Percentage ÷ 100) × Whole
              </div>
              <div>
                <strong>Find the whole:</strong> Part ÷ (Percentage ÷ 100)
              </div>
              <div>
                <strong>Percentage change:</strong> ((New - Old) ÷ Old) × 100
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>25% of 200 = 50</div>
              <div>20% discount on $100 = $80 final price</div>
              <div>From 50 to 60 = 20% increase</div>
              <div>From 80 to 60 = 25% decrease</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">How to Use the Percentage Calculator</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Three Calculation Types</h3>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                <li><strong>Find Percentage:</strong> Enter a percentage and base number to calculate the result (e.g., 25% of 200)</li>
                <li><strong>Percentage Change:</strong> Enter original and new values to find the percentage increase or decrease</li>
                <li><strong>Discount Calculator:</strong> Enter original price and discount percentage to find final price and savings</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-2">Step-by-Step Instructions</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Select the appropriate tab based on your calculation needs, enter the required values in the input fields, and click the calculate button. Results are displayed instantly with detailed explanations and visual formatting.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">Applications and Use Cases</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Business and Finance</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Calculate profit margins, commission rates, tax amounts, and investment returns. Essential for financial analysis, budgeting, and business planning. Determine percentage-based fees, interest calculations, and financial ratios.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Sales and Marketing</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Calculate discount amounts for promotions, determine markup percentages, and analyze sales performance. Perfect for pricing strategies, promotional campaigns, and revenue analysis.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Academic and Statistics</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Convert test scores to percentages, calculate grade distributions, and analyze statistical data. Useful for educational assessments, research data analysis, and academic performance tracking.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Personal Finance</h3>
              <p className="text-sm text-muted-foreground">
                Calculate tips at restaurants, determine savings percentages, analyze expense ratios, and track budget allocations. Helpful for personal budgeting, expense tracking, and financial goal planning.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">About Percentage Calculations</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              Percentages are a way of expressing a number as a fraction of 100.
              They are widely used in finance, statistics, and everyday
              calculations like discounts, tips, and interest rates.
            </p>
            <p>
              This calculator helps you perform the most common percentage
              calculations: finding a percentage of a number, calculating
              percentage changes, and computing discounted prices.
            </p>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}
