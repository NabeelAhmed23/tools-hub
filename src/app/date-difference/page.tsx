"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CalendarDays } from "lucide-react";
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

interface DateDifference {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export default function DateDifferenceCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [difference, setDifference] = useState<DateDifference | null>(null);

  const calculateDifference = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) return; // Invalid date range

    // Calculate the difference in years, months, and days
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      const lastMonthDate = new Date(end.getFullYear(), end.getMonth(), 0);
      days += lastMonthDate.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate total differences
    const timeDiff = end.getTime() - start.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(timeDiff / (1000 * 3600));
    const totalMinutes = Math.floor(timeDiff / (1000 * 60));
    const totalSeconds = Math.floor(timeDiff / 1000);

    setDifference({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalHours,
      totalMinutes,
      totalSeconds,
    });
  };

  const reset = () => {
    setStartDate("");
    setEndDate("");
    setDifference(null);
  };

  const setToday = (field: "start" | "end") => {
    const today = new Date().toISOString().split("T")[0];
    if (field === "start") {
      setStartDate(today);
    } else {
      setEndDate(today);
    }
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Date Difference Calculator",
    description:
      "Calculate the exact difference between two dates in years, months, days, hours, minutes, and seconds. Free online date calculator with precise results.",
    url: "https://www.the-tools-hub.com/date-difference",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Date difference in multiple units",
      "Years, months, days calculation",
      "Total time calculations",
      "Quick date selection",
      "Privacy-focused - no data stored",
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

      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Date Difference Calculator - Calculate Days Between Dates
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate the exact difference between two dates in years, months, days, hours, minutes, and seconds. Perfect for project planning, age calculations, and event planning with precise results.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span>Select Date Range</span>
            </CardTitle>
            <CardDescription>
              Choose the start and end dates to calculate the difference
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Start Date</label>
                <div className="flex space-x-2">
                  <Input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setToday("start")}
                    className="whitespace-nowrap"
                  >
                    Today
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">End Date</label>
                <div className="flex space-x-2">
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    className="flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setToday("end")}
                    className="whitespace-nowrap"
                  >
                    Today
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={calculateDifference}
                className="flex-1"
                disabled={!startDate || !endDate}
              >
                Calculate Difference
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {difference && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarDays className="w-5 h-5" />
                  <span>Primary Difference</span>
                </CardTitle>
                <CardDescription>
                  Years, months, and days between the selected dates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {difference.years}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {difference.years === 1 ? "Year" : "Years"}
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {difference.months}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {difference.months === 1 ? "Month" : "Months"}
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-3xl font-bold text-primary">
                      {difference.days}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {difference.days === 1 ? "Day" : "Days"}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Total Differences</span>
                </CardTitle>
                <CardDescription>
                  Complete duration expressed in different units
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-semibold text-blue-600">
                      {formatNumber(difference.totalDays)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Total Days
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-semibold text-green-600">
                      {formatNumber(difference.totalWeeks)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Total Weeks
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-semibold text-purple-600">
                      {formatNumber(difference.totalHours)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Total Hours
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/30 rounded-lg">
                    <div className="text-xl font-semibold text-orange-600">
                      {formatNumber(difference.totalMinutes)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Total Minutes
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center p-3 bg-muted/20 rounded-lg">
                  <div className="text-lg font-semibold text-red-600">
                    {formatNumber(difference.totalSeconds)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Seconds
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">From:</span>
                    <span className="font-medium">
                      {new Date(startDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">To:</span>
                    <span className="font-medium">
                      {new Date(endDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 text-primary font-medium">
                    <span>Duration:</span>
                    <span>
                      {difference.years > 0 && `${difference.years}y `}
                      {difference.months > 0 && `${difference.months}m `}
                      {difference.days > 0 && `${difference.days}d`}
                      {difference.years === 0 &&
                        difference.months === 0 &&
                        difference.days === 0 &&
                        "Same day"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-semibold">Common Use Cases</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-1 text-sm">
                <li>Calculate your exact age</li>
                <li>Project duration planning</li>
                <li>Relationship milestones</li>
                <li>Employment duration</li>
                <li>Time between events</li>
                <li>Historical date calculations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-semibold">Quick Tips</h2>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ul className="space-y-1 text-sm">
                <li>Use &quot;Today&quot; buttons for current date</li>
                <li>End date must be after start date</li>
                <li>Accounts for leap years accurately</li>
                <li>Shows both exact and total durations</li>
                <li>Includes time down to seconds</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">About Date Calculations</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              This calculator determines the precise difference between two
              dates, accounting for varying month lengths and leap years. It
              provides both the exact duration in years, months, and days, as
              well as the total duration expressed in different units.
            </p>
            <p>
              The calculations are accurate and consider all calendar
              complexities, making it perfect for age calculations, project
              planning, or any situation where you need to know the exact time
              between two dates.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" className="mt-8" />
    </div>
  );
}
