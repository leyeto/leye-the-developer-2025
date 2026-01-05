type PriceProp = {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: string;
  isRecomended?: boolean;
};

const PricingCard = ({ title, description, price, features }: PriceProp) => {
  return (
    <div className="PricingCard">
      <h4 className="PricingCard_Title">{title}</h4>
      <p className="PricingCard_Description">{description}</p>
      <h4 className="PricingCard_Price">£{price}</h4>
      <ul className="PricingCard_List">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
