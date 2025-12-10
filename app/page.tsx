import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
      </main>
    </div>
  );
}
