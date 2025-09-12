import CardServices from "@/components/core-components/card-services";
import CardTechnologies from "@/components/core-components/card-technologies";
import HeroSection from "@/components/core-components/hero-section";
import Projects from "@/components/core-components/Projects";
import Experiences from "@/components/experiences";
import LogoLoopComponents from "@/components/logos";

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
