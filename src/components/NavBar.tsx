"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Calculator, ChevronDown, Menu, Palette } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold">T</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                ToolsHub
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <Shield className="w-4 h-4" />
                <span>Security Tools</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/password-generator">Password Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/password-strength-checker">
                    Password Checker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hash-generator">Hash Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/base64">Base64 Encoder/Decoder</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/url-encode-decode">URL Encoder/Decoder</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/uuid-generator">UUID Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/qr-generator">QR Code Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-ip">What&apos;s My IP</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <Calculator className="w-4 h-4" />
                <span>Calculators</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/bmi-calculator">BMI Calculator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/age-calculator">Age Calculator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/loan-calculator">Loan/EMI Calculator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/currency-converter">Currency Converter</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/unit-converter">Unit Converter</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/percentage-calculator">Percentage Calculator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/date-difference">Date Difference</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/gpa-calculator">GPA Calculator</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                <Palette className="w-4 h-4" />
                <span>Creative</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/color-picker">Color Picker</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/image-compressor">Image Compressor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favicon-generator">Favicon Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/gradient-generator">Gradient Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/emoji-picker">Emoji Picker</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors">
                  <Menu className="w-6 h-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-64 max-h-96 overflow-y-auto"
                  sideOffset={8}
                >
                  <div className="p-2">
                    <div className="mb-3">
                      <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                        <Shield className="w-4 h-4" />
                        <span>Security Tools</span>
                      </div>
                      <div className="space-y-1 pl-4">
                        <DropdownMenuItem asChild>
                          <Link href="/password-generator" className="text-sm">
                            Password Generator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            href="/password-strength-checker"
                            className="text-sm"
                          >
                            Password Checker
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/hash-generator" className="text-sm">
                            Hash Generator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/base64" className="text-sm">
                            Base64 Encoder/Decoder
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/url-encode-decode" className="text-sm">
                            URL Encoder/Decoder
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/uuid-generator" className="text-sm">
                            UUID Generator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/qr-generator" className="text-sm">
                            QR Code Generator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/my-ip" className="text-sm">
                            What&apos;s My IP
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                        <Calculator className="w-4 h-4" />
                        <span>Calculators</span>
                      </div>
                      <div className="space-y-1 pl-4">
                        <DropdownMenuItem asChild>
                          <Link href="/bmi-calculator" className="text-sm">
                            BMI Calculator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/age-calculator" className="text-sm">
                            Age Calculator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/loan-calculator" className="text-sm">
                            Loan/EMI Calculator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/currency-converter" className="text-sm">
                            Currency Converter
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/unit-converter" className="text-sm">
                            Unit Converter
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/percentage-calculator" className="text-sm">
                            Percentage Calculator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/date-difference" className="text-sm">
                            Date Difference
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/gpa-calculator" className="text-sm">
                            GPA Calculator
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex items-center space-x-2 text-sm font-medium text-foreground mb-2">
                        <Palette className="w-4 h-4" />
                        <span>Creative</span>
                      </div>
                      <div className="space-y-1 pl-4">
                        <DropdownMenuItem asChild>
                          <Link href="/color-picker" className="text-sm">
                            Color Picker
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/image-compressor" className="text-sm">
                            Image Compressor
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/favicon-generator" className="text-sm">
                            Favicon Generator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/gradient-generator" className="text-sm">
                            Gradient Generator
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/emoji-picker" className="text-sm">
                            Emoji Picker
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
