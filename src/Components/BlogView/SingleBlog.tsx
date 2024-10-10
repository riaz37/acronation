import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SingleBlog = ({blog}:any) => {
    const {title,image_url,date} = blog
    return (
        
          <div className="card w-[555px] h-[142px] gap-[24px] bg-transparent rounded-[12px]  p-[16px] pt- duration-300 items-center flex ">
              <Image
                src={image_url}
                alt={title}
                height={110}
                width={120}
                className='rounded-[16px] h-[110px] w-[110px]'
              />
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[24px] leading-[34px] font-bold h-[68px]">
                {title}
              </h1>
              <li className="text-[#1877f2] font-bold ml-[10px] text-[16px] leading-[26px]">
                {date}
              </li>
            </div>
          </div>
      );
};

export default SingleBlog;