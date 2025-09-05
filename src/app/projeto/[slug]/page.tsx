// src/app/projeto/[slug]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projetos } from "@/constants/projects";
import { ArrowLeft, Github, Link as Li } from "lucide-react";

// Metadata da página
export const metadata: Metadata = {
  title: "Portfolio Emmanuel Oliveira | Projeto",
  description: "Página de descrição dos Projetos de Emmanuel Oliveira | OFS",
};

// Tipagem correta para Next.js 15 App Router
interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Função async para permitir Server Component
export default async function Project({ params }: ProjectPageProps) {
  // Aguarda a resolução dos parâmetros (Next.js 15)
  const { slug } = await params;

  // Busca projeto pelo slug
  const projeto = projetos.find((p) => p.slug === slug);

  // Retorna 404 caso não encontre
  if (!projeto) return notFound();

  return (
    <>
      <Image
        className="flex h-[800px] justify-center max-sm:h-auto mb-12 object-contain pt-24 w-full z-10"
        width={800}
        height={600}
        src={projeto.images[0]}
        alt={projeto.name}
        // Se for URL externa, habilitar permissões no next.config.js
        unoptimized={true}
        priority
      />
      <section className="container flex flex-col mx-auto py-16 w-screen">
        <div className="flex items-start justify-start mb-4">
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
        </div>

        {/* Conteúdo do projeto */}
        <div className="container mx-auto p-4">
          <div className="flex flex-col gap-2 items-start justify-center">
            <h1 className="font-serif max-sm:text-4xl md:text-5xl text-6xl text-bold text-center text-primary">
              {projeto.name}
            </h1>
          </div>
          <div></div>

          <div className="flex flex-col items-start justify-center mt-4">
            <p className="leading-relaxed max-sm:w-xs max-w-4xl text-balance text-xl">
              {projeto.description}
            </p>

            <div className="flex gap-4 items-center justify-center mt-8">
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
            </div>

            <p className="mt-6">Tecnologias usadas nesse projeto:</p>
            <div className="flex flex-wrap gap-2 h-auto mt-4">
              {projeto.technologies.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
