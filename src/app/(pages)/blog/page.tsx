import React from "react";
import BlogRight from "@/Components/BlogRight";
import BlogLeft from "@/Components/BlogLeft";

const page = () => {
  return (
    <div className="w-screen gap-[84px] flex justify-center mt-[100px] mb-[100px]">
      <div>
        <h1 className="font-bold text-4xl">
          Insights & <span className="text-[#1877F2]">Updates</span>
        </h1>
        <p className="mt-4">
          Discover how technology, creativity, and strategy converge in our
          blog, where we <br /> share the latest innovations and insights
          shaping the future of digital solutions.
        </p>
      </div>
      <BlogLeft />
      <BlogRight />
    </div>
  );
};

export default page;
