'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PromoBanner() {
    return (
        <section className="max-w-7xl pb-12 m-auto rounded ">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px] rounded-2xl overflow-hidden flex flex-col md:flex-row ">
                {/* Left side */}
                <div className="bg-blue-50 flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                        Grab up to <span className="text-primary">35% off</span> <br /> on your favorite <br /> Destination
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Limited time offer, don’t miss the opportunity
                    </p>
                    <Link
                        href="#"
                        className="max-w-40 text-center inline-block bg-primary text-white text-sm font-medium px-5 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Book Now
                    </Link>
                </div>

                {/* Right side image */}
                <div className="flex-1 relative h-64 md:h-auto">
                    <Image
                        src="/promo-banner.jpg" // Replace with your static image path
                        alt="Promo Destination"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
