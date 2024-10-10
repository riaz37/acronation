import cn from "@/lib/cn";
import React from "react";

const MainHeading: React.FC<MainHeadingProps> = ({ children, className }) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold
        ${className}`}
    >
      {children}
    </h1>
  );
};

export default MainHeading;
