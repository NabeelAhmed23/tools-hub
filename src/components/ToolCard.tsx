"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  delay?: number;
}

export default function ToolCard({ title, description, href, icon, delay = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href}>
        <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-200 border-2 hover:border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {icon}
              </div>
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}