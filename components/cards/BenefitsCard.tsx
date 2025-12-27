import Image from "next/image";

const BenefitsCard = ({ title }: { title: string }) => {
  return (
    <div className="BenefitsCard bg-gray-900 flex gap-4 items-center p-4 rounded-2xl">
      <Image
        src="/images/benefits-tick.svg"
        alt="benefit-tick"
        width={42}
        height={42}
      />
      <h4>{title}</h4>
    </div>
  );
};

export default BenefitsCard;
