import Image from "next/image";

const AboutUs = () =>{
    return(
        <>
            <div className="w-screen h-[980px] flex justify-center items-center">
                <div className="w-full max-w-[1920px] h-full flex flex-col justify-between items-center">
                    <div className="w-full h-[446px] max-w-[1920px] flex justify-center items-start bg-gradient-to-t from-[#FBF7FE] to-[#ffffff]">
                        <div className="w-[1600px] h-[366px] flex justify-between items-center">
                            <div className="w-[672px] h-full flex flex-col justify-between items-center">
                                <div className="w-full h-[112px] box-border">
                                    <p className="text-[48px] leading-[56px] font-[outfit] font-bold"> 
                                    <span className="text-[#1877F2]">Building</span> Your 
                                    <span className="text-[#1877F2]"> Digital Future</span> with Innovation</p>
                                </div>
                                <div className="w-full h-[140px]">
                                    <p className="font-[outfit] leading-[28px] text-[18px] text-[#555555]">We deliver innovative and impactful digital solutions designed to empower brands, enhance their market presence, and drive sustained business growth. By combining creativity with strategic expertise, we ensure that every solution not only meets but exceeds client expectations, helping businesses thrive in a competitive digital landscape.</p>
                                </div>
                                <div className="w-full h-[54px] flex justify-start items-center">
                                    <div className="w-[198px] h-[54px] flex justify-between items-center">
                                        <button className="w-[140px] h-full bg-[#1877F2] rounded-s-[100px] flex justify-center items-center">
                                            <p className="text-[16px] font-[outfit] leading-[26px] text-[#FFFFFF] font-semibold">Contact Us</p>
                                        </button>
                                        <button className="w-[54px] h-full bg-[#1877F2] rounded-e-[100px] flex justify-center items-center">
                                            <Image src="arow.svg" height="26" width="26" alt="arrow" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[868px] h-full flex flex-col justify-between items-center">
                                <div className="w-full h-[80px] flex flex-col justify-between items-center">
                                    <div className="w-full h-[34px]">
                                        <ul className="list-disc list-inside">
                                            <li className="font-[outfit] text-[24px] leading-[34px] font-bold text-[#282828]">Our <span className="text-[#1877F2]">Mission</span> </li>
                                        </ul>
                                    </div>
                                    <div className="w-full h-[26px]">
                                        <p className="font-normal text-[16px] leading-[26px] text-[#555555]">To empower businesses with cutting-edge digital solutions that foster growth and elevate their market presence.</p>
                                    </div>
                                </div>
                                <div className="w-full h-[106px] flex flex-col justify-between items-center">
                                    <div className="w-full h-[34px]">
                                            <ul className="list-disc list-inside">
                                                <li className="font-[outfit] text-[24px] leading-[34px] font-bold text-[#282828]">Our <span className="text-[#1877F2]"> Approach</span> </li>
                                            </ul>
                                        </div>
                                        <div className="w-full h-[52px]">
                                            <p className="font-normal text-[16px] leading-[26px] text-[#555555]">We pride ourselves on collaboration, innovation, and results-driven strategies. Every project is a partnership, and we work closely with you to ensure that your goals are not only met but exceeded.</p>
                                        </div>
                                    </div>
                                <div className="w-full h-[132px] flex flex-col justify-between items-center">
                                    <div className="w-full h-[34px]">
                                            <ul className="list-disc list-inside">
                                                <li className="font-[outfit] text-[24px] leading-[34px] font-bold text-[#282828]">Our <span className="text-[#1877F2]"> Acro nation</span> </li>
                                            </ul>
                                        </div>
                                        <div className="h-[78px] w-full">
                                            <p className="font-[outfit] font-normal text-[#555555] leading-[26px] text-[16px]">We help businesses harness digital innovation with tailored solutions in web design, marketing, and tech integration. Our expert team ensures success through precision, creativity, and a commitment to excellence, setting new benchmarks in performance, usability, and design.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex justify-center items-center relative">
                        <div className="w-full h-[160px] absolute bottom-[-21px] flex justify-center items-center">
                            <div className="h-[120px] w-[208.45px]">
                                <Image src="./Vector1.svg" width="208" height="119" alt="vector arrow" className="translate-y-6 translate-x-4" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[380px] flex justify-center items-center">
                        <div className="w-[1600px] h-full flex justify-between items-center">
                            <div className="h-full w-[364px] flex justify-start items-start">
                                <div className="h-[224px] w-full flex flex-col justify-between items-center">
                                    <div className="h-[56px] w-full">
                                        <p className="text-[48px] leading-[56px] font-[outfit] font-bold text-[#282828]">Why <span className="text-[#1877F2]">Choose Us?</span></p>
                                    </div>
                                    <div className="w-full h-[128px]  flex justify-start items-center">
                                        <div className="w-[193px] h-full flex flex-col justify-between items-center">
                                            <div className="w-full h-[26px] flex justify-between items-center">
                                                <div className="w-5 h-5 flex justify-center items-center">
                                                    <Image src="./Vector.svg" width="20" height="20" alt="right" />
                                                </div>
                                                <div className="w-[165px] h-full flex justify-start items-center">
                                                    <p className="font-[outfit] leading-[26px] text-base font-medium text-[#282828]">Custom Solution</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-[26px] flex justify-between items-center">
                                                <div className="w-5 h-5 flex justify-center items-center">
                                                    <Image src="./Vector.svg" width="20" height="20" alt="right" />
                                                </div>
                                                <div className="w-[165px] h-full flex justify-start items-center">
                                                    <p className="font-[outfit] leading-[26px] text-base font-medium text-[#282828]">Expert knowledge</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-[26px] flex justify-between items-center">
                                                <div className="w-5 h-5 flex justify-center items-center">
                                                    <Image src="./Vector.svg" width="20" height="20" alt="right" />
                                                </div>
                                                <div className="w-[165px] h-full flex justify-start items-center">
                                                    <p className="font-[outfit] leading-[26px] text-base font-medium text-[#282828]">Client focus approach</p>
                                                </div>
                                            </div>
                                            <div className="w-full h-[26px] flex justify-between items-center">
                                                <div className="w-5 h-5 flex justify-center items-center">
                                                    <Image src="./Vector.svg" width="20" height="20" alt="right" />
                                                </div>
                                                <div className="w-[165px] h-full flex justify-start items-center">
                                                    <p className="font-[outfit] leading-[26px] text-base font-medium text-[#282828]">Shopping your Success</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-[1192px] flex justify-between items-center">
                                <div className="w-[1126px] h-full flex flex-col justify-between items-center">
                                    <div className="w-full h-[150px] flex justify-between items-center">
                                        <div className="h-full w-[401px] flex justify-between items-center">
                                            <div className="w-[324px] h-full flex justify-center items-center rounded-xl border-4 transition border-white hover:border-[#96bbea]">
                                                <div className="w-[276px] h-[118px] flex flex-col justify-between items-center">
                                                    <div className="w-full h-[34px]">
                                                        <p className="font-bold font-[outfit] text-[24px] leading-[34px] text-[#282828]">Discovery</p>
                                                    </div>
                                                    <div className=".w-full h-[52px]">
                                                        <p className="font-[outfit] font-bold text-base leading-[26px] text-[#282828]">We assess your goals and craft a custom strategy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[77px] h-full flex justify-center items-center">
                                                <Image src="./Group13_1.svg" width="86" height="45" alt="arrow left" className="scale-x-110 -translate-x-1" />
                                            </div>
                                        </div>
                                        <div className="h-full w-[401px] flex justify-between items-center">
                                            <div className="w-[324px] h-full flex justify-center items-center rounded-xl border-4 transition border-white hover:border-[#96bbea]">
                                                <div className="w-[276px] h-[118px] flex flex-col justify-between items-center">
                                                    <div className="w-full h-[34px]">
                                                        <p className="font-bold font-[outfit] text-[24px] leading-[34px] text-[#282828]">Design</p>
                                                    </div>
                                                    <div className=".w-full h-[52px]">
                                                        <p className="font-[outfit] font-bold text-base leading-[26px] text-[#282828]">We create intuitive wireframes and engaging designs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[77px] h-full flex justify-center items-center">
                                                <Image src="./Group14_2.svg" width="86" height="45" alt="arrow left 2" className="scale-x-110 -translate-x-1" />
                                            </div>
                                        </div>
                                        <div className="h-full w-[401px] flex justify-between items-center">
                                            <div className="w-[324px] h-full flex justify-center items-center rounded-xl border-4 transition border-white hover:border-[#96bbea]">
                                                <div className="w-[276px] h-[118px] flex flex-col justify-between items-center">
                                                    <div className="w-full h-[34px]">
                                                        <p className="font-bold font-[outfit] text-[24px] leading-[34px] text-[#282828]">Design Development</p>
                                                    </div>
                                                    <div className=".w-full h-[52px]">
                                                        <p className="font-[outfit] font-bold text-base leading-[26px] text-[#282828]">Our team builds a responsive, high-performance site.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-[150px] flex justify-between items-center">
                                        <div className="h-full w-[401px] flex justify-between items-center">
                                            <div className="w-[324px] h-full flex justify-center items-center rounded-xl border-4 transition border-white hover:border-[#96bbea]">
                                                <div className="w-[276px] h-[118px] flex flex-col justify-between items-center">
                                                    <div className="w-full h-[34px]">
                                                        <p className="font-bold font-[outfit] text-[24px] leading-[34px] text-[#282828]">Support</p>
                                                    </div>
                                                    <div className=".w-full h-[52px]">
                                                        <p className="font-[outfit] font-bold text-base leading-[26px] text-[#282828]">Continuous updates and optimization for long-term success.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[77px] h-full flex justify-center items-center">
                                                <Image src="./Group15_3.svg" width="86" height="45" alt="arrow left" className="scale-x-110 translate-x-1" />
                                            </div>
                                        </div>
                                        <div className="h-full w-[401px] flex justify-between items-center">
                                            <div className="w-[324px] h-full flex justify-center items-center rounded-xl border-4 transition border-white hover:border-[#96bbea]">
                                                <div className="w-[276px] h-[118px] flex flex-col justify-between items-center">
                                                    <div className="w-full h-[34px]">
                                                        <p className="font-bold font-[outfit] text-[24px] leading-[34px] text-[#282828]">Launch</p>
                                                    </div>
                                                    <div className=".w-full h-[52px]">
                                                        <p className="font-[outfit] font-bold text-base leading-[26px] text-[#282828]">We deploy and handle all technical details.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[77px] h-full flex justify-center items-center">
                                                <Image src="./Group16_4.svg" width="86" height="45" alt="arrow left 2" className="scale-x-110 translate-x-1" />
                                            </div>
                                        </div>
                                        <div className="h-full w-[401px] flex justify-between items-center">
                                            <div className="w-[324px] h-full flex justify-center items-center rounded-xl border-4 transition border-white hover:border-[#96bbea]">
                                                <div className="w-[276px] h-[118px] flex flex-col justify-between items-center">
                                                    <div className="w-full h-[34px]">
                                                        <p className="font-bold font-[outfit] text-[24px] leading-[34px] text-[#282828]">Testing</p>
                                                    </div>
                                                    <div className=".w-full h-[52px]">
                                                        <p className="font-[outfit] font-bold text-base leading-[26px] text-[#282828]">Rigorous testing ensures a seamless experience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[66px] h-full flex justify-center items-center">
                                    <Image src="./mixgroup.svg" width="66" height="236" alt="mix arrow" className="-translate-x-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-20">
                        {/* this div screted for creating space under upper section */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;