import React from "react";
import PricingCard from "./cards/PricingCard";

const prices = [
  {
    title: "2 - Week Website Package",
    price: "£1,000",
    description: "Complete Professional Website Solution",
    features: [
      "Up to 5 Professional Pages/Sections",
      "1 year year hosting included",
      "Basic SEO Optimization",
      "Professional email address",
      "Social Media Integration",
      "Security & SSL Certificate",
      "Fully Responsive Design",
      "1 year domain included",
      "Website Analytics",
      "Contact form",
      "5 Total Revisions",
      "Mobile Optimization",
      "Search Console Registration",
    ],
    button: "Book Free Discovery Call",
  },
];

const PricingList = () => {
  return (
    <div>
      {prices.map(({ title, description, price, features, button }, index) => (
        <PricingCard
          key={index}
          title={title}
          description={description}
          price={price}
          features={features}
          button={button}
        />
      ))}
    </div>
  );
};

export default PricingList;
