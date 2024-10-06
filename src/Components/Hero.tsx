"use client";

import React from "react";
import Heroleft from "./Heroleft";
import Heroright from "./HeroRight";

const Hero = () => {
  return (
    <div>
      <div className="p-[70px] font-outfit ">
        <div className="circle-1 absolute w-[150px] h-[150px] bg-purple-500 rounded-full blur-[100px] "></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-[170px] ml-[1050px] mt-[120px]"></div>

        <div className="flex justify-between">
          <Heroleft />
          <Heroright />
        </div>
      </div>
    </div>
  );
};

export default Hero;
