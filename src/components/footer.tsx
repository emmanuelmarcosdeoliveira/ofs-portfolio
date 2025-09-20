"use client";

import { linksMenu } from "@/constants/linksMenu";
import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Contacts from "./contacts";
import SocialMedia from "./social-media";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <section className="bg-muted  relative p-4">
      <div className="-top-3 -translate-x-1/2 absolute flex justify-center left-1/2">
        <Button className="shadow-xl" size="icon">
          <Link href="#home">
            <ArrowUp className="animate-bounce" />
          </Link>
        </Button>
      </div>

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-4 items-start justify-items-center max-sm:grid-cols-2">
          <div>
            <Link className="flex font-sans items-center" href="/">
              <span className="font-semi-bold font-serif text-4xl">OFS</span>

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
            <p className="font-serif">&copy; OLIVEIRAFULLSTACK</p>
            <p className="text-xs">Construindo soluções inovadoras</p>
          </div>
          <div className="max-sm:hidden">
            <h3 className="font-semibold">Links Rápidos</h3>
            <ul className="*:hover:text-primary *:text-muted-foreground *:text-sm flex flex-col gap-1">
              {linksMenu.pages.map((link, i) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2, delay: i * 0.2 }}
                  key={link.id}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
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
      <p className="border-black/20 font-serif border-t-1 pt-4 text-center text-xs">
        &copy; <span>OLIVEIRAFULLSTACK</span> - todos os direitos reservados{" "}
        2022 - {currentYear}
      </p>
    </section>
  );
}
