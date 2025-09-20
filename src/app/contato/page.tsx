import ContactForm from "@/app/contato/contact-form";
import TextComponent from "@/components/text";
import ListContact from "./list-contact";

export default function PageContact() {
  return (
    <section className="container relative overflow-hidden p-4 py-16 mx-auto">
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
