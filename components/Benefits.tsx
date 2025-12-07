import React from "react";
import BenefitsCard from "./BenefitsCard";
import Image from "next/image";

const leftBenefits = [
  "Any website is better than no website",
  "We will create an amazing looking website that would showcase your business",
  "SEO will be included to help search engines help your ideal clients find you",
  "Register on major search consoles so your website can be found by search engines",
  "Your website will be responsive looking great on whatever devices it is viewed on",
];

const rightBenefits = [
  "You get an email address or your company (this is to reduce the chances of your emails going into potential client spam boxes). I've filled contact me forms on websites on ly to get contacted months after I've received the same service from another company.",
];

const Benefits = () => {
  return (
    <div className="Benefits flex flex-col my-10">
      <h3 className="Benefits_Title text-ld-teal text-center">BENEFITS</h3>
      <div className="Benefits_Container flex flex-col md:flex-row gap-5 my-7">
        <div className="Benefits_TextArea md:max-w-1/2">
          <h4 className="Benefits_Heading text-[58px]">
            Why your business needs a{" "}
            <span className="text-ld-teal">website</span>
          </h4>
          <p className="Benefits_SubHeading text-2xl my-4">
            Don&apos;t let potential customers slip away. Here&apos;s how a
            professional website transforms your business
          </p>
          <div className="Benefits_Cards flex flex-col gap-4">
            {leftBenefits.map((benefit, index) => (
              <BenefitsCard key={index} title={benefit} />
            ))}
          </div>
        </div>
        <div className="Benefits_ImageArea flex flex-col justify-between md:max-w-1/2">
          <Image
            src="/images/benefits.webp"
            alt="Benefits"
            width={600}
            height={600}
            style={{ maxHeight: "600px" }}
          />
          {rightBenefits.map((benefit, index) => (
            <BenefitsCard key={index} title={benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
