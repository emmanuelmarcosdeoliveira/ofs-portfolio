import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projetos } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Tablist() {
  return (
    <Tabs defaultValue="full" className="w-full">
      <TabsList className="bg-background flex gap-8 justify-center mt-8 mx-auto">
        <TabsTrigger value="full">Todos</TabsTrigger>
        <TabsTrigger value="frontend">Front-end</TabsTrigger>
        <TabsTrigger value="fullstack">FullStack</TabsTrigger>
      </TabsList>
      <TabsContent value="full">
        <div className="gap-8 grid justify-center lg:grid-cols-3 md:grid-cols-2 overflow-hidden pt-8 rounded-md">
          {projetos.map((proj) => (
            <div className="overflow-hidden rounded-lg" key={proj.slug}>
              <Image
                className="h-[320px] object-cover rounded-lg w-full"
                key={proj.slug}
                width={600}
                height={600}
                src={proj.imageURL}
                alt={proj.name}
              />
              <h1 className="text-2xl text-primary">{proj.name}</h1>
              <p className="h-10 max-w-[360px] truncate">{proj.description}</p>
              <Button className="pt-4 px-0" variant={"link"} asChild>
                <Link href={`/projeto/${proj.slug}`}>Saiba mais</Link>
              </Button>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="frontend">
        <div className="flex flex-wrap gap-8 justify-center overflow-hidden pt-8 rounded-md">
          {projetos
            .filter((proj) => proj.type === "front-end")
            .map((proj) => (
              <div className="overflow-hidden rounded-lg" key={proj.slug}>
                <Image
                  className="h-[320px] object-cover rounded-lg w-full"
                  key={proj.slug}
                  width={600}
                  height={600}
                  src={proj.imageURL}
                  alt={proj.name}
                />
                <h1 className="mb-2 text-2xl text-primary">{proj.name}</h1>
                <p className="max-w-[360px] mt-2 truncate">
                  {proj.description}
                </p>
                <Button className="pt-4 px-0" variant={"link"} asChild>
                  <Link href={`/projeto/${proj.slug}`}>Saiba mais</Link>
                </Button>
              </div>
            ))}
        </div>
      </TabsContent>

      <TabsContent value="fullstack">
        <div className="flex flex-wrap gap-8 justify-center overflow-hidden pt-8 rounded-md">
          {projetos
            .filter((proj) => proj.type === "fullstack")
            .map((proj) => (
              <div className="overflow-hidden rounded-lg" key={proj.slug}>
                <Image
                  className="h-[320px] object-cover rounded-lg w-full"
                  key={proj.slug}
                  width={600}
                  height={600}
                  src={proj.imageURL}
                  alt={proj.name}
                />
                <h1 className="mb-4 text-primary">{proj.name}</h1>
                <p className="max-w-[360px] mt-2 truncate">
                  {proj.description}
                </p>
              </div>
            ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
