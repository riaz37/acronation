/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { IoCalendar } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { BiCommentDots } from "react-icons/bi";
const LeftView = () => {
    const blog =  {
        title: "Empowering Business Growth.",
        date: "Nov 29, 2023",
        read_time: "5 min",
        like: 24,
        comments: 34,
        content: "Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors. Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors. Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors. Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors. Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors. Providing strategic solutions that foster sustainable growth and success for businesses across diverse sectors.",
        image_url: "https://i.ibb.co.com/PT2CgQx/alvaro-reyes-q-Wwp-Hwip31-M-unsplash.jpg",
    }
    return (
        <div className='col-span-3'>
            <Image src={blog.image_url} alt={blog.title} width={1100} height={600} className='rounded-xl h-[600px] w-full'></Image>
           <div className='px-8'>
           <div className='text-[#1877F2] pt-6 flex items-center gap-4'>
                <p className='flex items-center gap-3 bg-[#F9F9F9] py-[10px] px-[20px] rounded '><IoCalendar className='h-6'/> . {blog.date}</p>
                <p className='flex items-center gap-3 bg-[#F9F9F9] py-[10px] px-[20px] rounded '><MdOutlineFavorite className='h-6'/> . {blog.like}</p>
                <p className='flex items-center gap-3 bg-[#F9F9F9] py-[10px] px-[20px] rounded '><BiCommentDots className='h-6'/> . {blog.comments}</p>
            </div>

            <h3 className='text-[34px] font-bold my-3'>
                {blog.title}
            </h3>

            <p className='text-[18px] text-[#555555]'>
                {blog.content}
                <button className='font-bold text-black'>...See more</button>
            </p>
           </div>
            <div className='flex justify-center items-center my-2'>
            <Image src="/vector 1.svg" height={80} width={140} alt='vector' className=''></Image>
            </div>

            <h3 className='text-[34px] font-bold my-3'>
            Let's explore the possibilities together.
            </h3>
        </div>
    );
};

export default LeftView;