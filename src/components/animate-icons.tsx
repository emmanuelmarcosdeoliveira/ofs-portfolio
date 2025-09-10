import { DiCss3 } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function AnimateIcons() {
  return (
    <div>
      <DiCss3 className="absolute animate-vision z-10   max-sm:hidden   rounded-xl p-1 border border-muted fill-foreground/20 dark:fill-muted/70 size-16  right-1/6  bottom-1/5" />
      <SiTypescript className="absolute -z-10 animate-invertvision max-sm:hidden  rounded-xl p-2 border border-muted fill-foreground/20 dark:fill-muted/70 size-16 left-1/6  bottom-1/5" />
      <SiJavascript className="absolute animate-vision   max-sm:hidden  rounded-xl p-2 border border-muted fill-foreground/20 dark:fill-muted/70 size-16 left-1/9  bottom-1/3" />
      <RiNextjsFill className="absolute animate-invertvision max-sm:hidden  rounded-xl p-1 border border-muted fill-foreground/20 dark:fill-muted/70 size-16 right-1/9  bottom-1/12" />
      <SiHtml5 className="absolute max-sm:hidden animate-vision  rounded-xl p-1 border border-muted fill-foreground/20 dark:fill-muted/70 size-16 left-1/9  bottom-1/9" />
      <SiTailwindcss className="absolute max-sm:hidden animate-invertvision fill-foreground/20 rounded-xl p-1 border border-muted dark:fill-muted/70 size-16 right-1/9  bottom-1/3" />
    </div>
  );
}
