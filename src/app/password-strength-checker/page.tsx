"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  HelpCircle,
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { analyzePassword } from "@/lib/password-strength";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const analysis = analyzePassword(password);

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "Very Weak":
        return "bg-red-500";
      case "Weak":
        return "bg-orange-500";
      case "Fair":
        return "bg-yellow-500";
      case "Good":
        return "bg-blue-500";
      case "Strong":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  const getStrengthWidth = (score: number) => {
    return `${(score / 4) * 100}%`;
  };

  const checks = [
    {
      label: "At least 8 characters",
      passed: password.length >= 8,
      icon: password.length >= 8 ? CheckCircle : XCircle,
    },
    {
      label: "Contains uppercase letters",
      passed: /[A-Z]/.test(password),
      icon: /[A-Z]/.test(password) ? CheckCircle : XCircle,
    },
    {
      label: "Contains lowercase letters",
      passed: /[a-z]/.test(password),
      icon: /[a-z]/.test(password) ? CheckCircle : XCircle,
    },
    {
      label: "Contains numbers",
      passed: /\d/.test(password),
      icon: /\d/.test(password) ? CheckCircle : XCircle,
    },
    {
      label: "Contains symbols",
      passed: /[^a-zA-Z0-9]/.test(password),
      icon: /[^a-zA-Z0-9]/.test(password) ? CheckCircle : XCircle,
    },
    {
      label: "No common patterns",
      passed: !password || analysis.score > 0,
      icon: !password || analysis.score > 0 ? CheckCircle : XCircle,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Password Strength Checker
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Test your password strength and get security recommendations
          </p>
          <p className="text-sm text-muted-foreground">
            Analyze password security with real-time feedback, crack time
            estimates, and actionable security tips
          </p>
        </div>

        <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
          <Shield className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            <strong>🔒 Privacy Guaranteed:</strong> Your password analysis
            happens entirely in your browser. No data is transmitted to our
            servers, logged, or stored anywhere. Complete privacy protection.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle
              className="flex items-center space-x-2"
              id="password-analysis"
            >
              <Shield className="w-6 h-6 text-primary" />
              <span>Password Analysis Tool</span>
            </CardTitle>
            <CardDescription>
              Enter your password below to get instant security analysis and
              recommendations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="pr-12"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>

            {password && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Strength:</span>
                    <span className="text-sm font-semibold">
                      {analysis.strength}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(
                        analysis.strength
                      )}`}
                      style={{ width: getStrengthWidth(analysis.score) }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        Estimated crack time:
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      {analysis.crackTime}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Entropy:</span>
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      {analysis.entropy.toFixed(1)} bits
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                    Security Requirements Checklist
                  </h2>
                  <div className="space-y-2">
                    {checks.map((check, index) => {
                      const IconComponent = check.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <IconComponent
                            className={`w-4 h-4 ${
                              check.passed ? "text-green-600" : "text-red-600"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              check.passed
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {check.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-lg font-semibold text-foreground">
                    Password Improvement Recommendations
                  </h2>
                  <div className="space-y-2">
                    {analysis.feedback.map((feedback, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          {feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {!password && (
              <div className="text-center py-8 text-muted-foreground">
                <Shield className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Enter a password to see its strength analysis</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-2xl font-bold text-foreground">
                Password Security Best Practices
              </h2>
            </CardTitle>
            <CardDescription>
              Follow these guidelines to create strong, secure passwords that
              protect your accounts
            </CardDescription>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-green-600 flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Essential Password Practices</span>
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>
                      Use at least 12 characters for strong protection
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Mix uppercase and lowercase letters</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Include numbers and special symbols</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Create unique passwords for each account</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Use a trusted password manager for storage</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-red-600 flex items-center space-x-2">
                  <XCircle className="w-5 h-5" />
                  <span>Common Password Mistakes to Avoid</span>
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      Avoid common words, phrases, or dictionary terms
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      Never include personal information like birthdays
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      Avoid keyboard patterns like &quot;qwerty&quot; or
                      &quot;123456&quot;
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Never reuse passwords across multiple websites</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Keep passwords private and never share them</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                💡 Pro Tip: Password Managers
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                Use a reputable password manager to generate, store, and
                automatically fill strong, unique passwords. This eliminates the
                need to remember complex passwords while ensuring maximum
                security across all your accounts.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-2xl font-bold text-foreground flex items-center space-x-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                <span>Frequently Asked Questions</span>
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How secure is this password checker tool?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our password strength checker is completely secure. All
                  password analysis happens locally in your browser using
                  JavaScript. Your password never leaves your device, is never
                  sent to our servers, and is not stored or logged anywhere.
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What makes a password strong?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A strong password typically contains at least 12 characters,
                  includes a mix of uppercase and lowercase letters, numbers,
                  and special symbols. It should avoid common words, personal
                  information, and predictable patterns.
                </p>
              </div>

              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How is the crack time calculated?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our tool estimates crack time based on the password&apos;s
                  entropy and modern attack methods. It considers factors like
                  character set size, password length, and common attack vectors
                  including brute force and dictionary attacks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Should I use a password manager?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes! Password managers are highly recommended for generating,
                  storing, and managing unique, strong passwords for all your
                  accounts. They eliminate the need to remember complex
                  passwords while ensuring maximum security.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
