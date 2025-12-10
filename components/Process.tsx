// ProcessSection.tsx
import { processSteps } from "@/data/processData";
import { ProcessCard } from "@/components/ProcessCard";

export default function ProcessSection() {
  return (
    <section className="Process py-20">
      <div className="Process_Container flex flex-col max-w-5xl mx-auto px-4 items-center">
        <h3 className="Process_Heading text-ld-teal">PROCESS</h3>
        <h3 className="Process_Headline text-[58px] font-bold my-2 text-center">
          How it works
        </h3>
        <h3 className="Process_SubHeading text-center max-w-[400px] ">
          Everything you need for a professional online presence, delivered in
          just 2 weeks
        </h3>

        <div className="flex flex-col gap-3">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              id={step.id}
              title={step.title}
              text={step.text}
              className={`
                transition-all
                ${index % 2 === 1 ? "md:translate-x-50" : "md:-translate-x-20"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
