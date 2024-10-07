"use client";

import React from "react";
import Hero from "@/Components/Hero";
import Partnership from "@/Components/Partnership";
import Contact from "@/Components/Contact";
import Heroleft from "@/Components/Heroleft";
import { HeroRight } from "@/Components/HeroRight";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Partnership />
      </div>
      <div className="flex justify-between">
        <Heroleft />
        <HeroRight />
      </div>
      <Partnership />
      <Contact />
      <Partnership />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
