interface IntroSectionProps {
  title: string;
}

export function IntroSection({ title }: IntroSectionProps) {
  return (
    <h1 className="py-6 text-lg text-primary">
      <strong className="font-light text-muted-foreground">{"<"}</strong>
      {title}{" "}
      <strong className="font-light text-muted-foreground">{"/>"}</strong>
    </h1>
  );
}
