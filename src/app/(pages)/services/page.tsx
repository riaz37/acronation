import React from "react";
import Service from "@/Components/Service-upper";
import ServiceCategory from "@/featrues/services/ServiceCategory";
import ServicesOverview from "@/featrues/services/ServicesOverview";

const Page = () => {
  return (
    <div className="w-full flex flex-col">
      <Service />
      <ServicesOverview />
      <ServiceCategory />
    </div>
  );
};

export default Page;
