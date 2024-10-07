import ServiceCategory from "@/featrues/services/ServiceCategory";
import ServicesOverview from "@/featrues/services/ServicesOverview";
import React from "react";
import Service from "@/Components/Service-upper";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
      <ServicesOverview />
      <ServiceCategory />
      <div>
        <Service />
      </div>
    </div>
  );
};

export default Page;
