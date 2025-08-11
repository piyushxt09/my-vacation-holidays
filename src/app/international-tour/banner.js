'use client';

import Image from 'next/image';
import Link from 'next/link';
import FilterSidebar from './filterSidebar';
import PackageCard from './package';
export default function Banner() {


    return (
        <>


            <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                {/* Background image */}
                <Image
                    src="/international-img.jpg" // replace with your actual image
                    alt="International Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Heading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-4">
                    <h1 className="text-3xl md:text-5xl font-medium text-white">
                        International Tour Packages
                    </h1>
                </div>

                {/* Breadcrumb below banner */}
            </section>
            <div className="bg-white text-sm text-gray-600 px-4 py-2 relative ">
                <div className="xl:max-w-[1300px] md:max-w-[1100px] m-auto">
                    <nav className="flex space-x-1">
                        <Link href="/" className="hover:underline">Home</Link>

                        <span>/</span>
                        <span className="text-gray-800">International Tour Packages</span>
                    </nav>

                    <h2 className="text-3xl md:text-4xl font-medium text-black mt-4">
                        Discover the World’s Best International Destinations
                    </h2>
                    <p className="md:text-lg md:mt-3">
                        Embark on an unforgettable journey ✈️ across stunning global hotspots — from the romantic streets of Paris ❤️ and the tropical beaches of Bali 🏝️ to the vibrant culture of Tokyo 🏮 and the breathtaking Swiss Alps 🏔️. Indulge in world-class experiences 🍷, explore diverse traditions 🎭, and create memories that span continents 🌏. 📩 Book your next adventure today!
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


        </>
    );
}
