"use client"
import './navbar-main.css'
import Logo from '../public/Group.svg';
import CTA_left from '../public/Frame_842.svg';
import File_Icon from '../public/file-icon.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () =>{
    const pathname = usePathname();

    return(
        <>
            <div className="main-navbar-container w-screen flex justify-center items-center h-[114px]">
                <div className="nav-section-container
                 px-[50px]
                  py-[30px]
                   h-full 
                   w-full 
                   max-w-[1600px] 
                   flex 
                   justify-center 
                   items-center">

                    <div className="nav-child-section 
                    lg:w-full h-[54px] 
                    flex 
                    justify-between 
                    items-center
                    sm:w-full 
                    1sm:w-9/12">

                        <div className="main-logo 
                        pr-3 
                        w-[148.07px] 
                        h-[50px]">
                            <Image src={Logo} />
                        </div>

                        <div className="nav-links-and-btn 
                        lg:w-[761px] 
                        md:w-[500px] 
                        sm:w-[200px] 
                        h-[54px] 
                        flex 
                        justify-between 
                        items-center">

                            <div className="nav-links 
                            w-[496px] 
                            h-[28px]">
                                <ul className='w-full flex justify-between items-center'>
                                    <li className={pathname === "/" ? "active" : ""}>
                                        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>                           
                                    </li>
                                    <li className={pathname === "/about-us" ? "active" : ""}>
                                        <Link href="/about-us" className={pathname === "/about-us" ? "active" : ""}>About us</Link>
                                    </li>
                                    <li className={pathname === "/services" ? "active" : ""}>
                                        <Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link>
                                    </li>
                                    <li className={pathname === "/showcase" ? "active" : ""}>
                                        <Link href="/showcase" className={pathname === "/showcase" ? "active" : ""}>Showcase</Link>
                                    </li>
                                    <li className={pathname === "/blog" ? "active" : ""}>
                                        <Link href="/blog" className={pathname === "/blog" ? "active" : ""}>Blog</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="btn-CTA 
                            min-w-[185px] 
                            h-[54px] 
                            flex 
                            justify-between 
                            items-center">
                                <button className='btn-name'>
                                    <Image src={CTA_left}/>
                                </button>
                                <button className='btn-name w-[54px] h-[54px] bg-[#282828] flex justify-center items-center'>
                                    <Image src={File_Icon}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;