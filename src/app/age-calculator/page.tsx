"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Gift, Clock } from "lucide-react";
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

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalMonths: number;
  nextBirthdayDays: number;
  nextBirthdayDate: string;
}

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      return; // Invalid future date
    }

    // Calculate age
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total days
    const timeDiff = today.getTime() - birth.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    // Calculate total months (approximate)
    const totalMonths = years * 12 + months;

    // Calculate next birthday
    const nextBirthday = new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const nextBirthdayDiff = nextBirthday.getTime() - today.getTime();
    const nextBirthdayDays = Math.ceil(nextBirthdayDiff / (1000 * 3600 * 24));

    setAgeResult({
      years,
      months,
      days,
      totalDays,
      totalMonths,
      nextBirthdayDays,
      nextBirthdayDate: nextBirthday.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    });
  };

  const reset = () => {
    setBirthDate("");
    setAgeResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Age Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate your exact age and find out when your next birthday is
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span>Birth Date</span>
            </CardTitle>
            <CardDescription>
              Enter your date of birth to calculate your age
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date of Birth</label>
                <Input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={calculateAge}
                className="flex-1"
                disabled={!birthDate}
              >
                Calculate Age
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {ageResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>Your Age</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {ageResult.years}
                    </div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {ageResult.months}
                    </div>
                    <div className="text-sm text-muted-foreground">Months</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {ageResult.days}
                    </div>
                    <div className="text-sm text-muted-foreground">Days</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Additional Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Total Days Lived
                    </div>
                    <div className="text-xl font-semibold">
                      {ageResult.totalDays.toLocaleString()}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Total Months
                    </div>
                    <div className="text-xl font-semibold">
                      {ageResult.totalMonths}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="w-5 h-5" />
                  <span>Next Birthday</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {ageResult.nextBirthdayDays}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {ageResult.nextBirthdayDays === 0
                        ? "Happy Birthday! 🎉"
                        : ageResult.nextBirthdayDays === 1
                        ? "day until your birthday"
                        : "days until your birthday"}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Your next birthday is on{" "}
                    <strong>{ageResult.nextBirthdayDate}</strong>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>About Age Calculation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              This age calculator determines your exact age in years, months,
              and days based on your birth date and today&apos;s date. It also
              shows additional information like total days lived and countdown
              to your next birthday.
            </p>
            <p>
              The calculation accounts for leap years and varying month lengths
              to provide the most accurate age calculation possible.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" className="mt-8" />
    </div>
  );
}
