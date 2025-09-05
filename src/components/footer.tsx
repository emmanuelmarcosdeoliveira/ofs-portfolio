"use client";

import { ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { Button } from "./ui/button";
import { linksMenu } from "@/constants/menu";
import SocialMedia from "./social-media";
import Contacts from "./contacts";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear: number = new Date().getFullYear();
  return (
    <section className="bg-muted py-4 relative">
      <div className="-top-3 -translate-x-1/2 absolute flex justify-center left-1/2">
        <Button className="shadow-xl" size="icon">
          <Link href="#home">
            <ArrowUp className="animate-bounce" />
          </Link>
        </Button>
      </div>

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-4 items-center justify-items-center max-sm:grid-cols-2">
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
              <span className="font-semi-bold text-4xl">FS</span>
            </Link>
            <p>&copy; oliveirafullstack</p>
            <p className="text-xs">Construindo soluções inovadoras</p>
          </div>
          <div className="max-sm:hidden">
            <h3 className="font-semibold">Links Rápidos</h3>
            <ul className="*:hover:text-primary *:text-muted-foreground *:text-sm flex flex-col gap-1">
              {linksMenu.pages.map((link) => (
                <li key={link.id}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="contato">
            <h3 className="font-semibold">Contatos</h3>
            <div className="flex gap-3 mt-4">
              <Contacts />
            </div>
          </div>
          <div className="max-sm:col-span-full max-sm:mt-6">
            <h3 className="font-semibold max-sm:text-center">Redes Sociais</h3>
            <SocialMedia />
          </div>
        </div>
      </div>
      <p className="border-black/20 border-t-1 pt-4 text-center text-xs">
        &copy; Oliveirafullstack - todos os direitos reservados - {currentYear}
      </p>
    </section>
  );
}
