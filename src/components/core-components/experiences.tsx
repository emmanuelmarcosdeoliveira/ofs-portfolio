import { IntroSection } from "@/components/core-components/intro-section";
import { TimelineDemo } from "../timeline-jobs";

export default function Experiences() {
  return (
    <section className="container mx-auto py-10">
      <IntroSection title="Minhas Experiências" />
      <TimelineDemo />
    </section>
  );
}
