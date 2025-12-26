import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <ProjectsSection />
      </main>
    </div>
  );
}
