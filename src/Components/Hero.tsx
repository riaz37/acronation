"use client";

import React from "react";
import Heroleft from "./Heroleft";
import { HeroRight } from "../Components/HeroRight";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="relative p-[70px] font-outfit  ">
        <div className="circle-1 absolute w-[150px] h-[150px] bg-purple-500 rounded-full blur-[100px] "></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full blur-[170px] ml-[1050px] mt-[120px]"></div>

        <div className="w-[1600px] flex justify-center gap-[20px] mt-[150px] ml-[30px]">
          <Heroleft />
          <HeroRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
