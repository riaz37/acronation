import { PiCheckCircleFill } from "react-icons/pi";
import { FaLongArrowAltUp } from "react-icons/fa";
import Image from "next/image";
import fbllog from "../../../public/fbl.png";
import flobite from "../../../public/flowbies.svg";
const ProjectShow = () => {
  return (
    <div>
      <div className="flex px-[62px] w-[1600px] ">
        <div className=" w-[672px]">
          <h1 className="text-[48px] font-bold  ">
            Our Thinking <span className="text-[#1877F2]">Solutions</span>
          </h1>
          <p className="m-2">
            Shape your future with innovative solutions that evolve with your
            aspirations. We combine creativity and precision to unlock
            potential, fostering long-term growth and progress. Our approach
            ensures that every step forward aligns with your unique vision,
            turning goals into lasting achievements.
          </p>
          <div className="mt-6 w-[868px]">
            <div className="flex">
              <PiCheckCircleFill className="text-blue-500 m-1" />
              <h4>Discover & Research</h4>
            </div>
            <div className="flex">
              <PiCheckCircleFill className="text-blue-500 m-1" />
              <h4>Strategy Development</h4>
            </div>
            <div className="flex">
              <PiCheckCircleFill className="text-blue-500 m-1" />
              <h4>Implementation</h4>
            </div>
            <div className="flex">
              <PiCheckCircleFill className="text-blue-500 m-1" />
              <h4>result and analysis</h4>
            </div>
          </div>
          <button
            onMouseEnter={() => {
              gsap.to(".icn-2", { rotate: 90, scale: 1.2, duration: 0.3 });
            }}
            onMouseLeave={() => {
              gsap.to(".icn-2", { rotate: 45, scale: 1, duration: 0.3 });
            }}
            className="mt-5 active:scale-105 flex items-center gap-[4px] text-white group"
          >
            <h1 className="bttn text-xl font-semibold py-[14px] px-[30px] bg-[#1877F2] rounded-l-full group-hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
              All case study
            </h1>
            <div className="p-[15px] text-[26px] bg-[#1877F2] rounded-r-full group-hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2]">
              <FaLongArrowAltUp
                className="icn-2"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </button>
        </div>
        <div className="ml-10">
          <h1>Latest project</h1>
          <div className="flex m-2 p-2 w-[868px]">
            <div className="bg-[#F5F5F5] mx-4 h-[110px] w-[110px] rounded-md flex items-center justify-center">
              {/* Using Next.js Image for the logo */}
              <Image src={flobite} alt="Project Logo" width={80} height={80} />
            </div>
            <div className="w-[400px]">
              <h1 className="text-[24px]">
                Transforming Online Learning with Flowbies
              </h1>
              <p className="text-[16px] p-2 w-[450px]">
                Flowbies revolutionized digital education by creating a....
              </p>
            </div>
            <button className="flex ml-10 text-white">
              <h1 className=" text-xl font-semibold py-[14px] px-[30px] bg-[#1877F2] rounded-l-full hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                case study
              </h1>
              <div className="p-[15px] text-[26px] bg-[#1877F2] rounded-r-full hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2] ml-1">
                <FaLongArrowAltUp
                  className="icn-2"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </button>
          </div>
          <div className="flex m-2 p-2 w-[868px]">
            <div className="bg-[#F5F5F5] mx-4 h-[110px] w-[110px] rounded-md flex items-center justify-center">
              {/* Using Next.js Image for the logo */}
              <Image src={fbllog} alt="Project Logo" width={80} height={80} />
            </div>
            <div className="w-[400px]">
              <h1 className="text-[24px]">
                Revolutionizing Digital Marketing for Cryptobase
              </h1>
              <p className="text-[16px] p-2 w-[450px]">
                How Acro Nation’s tailored solutions elevated Crypt
              </p>
            </div>
            <button className="flex ml-10 text-white">
              <h1 className=" text-xl font-semibold py-[14px] px-[30px] bg-[#1877F2] rounded-l-full hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                case study
              </h1>
              <div className="p-[15px] text-[26px] bg-[#1877F2] rounded-r-full hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2] ml-1">
                <FaLongArrowAltUp
                  className="icn-2"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </button>
          </div>
          <div className="flex m-2 p-2 w-[868px]">
            <div className="bg-[#F5F5F5] mx-4 h-[110px] w-[110px] rounded-md flex items-center justify-center">
              {/* Using Next.js Image for the logo */}
              <Image src={flobite} alt="Project Logo" width={80} height={80} />
            </div>
            <div className="w-[400px]">
              <h1 className="text-[24px]">
                Transforming Online Learning with Flowbies
              </h1>
              <p className="text-[16px] p-2 w-[450px]">
                Flowbies revolutionized digital education by creating a
              </p>
            </div>
            <button className="flex ml-10 text-white">
              <h1 className=" text-xl font-semibold py-[14px] px-[30px] bg-[#1877F2] rounded-l-full hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">
                case study
              </h1>
              <div className="p-[15px] text-[26px] bg-[#1877F2] rounded-r-full hover:bg-gradient-to-br from-[#6d4cff] via-[#1177F2] to-[#1177F2] ml-1">
                <FaLongArrowAltUp
                  className="icn-2"
                  style={{ transform: "rotate(45deg)" }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
