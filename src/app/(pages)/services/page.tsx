import React from "react";
import ServiceCategory from "@/featrues/services/ServiceCategory";
import ServicesOverview from "@/featrues/services/ServicesOverview";
import Service from "@/Components/Service-upper";

const Page = () => {
  return (
    <div>
      <Service />
      <div className="w-full flex flex-col">
        <ServicesOverview />
        <ServiceCategory />
      </div>
    </div>
  );
};

export default Page;
