import { GridBackground } from "@/components/ui/grid-background";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Emmanuel Oliveira | Curriculum",
  description: "Página de curriculum de Emmanuel Oliveira | OFS",
};

export default function pageCurriculum() {
  return (
    <section className="h-screen p-4">
      <GridBackground />
      <div className="flex flex-col h-screen items-center justify-center text-4xl text-center">
        <strong className="text-7xl text-primary">404</strong>
        Página de Curriculum em construção
      </div>
    </section>
  );
}
