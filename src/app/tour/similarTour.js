'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WeekendTrips({ similarTourss }) {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 border-l-4 border-cyan-500 pl-2">
                        Similar Tours
                    </h2>
                </div>

                {similarTourss.length === 0 ? (
                    <p className="text-gray-500">No similar tours available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
                        {similarTourss.map((tour, index) => (
                            <Link 
                                key={index} 
                                href={`/tour/${tour.url}`} 
                                className="rounded-xl overflow-hidden shadow-md relative block group"
                            >
                                <Image
                                    src={`/galleryimg/${tour.image || 'default-tour.jpg'}`}
                                    alt={tour.package_name}
                                    width={400}
                                    height={300}
                                    className="w-full h-[400px] md:h-[300px] xl:h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
                                    <p className="text-white text-xs">{tour.tour_duration || 'N/A'}</p>
                                    <h3 className="text-white font-semibold">{tour.package_name}</h3>
                                    <div className="mt-1 text-white font-medium text-lg">
                                        {tour.tour_price ? `₹ ${tour.tour_price}` : 'Contact for price'}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
