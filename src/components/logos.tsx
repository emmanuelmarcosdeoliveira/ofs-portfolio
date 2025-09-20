import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import LogoLoop from "../components/ui/LogoLoop";

const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
  },

  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];
export default function LogoLoopComponents() {
  return (
    <div className="h-32 relative my-16  overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={36}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="oklch(1 0 129.63 / 10.62%)"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
