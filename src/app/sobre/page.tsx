"use client";
import CardTechnologies from "@/components/core-components/card-technologies";
import WorkExperiences from "@/components/experiences";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/constants/courses";
import { skills } from "@/constants/skills";

import { ArrowRight, Award } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sobre() {
  const animProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  return (
    <section className="container  mx-auto p-4 py-16">
      <motion.h1
        {...animProps}
        transition={{ delay: 0.3 }}
        className="text-4xl pt-16 text-primary text-center"
      >
        Sobre Min
      </motion.h1>
      <motion.h2
        {...animProps}
        transition={{ delay: 0.5 }}
        className="text-center  text-xl font-medium pt-4"
      >
        Conheça um pouco mais sobre minha trajetória e experiência.
      </motion.h2>

      <div className="flex justify-items-center text-muted-foreground pt-16 gap-6 flex-wrap">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.5 }}
          className="max-sm:mx-auto"
        >
          <div className="group overflow-hidden rounded-xl">
            <Image
              priority
              className=" w-full transition-transform duration-500 ease-in-out  group-hover:scale-110  shadow-md grayscale-20 hover:grayscale-0"
              src="https://res.cloudinary.com/delo0gvyb/image/upload/v1757015930/Emmanuel_kpg7so.jpg"
              alt="foto de Perfil Emmanuel Oliveira"
              width={380}
              height={600}
            />
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.h1
            {...animProps}
            transition={{ delay: 0.5 }}
            className="text-3xl font-medium pt-16"
          >
            Emmanuel Oliveira
          </motion.h1>
          <div className="max-w-3xl *:indent-8 text-lg space-y-2 pt-8">
            <motion.p {...animProps} transition={{ delay: 0.3, duration: 0.3 }}>
              Sou um desenvolvedor front-end apaixonado por criar experiências
              digitais inovadoras e intuitivas.{" "}
            </motion.p>
            <motion.p {...animProps} transition={{ delay: 0.4, duration: 0.4 }}>
              Venho trabalhado com as tecnologias mais modernas do mercado, como
              React, Next.js, TypeScript e Tailwind CSS. Venho aprimorando
              minhas habilidades e expandindo meu conhecimento para me tornar um
              desenvolvedor front-end completo.
            </motion.p>{" "}
            <motion.p {...animProps} transition={{ delay: 0.6, duration: 0.6 }}>
              Atualmente, estou focado em criar interfaces de usuário modernas e
              responsivas, com atenção especial à acessibilidade e performance.
              Acredito que a combinação de design atraente e código de qualidade
              é essencial para criar produtos digitais de sucesso.
            </motion.p>
          </div>
        </div>
      </div>
      <motion.h2
        {...animProps}
        transition={{ delay: 0.5 }}
        className="text-center text-muted-foreground text-3xl pt-4"
      >
        Minhas Habilidades
      </motion.h2>
      <motion.p
        {...animProps}
        transition={{ delay: 0.7 }}
        className="text-muted-foreground pt-2 text-center"
      >
        Veja abaixo algumas das minhas ferramentas que uso no dia a dia na
        construção de aplicações Web.
      </motion.p>
      <div className="py-16">
        <CardTechnologies />
      </div>
      <div className="py-6 ">
        <h2 className=" text-muted-foreground text-center text-3xl pt-4">
          Certificados
        </h2>
        <p className="text-center">
          Abaixo alguns dos certificados que conclui{" "}
        </p>
        <h3 className=" text-muted-foreground pb-8 text-xl">Front-end</h3>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3   grid-cols-1 max-sm:gap-3 gap-6">
          {courses.map((course, i) => (
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: i * 0.2 }}
              key={course.name}
            >
              <Card className="gap-1 group py-2 px-2 bg-muted-foreground/10 hover:scale-105 transition-all ">
                <CardHeader>
                  <div className="flex">
                    <div className="flex items-center gap-1">
                      <Award size="48" />
                    </div>
                    <div>
                      <h4 className="max-md:text-sm">{course.name}</h4>
                      <CardTitle>
                        <strong className="font-semibold group-hover:fill-primary">
                          {course.company}
                        </strong>
                        <span className="max-md:text-xs">{course.date}</span>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Link target="_blank" href={course.ImageUrl}>
                    <p className="text-sm  p-1  cursor-pointer flex  items-center gap-2 group hover:text-primary">
                      Ver detalhes
                      <ArrowRight size="16" />
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="py-6">
        <h2 className=" text-muted-foreground text-center text-3xl pt-4">
          Trabalho
        </h2>
        <p className="text-center">
          Abaixo veja os últimos cargos e empresa onde trabalhei{" "}
        </p>
      </div>

      <WorkExperiences />
      <div className="text-center pt-6">
        <motion.h2
          {...animProps}
          className=" text-muted-foreground text-3xl pt-4"
        >
          Vamos trabalhar Juntos?
        </motion.h2>
        <motion.p
          {...animProps}
          transition={{ delay: 0.3 }}
          className="text-2xl bg-linear-to-t dark:from-cyan-500 from-orange-300 dark:via-white dark:to-cyan-700 to-orange-600 text-transparent bg-clip-text pt-6 mx-auto max-w-2xl"
        >
          Estou sempre em busca de novos desafios, quero uma oportunidades para
          surpreender e criar experiências digitais incríveis.
        </motion.p>
        <div className="py-6">
          <Button asChild variant={"link"} size={"lg"}>
            <Link
              href={
                "https://wa.me/5511968336094?text=Olá,%20vamos%20conversar%20sobre%20seu%20portfolio?"
              }
            >
              Vamos conversar{" "}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
