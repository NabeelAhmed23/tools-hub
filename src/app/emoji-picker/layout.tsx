import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emoji Picker & Copy Tool - Browse and Search Emojis",
  description:
    "Browse, search, and copy emojis with keyboard navigation. Organized emoji picker with recent history tracking and Unicode support for all platforms.",
  keywords: [
    "emoji picker",
    "emoji copy",
    "emoji search",
    "unicode emojis",
    "emoji keyboard",
    "copy emoji",
    "emoji browser",
    "emoji symbols",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.the-tools-hub.com/emoji-picker",
  },
  openGraph: {
    title: "Emoji Picker & Copy Tool - Browse and Search Emojis",
    description:
      "Browse, search, and copy emojis with keyboard navigation. Organized emoji picker with recent history tracking.",
    url: "https://www.the-tools-hub.com/emoji-picker",
    siteName: "ToolsHub - Free Online Tools",
    type: "website",
    images: [
      {
        url: "https://www.the-tools-hub.com/og-image.webp",
        width: 1200,
        height: 600,
        alt: "Emoji Picker Tool - Browse and Search Emojis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emoji Picker & Copy Tool - Browse and Search Emojis",
    description:
      "Browse, search, and copy emojis easily. Organized picker with history tracking.",
    images: ["https://www.the-tools-hub.com/og-image.webp"],
  },
};

export default function EmojiPickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}