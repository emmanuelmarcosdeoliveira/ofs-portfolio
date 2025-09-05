"use client";
import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="bg-muted dark:bg-muted/20  md:px-10 mt-10 overflow-hidden rounded-2xl shadow-sm w-full"
      ref={containerRef}
    >
      <div className="lg:px-10 max-sm:py-6 max-w-7xl md:px-8 mx-auto px-4 py-10">
        <h2 className="dark:text-white font-serif max-w-4xl mb-4 md:text-4xl text-lg text-primary">
          Minhas Experiências de Trabalho
        </h2>
        <p className="!text-xl dark:text-neutral-300 max-w-sm md:text-base text-neutral-700">
          Veja minhas experiências de trabalho, minhas qualificações e minhas
          habilidades.
        </p>
      </div>

      <div ref={ref} className="max-sm:pb-6 max-w-8xl mx-auto pb-20 relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start md:gap-10 md:pt-20 pt-10"
          >
            <div className="flex flex-col items-center lg:max-w-sm max-sm:hidden max-w-xs md:flex-row md:w-[200px] self-start sticky top-40 z-40">
              <div className="absolute bg-primary dark:bg-black flex h-10 items-center justify-center left-3 max-sm:hidden md:left-3 rounded-full w-10">
                <div className="bg-neutral-200 border border-neutral-300 dark:bg-primary dark:border-primary h-4 max-sm:hidden p-2 rounded-full w-4" />
              </div>
              <h3 className="dark:text-primary font-semibold font-serif hidden max-sm:hidden md:block md:pl-20 md:text-3xl text-neutral-500 text-xl">
                {item.title}
              </h3>
            </div>

            <div className="max-sm:pl-2 md:pl-4 pl-20 pr-4 relative w-full">
              <h3 className="block dark:text-neutral-500 font-bold mb-4 md:hidden text-2xl text-left text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] absolute bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] dark:via-neutral-700 from-[0%] from-transparent left-8 md:left-8 overflow-hidden to-[99%] to-transparent top-0 via-neutral-200 w-[2px]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute bg-gradient-to-t dark:from-cyan-100 dark:via-cyan-300 from-[0%] from-amber-700 inset-x-0 max-sm:hidden rounded-full to-transparent top-0 via-[10%] via-amber-300 w-[2px]"
          />
        </div>
      </div>
    </div>
  );
};
