"use client";
import { skills } from "@/constants/skills";
import { fadeLeft, fadeRight } from "@/styles/animationMotion";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import TextComponent from "../text";

export default function CardTechnologies() {
  return (
    <section className="container overflow-hidden md:rotate-2  mx-auto">
      <div className="h-auto  rounded-xl  p-4  w-full  bg-muted/50">
        <motion.div {...fadeLeft} transition={{ delay: 0.2 }}>
          <TextComponent
            className="pt-6 md:-rotate-2 max-sm:text-2xl leading-10 "
            variant="title-xl"
          >
            Tecnologias & Ferramentas
          </TextComponent>
        </motion.div>
        <motion.p
          {...fadeRight}
          transition={{ delay: 0.3 }}
          className="md:-rotate-2 max-w-lg text-xl max-sm:text-lg  pt-8"
        >
          Abaixo algumas das tecnologias e ferramentas que utilizo na construção
          de aplicações Web
        </motion.p>

        <div className="md:-rotate-2">
          <h1 className="text-primary font-serif pt-6 text-2xl">Front end</h1>
          <div className="grid py-6 grid-cols-3 md:grid-cols-6 lg:grid-cols-12 grid-rows-2 gap-1">
            {skills.frontEnd.map((tec, i) => (
              <motion.div
                {...fadeRight}
                transition={{ delay: 0.1 + i * 0.1 }}
                key={tec.id}
                className="grid cursor-pointer  grayscale-100 hover:grayscale-0   z-10 relative first:col-span-2 first:row-span-3    group transition-transform  overflow-hidden   bg-neutral-300 dark:bg-neutral-800  ease-in-out dark:hover:bg-linear-to-b  shadow-xs  to-black  justify-center items-center"
              >
                <Link href={tec.url} target="_blank">
                  <div className="p-6">
                    <Image
                      className="w-full  group-hover:scale-110 transition-transform ease-in-out object-contain"
                      src={tec.icon}
                      alt=""
                      width={90}
                      height={0}
                    />
                    <p className="absolute max-sm:text-xs flex font-semibold bg-background/80 rounded-md bottom-2 left-1 px-1  z-50 group-hover:opacity-100 opacity-0">
                      {tec.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:-rotate-2">
          <h1 className="text-primary font-serif pt-6 text-2xl">Back-end</h1>
          <div className="grid py-6 grid-cols-3 md:grid-cols-6 lg:grid-cols-12 grid-rows-2 gap-1">
            {skills.backEnd.map((tec, i) => (
              <motion.div
                {...fadeLeft}
                transition={{ delay: 0.1 + i * 0.1 }}
                key={tec.id}
                className="grid cursor-pointer  grayscale-100 hover:grayscale-0   z-10 relative first:col-span-2 first:row-span-3    group transition-transform  overflow-hidden   bg-neutral-300 dark:bg-zinc-800  ease-in-out dark:hover:bg-linear-to-b  shadow-xs  to-black  justify-center items-center"
              >
                <Link href={tec.url} target="_blank">
                  <div className="p-6">
                    <Image
                      className="w-full group-grayscale-0 group-hover:scale-110 transition-transform ease-in-out object-contain"
                      src={tec.icon}
                      alt=""
                      width={48}
                      height={48}
                    />
                    <p className="absolute max-sm:text-xs flex font-semibold bg-background/80 rounded-md  bottom-2 left-1 px-1   z-50 group-hover:opacity-100 opacity-0">
                      {tec.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
