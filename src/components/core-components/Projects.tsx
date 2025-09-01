import { IntroSection } from "@/components/intro-section";
import { projetos } from "@/constants/projects";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ProjectsList from "../ui/projects-list";

export default function Projects() {
  return (
    <>
      <section id="projetos" className="container h-auto mx-auto my-6 p-4">
        <IntroSection title="Meus Projetos" />
        <div className="flex items-center justify-center">
          <div className="gap-4 grid grid-cols-2 max-lg:grid-cols-1 mx-6">
            <div className="flex flex-col gap-4 items-start justify-center max-sm:hidden">
              <p className="dark:text-foreground/40 font-serif max-w-2xl text-balance text-foreground text-xl">
                Venha conhecer os meus projetos em{" "}
                <strong className="font-light text-muted-foreground">
                  Destaque{" "}
                </strong>
                clique em{" "}
                <span className="text-muted-foreground">saiba mais</span> e veja
                os detalhes
              </p>
              <Button>
                <Link href={"/projetos"}>Projetos</Link>
                <MoveUpRight />
              </Button>
            </div>

            <ProjectsList projects={projetos} />
          </div>
        </div>
      </section>
    </>
  );
}
