import CallAction from "@/components/call-action";
import CardTechnologies from "@/components/card-technologies";
import Certificates from "@/components/certificates";
import MyDescription from "@/components/my-description";
import WorkExperiences from "@/components/work-experiences";
import { fade } from "@/styles/animationMotion";
import * as motion from "motion/react-client";

export default function Sobre() {
  return (
    <section className="container  mx-auto p-4 py-16">
      <MyDescription />
      <motion.h2
        {...fade}
        transition={{ delay: 0.5 }}
        className="text-center text-muted-foreground text-3xl pt-4"
      >
        Minhas Habilidades
      </motion.h2>
      <motion.p
        {...fade}
        transition={{ delay: 0.7 }}
        className="text-muted-foreground pt-2 text-center"
      >
        Veja abaixo algumas das minhas ferramentas que uso no dia a dia na
        construção de aplicações Web.
      </motion.p>
      <div className="py-16">
        <CardTechnologies />
      </div>
      <Certificates />
      <div className="py-6">
        <h2 className=" text-muted-foreground text-center text-3xl pt-4">
          Trabalho
        </h2>
        <p className="text-center">
          Abaixo veja os últimos cargos e empresa onde trabalhei{" "}
        </p>
      </div>

      <WorkExperiences />
      <CallAction />
    </section>
  );
}
