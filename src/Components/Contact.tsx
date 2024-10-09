

import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
      <div className="w-[350px] lg:w-full flex items-center content-center h-[500px]  p-10 mx-auto">
          <div className=" flex flex-col lg:flex-row justify-between flex-1 gap-36 items-center ">
            <div className="circle relative z-0 sm:h-150 sm:w-150 md:h-175 md:w-175 lg:h-200 lg:w-200">
            <div className="absolute top-0 left-0 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-24"  
                      style={{
                        background: 'radial-gradient(circle at top left, #ffffff 50%, #6fb8ff 100%)',
                        height:"200px",
                        width: "200px",
                        borderRadius:"100%"
                      }}
                      
        ></div>
            <div className="space-y-4 ml-6  z-10">
            <div className="">
            <h1 className="text-4xl  font-bold relative z-10 ">
                Talk to us to improve your 
               <span className="flex items-center"> website <Image width="70" height="20" src="/bg.png" alt="" className="h-10"/></span>
               </h1>
          
            </div>
           <div className="pt-10 space-y-4">
           <div className="flex items-center gap-2">
                <Image width="20" height="20" className="h-4" src="/right.png" alt="" />
                <p>We will respond to you within 24 hours.</p>
            </div>
            <div className="flex items-center gap-2">
                <Image width="20" height="20" className="h-4" src="/right.png" alt="" />
                <p>We You'll be talking to product and tech experts (no account manager )</p>
            </div>

            <div className="flex gap-1">
            <button className="btn bg-[#1877F2] text-white rounded-tl-full rounded-bl-full rounded-tr-4 rounded-br-4 p-3 hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">Emergency Chat</button>
            <button className="bg-[#1877F2] rounded-tl-4 rounded-tr-full rounded-br-full rounded-l-4 p-3 hover:bg-gradient-to-br from-[#6d4cff] via-[#6d4cff] to-[#1177F2]">  <Image width="20" height="20" src="/btn.png" alt="" /></button>
            </div>
           </div>
        </div>
            </div>
            <div className="flex-1 ">
                <ContactForm></ContactForm>
            </div>
        </div>
      </div>
    );
};

export default Contact;
