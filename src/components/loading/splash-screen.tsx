"use client";

import { motion } from "motion/react";
import ConcentricLoader from "./concentric-loader";

export function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-50
                 bg-gradient-to-b from-[#f2f2f2]  to-orange-300
                 dark:from-[#090808] from-85% dark:from-85% dark:via-[#090808]  dark:to-sky-900 
                 text-black dark:text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <ConcentricLoader>
        <h1 className="text-center font-serif text-primary text-8xl">OFS</h1>

        <span className="ml-4 dark:text-white font-serif text-md text-center font-semibold">
          OLIVERAFULLSTACK
        </span>
      </ConcentricLoader>
      <motion.p
        className="text-xl font-serif font-light text-foreground tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
      >
        Carregando...
      </motion.p>
    </motion.div>
  );
}
