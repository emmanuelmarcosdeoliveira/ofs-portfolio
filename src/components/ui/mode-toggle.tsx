"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="icon">
            <Sun className="dark:-rotate-90 dark:scale-0 h-[1.2rem] rotate-0 scale-100 transition-all w-[1.2rem]" />
            <Moon className="absolute dark:rotate-0 dark:scale-100 h-[1.2rem] rotate-90 scale-0 transition-all w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background/10" align="end">
          <DropdownMenuItem
            className="dark:hover:!bg-purple-900"
            onClick={() => setTheme("light")}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="dark:hover:!bg-purple-900"
            onClick={() => setTheme("dark")}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="dark:hover:!bg-purple-900"
            onClick={() => setTheme("system")}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
