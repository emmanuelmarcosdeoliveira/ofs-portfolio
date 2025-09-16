import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import AnimateIcons from "./animate-icons";
import { Button } from "./ui/button";
import { ContainerTextFlip } from "./ui/container-text-flip";
import SplitText from "./ui/split-text";
import { Spotlight } from "./ui/spotlight";

export default function HeroSection() {
  return (
    <section id="home" className="container  overflow-hidden  h-screen mx-auto">
      <div className="absolute -z-50 w-screen h-screen container mx-auto">
        <AnimateIcons />
      </div>
      <Spotlight />
      <div className="flex animate-fade-in-intro flex-col gap-6 lg:gap-4 mt-40 w-full">
        <div className="dark:text-primary flex flex-col font-bold gap-2 items-center justify-center text-center text-destructive text-lg">
          Desenvolvedor
          <span className="inline-flex justify-center">
            {" "}
            <ContainerTextFlip words={["Front-end", "Back-end"]} />
          </span>{" "}
        </div>
        <SplitText
          className=" text-primary  font-semibold font-serif max-sm:text-4xl md:text-7xl"
          text="Emmanuel Oliveira"
        />
        <span className="-top-4 left-1 relative text-center text-muted-foreground/50 text-xs">
          &copy; Oliveirafullstack
        </span>
        <div className="dark:text-foreground/50">
          <p className="lg:text-2xl relative px-4 z-20 font-medium text-transparent bg-gradient-to-r dark:from-cyan-100 from-gray-900 via-orange-300 dark:via-gray-400 dark:to-cyan-300 to-gray-600 bg-clip-text animate-gradient animate-fade-in-scale lg:text-balance max-sm:text-xl max-w-6xl mx-auto text-center text-xl">
            Desenvolvedor Front-end com experiência prática em React, Next.js e
            TypeScript, desenvolvo aplicações web modernas, completas e
            escaláveis, integrando Front-end e Back-end com boas práticas de
            código e foco em performance.
          </p>
        </div>
      </div>

      <div className="*:p-2 cursor-pointer flex gap-2 justify-center mt-4">
        <Link
          target="_blank"
          href="https://wa.me/5511968336094?text=Olá%2C%20gostaria%20de%20mais%20informações."
        >
          <FaWhatsapp className="animate-float fill-primary hover:fill-primary/50 size-6" />
        </Link>
        <Link href="mailto:oliveira.frontend@gmail.com">
          <MdAlternateEmail className="animate-float fill-primary hover:fill-primary/50 size-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/oliveira-emmanuel/"
          target="_blank"
        >
          <SlSocialLinkedin className="animate-float fill-primary hover:fill-primary/50 size-6" />
        </Link>
        <Link
          href="https://github.com/emmanuelmarcosdeoliveira"
          target="_blank"
        >
          <VscGithubAlt className="animate-float fill-primary hover:fill-primary/50 size-6" />
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center pt-8">
        <Button
          className="cursor-pointer font-smibold hover:text-primary"
          variant={"outline"}
          asChild
        >
          <Link
            className=""
            href="/emmanuel-oliveira.pdf"
            target="_blank"
            download
          >
            Curriculum
          </Link>
        </Button>
        <Button
          className="cursor-pointer font-semibold dark:hover:bg-transparent hover:border-primary hover:bg-transparent hover:text-primary border border-muted"
          asChild
        >
          <Link href="/projetos">Projetos</Link>
        </Button>
      </div>
    </section>
  );
}
