import React from "react";
import ServiceOverviewItem from "./ServiceOverviewItem";
import MainHeading from "@/Components/organisms/heading/MainHeading";

const ServicesOverview = () => {
  const services = [
    "Dedicated to Excellence",
    "Tailored Solutions",
    "Creativity Meets Functionality",
    "Reliable Support",
    "Client-Centered Approach",
  ];

  return (
    <div className="w-[760px] h-[330px] flex flex-col gap-5">
      <MainHeading>
        <>
          Our <span className="text-[#1877F2]">Expertise</span> Your{" "}
          <span className="text-[#1877F2]">Advantage</span>
        </>
      </MainHeading>
      <p className="text-[18px] text-[#555555]">
        Delivering innovative digital solutions that transform your business and
        elevate your brand’s presence.
      </p>
      <ul className="flex flex-col space-y-3">
        {services.map((service: string, i: number) => (
          <ServiceOverviewItem key={i} service={service} />
        ))}
      </ul>
    </div>
  );
};

export default ServicesOverview;
