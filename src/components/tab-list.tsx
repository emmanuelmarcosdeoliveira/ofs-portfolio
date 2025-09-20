"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projetos } from "@/constants/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function Tablist() {
  return (
    <Tabs defaultValue="full" className="w-full overflow-hidden">
      <TabsList className="bg-background flex gap-8 justify-center mt-8 mx-auto">
        <TabsTrigger className="text-lg" value="full">
          Todos
        </TabsTrigger>
        <TabsTrigger className="text-lg" value="frontend">
          Front-end
        </TabsTrigger>
        <TabsTrigger className="text-lg" value="fullstack">
          FullStack
        </TabsTrigger>
      </TabsList>
      <p className="-pt-1 text-center text-muted-foreground text-sm">
        Filtre por tecnologias ou explore todos os projetos
      </p>
      <TabsContent value="full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-8 justify-center overflow-hidden pt-8 rounded-md"
        >
          {projetos.map((proj) => (
            <div
              className=" relative overflow-hidden rounded-lg"
              key={proj.slug}
            >
              <Image
                className="h-[320px] object-cover rounded-lg w-full"
                key={proj.slug}
                width={600}
                height={600}
                src={proj.imageURL}
                alt={proj.name}
              />
              {proj.destaque && (
                <Badge className="absolute bottom-32 left-0 flex bg-transparent border border-primary/30 text-muted-foreground">
                  Destaque
                </Badge>
              )}
              <h1 className="mb-2  text-2xl font-medium text-primary">
                {proj.name}
              </h1>
              <p className="max-w-[360px] line-clamp-2  mt-2">
                {proj.description}
              </p>
              <Button className="pt-4 px-0" variant={"link"} asChild>
                <Link href={`/projeto/${proj.slug}`}>Saiba mais</Link>
              </Button>
            </div>
          ))}
        </motion.div>
      </TabsContent>
      <TabsContent value="frontend">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-8 justify-center overflow-hidden pt-8 rounded-md"
        >
          {projetos
            .filter((proj) => proj.type === "front-end")
            .map((proj) => (
              <div
                className=" relative overflow-hidden rounded-lg"
                key={proj.slug}
              >
                <Image
                  className="h-[320px] object-cover rounded-lg w-full"
                  key={proj.slug}
                  width={600}
                  height={600}
                  src={proj.imageURL}
                  alt={proj.name}
                />
                {proj.destaque && (
                  <Badge className="absolute bottom-28 left-0 flex bg-transparent border border-primary/30 text-muted-foreground">
                    Destaque
                  </Badge>
                )}
                <h1 className="mb-2  text-2xl text-primary">{proj.name}</h1>
                <p className="max-w-[360px] mt-2 truncate">
                  {proj.description}
                </p>
                <Button className="pt-4 px-0" variant={"link"} asChild>
                  <Link href={`/projeto/${proj.slug}`}>Saiba mais</Link>
                </Button>
              </div>
            ))}
        </motion.div>
      </TabsContent>
      <TabsContent value="fullstack">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-8 justify-center overflow-hidden pt-8 rounded-md"
        >
          {projetos
            .filter((proj) => proj.type === "fullstack")
            .map((proj) => (
              <div
                className=" relative overflow-hidden rounded-lg"
                key={proj.slug}
              >
                <Image
                  className="h-[320px] object-cover rounded-lg w-full"
                  key={proj.slug}
                  width={600}
                  height={600}
                  src={proj.imageURL}
                  alt={proj.name}
                />
                {proj.destaque && (
                  <Badge className="absolute bottom-28 left-0 flex bg-transparent border border-primary/30 text-muted-foreground">
                    Destaque
                  </Badge>
                )}
                <h1 className="mb-2  text-2xl text-primary">{proj.name}</h1>
                <p className="max-w-[360px] mt-2 truncate">
                  {proj.description}
                </p>
                <Button className="pt-4 px-0" variant={"link"} asChild>
                  <Link href={`/projeto/${proj.slug}`}>Saiba mais</Link>
                </Button>
              </div>
            ))}
        </motion.div>
      </TabsContent>
    </Tabs>
  );
}
