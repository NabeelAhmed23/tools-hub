import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Converter - Live Exchange Rates | ToolsHub",
  description: "Convert currencies instantly with live exchange rates. Free online currency converter supporting 100+ currencies including USD, EUR, GBP, JPY and more.",
  keywords: ["currency converter", "exchange rates", "currency exchange", "money converter", "forex rates"],
  openGraph: {
    title: "Free Currency Converter - Live Exchange Rates",
    description: "Convert currencies instantly with our free online converter. Get live exchange rates for 100+ currencies.",
    type: "website",
  },
};

export default function CurrencyConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}