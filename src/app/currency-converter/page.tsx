"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import AdPlaceholder from "@/components/AdPlaceholder";
import { ALL_CURRENCIES, POPULAR_CURRENCIES, getCurrencyByCode, getCurrencyDisplay } from "@/constants/currencies";

interface ExchangeRates {
  [key: string]: number;
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/USD`
      );
      const data = await response.json();

      setExchangeRates(data.rates);
      setLastUpdated(new Date().toLocaleString());
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
      // Fallback rates for demo purposes
      setExchangeRates({
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
        JPY: 110,
        CAD: 1.25,
        AUD: 1.35,
        CHF: 0.92,
        CNY: 6.45,
        INR: 74.5,
        BRL: 5.2,
      });
      setLastUpdated("Demo rates");
    }
    setLoading(false);
  };

  const convertCurrency = () => {
    if (!amount || !exchangeRates[fromCurrency] || !exchangeRates[toCurrency])
      return;

    const amountNum = parseFloat(amount);
    let result;

    if (fromCurrency === "USD") {
      result = amountNum * exchangeRates[toCurrency];
    } else if (toCurrency === "USD") {
      result = amountNum / exchangeRates[fromCurrency];
    } else {
      const usdAmount = amountNum / exchangeRates[fromCurrency];
      result = usdAmount * exchangeRates[toCurrency];
    }

    setConvertedAmount(result);
  };

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setConvertedAmount(null);
  };

  const reset = () => {
    setAmount("1");
    setConvertedAmount(null);
  };

  const getRate = () => {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) return null;

    let rate;
    if (fromCurrency === "USD") {
      rate = exchangeRates[toCurrency];
    } else if (toCurrency === "USD") {
      rate = 1 / exchangeRates[fromCurrency];
    } else {
      const usdRate = 1 / exchangeRates[fromCurrency];
      rate = usdRate * exchangeRates[toCurrency];
    }

    return rate.toFixed(6);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Currency Converter - All World Currencies",
    description:
      "Convert between 180+ world currencies instantly with live exchange rates. Comprehensive currency converter supporting all major and minor world currencies with real-time data.",
    url: "https://www.the-tools-hub.com/currency-converter",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    featureList: [
      "180+ world currencies",
      "Real-time exchange rates",
      "Major and minor currencies",
      "Currency symbols display",
      "Organized currency selection",
      "Live rate updates",
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
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Currency Converter - All World Currencies Live Rates
          </h1>
          <p className="text-lg text-muted-foreground">
            Convert between 180+ world currencies instantly with live exchange rates. Comprehensive currency converter supporting all major and minor currencies with real-time data.
          </p>
          {lastUpdated && (
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
              <span>Currency Conversion</span>
            </CardTitle>
            <CardDescription>
              Enter amount and select currencies to convert
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  step="0.01"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium">From</label>
                  <Select value={fromCurrency} onValueChange={setFromCurrency}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground border-b">
                        Popular Currencies
                      </div>
                      {POPULAR_CURRENCIES.map((code) => {
                        const currency = getCurrencyByCode(code);
                        return currency ? (
                          <SelectItem key={currency.code} value={currency.code}>
                            {getCurrencyDisplay(currency)}
                          </SelectItem>
                        ) : null;
                      })}
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground border-b border-t">
                        All Currencies
                      </div>
                      {ALL_CURRENCIES.filter(currency => !POPULAR_CURRENCIES.includes(currency.code))
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {getCurrencyDisplay(currency)}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <Select value={toCurrency} onValueChange={setToCurrency}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground border-b">
                        Popular Currencies
                      </div>
                      {POPULAR_CURRENCIES.map((code) => {
                        const currency = getCurrencyByCode(code);
                        return currency ? (
                          <SelectItem key={currency.code} value={currency.code}>
                            {getCurrencyDisplay(currency)}
                          </SelectItem>
                        ) : null;
                      })}
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground border-b border-t">
                        All Currencies
                      </div>
                      {ALL_CURRENCIES.filter(currency => !POPULAR_CURRENCIES.includes(currency.code))
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {getCurrencyDisplay(currency)}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={swapCurrencies}
                    className="flex items-center justify-center space-x-2 w-full h-9"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                    <span>Swap</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={convertCurrency}
                className="flex-1"
                disabled={!amount || loading}
              >
                {loading ? "Loading..." : "Convert"}
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {convertedAmount !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-2xl font-semibold text-muted-foreground">
                    {getCurrencyByCode(fromCurrency)?.symbol || ""} {amount} {fromCurrency} =
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {getCurrencyByCode(toCurrency)?.symbol || ""} {convertedAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {toCurrency}
                  </div>
                  {getRate() && (
                    <div className="text-sm text-muted-foreground">
                      1 {fromCurrency} = {getRate()} {toCurrency}
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground mt-2">
                    {getCurrencyByCode(fromCurrency)?.name} → {getCurrencyByCode(toCurrency)?.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{ALL_CURRENCIES.length}</div>
              <div className="text-sm text-muted-foreground">World Currencies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">{POPULAR_CURRENCIES.length}</div>
              <div className="text-sm text-muted-foreground">Popular Currencies</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
              <div className="text-sm text-muted-foreground">Exchange Rates</div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">Popular Currency Pairs</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { from: "USD", to: "EUR" },
                { from: "USD", to: "GBP" },
                { from: "USD", to: "JPY" },
                { from: "EUR", to: "GBP" },
                { from: "GBP", to: "JPY" },
                { from: "USD", to: "CAD" },
              ].map((pair, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="justify-start h-auto p-3"
                  onClick={() => {
                    setFromCurrency(pair.from);
                    setToCurrency(pair.to);
                    setConvertedAmount(null);
                  }}
                >
                  <div className="text-left">
                    <div className="font-medium">
                      {pair.from}/{pair.to}
                    </div>
                    {exchangeRates[pair.from] && exchangeRates[pair.to] && (
                      <div className="text-xs text-muted-foreground">
                        {pair.from === "USD"
                          ? exchangeRates[pair.to].toFixed(4)
                          : pair.to === "USD"
                          ? (1 / exchangeRates[pair.from]).toFixed(4)
                          : (
                              (1 / exchangeRates[pair.from]) *
                              exchangeRates[pair.to]
                            ).toFixed(4)}
                      </div>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>
              <h2 className="text-xl font-semibold">About Exchange Rates</h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none">
            <p>
              Our currency converter uses real-time exchange rates from reliable
              financial data providers. Exchange rates fluctuate constantly
              throughout the trading day based on market conditions.
            </p>
            <p>
              Please note that the rates shown are for informational purposes
              and may differ from rates offered by banks, money transfer
              services, or other financial institutions.
            </p>
            <p>
              For actual currency exchange transactions, always check with your
              financial institution for their current rates and any applicable
              fees.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}
