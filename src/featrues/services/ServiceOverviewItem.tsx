// ServiceItem.js
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const ServiceOverviewItem: React.FC<ServiceOverviewItemProps> = ({
  service,
}) => {
  return (
    <li className="text-[16px] flex items-center gap-2">
      <span>
        <FaCircleCheck className="text-[#1877F2]" />
      </span>{" "}
      {service}
    </li>
  );
};

export default ServiceOverviewItem;
