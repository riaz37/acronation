import React from "react";
import { serviceCategory } from "@/app/config/constants";
import ServiceCategoryCard from "./ServiceCategoryCard";

const ServiceCategory = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {serviceCategory?.map((item: ServiceCategoryType, i: number) => (
        <ServiceCategoryCard key={i} {...item} />
      ))}
      <div className="h-[80px] w-[1600px]"></div>
    </div>
  );
};

export default ServiceCategory;
