import { courses } from "@/constants/courses";
import { ArrowRight, Award } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Certificates() {
  return (
    <div className="py-6 ">
      <h2 className=" text-muted-foreground text-center text-3xl pt-4">
        Certificados
      </h2>
      <p className="text-center">Abaixo alguns dos certificados que conclui </p>
      <h3 className=" text-muted-foreground pb-8 text-xl">Front-end</h3>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3   grid-cols-1 max-sm:gap-3 gap-6">
        {courses.map((course, i) => (
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ delay: i * 0.2 }}
            key={course.name}
          >
            <Card className="gap-1 group py-2 px-2 bg-muted-foreground/10 hover:scale-105 transition-all ">
              <CardHeader>
                <div className="flex">
                  <div className="flex items-center gap-1">
                    <Award className="text-primary" strokeWidth={1} size="48" />
                  </div>
                  <div>
                    <h4 className="max-md:text-sm">{course.name}</h4>
                    <CardTitle>
                      <strong className="font-medium group-hover:fill-primary">
                        {course.company}
                      </strong>
                      <span className="max-md:text-xs">{course.date}</span>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Link target="_blank" href={course.ImageUrl}>
                  <p className="text-sm  p-1  cursor-pointer flex  items-center gap-2 group hover:text-primary">
                    Ver detalhes
                    <ArrowRight size="16" />
                  </p>
                </Link>
              </CardContent>
            </Card>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
