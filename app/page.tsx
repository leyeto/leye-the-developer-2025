import Benefits from "@/components/sections/Benefits";
import Hero from "@/components/sections/Hero";
import PricingSection from "@/components/sections/PricingSection";
import Process from "@/components/sections/Process";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <ProjectsSection />
        <PricingSection />
      </main>
    </div>
  );
}
