"use client"
import styles from './navBar.module.css';
import Logo from '../../public/Group.svg';
import CTA_left from '../../public/Frame_842.svg';
import CTA_right from '../../public/Frame_843.svg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './aditional.css'

const NavBar = () =>{
    const pathname = usePathname();

    return(
        <>
            
        </>
    );
}

export default NavBar;