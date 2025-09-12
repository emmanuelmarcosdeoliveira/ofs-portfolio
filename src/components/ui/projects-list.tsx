"use client";

import Project from "@/models/project";
import Autoplay from "embla-carousel-autoplay";
import { CardProjects } from "../card-projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="container flex items-center justify-center mx-auto">
      <Carousel
        className="max-sm:mt-12 flex  max-sm:mx-auto max-sm:w-[380px]  rounded-md w-[600px]"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div>
          <CarouselNext className="rounded-md" />
          <CarouselPrevious className="rounded-md" />
        </div>
        <CarouselContent>
          {projects
            .filter((proj) => proj.destaque === true)
            .map((proj) => (
              <CarouselItem key={proj.slug}>
                <CardProjects
                  slug={proj.slug}
                  key={proj.slug}
                  name={proj.name}
                  description={proj.description}
                  imageURL={proj.imageURL}
                  destaque={proj.destaque}
                  technologies={proj.technologies}
                  online={proj.onLine}
                  gitHub={proj.gitHub}
                />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
