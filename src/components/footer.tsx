"use client";

import { ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Button } from "./ui/button";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear: number = new Date().getFullYear();
  return (
    <section className="bg-muted py-4 relative">
      <div className="-top-6 -translate-x-1/2 absolute flex justify-center left-1/2">
        <Button className="shadow-xl" size="icon">
          <Link href="#home">
            <ArrowUp className="animate-accordion-up" />
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
              <li>
                <Link href="/#home">Home</Link>
              </li>
              <li>
                <Link href="/projetos">Projetos</Link>
              </li>
              <li>
                <Link href="/#contato">Contato</Link>
              </li>
              <li>
                <Link href="/curriculum">Curriculum</Link>
              </li>
            </ul>
          </div>
          <div id="contato">
            <h3 className="font-semibold">Contatos</h3>
            <div className="flex gap-3 mt-4">
              <Button size="icon" variant="outline" asChild>
                <Link
                  className="size-10"
                  target="_blank"
                  href="https://www.instagram.com/oliveirafullstack/"
                >
                  <FaWhatsapp className="fill-primary size-6" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <Link
                  className="size-10"
                  target="_blank"
                  href="https://www.linkedin.com/in/oliveira-emmanuel/"
                >
                  <FaLinkedinIn className="fill-primary size-6" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <Link
                  className="size-10"
                  target="_blank"
                  href="mailto:emmanuel.front-end@gmail.com"
                >
                  <MdOutlineAlternateEmail className="fill-primary size-6" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="max-sm:col-span-full max-sm:mt-6">
            <h3 className="font-semibold max-sm:text-center">Redes Sociais</h3>
            <div className="flex gap-3 mt-4">
              <Button size="icon" variant="outline" asChild>
                <Link
                  className="size-10"
                  target="_blank"
                  href="https://www.instagram.com/oliveirafullstack/"
                >
                  <FiInstagram className="fill-primary size-6" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <Link
                  className="size-10"
                  target="_blank"
                  href="https://www.linkedin.com/in/oliveira-emmanuel/"
                >
                  <FiLinkedin className="fill-primary size-6" />
                </Link>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <Link
                  className="size-10"
                  target="_blank"
                  href="https://github.com/emmanuelmarcosdeoliveira"
                >
                  <FiGithub className="fill-primary size-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <p className="border-black/20 border-t-1 pt-4 text-center text-xs">
        &copy; Oliveirafullstack - todos os direitos reservados - {currentYear}
      </p>
    </section>
  );
}
