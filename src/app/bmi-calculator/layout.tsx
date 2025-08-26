import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMI Calculator - Free Body Mass Index Calculator | ToolsHub",
  description: "Calculate your Body Mass Index (BMI) instantly with our free online calculator. Enter your weight and height to determine if you're in a healthy weight range according to medical standards.",
  keywords: ["BMI calculator", "body mass index", "weight calculator", "health calculator", "BMI chart"],
  openGraph: {
    title: "Free BMI Calculator - Calculate Body Mass Index",
    description: "Calculate your BMI instantly with our free online calculator. Determine if you're in a healthy weight range.",
    type: "website",
  },
};

export default function BMICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}