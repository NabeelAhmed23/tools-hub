"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Eye, EyeOff, CheckCircle, XCircle, AlertTriangle, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
import { analyzePassword } from "@/lib/password-strength";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const analysis = analyzePassword(password);
  
  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case "Very Weak": return "bg-red-500";
      case "Weak": return "bg-orange-500";
      case "Fair": return "bg-yellow-500";
      case "Good": return "bg-blue-500";
      case "Strong": return "bg-green-500";
      default: return "bg-gray-300";
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
      icon: (!password || analysis.score > 0) ? CheckCircle : XCircle,
    },
  ];

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
            Password Strength Checker
          </h1>
          <p className="text-lg text-muted-foreground">
            Test your password strength and get security recommendations
          </p>
        </div>

        <Alert className="mb-6">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Notice:</strong> Your password is analyzed locally in your browser. 
            It is never sent to our servers or stored anywhere. All analysis happens on your device.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" />
              <span>Password Analysis</span>
            </CardTitle>
            <CardDescription>
              Enter your password to analyze its strength
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
                    <span className="text-sm font-semibold">{analysis.strength}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(analysis.strength)}`}
                      style={{ width: getStrengthWidth(analysis.score) }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Estimated crack time:</span>
                    </div>
                    <p className="text-lg font-semibold text-primary">{analysis.crackTime}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Entropy:</span>
                    </div>
                    <p className="text-lg font-semibold text-primary">{analysis.entropy.toFixed(1)} bits</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Security Checklist:</h4>
                  <div className="space-y-2">
                    {checks.map((check, index) => {
                      const IconComponent = check.icon;
                      return (
                        <div key={index} className="flex items-center space-x-2">
                          <IconComponent 
                            className={`w-4 h-4 ${check.passed ? 'text-green-600' : 'text-red-600'}`} 
                          />
                          <span className={`text-sm ${check.passed ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {check.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Recommendations:</h4>
                  <div className="space-y-2">
                    {analysis.feedback.map((feedback, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">{feedback}</p>
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
            <CardTitle>Password Security Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">✓ Do:</h4>
                <ul className="space-y-1 text-sm">
                  <li>Use at least 12 characters</li>
                  <li>Mix uppercase and lowercase</li>
                  <li>Include numbers and symbols</li>
                  <li>Use unique passwords for each account</li>
                  <li>Consider using a password manager</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">✗ Don&apos;t:</h4>
                <ul className="space-y-1 text-sm">
                  <li>Use common words or phrases</li>
                  <li>Include personal information</li>
                  <li>Use keyboard patterns (qwerty, 123456)</li>
                  <li>Reuse passwords across sites</li>
                  <li>Share passwords with others</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}