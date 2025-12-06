const offerings = [
  {
    service: "Up to 5 pages",
    description: "Complete website design and development",
  },
];
const Services = () => {
  return (
    <div className="Services flex items-center flex-col">
      <h3 className="Services_Heading text-ld-teal">What You Get</h3>
      <div className="Services_Heading flex flex-col items-center">
        <h4 className="Services_Highlight font-bold text-[58px]">
          What&apos;s Included?
        </h4>
        <h5 className="Services_SubHeading text-2xl max-w-[600px] text-center">
          The 2 - Week Website Package - £1,000
          <br />
          Everything you need to start your business online with clarity and
          confidence.
        </h5>
      </div>
      <div className="Services_Offers"></div>
    </div>
  );
};

export default Services;
