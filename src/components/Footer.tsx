"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex items-center space-x-2 md:col-span-1">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                T
              </span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              ToolsHub
            </span>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Popular Tools
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    <Link
                      href="/password-generator"
                      className="hover:text-foreground transition-colors"
                    >
                      Password Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/favicon-generator"
                      className="hover:text-foreground transition-colors"
                    >
                      Favicon Generator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bmi-calculator"
                      className="hover:text-foreground transition-colors"
                    >
                      BMI Calculator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hash-generator"
                      className="hover:text-foreground transition-colors"
                    >
                      Hash Generator
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Company</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-foreground transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-foreground transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  {/* <li><Link href="/feedback" className="hover:text-foreground transition-colors">Feedback</Link></li> */}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Legal</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-foreground transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-of-service"
                      className="hover:text-foreground transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cookie-policy"
                      className="hover:text-foreground transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>
              © {currentYear} ToolsHub. Professional free online tools for
              security, calculations, and design.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a
                href="https://www.the-tools-hub.com"
                className="hover:text-foreground transition-colors"
              >
                the-tools-hub.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
