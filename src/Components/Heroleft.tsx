import React, { use } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Heroleft = () => {
  useGSAP(() => {});
  return (
    <div>
      <div className="w-[812px] h-screen ">
        {/* upper button */}
        <button
          onMouseEnter={() => {
            gsap.to(".icn-1", { rotate: 90, scale: 1.5, duration: 0.3 });
          }}
          onMouseLeave={() => {
            gsap.to(".icn-1", { rotate: 45, scale: 1, duration: 0.3 });
          }}
          className="btn-1 py-[4px] px-[14px] bg-gradient-to-br to-bottom-right from-[#AF82FF] via-[#FFE1E3] via-30% to-[#ACE7FF] to-bottom-right rounded-full text-black active:scale-105 flex items-center gap-3 text-xl "
        >
          <div className="w-[45px] h-[40px] bg-slate-100 rounded-l-full flex justify-center items-center">
            <img
              className="w-[80%] h-[80%] object-contain py-[4xp] px-[4px] rounded-full bg-slate-100"
              src="https://i.pinimg.com/originals/7d/2b/fa/7d2bfa16e56d5a8a25ac6cb63dae61f1.png"
              alt=""
            />
          </div>
          <h1>Web related solution </h1>
          <div className="p-[10px] bg-white rounded-full text-black text-[26px]">
            <FaLongArrowAltUp
              className="icn-1"
              size={"15px"}
              style={{ transform: "rotate(45deg)" }}
            />
          </div>
        </button>
        {/* header */}
        <div className="flex relative mt-[30px]">
          <h1 className="text-[64px] font-black leading-[74px]">
            Creative <span className="text-[#1877F2]">Web Design</span>{" "}
            <video
              autoPlay
              src="/hero.mp4"
              className="w-[116px] h-[60px] bg-slate-400 rounded-full absolute top-[14px] right-[40px]"
            ></video>{" "}
            solution crafted with precision for your unique brand.{" "}
          </h1>
        </div>
        <p className="text-[20px] mt-[30px] ">
          You can submit short articles or posts to this website to showcase
          your expertise and contribute valuable insights to your audience.
        </p>
        <div className="flex items-center justify-start gap-5 mt-[40px]">
          {/* lower button */}
          <button
            onMouseEnter={() => {
              gsap.to(".icn-2", { rotate: 90, scale: 1.2, duration: 0.3 });
            }}
            onMouseLeave={() => {
              gsap.to(".icn-2", { rotate: 45, scale: 1, duration: 0.3 });
            }}
            className="mt-5 active:scale-105 flex items-center gap-[4px] text-white"
          >
            <h1 className="bttn text-xl font-semibold py-[14px] px-[30px] bg-[#1877F2] rounded-l-full hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
              Get Started
            </h1>
            <div className="p-[15px] text-[26px] bg-[#1877F2] rounded-r-full hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2]">
              <FaLongArrowAltUp
                className="icn-2"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </button>
          {/* stars */}
          <div className="mt-4 flex items-center gap-2">
            <FaStar color="#1877F2" size={20} />
            <FaStar color="#1877F2" size={20} />
            <FaStar color="#1877F2" size={20} />
            <FaStar color="#1877F2" size={20} />
            <FaStar color="#1877F2" size={20} />
            <h3 className="text-[16px] font-semibold">4.5</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroleft;
