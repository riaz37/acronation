import ServiceCategory from "@/featrues/services/ServiceCategory";
import ServicesOverview from "@/featrues/services/ServicesOverview";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
      <ServicesOverview />
      <ServiceCategory />
    </div>
  );
};

export default Page;
