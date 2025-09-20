"use client";

import { linksMenu } from "@/constants/linksMenu";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitchMenu } from "./provider/switch-theme";

export default function Menu() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="-translate-x-1/2 fixed left-1/2 mt-6 z-40"
    >
      <div className="backdrop-blur-sm border-1 dark:border-white/30 flex h-12 items-center justify-between max-sm:w-sm  max-md:px-1 max-md:w-lg px-4  w-3xl  rounded-xl">
        <div>
          <Link className="flex justify-center font-sans items-center" href="/">
            <span className="font-semi-bold max-sm:hidden text-3xl font-serif">
              OFS
            </span>
          </Link>
        </div>
        <nav className="*:hover:text-muted-foreground *:p-1 flex gap-4 items-center text-md max-sm:text-[13px] font-semibold font-serif  transition-all">
          {linksMenu.pages.map((page) => (
            <Link
              key={page.id}
              className={
                pathname === `${page.href}` ? "text-primary" : "dark:text-white"
              }
              href={page.href}
            >
              {page.name}
            </Link>
          ))}
        </nav>
        <div className="pt-1">
          <ThemeSwitchMenu />
        </div>
      </div>
    </motion.header>
  );
}
