import Image from "next/image";
import React from "react";

const BenefitsCard = ({ title }: { title: string }) => {
  return (
    <div className="BenefitsCard bg-gray-900 flex gap-4 items-center p-4 rounded-2xl md:max-w-1/2">
      <Image
        src="/images/benefits-tick.svg"
        alt="Benefits"
        width={42}
        height={42}
      />
      <h4>{title}</h4>
    </div>
  );
};

export default BenefitsCard;
