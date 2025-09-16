import CardServices from "@/components/card-services";
import CardTechnologies from "@/components/card-technologies";
import HeroSection from "@/components/hero-section";
import LogoLoopComponents from "@/components/logos";
import Projects from "@/components/projects";
import Experiences from "@/components/work-experiences";

export default function Home() {
  return (
    <main className=" overflow-hidden relative px-4">
      <HeroSection />
      <Projects />
      <CardServices />
      <LogoLoopComponents />
      <CardTechnologies />
      <Experiences />
    </main>
  );
}
