"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { KeyRound, RefreshCw, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
import { CopyButton } from "@/components/copy-button";
import {
  generateSecurePassword,
  calculatePasswordEntropy,
} from "@/lib/crypto-utils";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [options, setOptions] = useState({
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    excludeAmbiguous: false,
  });
  const [entropy, setEntropy] = useState(0);

  const generatePassword = () => {
    const newPassword = generateSecurePassword({ length, ...options });
    setPassword(newPassword);
    setEntropy(calculatePasswordEntropy(newPassword));
  };

  const getStrengthRating = (entropy: number) => {
    if (entropy < 30)
      return {
        rating: "Very Weak",
        color: "text-red-600",
        bgColor: "bg-red-100",
      };
    if (entropy < 50)
      return {
        rating: "Weak",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      };
    if (entropy < 70)
      return {
        rating: "Good",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
      };
    if (entropy < 90)
      return {
        rating: "Strong",
        color: "text-green-600",
        bgColor: "bg-green-100",
      };
    return {
      rating: "Very Strong",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    };
  };

  useEffect(() => {
    generatePassword();
  }, [length, options]);

  const strength = getStrengthRating(entropy);

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Password Generator",
            description:
              "Generate strong, secure passwords with customizable options including length, character types, and entropy calculation",
            url: "https://toolshub.com/password-generator",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Web Browser",
            features: [
              "Customizable length (8-64 characters)",
              "Multiple character set options",
              "Entropy calculation",
              "Exclude similar/ambiguous characters",
              "Cryptographically secure random generation",
            ],
          }),
        }}
      />

      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Password Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate cryptographically secure passwords with customizable
            options
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <KeyRound className="w-6 h-6 text-primary" />
              <span>Generated Password</span>
            </CardTitle>
            <CardDescription>
              Your secure password with entropy calculation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-2 space-x-2">
              <Input
                value={password}
                readOnly
                className="font-mono text-lg"
                placeholder="Click generate to create a password"
              />
              <div className="flex space-x-2">
                <CopyButton text={password} size="default" className="flex-1" />
                <Button variant="outline" onClick={generatePassword}>
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {password && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Entropy:</span>
                  <span className="text-sm">{entropy.toFixed(1)} bits</span>
                </div>
                <div className={`p-3 rounded-lg ${strength.bgColor}`}>
                  <div className="flex items-center space-x-2">
                    <Zap className={`w-4 h-4 ${strength.color}`} />
                    <span className={`font-semibold ${strength.color}`}>
                      {strength.rating}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Password Options</CardTitle>
            <CardDescription>
              Customize your password generation settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">Length</label>
                <span className="text-sm text-muted-foreground">
                  {length} characters
                </span>
              </div>
              <input
                type="range"
                min="8"
                max="64"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Include uppercase letters
                </label>
                <Switch
                  className="ml-4"
                  checked={options.includeUppercase}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeUppercase: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Include lowercase letters
                </label>
                <Switch
                  className="ml-4"
                  checked={options.includeLowercase}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeLowercase: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Include numbers</label>
                <Switch
                  className="ml-4"
                  checked={options.includeNumbers}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeNumbers: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Include symbols</label>
                <Switch
                  className="ml-4"
                  checked={options.includeSymbols}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeSymbols: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Exclude similar characters (i, l, 1, L, o, 0, O)
                </label>
                <Switch
                  className="ml-4"
                  checked={options.excludeSimilar}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, excludeSimilar: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  Exclude ambiguous characters
                </label>
                <Switch
                  className="ml-4"
                  checked={options.excludeAmbiguous}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, excludeAmbiguous: checked })
                  }
                />
              </div>
            </div>

            <Button onClick={generatePassword} className="w-full">
              Generate New Password
            </Button>
          </CardContent>
        </Card>

        <Alert className="mb-8">
          <KeyRound className="h-4 w-4" />
          <AlertDescription>
            <strong>Security Note:</strong> Passwords are generated using your
            browser&apos;s cryptographically secure random number generator. No
            passwords are sent to our servers or logged anywhere. For maximum
            security, use the generated password immediately and don&apos;t
            share it with anyone.
          </AlertDescription>
        </Alert>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Password Security Tips</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <ul className="space-y-2">
              <li>Use unique passwords for each of your accounts</li>
              <li>
                Longer passwords (12+ characters) are generally more secure
              </li>
              <li>
                Include a mix of uppercase, lowercase, numbers, and symbols
              </li>
              <li>
                Avoid common words, personal information, or keyboard patterns
              </li>
              <li>
                Consider using a password manager to store your passwords
                securely
              </li>
              <li>Enable two-factor authentication when available</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}
