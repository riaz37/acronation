"use client";

import React from "react";
import Hero from "@/Components/Hero";
import Partnership from "@/Components/Partnership";
import Contact from "@/Components/Contact";
import Heroleft from "@/Components/Heroleft";
import { HeroRight } from "@/Components/HeroRight";
import ProjectShow from "@/Components/ProjectShowCase/ProjectShow";
import Testimonial from "@/Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <ProjectShow />
        <Testimonial />
        <Partnership />
      </div>
      <div className="flex justify-between">
        <Heroleft />
        <HeroRight />
      </div>
      <Contact />
      <ProjectShow />
      <Testimonial />
      <Partnership />
    </div>
  );
};

export default Home;
