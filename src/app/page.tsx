"use client";

import React from "react";
import Heroleft from "../Components/Heroleft";
import {HeroRight} from "../Components/HeroRight";
import Partnership from "@/Components/Partnership";
import Contact from "@/Components/Contact";


const Home = () => {
  return (
    <div>
      
      <div className="p-[70px] font-outfit ">
        <div className="circle-1 absolute w-[150px] h-[150px] bg-purple-500 rounded-full blur-[100px] "></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full blur-[170px] ml-[1050px] mt-[120px]"></div>
        <div className="flex justify-between">
          <Heroleft />
          <HeroRight />
        </div>
      </div>
      <Partnership/>
      <div>
        <Contact></Contact>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Home;