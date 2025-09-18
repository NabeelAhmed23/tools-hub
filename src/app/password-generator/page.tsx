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

  const generatePassword = (
    length: number,
    options: {
      includeUppercase: boolean;
      includeLowercase: boolean;
      includeNumbers: boolean;
      includeSymbols: boolean;
      excludeSimilar: boolean;
      excludeAmbiguous: boolean;
    }
  ) => {
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
    generatePassword(length, options);
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
            url: "https://www.the-tools-hub.com/password-generator",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Web Browser",
            featureList: [
              "Customizable length (8-64 characters)",
              "Multiple character set options",
              "Entropy calculation",
              "Exclude similar/ambiguous characters",
              "Cryptographically secure random generation",
            ],
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
            Password Generator - Create Strong Secure Passwords
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Generate cryptographically secure passwords with customizable
            length, character types, and entropy calculation. All processing
            happens locally in your browser for maximum privacy and security.
          </p>
          <div className="text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <KeyRound className="w-4 h-4" />
              Privacy-focused • No server storage • Instant generation
            </span>
          </div>
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
                aria-label="Generated password"
              />
              <div className="flex space-x-2">
                <CopyButton text={password} size="default" className="flex-1" />
                <Button
                  variant="outline"
                  onClick={() => generatePassword(length, options)}
                  aria-label="Generate new password"
                >
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
                aria-label="Password length"
                id="password-length-slider"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="uppercase-switch" className="text-sm font-medium">
                  Include uppercase letters
                </label>
                <Switch
                  id="uppercase-switch"
                  className="ml-4"
                  checked={options.includeUppercase}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeUppercase: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="lowercase-switch" className="text-sm font-medium">
                  Include lowercase letters
                </label>
                <Switch
                  id="lowercase-switch"
                  className="ml-4"
                  checked={options.includeLowercase}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeLowercase: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="numbers-switch" className="text-sm font-medium">Include numbers</label>
                <Switch
                  id="numbers-switch"
                  className="ml-4"
                  checked={options.includeNumbers}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeNumbers: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="symbols-switch" className="text-sm font-medium">Include symbols</label>
                <Switch
                  id="symbols-switch"
                  className="ml-4"
                  checked={options.includeSymbols}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, includeSymbols: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="exclude-similar-switch" className="text-sm font-medium">
                  Exclude similar characters (i, l, 1, L, o, 0, O)
                </label>
                <Switch
                  id="exclude-similar-switch"
                  className="ml-4"
                  checked={options.excludeSimilar}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, excludeSimilar: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="exclude-ambiguous-switch" className="text-sm font-medium">
                  Exclude ambiguous characters
                </label>
                <Switch
                  id="exclude-ambiguous-switch"
                  className="ml-4"
                  checked={options.excludeAmbiguous}
                  onCheckedChange={(checked) =>
                    setOptions({ ...options, excludeAmbiguous: checked })
                  }
                />
              </div>
            </div>

            <Button
              onClick={() => generatePassword(length, options)}
              className="w-full"
            >
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
            <CardTitle>
              <h2 className="text-xl font-semibold">
                Password Security Best Practices
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">
                  Essential Password Guidelines
                </h3>
                <ul className="space-y-2">
                  <li>Use unique passwords for each of your accounts</li>
                  <li>
                    Longer passwords (12+ characters) are generally more secure
                  </li>
                  <li>
                    Include a mix of uppercase, lowercase, numbers, and symbols
                  </li>
                  <li>
                    Avoid common words, personal information, or keyboard
                    patterns
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Advanced Security Tips</h3>
                <ul className="space-y-2">
                  <li>
                    Consider using a password manager to store your passwords
                    securely
                  </li>
                  <li>Enable two-factor authentication when available</li>
                  <li>Regularly update passwords for sensitive accounts</li>
                  <li>
                    Use our entropy calculation to verify password strength
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">
                How to Use the Password Generator
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Step-by-Step Instructions</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Click "Generate New Password" to create your first secure password instantly</li>
                <li>Adjust the length slider to set your desired password length (8-64 characters)</li>
                <li>Toggle character type options to include or exclude uppercase, lowercase, numbers, and symbols</li>
                <li>Use "Exclude similar characters" to avoid confusing characters like 0, O, l, 1</li>
                <li>Click the "Copy" button to copy your password to clipboard</li>
                <li>Click the refresh icon to generate a new password with the same settings</li>
              </ol>
            </div>
            <div>
              <h3 className="font-medium mb-2">Understanding Password Strength</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Our tool displays password entropy in bits, which measures unpredictability. Higher entropy means stronger security:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Very Weak (0-30 bits): Easily cracked in seconds</li>
                <li>Weak (30-50 bits): Can be cracked in minutes to hours</li>
                <li>Good (50-70 bits): Takes days to weeks to crack</li>
                <li>Strong (70-90 bits): Takes years to crack</li>
                <li>Very Strong (90+ bits): Takes centuries to crack</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">
                How Our Password Generator Works
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Cryptographic Security</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our password generator uses your browser&apos;s built-in
                cryptographically secure pseudorandom number generator (CSPRNG)
                to ensure maximum randomness and security. This is the same
                technology used by security professionals and cryptographic
                applications. The Web Crypto API provides access to a
                cryptographically strong random number generator that&apos;s
                suitable for generating passwords, tokens, and other security-sensitive values.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Entropy Calculation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Password entropy measures the unpredictability of a password.
                Higher entropy means a password is harder to crack. Our tool
                calculates entropy based on character set size and password
                length, helping you understand your password&apos;s true
                strength. The formula is: entropy = log2(character_set_size^password_length).
                For example, a 16-character password using all 94 printable ASCII characters
                has approximately 105 bits of entropy.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Privacy Protection</h3>
              <p className="text-sm text-muted-foreground">
                All password generation happens entirely in your browser using
                client-side JavaScript. No passwords are ever transmitted to our
                servers, logged, or stored anywhere. Your generated passwords
                remain completely private and secure. This approach ensures that
                even we cannot see or access your passwords, providing maximum
                privacy and security for your sensitive data.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
