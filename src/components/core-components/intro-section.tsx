"use client";

import { motion } from "motion/react";

interface IntroSectionProps {
  title: string;
}

export function IntroSection({ title }: IntroSectionProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ delay: 0.5, duration: 0.2 }}
      className="text-2xl py-6 text-primary"
    >
      <strong className="font-light text-muted-foreground">{"<"}</strong>
      {title}{" "}
      <strong className="font-light text-muted-foreground">{"/>"}</strong>
    </motion.h1>
  );
}
