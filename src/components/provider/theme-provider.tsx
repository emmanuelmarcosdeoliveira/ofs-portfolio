"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import ClientWrapper from "@/components/loading/client-wrapper";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      {...props}
    >
      <ClientWrapper>{children}</ClientWrapper>
    </NextThemesProvider>
  );
}
