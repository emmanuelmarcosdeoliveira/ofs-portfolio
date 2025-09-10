"use client";

import { fadeUp } from "@/styles/fadeUp";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextComponent from "../../components/text";
import { Button } from "../../components/ui/button";

const contactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.email(),
  message: z.string().min(2).max(500),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { handleSubmit, register, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      await axios.post("/api/contact", data);
      reset();
    } catch {
      alert("error");
    }
  };

  return (
    <section>
      <motion.div
        {...fadeUp}
        transition={{ delay: 0.5 }}
        className="flex-1 max-w-3xl rounded-xl p-4 border-2 bg-muted dark:bg-muted/50"
      >
        <TextComponent variant={"title-lg"}>
          Caso prefira, envie uma mensagem
        </TextComponent>
        <TextComponent className="font-semibold">
          Vou lhe retornar o mais breve possível
        </TextComponent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex  flex-col gap-4"
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-muted-foreground/10 focus:outline-none dark:bg-muted/50 overflow-hidden  p-3 rounded-lg focus:ring-2 ring-primary    placeholder:muted-foreground"
            type="text"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="e-mail"
            className="w-full h-14 bg-muted-foreground/10 border-none dark:bg-muted/50 overflow-hidden  p-3 rounded-lg focus:outline-none focus:ring-2 ring-primary    placeholder:muted-foreground"
            {...register("email")}
          />
          <textarea
            placeholder="digite a sua mensagem"
            maxLength={500}
            className="w-full h-[180px] bg-muted-foreground/10  focus:outline-none resize-none dark:bg-muted/50 overflow-hidden  p-3 rounded-lg focus:ring-2 ring-primary    placeholder:muted-foreground"
            {...register("message")}
          />
          <Button className="shadow-lg" size={"lg"}>
            <div className="flex gap-4 items-center justify-center">
              <span>Enviar mensagem</span>
              <ArrowRight />
            </div>
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
