import SocialMedia from "@/components/social-media";
import TextComponent from "@/components/text";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import ListContact from "./list-contact";
import { GridBackground } from "@/components/ui/grid-background";
import ContactForm from "@/components/contact-form";

export default function PageContact() {
  return (
    <section className="container p-4 py-16 mx-auto">
      <TextComponent
        className="text-center pt-16 max-sm:text-2xl"
        variant="title-xl"
      >
        Vamos conversar
      </TextComponent>
      <TextComponent
        className="text-center max-sm:text-lg max-sm:text-balance mx-auto  max-w-2xl w-full"
        variant="sub-title"
      >
        Estou sempre aberto a novas oportunidades e desafios. Entre em contato
        para discutirmos seu próximo projeto.
      </TextComponent>
      <div className="grid lg:grid-cols-[450px_1fr] grid-cols-1   pt-8 gap-8 ">
        <div>
          <ListContact />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
