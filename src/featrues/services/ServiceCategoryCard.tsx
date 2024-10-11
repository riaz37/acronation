// ServiceCategoryCard.tsx
import Link from "next/link";
import React from "react";
import { ImArrowUpRight } from "react-icons/im";

const ServiceCategoryCard: React.FC<ServiceCategoryType> = ({
  title,
  Icon,
  subCategories,
  link,
}) => {
  return (
    <div className="bg-white shadow-md rounded-[24px] p-6 m-4 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center mb-6">
          <Icon className="mr-2" />
          <h3 className="text-2xl font-bold text-[#282828]">{title}</h3>
        </div>
        <ul className="mb-4 flex flex-wrap gap-6">
          {subCategories.map((subCategory, i) => (
            <li
              key={i}
              className="flex items-center p-3 rounded-[8px] bg-opacity-10"
              style={{
                backgroundColor: subCategory.bgColor,
                color: subCategory.color,
              }}
            >
              <span
                className="inline-block w-3 h-3 border-[3px] border-current rounded-full mr-2"
                style={{ borderColor: subCategory.color }}
              ></span>
              <span className="text-base leading-[26px]">
                {subCategory.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={link}
        className="w-[250px] flex items-center justify-between text-white py-2 h-[54px] rounded-full overflow-hidden mt-auto"
      >
        <span className="w-[191px] flex items-center text-center justify-center h-full rounded-l-full bg-[#1877F2] text-base">
          Let's Discuss
        </span>
        <span className="w-[54px] flex items-center text-center justify-center h-full rounded-r-full bg-[#1877F2]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.70983 0.591958L7.77396 3.65609L0.940954 10.4891L2.4577 12.0518L9.31369 5.19581L12.3702 8.25228L12.3702 0.591958L4.70983 0.591958Z"
              fill="white"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default ServiceCategoryCard;
