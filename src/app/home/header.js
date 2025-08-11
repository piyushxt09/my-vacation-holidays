'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';

import Link from 'next/link';

import {
    faBars,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about-us' },
        { label: 'India Tour', href: '/india-tour' },
        { label: 'International Tour', href: '/international-tour' },
        { label: 'Fixed Departure', href: '/fixed-departure' },
        { label: 'Contact Us', href: '/contact-us' },
    ];



    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r bg-primary to-black/80 text-white text-sm px-4 py-2 flex items-center justify-between">
                {/* Left: Phone numbers */}
                <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-xs rotate-90" />
                    <span>(001) 88451234</span>
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-xs rotate-90 ms-3" />
                    <span>88455438</span>
                </div>

                {/* Right: Social icons */}
                <div className="flex items-center space-x-3">
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-150">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-150">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition-colors duration-150">
                        <FontAwesomeIcon icon={faPinterestP} />
                    </a>
                </div>
            </div>


            <header className="relative z-20 mt-4 flex md:justify-around justify-between items-center px-6 py-4 bg-transparent">
                {/* Logo */}
                <div className='flex justify-between items-center gap-30'>
                    <div className="w-[180px]">
                        <Image src="/logo.png" alt="Logo" width={180} height={50} />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-10 text-sm font-medium text-white bg-primary px-6 py-3 rounded-xl shadow-md backdrop-blur-md">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-yellow-300 transition-colors duration-200">
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
            </header>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-10`}
            >
                {menuItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-300"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

        </>
    );
}
