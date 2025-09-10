import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-foreground", {
  variants: {
    variant: {
      "title-xl": "text-4xl leading-5 text-primary",
      "title-lg": "text-2xl font-medium text-muted-foreground",
      "title-md": "text-xl font-semibold text-primary",
      "sub-title": "text-xl font-medium pt-4",
      paragraphs: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "paragraphs",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export default function TextComponent({
  as = "p",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    { className: textVariants({ variant, className }), ...props },
    children
  );
}
