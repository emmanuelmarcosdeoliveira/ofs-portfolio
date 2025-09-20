"use client";

import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitchMenu() {
  return (
    <ThemeSwitch
      modes={["light", "dark"]}
      icons={[
        <Sun className="text-primary" key="sun-icon" size={16} />,
        <Moon className="text-primary" key="moon-icon" size={16} />,
      ]}
      showActiveIconOnly={true}
    />
  );
}
