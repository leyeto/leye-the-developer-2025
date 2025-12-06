import { services } from "@/data/services";
import Service from "./Service";

const ServiceList = () => {
  return (
    <div className="ServiceList grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 my-10">
      {services.map((service) => (
        <Service key={service.service} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
