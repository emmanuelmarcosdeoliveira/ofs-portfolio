import { IntroSection } from "@/components/intro-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projetos } from "@/constants/projects";
import { ArrowRight, Github, Link as Li } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Portfolio Emmanuel Oliveira | Projeto",
  description: "Página de descrição dos Projetos de Emmanuel Oliveira | OFS",
};
interface ProjectProps {
  params: {
    slug: string;
  };
}
export default async function Project({ params }: ProjectProps) {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);
  if (!projeto) return notFound();

  return (
    <section className="flex flex-col relative w-screen">
      <div className="h-[600px] inset-0 relative w-full">
        <Image
          className="absolute flex h-[600px] justify-center object-contain w-full z-10"
          width={800}
          height={600}
          src={projeto.images[0]}
          alt={projeto.name}
        />
      </div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-8 items-start justify-center">
          <IntroSection title="Projeto" />
          <h1 className="font-serif text-2xl text-center text-primary">
            {projeto.name}
          </h1>
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="leading-relaxed max-sm:w-xs max-w-4xl text-balance text-xl">
            {projeto.description}
          </p>
          <div className="flex gap-4 items-center justify-center mt-8">
            <Button>
              <Link target="_blank" href={projeto.onLine}>
                Projeto Online
              </Link>
              <Li />
            </Button>
            <Button>
              <Link target="_blank" href={projeto.gitHub}>
                GitHub
              </Link>
              <Github />
            </Button>
          </div>
          <p className="mt-6">
            Abaixo as tecnologias que foram usadas nesse projeto
          </p>
          <div className="flex flex-wrap gap-2 h-auto mt-4">
            {projeto.technologies.map((proj, index) => (
              <Badge key={index}>{proj}</Badge>
            ))}
          </div>
          <Button className="mt-8">
            <ArrowRight />
            <Link href={"/"}>Voltar a Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
