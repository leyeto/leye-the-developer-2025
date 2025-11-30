import React from "react";

const Services = () => {
  return (
    <div className="Services flex items-center flex-col">
      <h3 className="Services_Heading text-ld-teal">Services</h3>
      <div className="Services_Heading flex flex-col items-center">
        <h4 className="Services_Highlight font-bold text-[58px]">
          What&apos;s included in the offer
        </h4>
        <h5 className="Services_SubHeading text-2xl max-w-[600px] text-center">
          Everything you need for a professional online presence, delivered in
          just 2 weeks
        </h5>
      </div>
      <div className="Services_Offers"></div>
    </div>
  );
};

export default Services;
