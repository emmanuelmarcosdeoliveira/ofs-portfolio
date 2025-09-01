import Tablist from "@/components/tab-list";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Projetos() {
  return (
    <section className="container mx-auto p-4 py-16">
      <h1 className="font-serif max-sm:text-left max-sm:text-xl max-w-4xl mx-auto pt-24 text-2xl text-balance text-center text-muted-foreground">
        Aqui você poderá ver alguns dos trabalhos que desenvolvi. Navegue a
        vontade explore os projetos para ver como foram criados, as tecnologias
        utilizadas e as funcionalidades implementadas{" "}
      </h1>

      <Tablist />

      <div className="flex items-center justify-center mt-8">
        <Button>
          <ArrowRight />
          <Link href={"/"}>Voltar a Home</Link>
        </Button>
      </div>
    </section>
  );
}
