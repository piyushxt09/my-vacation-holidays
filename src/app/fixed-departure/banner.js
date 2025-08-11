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
                    src="/fixed-departure-banner.jpg" // replace with your actual fixed departure banner
                    alt="Fixed Departure Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Heading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-4">
                    <h1 className="text-3xl md:text-5xl font-medium text-white">
                        Fixed Departure
                    </h1>
                </div>
            </section>

            {/* Breadcrumb & Intro */}
            <div className="bg-white text-sm text-gray-600 px-4 py-2 relative">
                <div className="xl:max-w-[1300px] md:max-w-[1100px] m-auto">
                    <nav className="flex space-x-1">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-gray-800">Fixed Departure</span>
                    </nav>

                    <h2 className="text-3xl md:text-4xl font-medium text-black mt-4">
                        Explore Upcoming Fixed Departures – India & International
                    </h2>
                    <p className="md:text-lg md:mt-3">
                        Join our carefully curated fixed departure tours 🚍 for stress-free travel within India 🇮🇳 or to breathtaking international destinations 🌍.
                        Travel on set dates with expert guides, well-planned itineraries 📅, and like-minded fellow travelers 🤝.
                        Whether you’re dreaming of the Himalayas 🏔️, Rajasthan’s deserts 🏜️, Europe’s charm 🏰, or tropical escapes 🏝️ —
                        our fixed departures make it easy and affordable. 📩 Reserve your seat today!
                    </p>
                </div>
            </div>

            {/* Main Content */}
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
