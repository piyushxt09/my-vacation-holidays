'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import {

    faBars,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '#' },
        { label: 'India Tour', href: '/tour' },
        { label: 'International Tour', href: '#' },
        { label: 'Theme Based', href: '#' },
        { label: 'Fixed Departure', href: '#' },
        { label: 'Contact Us', href: '#' },
    ];



    return (
        <>


            <header className="relative z-20 flex md:justify-around justify-between items-center px-6 py-4 bg-transparent">
                {/* Logo */}
                <div className="w-[180px]">
                    <Image src="/logo.png" alt="Logo" width={180} height={50} />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10 text-sm font-medium text-white">
                    {menuItems.map((item) => (
                        <Link key={item.label} href={item.href} className="hover:text-yellow-300">
                            {item.label}
                        </Link>
                    ))}
                </nav>

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
