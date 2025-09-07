"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion } from "motion/react";
import { SplashScreen } from "@/components/loading/splash-screen";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento inicial
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
