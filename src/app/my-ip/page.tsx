"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Network,
  MapPin,
  Smartphone,
  Globe,
  Shield,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { CopyButton } from "@/components/copy-button";

interface IPInfo {
  ip: string;
  ipv6?: string;
  userAgent: string;
  location?: {
    city: string;
    region: string;
    country: string;
    countryCode: string;
    timezone: string;
    isp?: string;
  };
}

export default function MyIP() {
  const [ipInfo, setIpInfo] = useState<IPInfo>({
    ip: "",
    userAgent: "",
  });
  const [loading, setLoading] = useState(true);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [error, setError] = useState("");
  const [browserInfo, setBrowserInfo] = useState({ browser: "", os: "" });

  const fetchIPAddress = async () => {
    try {
      setLoading(true);
      setError("");

      // Fetch IPv4
      const ipv4Response = await fetch("https://api.ipify.org?format=json");
      const ipv4Data = await ipv4Response.json();

      setIpInfo((prev) => ({
        ...prev,
        ip: ipv4Data.ip,
      }));

      // Try to fetch IPv6 (may not always be available)
      try {
        const ipv6Response = await fetch("https://api6.ipify.org?format=json");
        const ipv6Data = await ipv6Response.json();
        if (ipv6Data.ip !== ipv4Data.ip) {
          setIpInfo((prev) => ({
            ...prev,
            ipv6: ipv6Data.ip,
          }));
        }
      } catch {}
    } catch (error) {
      setError("Failed to fetch IP address. Please check your connection.");
      console.error("Error fetching IP:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLocation = async () => {
    if (!ipInfo.ip) return;

    try {
      setLocationLoading(true);
      setError("");

      // Using ipapi.co for location (free tier available)
      const response = await fetch(`https://ipapi.co/${ipInfo.ip}/json/`);
      const data = await response.json();

      if (data.error) {
        throw new Error(data.reason || "Failed to fetch location");
      }

      setIpInfo((prev) => ({
        ...prev,
        location: {
          city: data.city || "Unknown",
          region: data.region || "Unknown",
          country: data.country_name || "Unknown",
          countryCode: data.country_code || "",
          timezone: data.timezone || "Unknown",
          isp: data.org || "Unknown",
        },
      }));

      setLocationEnabled(true);
    } catch (error) {
      setError(
        "Failed to fetch location data. This service may be temporarily unavailable."
      );
      console.error("Error fetching location:", error);
    } finally {
      setLocationLoading(false);
    }
  };

  useEffect(() => {
    // Get user agent immediately
    const userAgent = navigator.userAgent;
    setIpInfo((prev) => ({ ...prev, userAgent }));

    // Detect browser and OS
    const ua = navigator.userAgent;
    let browser = "Unknown";
    let os = "Unknown";

    // Detect browser (order matters for accuracy)
    if (ua.includes("Opera") || ua.includes("OPR")) browser = "Opera";
    else if (ua.includes("Edg")) browser = "Edge";
    else if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Safari")) browser = "Safari";

    // Detect OS (more specific checks first)
    if (ua.includes("iPhone") || ua.includes("iPad") || ua.includes("iPod"))
      os = "iOS";
    else if (ua.includes("Android")) os = "Android";
    else if (ua.includes("Win")) os = "Windows";
    else if (ua.includes("Mac")) os = "macOS";
    else if (ua.includes("Linux")) os = "Linux";
    else if (ua.includes("CrOS")) os = "Chrome OS";

    setBrowserInfo({ browser, os });

    // Fetch IP address
    fetchIPAddress();
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "What's My IP Address - IP Lookup Tool",
    description:
      "Discover your public IP address, user agent, and approximate location with privacy protection. Free IP lookup tool with browser and device information.",
    url: "https://www.the-tools-hub.com/my-ip",
    applicationCategory: "NetworkingApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "Public IP address lookup",
      "IPv4 and IPv6 support",
      "Location information (optional)",
      "Browser and OS detection",
      "Privacy-focused design",
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
            What&apos;s My IP Address?
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover your public IP address, user agent, and approximate
            location
          </p>
        </div>

        <Alert className="mb-6">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Notice:</strong> Your IP address is fetched directly
            from public IP services. Location data is only retrieved when you
            explicitly click &quot;Get Location&quot; and is never stored on our
            servers.
          </AlertDescription>
        </Alert>

        {error && (
          <Alert className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Network className="w-6 h-6 text-primary" />
                <span>IP Address Information</span>
              </CardTitle>
              <CardDescription>
                Your current public IP address details
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin mr-2" />
                  <span>Fetching IP address...</span>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium">
                          IPv4 Address
                        </label>
                        {ipInfo.ip && <CopyButton text={ipInfo.ip} size="sm" />}
                      </div>
                      <div className="p-3 bg-muted/20 rounded-lg font-mono text-lg">
                        {ipInfo.ip || "Not available"}
                      </div>
                    </div>

                    {ipInfo.ipv6 && (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium">
                            IPv6 Address
                          </label>
                          <CopyButton text={ipInfo.ipv6} size="sm" />
                        </div>
                        <div className="p-3 bg-muted/20 rounded-lg font-mono text-sm break-all">
                          {ipInfo.ipv6}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={fetchIPAddress}
                      variant="outline"
                      className="w-full"
                      disabled={loading}
                    >
                      <Network className="w-4 h-4 mr-2" />
                      Refresh IP Address
                    </Button>

                    {ipInfo.ip && !locationEnabled && (
                      <Button
                        onClick={fetchLocation}
                        variant="outline"
                        className="w-full"
                        disabled={locationLoading}
                      >
                        {locationLoading ? (
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <MapPin className="w-4 h-4 mr-2" />
                        )}
                        Get Location Info
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {locationEnabled && ipInfo.location && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span>Location Information</span>
                  </CardTitle>
                  <CardDescription>
                    Approximate location based on your IP address
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          City
                        </label>
                        <p className="text-lg">{ipInfo.location.city}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Region
                        </label>
                        <p className="text-lg">{ipInfo.location.region}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Country
                        </label>
                        <p className="text-lg">
                          {ipInfo.location.country} (
                          {ipInfo.location.countryCode})
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">
                          Timezone
                        </label>
                        <p className="text-lg">{ipInfo.location.timezone}</p>
                      </div>
                      {ipInfo.location.isp && (
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            ISP
                          </label>
                          <p className="text-lg">{ipInfo.location.isp}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-primary" />
                <span>Browser &amp; Device Information</span>
              </CardTitle>
              <CardDescription>
                Information about your browser and operating system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Browser
                    </label>
                    <p className="text-lg" suppressHydrationWarning>
                      {browserInfo.browser || "Detecting..."}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Operating System
                    </label>
                    <p className="text-lg" suppressHydrationWarning>
                      {browserInfo.os || "Detecting..."}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Full User Agent
                    </label>
                    <CopyButton text={ipInfo.userAgent} size="sm" />
                  </div>
                  <div className="p-3 bg-muted/20 rounded-lg font-mono text-xs break-all">
                    {ipInfo.userAgent}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-primary" />
                <span>About IP Addresses</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What is an IP Address?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    An Internet Protocol (IP) address is a unique identifier
                    assigned to each device connected to the internet. It allows
                    devices to communicate and share data across networks.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <strong>IPv4:</strong> 32-bit addresses (e.g.,
                      192.168.1.1)
                    </li>
                    <li>
                      • <strong>IPv6:</strong> 128-bit addresses (e.g.,
                      2001:db8::1)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Privacy Considerations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Your IP can reveal approximate location</li>
                    <li>• ISPs can track browsing through IP logs</li>
                    <li>• Use VPN for enhanced privacy</li>
                    <li>• Dynamic IPs change periodically</li>
                    <li>• Location accuracy varies by provider</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

    </div>
  );
}
