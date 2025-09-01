"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import Project from "@/models/project";
import Autoplay from "embla-carousel-autoplay";
import { CardProjects } from "../card-projects";

import React from "react";
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
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      className="max-sm:mt-12 max-sm:mx-auto max-sm:w-[300px] w-[630px]"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
        loop: false,
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
  );
}
