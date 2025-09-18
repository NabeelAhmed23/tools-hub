"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, PieChart as PieChartIcon, TrendingUp } from "lucide-react";
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
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface LoanResult {
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
  principalAmount: number;
}

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [tenureType, setTenureType] = useState("years");
  const [loanResult, setLoanResult] = useState<LoanResult | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const timeMonths =
      tenureType === "years" ? parseFloat(tenure) * 12 : parseFloat(tenure);

    if (!principal || !rate || !timeMonths) return;

    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi =
      (principal * rate * Math.pow(1 + rate, timeMonths)) /
      (Math.pow(1 + rate, timeMonths) - 1);
    const totalPayment = emi * timeMonths;
    const totalInterest = totalPayment - principal;

    setLoanResult({
      monthlyEMI: emi,
      totalInterest,
      totalPayment,
      principalAmount: principal,
    });
  };

  const reset = () => {
    setLoanAmount("");
    setInterestRate("");
    setTenure("");
    setTenureType("years");
    setLoanResult(null);
  };

  const chartData = loanResult
    ? [
        {
          name: "Principal Amount",
          value: loanResult.principalAmount,
          color: "#3b82f6",
        },
        {
          name: "Total Interest",
          value: loanResult.totalInterest,
          color: "#ef4444",
        },
      ]
    : [];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Loan Calculator - EMI Calculator",
    description:
      "Calculate monthly EMI, total interest, and loan breakdown with visual charts. Perfect for home loans, personal loans, and auto loans with detailed amortization schedule.",
    url: "https://www.the-tools-hub.com/loan-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Monthly EMI calculation",
      "Total interest calculation",
      "Loan repayment breakdown",
      "Visual charts and graphs",
      "Multiple loan types support",
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
            Loan Calculator - EMI Calculator with Amortization
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate monthly EMI, total interest, and loan breakdown with
            visual charts. Perfect for home loans, personal loans, and auto
            loans with detailed amortization schedule and repayment analysis.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="w-6 h-6 text-primary" />
              <span>Loan Details</span>
            </CardTitle>
            <CardDescription>
              Enter your loan information to calculate EMI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Loan Amount ($)</label>
                <Input
                  type="number"
                  placeholder="Enter loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  step="1000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Interest Rate (% per year)
                </label>
                <Input
                  type="number"
                  placeholder="Enter interest rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  step="0.1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Loan Tenure</label>
                <Input
                  type="number"
                  placeholder="Enter tenure"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tenure Type</label>
                <Select value={tenureType} onValueChange={setTenureType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="years">Years</SelectItem>
                    <SelectItem value="months">Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={calculateEMI}
                className="flex-1"
                disabled={!loanAmount || !interestRate || !tenure}
              >
                Calculate EMI
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {loanResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Loan Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(loanResult.monthlyEMI)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Monthly EMI
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {formatCurrency(loanResult.totalInterest)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Interest
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(loanResult.totalPayment)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Payment
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChartIcon className="w-5 h-5" />
                  <span>Loan Breakdown</span>
                </CardTitle>
                <CardDescription>
                  Visual representation of principal vs interest amounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name}: ${((percent || 0) * 100).toFixed(1)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value: number) => [
                          formatCurrency(value),
                          "",
                        ]}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detailed Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">
                      Principal Amount:
                    </span>
                    <span className="font-semibold">
                      {formatCurrency(loanResult.principalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">
                      Total Interest:
                    </span>
                    <span className="font-semibold text-orange-600">
                      {formatCurrency(loanResult.totalInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">
                      Total Amount Payable:
                    </span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(loanResult.totalPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Monthly EMI:</span>
                    <span className="font-semibold text-primary">
                      {formatCurrency(loanResult.monthlyEMI)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">
                      Interest Rate:
                    </span>
                    <span className="font-semibold">
                      {interestRate}% per year
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <Card>
          <CardHeader>
            <CardTitle>About EMI Calculation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              EMI (Equated Monthly Installment) is the fixed amount you pay
              every month towards your loan repayment. It consists of both
              principal and interest components.
            </p>
            <p>
              The EMI calculation uses the formula:
              <strong> EMI = P × r × (1+r)^n / ((1+r)^n-1)</strong>
            </p>
            <p>
              Where P = Principal loan amount, r = Monthly interest rate, n =
              Number of monthly installments.
            </p>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}
