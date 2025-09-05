"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitchMenu } from "./provider/switch-theme";
import { linksMenu } from "@/constants/menu";

export default function Menu() {
  console.log(linksMenu.pages);
  const { theme } = useTheme();
  const pathname = usePathname();
  return (
    <header className="-translate-x-1/2 fixed left-1/2 mt-6 z-40">
      <div className="backdrop-blur-sm border-1 dark:border-white/30 flex h-12 items-center justify-between max-md:px-1 max-md:w-sm px-2 rounded-xl w-3xl">
        <div>
          <Link className="flex font-sans items-center" href="/">
            <Image
              suppressHydrationWarning
              className="dark:text-white"
              src={theme === "dark" ? "/ofs-light.svg" : "/ofs-dark.svg"}
              width={36}
              height={36}
              alt="logo"
            />
            <span className="font-semi-bold max-sm:hidden text-4xl">FS</span>
          </Link>
        </div>
        <nav className="*:hover:text-muted-foreground *:p-1 flex gap-4 items-center max-sm:text-[13px] text-sm transition-all">
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
    </header>
  );
}
