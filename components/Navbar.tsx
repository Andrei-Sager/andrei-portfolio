"use client"

import { useEffect } from 'react'
import { NavLinks } from '@/constants/NavigationLinks'
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1, RxCross2 } from 'react-icons/rx'
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';

export default function Navbar() {
    const sizeIcon = 30;

    const [nav, setNav] = useState<boolean>(false);
    const handleNav = () => (
        setNav(!nav)
    )

    // useEffect(() => {
    //     const onScroll = () => {
    //         const navbar = document.getElementById("navbar")!;
    //         const distance = 50;
    //         if (document.documentElement.scrollTop > distance) {
    //             navbar.classList.add("navbar__black");
    //         } else {
    //             navbar.classList.remove("navbar__black");
    //         }
    //     }
    //     window.addEventListener("scroll", onScroll);
    // }, []);

    return(
    <nav id='navbar' className='flexCenter py-4 md:py-2 px-6 md:px-12 w-full fixed top-0 !z-40 max-w-screen-xl bg-transparent text-slate-200 shadow-lg'>
        <ProgressBar 
            color1   = "#e2e8f0" 
            color2   = "#B40041" 
            height   = "6px"
            position = "fixed" 
        />
        <div className='flex-1 flexBetween gap-10 md:gap-16 justify-center items-center'>
            <Link href={"/"}>
                <h1 className='text-4xl font-black bg-clip-text bg-clip text-transparent bg-cover bg-center bg-home-texture hover:text-secondary-red'>ANDREI</h1>
            </Link>
            <div className='lg:flex hidden gap-10'>
                <ul id='navbar-links' className='flex flex-row gap-2'>
                    {NavLinks.map(({ id, href, text}) => (
                        <li key={id}>
                        <Link
                            href={href} 
                            className='navbar-link'
                            >
                            {text}
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div onClick={handleNav} className='lg:hidden flex flex-row gap-10'>
            <GiHamburgerMenu size={sizeIcon}/>
        </div>
        <div className={nav ? "flex flex-col justify-between items-center gap-8 bg-white w-full h-full fixed top-0 right-0 lg:hidden z-50 ease-in-out duration-500" : "flex flex-col justify-between items-center gap-8 bg-white w-full h-full fixed top-0 right-[-100%] lg:hidden z-50 ease-in-out duration-500"}>
            <ul id='navbar-links' className='flex flex-col w-full text-slate-400 gap-4'>
                <div onClick={handleNav} className="flex w-full justify-between items-center py-4 px-6">
                    <h1 className='text-4xl font-black bg-clip-text bg-clip text-transparent bg-cover bg-center bg-home-texture hover:text-secondary-red'>ANDREI</h1>
                    <RxCross2 size={sizeIcon}/>
                </div>
                {NavLinks.map(({ id, href, text}) => (
                    <li key={id}
                        className='flex flex-col w-full text-center'>
                        <Link
                            onClick={handleNav}
                            href={href} 
                            className='navbar-link'
                            >
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
    )
}