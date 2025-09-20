import { fade, fadeUp } from "@/styles/animationMotion";
import * as motion from "motion/react-client";
import Image from "next/image";
export default function MyDescription() {
  return (
    <>
      <motion.h1
        {...fadeUp}
        transition={{ delay: 0.3 }}
        className="text-4xl pt-16 text-primary text-center"
      >
        Sobre Min
      </motion.h1>
      <motion.h2
        {...fade}
        transition={{ delay: 0.5 }}
        className="text-center  text-xl font-medium pt-4"
      >
        Conheça um pouco mais sobre minha trajetória e experiência.
      </motion.h2>

      <div className=" flex justify-items-center text-muted-foreground pt-16 gap-6 flex-wrap">
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
            {...fadeUp}
            transition={{ delay: 0.5 }}
            className="text-3xl font-medium pt-16"
          >
            Emmanuel Oliveira
          </motion.h1>
          <div className="max-w-3xl *:indent-8 text-lg space-y-2 pt-8">
            <motion.p {...fadeUp} transition={{ delay: 0.3, duration: 0.3 }}>
              Formado em{" "}
              <span className="text-primary font-medium">
                Redes de computadores
              </span>{" "}
              pela faculdade UniSant&apos;Anna com experiência em
              <span className="text-primary font-medium">
                {" "}
                trabalho em equipe e resolução de problemas
              </span>{" "}
              como desenvolvedor front-end meu objetivo é criar experiências
              digitais modernas, intuitivas e funcionais.
            </motion.p>
            <motion.p {...fadeUp} transition={{ delay: 0.4, duration: 0.4 }}>
              Venho desenvolvendo interfaces web com tecnologias como{" "}
              <span className="text-primary font-medium">
                React.js, Next.js, TypeScript e Tailwind CSS,
              </span>{" "}
              sempre buscando evoluir e ampliar meus conhecimentos para crescer
              como desenvolvedor e criar aplicações cada vez mais robustas e
              funcionais.
            </motion.p>{" "}
            <motion.p {...fadeUp} transition={{ delay: 0.6, duration: 0.6 }}>
              Acredito que unir um design bem pensado com um código de qualidade
              é o caminho para entregar produtos digitais de impacto.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
