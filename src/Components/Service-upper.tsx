import Image from "next/image";

const Service = () =>{
    return(
        <>
            <div className="w-screen flex justify-center items-center h-[350px]">
                <div className="w-full max-w-[1920px] h-full flex justify-center items-center font-[outfit]">
                    <div className="max-w-[1600px] w-screen h-[330px] mb-[20px] flex justify-start">
                        <div className="w-[760px] h-full flex flex-col justify-between items-center">
                            <div className="w-full h-[56px]">
                                <p className="text-5xl font-bold text-[#282828]">Our 
                                <span className="text-[#1877F2]"> Expertise
                                </span> Your <span className="text-[#1877F2]"> Advantage</span> </p>
                            </div>
                            <div className="w-full h-[56px]">
                                <p className="text-lg text-[#555555]">Delivering innovative digital solutions that transform your business and elevate your brand’s presence.</p>
                            </div>
                            <div className="h-[178px] w-full flex justify-start">
                                <div className="h-full w-[242px] flex flex-col justify-between items-center">
                                    <div className="h-[26px] w-full flex justify-between items-center">
                                        <div className="h-full w-7 flex justify-start items-center">
                                            <div className="h-5 w-5 mr-2">
                                                <Image src="/Vector.svg" width="15" height="15" alt="right"></Image>
                                            </div>
                                        </div>
                                        <div className="w-[214px] h-full font-medium text-base text-[#282828]">
                                            <p>Dedicated to Excellence</p>
                                        </div>
                                    </div>

                                    <div className="h-[26px] w-full flex justify-between items-center">
                                        <div className="h-full w-7 flex justify-start items-center">
                                            <div className="h-5 w-5 mr-2">
                                                <Image src="/Vector.svg" width="15" height="15" alt="right"></Image>
                                            </div>
                                        </div>
                                        <div className="w-[214px] h-full font-medium text-base text-[#282828]">
                                            <p>Tailored Solutions</p>
                                        </div>
                                    </div>

                                    <div className="h-[26px] w-full flex justify-between items-center">
                                        <div className="h-full w-7 flex justify-start items-center">
                                            <div className="h-5 w-5 mr-2">
                                                <Image src="/Vector.svg" width="15" height="15" alt="right"></Image>
                                            </div>
                                        </div>
                                        <div className="w-[214px] h-full font-medium text-base text-[#282828]">
                                            <p>Creativity Meets Functionality</p>
                                        </div>
                                    </div>

                                    <div className="h-[26px] w-full flex justify-between items-center">
                                        <div className="h-full w-7 flex justify-start items-center">
                                            <div className="h-5 w-5 mr-2">
                                                <Image src="/Vector.svg" width="15" height="15" alt="right"></Image>
                                            </div>
                                        </div>
                                        <div className="w-[214px] h-full font-medium text-base text-[#282828]">
                                            <p>Reliable Support</p>
                                        </div>
                                    </div>

                                    <div className="h-[26px] w-full flex justify-between items-center">
                                        <div className="h-full w-7 flex justify-start items-center">
                                            <div className="h-5 w-5 mr-2">
                                                <Image src="/Vector.svg" width="15" height="15" alt="right"></Image>
                                            </div>
                                        </div>
                                        <div className="w-[214px] h-full font-medium text-base text-[#282828]">
                                            <p>Client-Centered Approach</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;