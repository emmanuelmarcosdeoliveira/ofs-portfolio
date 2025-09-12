import Menu from "@/components/core-components/menu";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { GridBackground } from "@/components/ui/grid-background";
import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat, Oxanium } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  variable: "--font-jetBrainsMono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OFS | Home",
  description:
    "Portfolio Emmanuel Oliveira | OFS, confira os meus projetos e habilidades",
  openGraph: {
    title: "Portfolio Emmanuel Oliveira | OFS",
    description: "Projetos e habilidades de Emmanuel Oliveira",
    url: "https://portfolio.ofs.dev.br",
    siteName: "Portfolio Emmanuel Oliveira | OFS",
    images: [
      {
        url: "https://res.cloudinary.com/delo0gvyb/image/upload/v1756694533/ofs-portfolio_o4fwoi.png",
        width: 1200,
        height: 630,
        alt: "Imagem do portfolio Emmanuel Oliveira",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Emmanuel Oliveira | OFS",
    description: "Projetos e habilidades de Emmanuel Oliveira",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1756694533/ofs-portfolio_o4fwoi.png",
    ],
    creator: "@Emmanuel_0501", // opcional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${jetBrainsMono.variable} ${montserrat.variable} overflow-x-hidden ${oxanium} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GridBackground />
          <Menu />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
