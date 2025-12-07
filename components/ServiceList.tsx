import { services } from "@/data/services";
import Service from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="ServiceList grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 my-10">
      {services.map(({ service, description, imgUrl }) => (
        <Service
          key={service}
          imgUrl={imgUrl}
          service={service}
          description={description}
        />
      ))}
    </div>
  );
};

export default ServiceList;
