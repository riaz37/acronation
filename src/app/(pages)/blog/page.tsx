import React from "react";
import BlogRight from "@/Components/BlogRight";
import BlogLeft from "@/Components/BlogLeft";

const page = () => {
  return (
    <>
      <div className="w-screen h-auto flex justify-center items-center">
        <div className="w-screen max-w-[1600px] h-auto flex flex-col justify-between items-center">
          <div className="w-full flex justify-start items-center">
            <div className="h-[132px] flex flex-col justify-between">
              <h1 className="font-bold text-4xl">
                Insights & <span className="text-[#1877F2]">Updates</span>
              </h1>
              <p className="mt-4">
                Discover how technology, creativity, and strategy converge in our
                blog, where we <br /> share the latest innovations and insights
                shaping the future of digital solutions.
              </p>
              
            </div>
          </div>
          <div className="w-screen max-w-[1600px] gap-[84px] flex justify-center mt-[100px] mb-[100px]">
              <BlogLeft />
              <BlogRight />
            </div>
        </div>
      </div>
    </>
  );
};

export default page;


    