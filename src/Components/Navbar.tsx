"use client"
import './Navbar-main.css'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavBar = () =>{
    const pathname = usePathname();

    return(
        <div className="w-screen h-[224px] flex justify-center items-center">
            <div className="main-navbar-container w-[1920px] flex justify-center items-center h-full">
                <div className="nav-section-container
                 px-[50px]
                  py-[30px]
                   h-[114px]
                   w-full 
                   max-w-[1600px] 
                   flex 
                   justify-center 
                   items-center mt-[30px] mb-[80px]">

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
                            <Image src="/Group.svg" width="148" height="50" alt="logo"  />
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
                                    <Image src="/Frame_842.svg" width="127" height="54" alt="cta"/>
                                </button>
                                <button className='btn-name w-[54px] h-[54px] bg-[#282828] flex justify-center items-center'>
                                    <Image src="/Frame_843.svg" width="54" height="54" alt="cta"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;