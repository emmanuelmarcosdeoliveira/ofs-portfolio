"use client";
import SocialMedia from "@/components/social-media";
import TextComponent from "@/components/text";
import { fadeUp } from "@/styles/animationMotion";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ListContact() {
  const myContact = [
    {
      type: "Email",
      name: "oliveirafullstack@gmail.com",
      icon: <Mail className="text-primary  " />,
      href: "mailto:oliveirafullstack@gmail.com",
    },
    {
      type: "telefone",
      name: "Telefone: (11)96833-6094",
      icon: <Phone className="text-primary " />,
      href: "tel:+5511968336094",
    },
    {
      type: "cidade",
      name: "São Paulo, SP",
      icon: <MapPin className="text-primary " />,
    },
  ];
  return (
    <>
      <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
        <div className="border-2 bg-muted dark:bg-muted/50 rounded-xl p-4">
          <TextComponent className="!text-foreground" variant={"title-lg"}>
            Informações de contato
          </TextComponent>
          <p>
            Você pode entrar em contato comigo através dos seguintes canais:
          </p>
          {myContact.map((contact) => (
            <div key={contact.type} className="flex items-center py-4 gap-4">
              <span className="bg-primary/35 rounded-full p-2">
                {contact.icon}
              </span>
              <div>
                <TextComponent className="font-bold !text-foreground">
                  {contact.type}
                </TextComponent>
                {contact.href ? (
                  <Link href={contact.href}>{contact.name}</Link>
                ) : (
                  <span>{contact.name}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <TextComponent className="font-semibold pt-8" variant={"title-md"}>
          Ou nas redes sociais
        </TextComponent>
        <SocialMedia />
      </motion.div>
    </>
  );
}
