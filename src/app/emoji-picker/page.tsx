"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Smile, Search, Copy, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AdPlaceholder from "@/components/AdPlaceholder";
import { emojiData, emojiCategories, type EmojiCategory } from "@/lib/emoji-data";

export default function EmojiPicker() {
  const [selectedCategory, setSelectedCategory] = useState<EmojiCategory | "all" | "recent">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [recentEmojis, setRecentEmojis] = useState<string[]>([]);
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);
  const [textArea, setTextArea] = useState("");

  // Load recent emojis from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("recentEmojis");
    if (stored) {
      try {
        setRecentEmojis(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading recent emojis:", error);
      }
    }
  }, []);

  // Save recent emojis to localStorage
  useEffect(() => {
    localStorage.setItem("recentEmojis", JSON.stringify(recentEmojis));
  }, [recentEmojis]);

  const addToRecent = (emoji: string) => {
    setRecentEmojis(prev => {
      const filtered = prev.filter(e => e !== emoji);
      return [emoji, ...filtered].slice(0, 20); // Keep last 20 emojis
    });
  };

  const copyEmoji = async (emoji: string) => {
    try {
      await navigator.clipboard.writeText(emoji);
      setCopiedEmoji(emoji);
      addToRecent(emoji);

      // Clear copied indicator after 1 second
      setTimeout(() => setCopiedEmoji(null), 1000);
    } catch (error) {
      console.error("Failed to copy emoji:", error);
    }
  };

  const insertEmoji = (emoji: string) => {
    setTextArea(prev => prev + emoji);
    addToRecent(emoji);
  };

  // Filter emojis based on search and category
  const filteredEmojis = useMemo(() => {
    let filtered = emojiData;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(emoji =>
        emoji.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        emoji.keywords.some(keyword =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory !== "all" && selectedCategory !== "recent") {
      filtered = filtered.filter(emoji => emoji.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Get emojis to display
  const emojisToDisplay = selectedCategory === "recent"
    ? recentEmojis.map(emoji => ({ emoji, name: emoji, category: "recent", keywords: [] }))
    : filteredEmojis;

  const copyTextArea = async () => {
    if (textArea) {
      try {
        await navigator.clipboard.writeText(textArea);
        alert("Text copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    }
  };

  const clearTextArea = () => {
    setTextArea("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Emoji Picker & Copy Tool",
            description: "Browse, search, and copy emojis with keyboard navigation and recent history tracking",
            url: "https://toolshub.com/emoji-picker",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Web Browser",
            features: [
              "Searchable emoji database",
              "Category browsing",
              "Recent emoji history",
              "Text composition",
              "One-click copy",
            ],
          }),
        }}
      />

      <AdPlaceholder id="adsense-top" className="mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Emoji Picker & Copy Tool
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse, search, and copy emojis with keyboard navigation and recent history
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Search and Categories */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search emojis..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <Button
                  variant={selectedCategory === "all" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("all")}
                  className="w-full justify-start"
                  size="sm"
                >
                  All Emojis
                </Button>

                <Button
                  variant={selectedCategory === "recent" ? "default" : "ghost"}
                  onClick={() => setSelectedCategory("recent")}
                  className="w-full justify-start"
                  size="sm"
                  disabled={recentEmojis.length === 0}
                >
                  Recently Used ({recentEmojis.length})
                </Button>

                {emojiCategories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "ghost"}
                    onClick={() => setSelectedCategory(category)}
                    className="w-full justify-start capitalize"
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Text Area */}
            <Card>
              <CardHeader>
                <CardTitle>Compose Text</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <textarea
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                  placeholder="Click emojis to add them here..."
                  rows={4}
                  className="w-full p-2 border border-border rounded-md resize-none bg-background"
                />
                <div className="flex gap-2">
                  <Button size="sm" onClick={copyTextArea} disabled={!textArea}>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Text
                  </Button>
                  <Button size="sm" variant="outline" onClick={clearTextArea}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emoji Grid */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {selectedCategory === "all" ? "All Emojis" :
                     selectedCategory === "recent" ? "Recently Used" :
                     selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {emojisToDisplay.length} emoji{emojisToDisplay.length !== 1 ? "s" : ""}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {emojisToDisplay.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-muted-foreground">
                      {searchQuery ? "No emojis found matching your search" :
                       selectedCategory === "recent" ? "No recent emojis yet" :
                       "No emojis in this category"}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2 max-h-96 overflow-y-auto">
                    {emojisToDisplay.map((emojiItem, index) => (
                      <div key={`${emojiItem.emoji}-${index}`} className="relative group">
                        <button
                          onClick={() => copyEmoji(emojiItem.emoji)}
                          onDoubleClick={() => insertEmoji(emojiItem.emoji)}
                          className={`
                            w-10 h-10 text-2xl rounded hover:bg-muted transition-colors 
                            flex items-center justify-center relative
                            ${copiedEmoji === emojiItem.emoji ? "bg-green-100 dark:bg-green-900" : ""}
                          `}
                          title={`${emojiItem.emoji} - ${emojiItem.name} (Click to copy, double-click to insert)`}
                        >
                          {emojiItem.emoji}
                          {copiedEmoji === emojiItem.emoji && (
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded">
                              Copied!
                            </div>
                          )}
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                          {emojiItem.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Instructions */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>• <strong>Click</strong> an emoji to copy it to clipboard</div>
                    <div>• <strong>Double-click</strong> an emoji to add it to the text area</div>
                    <div>• Use <strong>search</strong> to find emojis by name or keywords</div>
                    <div>• <strong>Recently used</strong> emojis are saved for quick access</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mb-8">
          <Smile className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy Note:</strong> Recent emoji history is stored locally in your browser
            and never sent to our servers. Your usage data remains completely private.
          </AlertDescription>
        </Alert>
      </motion.div>

      <AdPlaceholder id="adsense-bottom" />
    </div>
  );
}