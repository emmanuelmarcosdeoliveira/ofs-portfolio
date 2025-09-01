import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface CardProductsProps {
  slug?: string;
  name: string;
  description: string;
  imageURL: string | StaticImageData;
  images?: string | StaticImageData;
  online?: string;
  gitHub?: string;
  destaque?: boolean;
  type?: string;
  technologies: string[];
}

export function CardProjects({
  slug,
  name,
  description,
  imageURL,
  online,
  gitHub,
  destaque,
  images,
  type,
  technologies,
}: CardProductsProps) {
  return (
    <Card className="bg-transparent">
      <div className="overflow-hidden w-full">
        <Image
          className="h-auto overflow-hidden rounded-lg w-[630px]"
          width="630"
          height="540"
          alt={name}
          src={imageURL}
        />
      </div>
      <CardHeader>
        {destaque === true && (
          <Badge
            variant="default"
            className="bg-muted relative text-foreground"
          >
            Destaque
          </Badge>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="truncate">
          <p className="text-lg truncate">{description}</p>
        </CardDescription>
        <CardAction> </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 h-full max-h-20">
          {technologies?.map((tec) => (
            <Badge key={tec}>{tec}</Badge>
          ))}
        </div>
        <div className="pt-4"></div>
      </CardContent>
      <CardFooter>
        <div>
          <Button variant="outline" asChild>
            <Link href={`/projeto/${slug}`}>
              Saiba Mais
              <MoveUpRight />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
