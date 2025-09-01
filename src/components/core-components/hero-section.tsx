import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { AnimatedBeamDemo } from "../ui/anima-icons";
import { Button } from "../ui/button";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { GridBackground } from "../ui/grid-background";
import SplitText from "../ui/split-text";
import { Spotlight } from "../ui/spotlight";
export default function HeroSection() {
  return (
    <section className="container h-screen mx-auto p-4">
      <GridBackground />
      <Spotlight />

      <div id="home" className="flex gap-4">
        <div className="flex flex-col gap-6 mt-40">
          <div className="dark:text-primary flex flex-col font-bold gap-2 items-center justify-center text-center text-destructive text-lg">
            Desenvolvedor
            <span className="inline-flex justify-center">
              {" "}
              <ContainerTextFlip
                words={["Front-end", "Back-end", "Full-stack"]}
              />
            </span>{" "}
          </div>
          <SplitText
            className="font-medium max-sm:text-4xl text-6xl text-primary"
            text="Emmanuel Oliveira"
          />
          <span className="-top-4 left-1 relative text-center text-muted-foreground/50 text-xs">
            &copy; Oliveirafullstack
          </span>
          <div className="dark:text-foreground/50 max-sm:text-lg max-w-1/1 mx-auto text-2xl text-balance text-center tracking-wide">
            Transformando necessidades em aplicações reais, evolventes e
            funcionais, contribuindo com soluções inovadoras e eficazes ajudando
            a solucionar desafios complexos.
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex gap-6 items-center justify-center mt-4">
        <Link
          target="_blank"
          href="https://wa.me/5511968336094?text=Olá%2C%20gostaria%20de%20mais%20informações."
        >
          <FaWhatsapp className="animate-wiggle fill-primary hover:fill-primary/50 size-6" />
        </Link>
        <Link href="mailto:oliveira.frontend@gmail.com">
          <MdAlternateEmail className="animate-wiggle fill-primary hover:fill-primary/50 size-6" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/oliveira-emmanuel/"
          target="_blank"
        >
          <SlSocialLinkedin className="animate-wiggle fill-primary hover:fill-primary/50 size-6" />
        </Link>
        <Link
          href="https://github.com/emmanuelmarcosdeoliveira"
          target="_blank"
        >
          <VscGithubAlt className="animate-wiggle fill-primary hover:fill-primary/50 size-6" />
        </Link>
      </div>
      <div className="flex gap-4 items-center justify-center pt-4">
        <Button variant={"outline"} asChild>
          <Link href="/emmanuel-oliveira.pdf" target="_blank" download>
            Curriculum
            <MoveUpRight />
          </Link>
        </Button>
        <Button asChild>
          <Link href="#projetos">
            Projetos
            <MoveUpRight />
          </Link>
        </Button>
      </div>

      <AnimatedBeamDemo />
    </section>
  );
}
