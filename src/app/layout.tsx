import Footer from "@/components/footer";
import Menu from "@/components/menu";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Roboto } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Oliveira | OFS ",
  description: "Portfolio do desenvolvedor Emmanuel Oliveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR" suppressHydrationWarning>
      <body className={`${geist.variable} ${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
