import { skills } from "@/constants/skills";
import Image from "next/image";
import Link from "next/link";
import TextComponent from "../text";

export default function CardTechnologies() {
  return (
    <section className="container overflow-hidden md:rotate-2  mx-auto">
      <div className="h-auto  rounded-xl  p-8  w-full  bg-muted/50">
        <TextComponent className="md:-rotate-2" variant="title-lg">
          Tecnologias & Ferramentas
        </TextComponent>
        <p className="md:-rotate-2 text-lg pt-4">
          Abaixo algumas das tecnologias e ferramentas que utilizo na construção
          de aplicações Web
        </p>

        <div className="md:-rotate-2">
          <h1 className="text-primary font-serif pt-6 text-2xl">Front end</h1>
          <div className="grid py-6 grid-cols-3 md:grid-cols-10 grid-rows-3 gap-2">
            {skills.frontEnd.map((tec) => (
              <div
                key={tec.id}
                className="grid cursor-pointer  grayscale-100 hover:grayscale-0   z-10 relative first:col-span-2 first:row-span-3    group transition-transform rounded-xl overflow-hidden   bg-neutral-300 dark:bg-neutral-800  ease-in-out dark:hover:bg-linear-to-b  shadow-xs  to-black  justify-center items-center"
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
              </div>
            ))}
          </div>
        </div>

        <div className="md:-rotate-2">
          <h1 className="text-primary font-serif pt-6 text-2xl">Back-end</h1>
          <div className="grid py-6 grid-cols-3 md:grid-cols-12 grid-rows-2 gap-2">
            {skills.backEnd.map((tec) => (
              <div
                key={tec.id}
                className="grid cursor-pointer  grayscale-100 hover:grayscale-0   z-10 relative first:col-span-2 first:row-span-3    group transition-transform rounded-xl overflow-hidden   bg-neutral-300 dark:bg-zinc-800  ease-in-out dark:hover:bg-linear-to-b  shadow-xs  to-black  justify-center items-center"
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
              </div>
            ))}
          </div>
        </div>

        <div className="md:-rotate-2">
          <h1 className="text-primary font-serif pt-6 text-2xl">Ferramentas</h1>
          <div className="grid py-6 grid-cols-3 md:grid-cols-10 grid-rows-2 gap-2">
            {skills.tools.map((tec) => (
              <div
                key={tec.id}
                className="grid cursor-pointer  grayscale-100 hover:grayscale-0   z-10 relative first:col-span-2 first:row-span-3    group transition-transform rounded-xl overflow-hidden   bg-neutral-300 dark:bg-neutral-800  ease-in-out dark:hover:bg-linear-to-b  shadow-xs  to-black  justify-center items-center"
              >
                <Link href={tec.url} target="_blank">
                  <div className="p-6">
                    <Image
                      className="w-full group-hover:scale-110 transition-transform ease-in-out object-contain"
                      src={tec.icon}
                      alt=""
                      width={90}
                      height={0}
                    />
                    <p className="absolute max-sm:text-xs flex font-semibold bg-background/80 rounded-md  bottom-2 left-1 px-1 z-50 group-hover:opacity-100 opacity-0">
                      {tec.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
