import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const HeroRight = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      rotate: 360,
      ease: "linear",
      repeat: -1,
      duration: 20,
    });
    gsap.to(ref2.current, {
      rotate: -360,
      ease: "linear",
      repeat: -1,
      duration: 20,
    });
  });

  return (
    <div className="flex relative items-center justify-center w-full h-[600px] ">
      <span className="circleHead absolute text-5xl font-bold text-center ">
        acro nation <br /> service
      </span>
      <div
        ref={ref}
        className="innerCircle relative w-[300px] h-[300px] rounded-full bg-transparent border-[3px] border-[#ffffff]"
      >
        <img
          className=" absolute w-[70px] h-[70px] top-[-30px] left-[120px] "
          src="https://img.icons8.com/color/512/css3.png"
          alt=""
        />
        <img
          className=" absolute w-[50px] h-[50px] top-[130px] left-[-30px] "
          src="https://static.vecteezy.com/system/resources/previews/020/975/579/original/wordpress-logo-wordpress-icon-transparent-free-png.png"
          alt=""
        />
        <img
          className=" absolute w-[80px] h-[80px] bottom-[-30px] right-[120px] "
          src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
          alt=""
        />
        <img
          className=" absolute w-[60px] h-[60px] bottom-[130px] right-[-30px] "
          src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
          alt=""
        />
      </div>
      <div
        ref={ref2}
        className="innerCircle absolute w-[570px] h-[570px] rounded-full bg-transparent border-[3px] border-[#ffffff]"
      >
        <img
          className=" absolute w-[60px] h-[60px] top-[-30px] left-[250px] "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png"
          alt=""
        />
        <img
          className=" absolute w-[60px] h-[60px] top-[530px] left-[250px] "
          src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
          alt=""
        />
        <img
          className=" absolute w-[60px] h-[60px] top-[250px] left-[535px] "
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
        <img
          className=" absolute w-[60px] h-[60px] top-[250px] left-[-30px] "
          src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroRight;
