import Experiences from "@/components/core-components/experiences";
import HeroSection from "@/components/core-components/hero-section";
import Projects from "@/components/core-components/Projects";
import LogoLoopExample from "@/components/logos";

export default function Home() {
  return (
    <main className="overflow-x-hidden px-4">
      <HeroSection />
      <Projects />
      <div className="-rotate-1 py-8">
        <LogoLoopExample />
      </div>
      <Experiences />
    </main>
  );
}
