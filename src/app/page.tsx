"use client";

import React from "react";
import Hero from "@/Components/Hero";
import Partnership from "@/Components/Partnership";
import ProjectShow from "@/Components/ProjectShowCase/ProjectShow";
import Testimonial from "@/Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectShow />
      <Testimonial />
      <Partnership />
    </div>
  );
};

export default Home;
