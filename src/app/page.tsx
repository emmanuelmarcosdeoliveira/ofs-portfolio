import Experiences from "@/components/core-components/experiences";
import HeroSection from "@/components/core-components/hero-section";
import Projects from "@/components/core-components/Projects";
import CardServices from "@/components/core-components/card-services";
import CardTechnologies from "@/components/core-components/card-technologies";
import LogoLoopComponents from "@/components/logos";

export default function Home() {
  return (
    <main className="overflow-x-hidden px-4">
      <HeroSection />
      <Projects />
      <CardServices />
      <LogoLoopComponents />
      <CardTechnologies />
      <Experiences />
    </main>
  );
}
