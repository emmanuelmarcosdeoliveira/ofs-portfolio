import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface CardProductsProps {
  slug?: string;
  name: string;
  description: string;
  destaque?: boolean;
  imageURL: string | StaticImageData;
  images?: string | StaticImageData;
  challenges?: string[];
  online?: string;
  gitHub?: string;
  features?: string[];
  type?: string;
  technologies: string[];
}

export function CardProjects({
  slug,
  name,
  description,
  imageURL,
  destaque,
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
        <CardDescription className="h-12 overflow-y-hidden">
          <p className="line-clamp-2 text-lg">{description}</p>
        </CardDescription>
        <CardAction> </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 h-full line-clamp-2">
          {technologies?.map((tec) => (
            <Badge key={tec}>{tec}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <Button className="mt-2 px-0" variant="link" asChild>
            <Link href={`/projeto/${slug}`}>Saiba Mais</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
