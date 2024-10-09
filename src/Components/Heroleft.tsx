//@typescript-eslint/no-explicit-any
import React, { use } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./hero.css";
import Image from "next/image";

const Heroleft = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(ref1.current, { y: -5, duration: 1, opacity: 1 });
    tl.to(ref1.current, { duration: 0.5, opacity: 1 }, "-=0.7");
    tl.to(ref2.current, { y: 0, duration: 1, opacity: 1 }, "-=0.7");
    tl.to(ref3.current, { y: 0, duration: 1, opacity: 1 }, "-=0.7");
    tl.to(ref4.current, { y: 0, duration: 1, opacity: 1 }, "-=0.7");
    tl.to(ref5.current, { y: 0, duration: 1, opacity: 1 }, "-=0.7");
  });

  return (
    <div>
      <div className="heroLeftM w-[812px] h-[579.77px] ">
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
            <Image
              className="w-[80%] h-[80%] object-contain py-[4xp] px-[4px] rounded-full bg-slate-100"
              src="https://i.pinimg.com/originals/7d/2b/fa/7d2bfa16e56d5a8a25ac6cb63dae61f1.png"
              alt=""
              width={100}
              height={100}
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
        <div className="heroHead flex relative mt-[30px]">
          <h1 className="text-[64px] font-black leading-[74px]">
            <div className="bounding">
              <h1 ref={ref1}>
                Creative <span className="text-[#1877F2]">Web Design</span>{" "}
              </h1>
            </div>
            <video
              ref={ref5}
              autoPlay
              src="/hero.mp4"
              className="vdo w-[116px] h-[60px] bg-slate-400 rounded-full absolute top-[14px] right-[20px] opacity-0"
            ></video>{" "}
            <div className="bounding">
              <h1 ref={ref2}>solution crafted with</h1>
            </div>{" "}
            <div className="bounding txt3">
              <h1 ref={ref3}>precision for your unique </h1>
            </div>{" "}
            <div className="bounding">
              <h1 ref={ref4}>brand. </h1>
            </div>
          </h1>
        </div>
        <p className="disc text-[20px] mt-[30px] ">
          You can submit short articles or posts to this website to showcase
          your expertise and contribute valuable insights to your audience.
        </p>
        <div className="flex items-center justify-start gap-5 mt-[40px]">
          {/* lower button */}
          <div className="footer flex gap-3">
            <button
              onMouseEnter={() => {
                gsap.to(".icn-2", { rotate: 90, scale: 1.2, duration: 0.3 });
              }}
              onMouseLeave={() => {
                gsap.to(".icn-2", { rotate: 45, scale: 1, duration: 0.3 });
              }}
              className="heroBtn2 mt-5 active:scale-105 flex items-center gap-[4px] text-white group"
            >
              <h1 className="bttn text-xl font-semibold py-[14px] px-[30px] bg-[#1877F2] rounded-l-full group-hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                Get Started
              </h1>
              <div className="btn2Icn p-[15px] text-[26px] bg-[#1877F2] rounded-r-full group-hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2]">
                <FaLongArrowAltUp
                  className="icn-2"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </button>
            {/* stars */}
            <div className="heroFooter mt-4 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <FaStar className="star" color="#1877F2" size={20} />
                <FaStar className="star" color="#1877F2" size={20} />
                <FaStar className="star" color="#1877F2" size={20} />
                <FaStar className="star" color="#1877F2" size={20} />
                <FaStar className="star" color="#1877F2" size={20} />
              </div>
              <h3 className="text-[16px] font-semibold">4.5 (5k+)</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroleft;
