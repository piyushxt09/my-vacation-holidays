'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Banner({ tour }) {
    return (
        <div>
            <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                {/* Background image */}
                <Image
                    src="/banner-tour.jpg" // can be dynamic if you add tour.banner_image
                    alt={`${tour.package_name} Banner`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Centered Heading */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-4">
                    <h1 className="text-3xl md:text-5xl font-medium text-white">
                        {tour.package_name}
                    </h1>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white text-sm text-gray-600 px-4 py-2 relative">
                <div className="xl:max-w-[1250px] md:max-w-[1100px] m-auto">
                    <nav className="flex space-x-1">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-gray-800">Tour</span>
                        <span>/</span>
                        <span className="text-gray-800">{tour.package_name}</span>
                    </nav>

                    <h2 className="text-3xl md:text-4xl font-medium text-black mt-4">
                        Explore all things to do in {tour.package_name}
                    </h2>
                    <p className="md:text-lg md:mt-3">
                        {tour.package_name} —
                        <span className="font-semibold">
                            🌍 Discover hidden gems, 🍽️ savor local flavors, and 🏞️ immerse yourself in breathtaking landscapes.
                            From 🌅 sunrise adventures to ✨ starlit evenings, every moment here promises beauty, culture, and unforgettable memories that will leave you longing to return again and again.
                        </span>
                    </p>

                </div>
            </div>
        </div>
    );
}
