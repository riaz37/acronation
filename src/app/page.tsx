"use client";

import React from "react";
import Hero from "@/Components/Hero";
import Partnership from "@/Components/Partnership";
import Contact from "@/Components/Contact";
import ProjectShow from "@/Components/ProjectShowCase/ProjectShow";
import Testimonial from "@/Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between">
        <Hero />
      </div>
      <ProjectShow />
      <Testimonial />
      <Partnership />
      <Contact />
    </div>
  );
};

export default Home;
