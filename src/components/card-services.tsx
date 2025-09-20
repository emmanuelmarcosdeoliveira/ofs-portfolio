import { fadeLeft, fadeRight } from "@/styles/animationMotion";
import * as motion from "motion/react-client";
import TextComponent from "./text";
import CardFlipBackEnd from "./ui/card-flip-back-end";
import CardFlipLandingPage from "./ui/card-flip-landingPage";
import { default as CardFlipSeo } from "./ui/card-flip-seo";
import CardFlipSites from "./ui/card-flip-sites";

export default function CardServices() {
  return (
    <section className="container py-16 max-sm:py-8 overflow-hidden  md:-rotate-2  mx-auto ">
      <div className="h-auto shadow-md rounded-xl px-4 py-8 bg-muted">
        <div className="md:rotate-2 ">
          <motion.div {...fadeRight} transition={{ delay: 0.3 }}>
            <TextComponent
              className="pt-6 max-sm:text-2xl leading-10 "
              variant={"title-xl"}
            >
              Serviços Especializados
            </TextComponent>
          </motion.div>
          <motion.span
            {...fadeLeft}
            transition={{ delay: 0.5 }}
            className=" text-xl max-sm:text-lg  max-w-lg pt-4 w-full block  leading-snug"
          >
            Transformando suas ideias em experiências digitais excepcionais com
            soluções personalizadas para suas necessidades.
          </motion.span>
          <div className="pt-8 max-md:justify-items-center justify-around w-full flex  flex-wrap   gap-8">
            <CardFlipSites />
            <CardFlipLandingPage />
            <CardFlipSeo />
            <CardFlipBackEnd />
          </div>
        </div>
      </div>
    </section>
  );
}
