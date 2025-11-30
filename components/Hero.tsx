"use client";
import Image from "next/image";
import Aurora from "./Aurora";
import Button from "./Button";

const heroServices = [
  "Up to 5 pages + mobile responsive",
  "1 year hosting + domain included",
  "SEO optimized + Web Analytics included",
];

const Hero = () => {
  return (
    <div className="Hero flex flex-col md:flex-row-reverse items-center gap-6">
      <div className="Hero_Image">
        <Image
          src="/images/hero-image.svg"
          alt="Hero"
          width={700}
          height={700}
          style={{ maxHeight: "70vh" }}
        />
      </div>
      <div className="Hero_Content md:max-w-[50%]">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={10}
          speed={0.3}
        />
        <div className="Hero_MainContent flex flex-col gap-4">
          <h2 className="font-medium text-[58px]">
            Stunning, captivating websites delivered in just{" "}
            <span className="text-ld-teal underline font-extrabold">
              2 Weeks
            </span>
            .
          </h2>
          <p className="Hero_SubHeading text-2xl">
            We handle the website so you can focus on what you do best
          </p>
          <div className="Hero_Offer">
            <ul>
              {heroServices.map((service, index) => (
                <li key={index} className="flex gap-2 text-white text-[20px]">
                  <Image
                    src={"/images/hero-tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="Hero_Button flex gap-5">
            <Button variant="filled">Book Free Discovery Call</Button>
            <Button variant="outline">View Projects</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
