"use client";

import { motion } from "framer-motion";

interface AdPlaceholderProps {
  id: string;
  className?: string;
}

export default function AdPlaceholder({ id, className = "" }: AdPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      id={id}
      className={`w-full bg-muted/20 border border-dashed border-muted-foreground/20 rounded-lg flex items-center justify-center min-h-[120px] ${className}`}
    >
      <div className="text-center text-muted-foreground">
        <div className="text-xs uppercase tracking-wider mb-1">Advertisement</div>
        <div className="text-xs opacity-60">{id.replace('adsense-', '').replace('-', ' ')}</div>
      </div>
    </motion.div>
  );
}