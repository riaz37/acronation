import React from "react";
import Service from "@/Components/Service-upper";
import ServiceCategory from "@/featrues/services/ServiceCategory";
import ServicesOverview from "@/featrues/services/ServicesOverview";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
      <ServicesOverview />
      <ServiceCategory />
      <Service />
    </div>
  );
};

export default Page;
