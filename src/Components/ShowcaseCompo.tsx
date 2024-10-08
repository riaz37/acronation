import Image from "next/image";
import React from "react";
import showcaseImg1 from "../../public/Frame 35349.png";
import figmaIcon from "../../public/skill-icons_figma-light.svg";
import shearIcon from "../../public/shearIcon.svg";
import { GoDotFill } from "react-icons/go";

function ShowcaseCompo() {
  const showcaseData = new Array(4).fill(1);

  return (
    <div className="py-20 max-w-[1600px] 2xl:px-0 px-5  mx-auto">
      <div className="xl:w-[50%] lg:w-[80%] ">
        <h1 className="text-5xl font-bold">
          Creative <span className="text-[#1877F2]">Solutions</span> in{" "}
          <span className="text-[#1877F2]">action</span>
        </h1>
        <p className="text-lg text-[#555555] mt-5">
          Explore our journey of collaboration with diverse clients, where we’ve
          turned ideas into successful realities and helped them thrive in the
          digital landscape.
        </p>
      </div>

      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 sm:p-5 xl:gap-20 gap-12">
        {showcaseData.map((item, index) => {
          return (
            <div className="w-full" key={index}>
              <Image
                src={showcaseImg1}
                className="w-full object-cover"
                alt="showcaseImg"
              />
              <p className="flex items-center gap-3 text-[#1877F2] font-medium text-lg mt-5">
                <GoDotFill /> Project done in 26 days
              </p>
              <h1 className="text-2xl font-bold text-[#282828] mt-5">
                Redefining Success Through Data-Driven Strategy.
              </h1>
              <p className="text-lg text-[#555555] mt-5">
                We partnered with (Harrison) to revitalize their digital
                engagement and streamline their marketing efforts. Through
                custom-built tools and data-driven strategies, we e{" "}
                <span className="text-black font-medium">...See more</span>
              </p>
              <div className="flex justify-between items-center mt-8">
                <button className="gap-1 flex items-center justify-between text-white rounded-full">
                  <span className="py-3 sm:px-12 px-3 text-nowrap flex items-center text-center justify-center h-full rounded-l-full bg-[#282828] text-base">
                    Full view Case Study
                  </span>
                  <span className="sm:w-[54px] w-[40px] py-[17px] flex items-center text-center justify-center h-full rounded-r-full bg-[#282828]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.70983 0.591958L7.77396 3.65609L0.940954 10.4891L2.4577 12.0518L9.31369 5.19581L12.3702 8.25228L12.3702 0.591958L4.70983 0.591958Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </button>

                <div className="flex items-center sm:gap-5 gap-3 justify-between">
                  <Image src={figmaIcon} alt="figma" width={25} />
                  <Image src={shearIcon} alt="figma" width={25} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowcaseCompo;
