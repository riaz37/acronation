import React from "react";
import ServiceCategory from "@/featrues/services/ServiceCategory";
import ServicesOverview from "@/featrues/services/ServicesOverview";
import Service from "@/Components/Service-upper";

const Page = () => {
  return (
    <div>
      <Service />
      <div className="w-screen flex justify-center items-center h-auto">
        <div className="w-full max-w-[1600px] h-auto">
          <ServiceCategory />
        </div>
      </div>
    </div>
  );
};

export default Page;
