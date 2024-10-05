"use client"
import styles from './navBar.module.css';
import Logo from '../../public/Group.svg';
import CTA_Button from '../../public/CTA_Button.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './aditional.css'

const NavBar = () =>{
    const pathname = usePathname();

    return(
        <>
            <div className={`${styles.navMainContainer}`}>
                <div className={`h-full ${styles.nav_upper_wrapper_box}`}>
                    <div className={`h-full flex justify-between items-center ${styles.mainNavBar}`}>
                        <div className={styles.left_Logo_Section}>
                                <Image src={Logo} />
                            </div>
                            <div className={`flex justify-between items-center  ${styles.right_Nav_Item_Section}`}>
                                <div className={`${styles.nav_links}`}>
                                    <ul className={`flex justify-between ${styles.nav_link_list}`}>
                                        <li className={pathname == "/" ? "active" : ""}>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className={pathname == "/about-us" ? "active" : ""}>
                                            <Link href="/about-us">About us</Link>
                                        </li>
                                        <li className={pathname == "/services" ? "active" : ""}>
                                            <Link href="/services">Services</Link>
                                        </li>
                                        <li className={pathname == "/showcase" ? "active" : ""}>
                                            <Link href="/showcase">Showcase</Link>
                                        </li>
                                        <li className={pathname == "/blog" ? "active" : ""}>
                                            <Link href="/blog">Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                                <Image src={CTA_Button} />
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default NavBar;