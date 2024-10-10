"use client";

import React from "react";
import Hero from "@/Components/Hero";
import Partnership from "@/Components/Partnership";
import Contact from "@/Components/Contact";
import ProjectShow from "@/Components/ProjectShowCase/ProjectShow";
import Testimonial from "@/Components/Testimonial/Testimonial";
import Heroleft from "@/Components/Heroleft";
import { HeroRight } from "@/Components/HeroRight";

const Home = () => {
  return (
    <div>
     <Hero />
     <ProjectShow />
      <Testimonial />
      <Partnership />
      <Contact />
    
  </div>
  );
};

export default Home;
