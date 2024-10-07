import React from "react";

const BlogRight = () => {
  return (
    <div className="w-[555px] bg-[#ffffff] mt-[180px] font-outfit border-none">
      <li className="text-[16px] w-[174px] h-[46px] text-[#282828] rounded-[8px] border-[1px] border-[#F5F5F5] py-[10px] px-[24px]">
        Latest Project
      </li>
      <div className="card w-[555px] h-[142px] gap-[24px] bg-transparent rounded-[12px] mt-[25px] p-[16px] duration-300 items-center flex ">
        <div className="w-[133px] h-[110px] bg-slate-200 rounded-[16px] overflow-hidden">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] leading-[34px] font-bold">
            Transforming industries and Enhancing lives.
          </h1>
          <li className="text-[#1877f2] font-bold ml-[10px] text-[16px] leading-[26px]">
            july 3, 2022
          </li>
        </div>
      </div>
    </div>
  );
};

export default BlogRight;
