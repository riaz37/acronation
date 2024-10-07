import React from "react";
import BlogRight from "@/Components/BlogRight";
import BlogLeft from "@/Components/BlogLeft";

const page = () => {
  return (
    <div className="w-screen gap-[84px] flex justify-center mt-[100px] mb-[100px]">
      <BlogLeft />
      <BlogRight />
    </div>
  );
};

export default page;
