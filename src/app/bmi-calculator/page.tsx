"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  description: string;
}

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    let weightKg = parseFloat(weight);
    let heightM = parseFloat(height);

    if (weightUnit === "lb") {
      weightKg = weightKg * 0.453592;
    }

    if (heightUnit === "ft") {
      heightM = heightM * 0.3048;
    } else if (heightUnit === "cm") {
      heightM = heightM / 100;
    }

    const bmi = weightKg / (heightM * heightM);

    let category = "";
    let color = "";
    let description = "";

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-blue-600";
      description =
        "You may need to gain weight. Consider consulting with a healthcare provider.";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-green-600";
      description =
        "You have a healthy weight for your height. Keep up the good work!";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-orange-600";
      description =
        "You may benefit from losing some weight. Consider a balanced diet and exercise.";
    } else {
      category = "Obese";
      color = "text-red-600";
      description =
        "Consider consulting with a healthcare provider for a weight management plan.";
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      color,
      description,
    });
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "BMI Calculator",
            description:
              "Calculate your Body Mass Index (BMI) to determine if you're in a healthy weight range",
            url: "https://toolshub.com/bmi-calculator",
            applicationCategory: "HealthApplication",
            operatingSystem: "Web Browser",
          }),
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            BMI Calculator - Calculate Body Mass Index
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate your Body Mass Index instantly to determine if you&apos;re
            in a healthy weight range. Free BMI calculator with detailed health
            insights and category explanations.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span>Enter Your Measurements</span>
            </CardTitle>
            <CardDescription>
              Input your weight and height to calculate your BMI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Weight</label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="flex-1"
                    aria-label="Weight input"
                  />
                  <Select value={weightUnit} onValueChange={setWeightUnit}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">kg</SelectItem>
                      <SelectItem value="lb">lb</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Height</label>
                <div className="flex space-x-2">
                  <Input
                    type="number"
                    placeholder="Enter height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="flex-1"
                    aria-label="Height input"
                  />
                  <Select value={heightUnit} onValueChange={setHeightUnit}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cm">cm</SelectItem>
                      <SelectItem value="ft">ft</SelectItem>
                      <SelectItem value="m">m</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={calculateBMI}
                className="flex-1"
                disabled={!weight || !height}
              >
                Calculate BMI
              </Button>
              <Button
                variant="outline"
                onClick={reset}
                disabled={!weight && !height && !result}
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Your BMI Result</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="text-4xl font-bold text-primary">
                  {result.bmi}
                </div>
                <div className={`text-xl font-semibold ${result.color}`}>
                  {result.category}
                </div>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {result.description}
                </p>

                <div className="bg-muted/20 p-4 rounded-lg mt-6">
                  <h3 className="font-semibold mb-3">BMI Categories:</h3>
                  <div className="space-y-2 text-sm text-left">
                    <div className="flex justify-between">
                      <span>Underweight:</span>
                      <span className="text-blue-600">Below 18.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Normal weight:</span>
                      <span className="text-green-600">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overweight:</span>
                      <span className="text-orange-600">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Obese:</span>
                      <span className="text-red-600">30 and above</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">
                Understanding Body Mass Index
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">What is BMI?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Body Mass Index (BMI) is a measure that uses your height and
                weight to work out if your weight is healthy. The BMI
                calculation divides an adult&apos;s weight in kilograms by their
                height in metres squared. This simple calculation provides a
                quick assessment of your weight category.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">BMI Limitations</h3>
              <p className="text-sm text-muted-foreground mb-4">
                While BMI is a useful screening tool, it&apos;s not a diagnostic
                tool. BMI doesn&apos;t measure body fat directly, and it may not
                be accurate for all individuals, such as athletes with high
                muscle mass, pregnant women, elderly people, or children. It
                also doesn&apos;t account for muscle-to-fat ratio or bone
                density.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Health Consultation</h3>
              <p className="text-sm text-muted-foreground">
                For a complete health assessment, consult with a healthcare
                professional who can evaluate your overall health, body
                composition, lifestyle factors, and other important metrics
                beyond BMI. They can provide personalized advice for maintaining
                or achieving a healthy weight.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">BMI Calculator Benefits</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Quick Health Screening</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get an instant assessment of your weight category with our free
                BMI calculator. Perfect for regular health monitoring and
                tracking your fitness journey over time.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Multiple Unit Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our calculator supports both metric (kg/cm) and imperial (lb/ft)
                units, making it convenient for users worldwide. Automatic
                conversion ensures accurate results regardless of your preferred
                measurement system.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Privacy Protection</h3>
              <p className="text-sm text-muted-foreground">
                All BMI calculations happen entirely in your browser using
                client-side JavaScript. Your health data never leaves your
                device, ensuring complete privacy and security of your personal
                information.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
