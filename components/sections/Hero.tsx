"use client";
import Image from "next/image";
import Aurora from "../Aurora/Aurora";
import Button from "../Button";

const heroServices = [
  "Up to 5 pages + mobile responsive",
  "1 year hosting + domain included",
  "SEO optimized + Web Analytics included",
];

const Hero = () => {
  return (
    <section className="Hero flex flex-col md:flex-row-reverse items-center gap-6 my-15">
      <div className="Hero_Image">
        <Image
          src="/images/hero-image.webp"
          alt="Hero"
          priority
          width={700}
          height={700}
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
            Get Your Website in 2 Weeks For -{" "}
            <span className="text-ld-teal underline font-extrabold text-[60px]">
              £1,000
            </span>
          </h2>
          <p className="Hero_SubHeading text-2xl">
            A clean and professional website built in 14 days, perfect for new
            business owners ready to launch with confidence.
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
    </section>
  );
};

export default Hero;
