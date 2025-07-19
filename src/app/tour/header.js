'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'India Tour', href: '/india-tour' },
        { label: 'International Tour', href: '/international-tour' },
        { label: 'Theme Based', href: '/theme-based' },
        { label: 'Fixed Departure', href: '/fixed-departure' },
        { label: 'Contact Us', href: '/contact' },
    ];

    return (
        <>
            {/* Top nav bar */}
            <header className="bg-primary text-white fixed top-0 left-0 w-full z-50 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={160}
                                height={50}
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 text-sm font-medium">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:text-yellow-200 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                    </button>
                </div>
            </header>

            {/* Mobile overlay menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-sm text-white flex flex-col items-center justify-center space-y-8 text-xl font-semibold transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:hidden z-40`}
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
