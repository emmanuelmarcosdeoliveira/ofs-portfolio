import { Calendar, MapPinned, Clock } from "lucide-react";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";

interface WorkProps {
  id?: number;
  role?: string;
  company?: string;
  startToDate?: string;
  endToDate?: string;
  workType?: string;
  location?: string;
  companyImage?: string | StaticImageData;
  descriptionRole?: string;
  achievementsTitle?: string;
  achievementsList?: string[];
  softSkills?: string[];
}

export default function CardWork({
  companyImage,
  descriptionRole,
  achievementsTitle,
  role,
  company,
  startToDate,
  endToDate,
  location,
  achievementsList,
  softSkills,
  workType,
}: WorkProps) {
  return (
    <Card className="dark:bg-muted/50 p-4 rounded-md shadow-md">
      <CardHeader className="flex">
        {companyImage && (
          <Image
            className="rounded-md  shadow-xl"
            src={companyImage as string | StaticImageData}
            width={35}
            height={35}
            alt="logo Arcos Dourados"
          />
        )}
        <div>
          <CardTitle>{role}</CardTitle>
          <CardDescription className="flex gap-2 items-center overflow-x-hidden">
            <p>{company}</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className=":flex-col flex gap-8 items-center max-md:flex-col max-md:gap-2 max-md:items-start mb-4">
          <div className="flex gap-2 items-center">
            <Calendar size={16} />
            <span className="text-muted-foreground text-sm">
              {startToDate} - {endToDate}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <MapPinned size={16} />
            <span className="text-muted-foreground text-sm">{location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Clock size={16} />
            <span className="text-muted-foreground text-sm">{workType}</span>
          </div>
        </div>
        <p>{descriptionRole}</p>
        <strong className="block mt-4"> {achievementsTitle} </strong>
        <ul className="*:text-muted-foreground flex flex-col gap-2 list-disc ml-4 mt-1">
          {achievementsList?.map((list, i) => (
            <li key={`${"achievements"}` + i}>{list}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-wrap  gap-2 items-center">
        {softSkills?.map((skills, i) => (
          <Badge key={`${"skill"}` + i} className="bg-accent text-foreground">
            {skills}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
