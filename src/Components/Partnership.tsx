import './partnership-page.css'
import Image from 'next/image';


const Partnership = () =>{
    return(
        <>
            <div className="h-[536px] w-[100vw] flex justify-center items-center lower-main-section">
                <div className="w-screen max-w-[1600px] h-[536px] flex justify-center items-center relative">
                    <div className="w-full h-[352px] text-section flex flex-col justify-between items-center">
                        <div className="head-text">
                            <p className='text-[48px] font-[700]'>Our <span className='text-[#1877F2]'>Partnership</span> </p>
                        </div>
                        <div className="h-[120px] w-[1920px] flex justify-between flex-col items-center">
                            <div className="w-[1724px] h-[40px] flex justify-between items-center left-bar">
                                <Image src="/Property1-0.svg" width="155" height="40" alt="image1" />
                                <Image src="/Property1-1.svg" width="155" height="40" alt="image2"/>
                                <Image src="/Property2-0.svg" width="181" height="40" alt="image3"/>
                                <Image src="/Property3-0.svg" width="186" height="40" alt="image4"/>
                                <Image src="/Property3-1.svg" width="186" height="40" alt="image5"/>
                                <Image src="/Property4-0.svg" width="165" height="40" alt="image6"/>
                            </div>
                            <div className="w-[1724px] h-[40px] flex justify-between items-center right-bar">
                                <Image src="/Property5-1.svg" width="218" height="40" alt="image1"/>
                                <Image src="/Property1-0.svg" width="155" height="40" alt="image2"/>
                                <Image src="/Property2-0.svg" width="181" height="40" alt="image3"/>
                                <Image src="/Property3-1.svg" width="186" height="40" alt="image4"/>
                                <Image src="/Property3-1.svg" width="186" height="40" alt="image5"/>
                                <Image src="/Property4-0.svg" width="165" height="40" alt="image6"/>
                            </div>
                        </div>
                        <div className="paragraph w-[904px] h-14 text-center font-[400] text-[#555555]">
                            <p>Over 24 top companies choose Acro Nation for innovative digital solutions. Our expertise drives growth and enhances performance across various industries.</p>
                        </div>
                    </div>
                </div>
                <div className="upper-fog-section absolute h-[536px] max-w-[1920px] w-[1920px] flex justify-between items-center">
                    <div className="w-[392px] h-full upper-shap-1"></div>
                    <div className="w-[392px] h-full upper-shap-2"></div>
                </div>
            </div>
        </>
    );
}

export default Partnership;