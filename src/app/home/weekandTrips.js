'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WeekendTrips() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTrips() {
            try {
                const res = await fetch('https://my-vacation-backend.onrender.com/api/similar-tours');
                if (!res.ok) throw new Error('Failed to fetch trips');
                const data = await res.json();
                setTrips(data);
            } catch (error) {
                console.error('Error fetching trips:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTrips();
    }, []);

    return (
        <section className="py-12 px-4 bg-white">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 border-l-4 border-cyan-500 pl-2">
                        Weekend Trips
                    </h2>
                    <a href='/fixed-departure' className='cursor-pointer'>
                        <button className="text-sm text-white bg-primary px-4 py-1 rounded-full hover:bg-cyan-600">
                            View All
                        </button>
                    </a>
                </div>

                {loading ? (
                    <p className="text-gray-500">Loading trips...</p>
                ) : trips.length === 0 ? (
                    <p className="text-gray-500">No weekend trips found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
                        {trips.map((trip, index) => (
                            <Link
                                key={index}
                                href={`/tour/${trip.url || trip.id}`} // Adjust slug/id according to your route
                                className="rounded-xl overflow-hidden shadow-md relative block group"
                            >
                                <Image
                                    src={
                                        trip.image?.startsWith('http')
                                            ? trip.image
                                            : `/galleryimg/${trip.image || 'default-tour.jpg'}`
                                    }
                                    alt={trip.package_name}
                                    width={400}
                                    height={300}
                                    className="w-full h-[400px] md:h-[300px] xl:h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                                />


                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
                                    <p className="text-white text-xs">{trip.tour_duration || 'N/A'}</p>
                                    <h3 className="text-white font-semibold">{trip.package_name}</h3>
                                    <div className="mt-1 text-white font-medium text-lg">
                                        {trip.tour_price ? `₹${trip.tour_price}` : 'Contact for price'}
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
