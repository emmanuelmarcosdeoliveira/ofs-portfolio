import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import CallAction from "@/components/call-action";
import TextComponent from "@/components/text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projetos } from "@/constants/projects";
import {
  fadeDown,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "@/styles/animationMotion";
import { ArrowLeft, Github, Link as Li } from "lucide-react";
import * as motion from "motion/react-client";
export const metadata: Metadata = {
  title: "Portfolio Emmanuel Oliveira | Projeto",
  description: "Página de descrição dos Projetos de Emmanuel Oliveira | OFS",
};

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Project({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);
  if (!projeto) return notFound();
  const funcionalidades = projeto.features.length;
  const desafios = projeto.challenges.length;
  console.log(desafios);
  return (
    <>
      <motion.div {...fadeUp} transition={{ duration: 0.3, delay: 0.3 }}>
        <Image
          className="flex h-[800px] justify-center max-sm:h-auto mb-12 object-contain pt-24 w-full z-10"
          width={800}
          height={600}
          src={projeto.images[0]}
          alt={projeto.name}
          unoptimized={true}
          priority
        />
      </motion.div>

      <section className="container flex flex-col mx-auto py-16 w-screen">
        <motion.div
          {...fadeLeft}
          transition={{ delay: 0.2 }}
          className="flex items-start justify-start mb-4"
        >
          <Button
            asChild
            variant="link"
            className="cursor-pointer flex flex-start text-muted-foreground"
          >
            <Link href={"/projetos"}>
              <ArrowLeft />
              Voltar para projetos
            </Link>
          </Button>
        </motion.div>
        <div className="container mx-auto p-4">
          <div className="flex flex-col gap-2 items-start justify-center">
            <motion.h1
              {...fadeRight}
              transition={{ delay: 0.3 }}
              className="font-serif max-sm:text-4xl md:text-5xl text-6xl text-bold text-center text-primary"
            >
              {projeto.name}
            </motion.h1>
          </div>
          <div className="flex flex-col items-start justify-center mt-4">
            <motion.p
              {...fadeDown}
              transition={{ delay: 0.3 }}
              className="leading-relaxed max-sm:w-xs max-w-4xl text-balance text-xl"
            >
              {projeto.description}
            </motion.p>

            {funcionalidades && (
              <motion.div {...fadeLeft}>
                <TextComponent className="pt-6" variant={"title-md"}>
                  Principais funcionalidades{" "}
                </TextComponent>
                <ul className="text-lg">
                  {projeto.features.map((item, index) => (
                    <motion.li
                      {...fadeLeft}
                      transition={{ delay: 0.1 * index }}
                      className=" ml-4 my-2 list-disc"
                      key={index}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            {desafios && (
              <>
                <TextComponent className="pt-6" variant={"title-md"}>
                  Principais desafios obtidos na construção dessa aplicação{" "}
                </TextComponent>
                <ul className="text-lg">
                  {projeto.challenges.map((item, index) => (
                    <motion.li
                      {...fadeLeft}
                      transition={{ delay: 0.1 * index }}
                      className=" ml-4 my-2 list-disc"
                      key={index}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex gap-4 items-center justify-center mt-8">
              <motion.div {...fadeRight} transition={{ delay: 0.2 }}>
                <Button>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projeto.onLine}
                  >
                    Projeto Online
                  </Link>
                  <Li />
                </Button>
              </motion.div>
              <motion.div {...fadeLeft} transition={{ delay: 0.3 }}>
                <Button>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={projeto.gitHub}
                  >
                    GitHub
                  </Link>
                  <Github />
                </Button>
              </motion.div>
            </div>
            <p className="mt-6">Tecnologias usadas nesse projeto:</p>
            <div className="flex flex-wrap gap-2 h-auto mt-4">
              {projeto.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  {...fadeRight}
                  transition={{ delay: 0.1 * index }}
                >
                  <Badge>{tech}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
          <CallAction />
        </div>
      </section>
    </>
  );
}
