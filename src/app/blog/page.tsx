"use client"

import BlogLeft from "@/Components/BlogLeft";
import BlogRight from "@/Components/BlogRight";

const page = () => {
    return (
       <>
        <div className='p-10'>
            <div>
                <h1 className="font-bold text-4xl">Insights & <span className='text-[#1877F2]'>Updates</span></h1>
                <p className="mt-4">Discover how technology, creativity, and strategy converge in our blog, where we <br /> share the latest innovations and insights shaping the future of digital solutions.</p>
            </div>
            <div className="w-screen gap-[84px] flex justify-center mt-[100px] mb-[100px]">
                <BlogLeft></BlogLeft>
                <BlogRight />
            </div>
        </div>
       </>
    );
};

export default page;