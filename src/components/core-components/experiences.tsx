"use client";
import { fadeLeft, fadeRight } from "@/styles/animationMotion";
import { motion } from "motion/react";
import WorkExperiences from "../experiences";
import TextComponent from "../text";

export default function Experiences() {
  return (
    <section className="container py-16 mx-auto">
      <div>
        <motion.div {...fadeLeft} transition={{ delay: 0.2 }}>
          <TextComponent variant={"title-xl"}>
            Minhas Experiencias anteriores
          </TextComponent>
        </motion.div>
        <motion.p
          {...fadeRight}
          transition={{ delay: 0.3 }}
          className="text-xl py-4"
        >
          Abaixo venhas meus últimos cargos e habilidades
        </motion.p>
        <WorkExperiences />
      </div>
    </section>
  );
}
