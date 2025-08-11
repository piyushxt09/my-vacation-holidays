'use client';

import Image from 'next/image';
import Link from 'next/link';
import FilterSidebar from './filterSidebar';
import PackageCard from './package';
export default function Banner() {


    return (
        <div>


            <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                {/* Background image */}
                <Image
                    src="/banner-tour.jpg" // replace with your actual image
                    alt="India Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Heading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-4">
                    <h1 className="text-3xl md:text-5xl font-medium text-white">
                        India Tour Packages
                    </h1>
                </div>

                {/* Breadcrumb below banner */}
            </section>
            <div className="bg-white text-sm text-gray-600 px-4 py-2 relative ">
                <div className="xl:max-w-[1300px] md:max-w-[1100px] m-auto">
                    <nav className="flex space-x-1">
                        <Link href="/" className="hover:underline">Home</Link>

                        <span>/</span>
                        <span className="text-gray-800">India Tour Packages</span>
                    </nav>

                    <h2 className="text-3xl md:text-4xl font-medium text-black mt-4">
                        Explore all things to do in India
                    </h2>
                    <p className="md:text-lg md:mt-3">
                        Experience the beauty of the Himalayas 🏔️ with our Himachal tour package from Delhi! Wander through Shimla 🏙️, Dharamshala 🕉️, and Dalhousie 🌄, where snow-capped peaks ❄️ meet lush valleys 🌿. Enjoy scenic retreats, guided adventures 🧭, and warm stays 🏡 — perfect for families, couples, and thrill-seekers! 📩 Book your dream trip today.
                    </p>

                </div>
            </div>

            <div className="xl:max-w-[1300px] md:max-w-[1100px] m-auto mb-5 flex flex-col md:flex-row gap-10 my-5">
                <div className="w-full xl:max-w-[300px] md:max-w-[300px]">
                    <FilterSidebar />
                </div>
                <div className="w-full xl:max-w-[1000px] md:max-w-[900px]">
                    <PackageCard />
                </div>
            </div>


        </div>
    );
}
