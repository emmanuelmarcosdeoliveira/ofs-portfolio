"use client";
import { IntroSection } from "@/components/core-components/intro-section";
import { projetos } from "@/constants/projects";
import { MoveRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectsList from "../ui/projects-list";

export default function Projects() {
  return (
    <>
      <section
        id="projetos"
        className="container relative h-auto mx-auto my-6 p-4"
      >
        <IntroSection title="Meus Projetos" />
        <p className="md:hidden ml-6 py-4 text-sm">
          Abaixo os projetos em destaque
        </p>
        <div className="flex items-center justify-center">
          <div className="gap-4 grid w-full max-lg:grid-cols-1 grid-cols-2 mx-6">
            <div className="flex flex-col gap-4 items-start justify-center">
              <motion.p
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 150 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className=" -indent-6 dark:text-foreground  max-w-xl text-xl md:text-2xl text-balance text-foreground"
              >
                Venha conhecer os meus projetos,{" "}
                <span className="max-sm:hidden"> ao lado</span>{" "}
                <span className="md:hidden">abaixo</span> estão os projetos que
                se{" "}
                <strong className="font-light text-primary">Destacam </strong>
                clique em <span className="text-primary">saiba mais</span> e
                veja os detalhes.Ou acesse <strong>Projetos</strong> e vejam
                todos os meus Projetos
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.2 }}
              >
                <Button
                  className="hover:text-primary cursor-pointer"
                  variant={"outline"}
                >
                  <Link href={"/projetos"}>Projetos</Link>
                  <MoveRight />
                </Button>
              </motion.div>
            </div>
            <div className="flex w-full flex-1 items-center justify-center">
              <ProjectsList projects={projetos} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
