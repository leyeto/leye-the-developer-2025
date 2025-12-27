import Image from "next/image";
import type { Service as ServiceProps } from "../data/services";

const Service = ({ service, description, imgUrl }: ServiceProps) => {
  return (
    <div className="Service border-b-2 border-gray-500 hover:border-ld-teal flex flex-col gap-4 items-center m-3">
      <Image src={imgUrl} alt={service} width={42} height={42} />
      <h3 className="Service_Title font-bold text-2xl text-center">
        {service}
      </h3>
      <p className="Service_Description text-center">{description}</p>
    </div>
  );
};

export default Service;
