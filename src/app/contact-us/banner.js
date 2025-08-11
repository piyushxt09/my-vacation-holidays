'use client';

import Image from 'next/image';
import Link from 'next/link';



export default function Banner() {
    return (
        <div>


            <section className="relative w-full h-[30vh] md:h-[50vh] overflow-hidden">
                {/* Background image */}
                <Image
                    src="/contact-img.jpg" // replace with your actual image
                    alt="Manali Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Centered Heading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-4">
                    <h1 className="text-3xl md:text-5xl font-medium text-white">
                     Contact Us
                    </h1>
                </div>

                {/* Breadcrumb below banner */}
            </section>
            
            <div className="bg-white text-sm text-gray-600 px-4 py-2 relative ">
                <div className="xl:max-w-[1300px] md:max-w-[1100px] m-auto">
                    <nav className="flex space-x-1">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-gray-800">Contact Us</span>
                    </nav>

                </div>
            </div>

        </div>
    );
}
