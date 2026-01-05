import Image from "next/image";

type PriceProp = {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: string;
  isRecommended?: boolean;
};

const PricingCard = ({ title, description, price, features }: PriceProp) => {
  return (
    <div className="PricingCard ">
      <h4 className="PricingCard_Title text-[32px] font-bold text-center">
        {title}
      </h4>
      <p className="PricingCard_Description text-[20px] text-center">
        {description}
      </p>
      <h4 className="PricingCard_Price text-ld-teal text-[63px] text-center font-extrabold">
        {price}
      </h4>
      <p className="PricingCard_TopSub text-center text-[14px] text-gray-400">
        Complete package . No Hidden fees
      </p>
      <ul className="PricingCard_List grid grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <li
            className="PricingCard_Feature flex gap-2 text-[20px]"
            key={index}
          >
            <Image
              src="/images/pricing-tick.svg"
              alt="tick"
              width={24}
              height={24}
            />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
