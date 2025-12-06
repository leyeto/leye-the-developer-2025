import Image from "next/image";
import type { Service } from "../data/services";

const Service = ({ service, description, imgUrl }: Service) => {
  return (
    <div className="Service border-b-2 border-ld-teal ">
      <Image src={imgUrl} alt={service} width={42} height={42} />
      <h3 className="Service_Title">{service}</h3>
      <p className="Service_Description">{description}</p>
    </div>
  );
};

export default Service;
