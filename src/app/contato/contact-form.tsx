"use client";

import { fadeUp } from "@/styles/animationMotion";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextComponent from "../../components/text";
import { Button } from "../../components/ui/button";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Nome deve conter pelo menos 3 caracteres" })
    .max(50),
  email: z.email({ message: "E-mail inválido" }),
  message: z
    .string()
    .min(2, { message: "Mensagem deve conter pelo menos 2 caracteres" })
    .max(500),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { handleSubmit, register, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ContactFormSchema) => {
    setLoading(true);
    try {
      await axios.post("/api/contact", data);
      reset();
    } catch {
      alert("error");
    } finally {
      setLoading(false);
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
            className="w-full  h-14 bg-muted-foreground/10 focus:outline-none dark:bg-muted/50 overflow-hidden  p-3 rounded-lg focus:bg-none focus:ring-2 ring-primary    placeholder:muted-foreground"
            type="text"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="digite seu a-mail"
            className="w-full h-14 bg-muted-foreground/10 border-none dark:bg-muted/50 overflow-hidden  p-3 rounded-lg focus:outline-none focus:ring-2 ring-primary    placeholder:muted-foreground"
            {...register("email")}
          />
          <textarea
            placeholder="digite sua mensagem"
            maxLength={500}
            className="w-full h-[180px] bg-muted-foreground/10  focus:outline-none resize-none dark:bg-muted/50 overflow-hidden  p-3 rounded-lg focus:ring-2 ring-primary    placeholder:muted-foreground"
            {...register("message")}
          />
          <Button disabled={loading} className="shadow-lg" size={"lg"}>
            <div className="flex gap-4 items-center justify-center">
              {loading ? (
                <div className="flex items-center gap-2 justify-center">
                  <span>Enviando</span>
                  <div className="w-4 h-4 rounded-full border-2   border-t-transparent animate-spin"></div>
                </div>
              ) : (
                <div className="flex justify-center items-center gap-2">
                  <span>Enviar mensagem</span>
                  <ArrowRight />
                </div>
              )}
            </div>
          </Button>
        </form>
      </motion.div>
      <p>{}</p>
    </section>
  );
}
