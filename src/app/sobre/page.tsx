import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GridBackground } from "@/components/ui/grid-background";
import { courses } from "@/constants/courses";
import {
  ArrowRight,
  Award,
  Database,
  SplinePointer,
  WandSparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sobre() {
  return (
    <section className="container  mx-auto p-4 py-16">
      <h1 className="text-4xl pt-16 text-primary text-center">Sobre Min</h1>
      <h2 className="text-center  text-xl font-medium pt-4">
        Conheça um pouco mais sobre minha trajetória e experiência.
      </h2>

      <div className="flex justify-items-center text-muted-foreground pt-16 gap-6 flex-wrap">
        <div className="max-sm:mx-auto">
          <Image
            className="rounded-xl shadow-md grayscale-100 hover:grayscale-0"
            src="https://res.cloudinary.com/delo0gvyb/image/upload/v1757015930/Emmanuel_kpg7so.jpg"
            alt="foto de Perfil Emmanuel Oliveira"
            width={380}
            height={600}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-medium pt-16">Emmanuel Oliveira</h1>
          <div className="max-w-3xl *:indent-8 text-lg space-y-2 pt-8">
            <p>
              Sou um desenvolvedor front-end apaixonado por criar experiências
              digitais inovadoras e intuitivas.{" "}
            </p>{" "}
            <p>
              {" "}
              Venho trabalhado com as tecnologias mais modernas do mercado, como
              React, Next.js, TypeScript e Tailwind CSS. Venho aprimorando
              minhas habilidades e expandindo meu conhecimento para me tornar um
              desenvolvedor front-end completo.
            </p>{" "}
            <p>
              Atualmente, estou focado em criar interfaces de usuário modernas e
              responsivas, com atenção especial à acessibilidade e performance.
              Acredito que a combinação de design atraente e código de qualidade
              é essencial para criar produtos digitais de sucesso.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-muted-foreground text-3xl pt-4">
        Minhas Habilidades
      </h2>
      <p className="text-muted-foreground pt-2 text-center">
        Veja abaixo algumas das minhas habilidades
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 pt-8 justify-between">
        <div className="flex-1">
          <Card className="bg-muted-foreground/10 h-84 max-sm:h-auto">
            <CardHeader>
              <CardTitle className="text-primary text-xl text-center">
                Front end
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="*:py-1 text-lg  text-foreground">
                <li className="flex gap-4 items-center">
                  <WandSparkles />
                  React.js , Next.js, Vue.js
                </li>
                <li className="flex gap-4 items-center">
                  <WandSparkles />
                  TypeScript & JavaScript
                </li>
                <li className="flex gap-4 items-center">
                  <WandSparkles />
                  HTML5 & CSS3
                </li>
                <li className="flex gap-4 items-center">
                  <WandSparkles />
                  SASS
                </li>
                <li className="flex gap-4 items-center">
                  <WandSparkles />
                  TailwindCSS & styled-components
                </li>
                <li className="flex gap-4 items-center">
                  <WandSparkles />
                  FramerMotion
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-muted-foreground/10 h-84">
            <CardHeader>
              <CardTitle className="text-primary text-xl text-center">
                Back end
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="*:py-1 text-lg  text-foreground">
                <li className="flex gap-4 items-center">
                  <Database />
                  Node.js & Express.js
                </li>
                <li className="flex gap-4 items-center">
                  <Database />
                  Api Restfull
                </li>
                <li className="flex gap-4 items-center">
                  <Database />
                  Postgres
                </li>
                <li className="flex gap-4 items-center">
                  <Database />
                  Prisma
                </li>
                <li className="flex gap-4 items-center">
                  <Database />
                  Docker
                </li>
                <li className="flex gap-4 items-center">
                  <Database />
                  Jest, SuperTest
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-muted-foreground/10 h-84">
            <CardHeader>
              <CardTitle className="text-primary text-xl text-center">
                Ferramentas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="*:py-1 text-lg  text-foreground">
                <li className="flex gap-4 items-center">
                  <SplinePointer />
                  Figma
                </li>
                <li className="flex gap-4 items-center">
                  <SplinePointer />
                  Cursor & VsCode
                </li>
                <li className="flex gap-4 items-center">
                  <SplinePointer />
                  Git & GitHub
                </li>
                <li className="flex gap-4 items-center">
                  <SplinePointer />
                  Vercel & Netlify
                </li>
                <li className="flex gap-4 items-center">
                  <SplinePointer />
                  Docker
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="py-6 ">
        <h2 className=" text-muted-foreground text-center text-3xl pt-4">
          Certificados
        </h2>
        <p className="text-center">
          Abaixo alguns dos certificados que conclui{" "}
        </p>
        <h3 className="text-muted-foreground pb-8 text-xl">Front-end</h3>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3   grid-cols-1 max-sm:gap-3 gap-6 group">
          {courses.map((course) => (
            <li key={course.name}>
              <Card className="gap-1 py-2 px-2 bg-muted-foreground/10 hover:scale-105 transition-all ">
                <CardHeader>
                  <div className="flex items-center gap-1">
                    <Award size="32" />
                    <div>
                      <h4 className="max-md:text-sm">{course.name}</h4>
                      <CardTitle>
                        <strong className="font-semibold">
                          {course.company}
                        </strong>
                        <span className="max-md:text-xs">{course.date}</span>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link target="_blank" href={course.ImageUrl}>
                    <p className="text-sm   cursor-pointer flex p-2 ml-8 items-center gap-3 group hover:text-primary">
                      Ver detalhes
                      <ArrowRight className="-rotate-45" size="16" />
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center pt-6">
        <h2 className=" text-muted-foreground text-3xl pt-4">
          Vamos trabalhar Juntos?
        </h2>
        <p className="text-2xl bg-linear-to-t dark:from-cyan-500 from-orange-300 dark:via-white dark:to-cyan-700 to-orange-600 text-transparent bg-clip-text pt-6 mx-auto max-w-2xl">
          Estou sempre em busca de novos desafios e oportunidades para criar
          experiências digitais incríveis.
        </p>
        <div className="py-6">
          <Button asChild variant={"ghost"} size={"lg"}>
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
