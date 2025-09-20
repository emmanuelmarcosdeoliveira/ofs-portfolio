import { fadeDown } from "@/styles/animationMotion";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CallAction() {
  return (
    <div className="text-center pt-6">
      <motion.h2 {...fadeDown} className="text-muted-foreground text-3xl pt-4">

        Vamos trabalhar Juntos?
      </motion.h2>
      <motion.p
        {...fadeDown}
        transition={{ delay: 0.3 }}
        className="text-2xl max-sm:w-sm md:mx-auto bg-linear-to-t dark:from-cyan-500 from-blue-800 dark:via-white dark:to-cyan-700 to-blue-600 text-transparent bg-clip-text pt-6 max-w-2xl"
      >
        Estou sempre em busca de novos desafios, quero uma oportunidades para
        surpreender e criar experiências digitais incríveis.
      </motion.p>
      <div className="py-6">
        <Button className="font-bold" asChild variant={"link"} size={"lg"}>
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
  );
}