import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/grid-background";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-6 h-screen items-center justify-center p-4 w-full">
      <GridBackground />

      <h1 className="font-bold font-sans max-sm:text-6xl text-9xl text-center text-primary">
        404
      </h1>
      <strong className="text-muted-foreground">
        Ops`&apos;s essa página não existe
      </strong>
      <div className="flex gap-4 items-center justify-center">
        <Button>
          <Link href={"/"}>Voltar a Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
