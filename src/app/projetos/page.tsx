import CallAction from "@/components/call-action";
import Tablist from "@/components/tab-list";
import { Spotlight } from "@/components/ui/spotlight";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OFS | Projetos",
  description: "Página de Projetos de Emmanuel Oliveira | OFS",
};

export default function Projetos() {
  return (
    <section className="container overflow-hidden mx-auto px-4 py-16">
      <Spotlight />
      <div className="flex flex-col items-center justify-center">
        <h1
          className=" pt-16 text-4xl text-center text-primary
             "
        >
          Meus Projetos
        </h1>
        <span className="max-w-3xl py-8 text-balance text-center text-lg">
          Aqui você poderá ver alguns dos trabalhos que desenvolvi. Navegue a
          vontade explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.{" "}
        </span>
      </div>
      <div className="pb-16">
        <Tablist />
      </div>
      <CallAction />
    </section>
  );
}
