'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

export default function International() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const res = await fetch('/api/international-packages');
                const data = await res.json();
                setDestinations(data);
            } catch (error) {
                console.error('Error fetching international packages:', error);
            }
        };

        fetchPackages();
    }, []);

    return (
        <section className="pt-5 pb-6 px-4 bg-white">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-medium text-gray-800">INTERNATIONAL DESTINATIONS</h2>
                    <Link
                        href="#"
                        className="text-primary font-semibold text-sm hover:underline flex items-center gap-1"
                    >
                        View All <span className="text-xl">→</span>
                    </Link>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1280: { slidesPerView: 5 },
                    }}
                >
                    {destinations.map((tour, index) => (
                        <SwiperSlide key={index}>
                            <Link href={`/tour/${tour.url}`}>
                                <div className="relative rounded-xl overflow-hidden shadow-md group">
                                    <Image
                                        src={
                                            tour.image?.startsWith('http')
                                                ? tour.image
                                                : `/galleryimg/${tour.image}`
                                        }
                                        alt={tour.package_name}
                                        width={300}
                                        height={200}
                                        className="w-full h-[220px] md:h-[180px] xl:h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-end p-4">
                                        {tour.label && (
                                            <span className="absolute top-3 left-3 bg-white text-primary text-xs px-2 py-1 rounded">
                                                {tour.label}
                                            </span>
                                        )}
                                        <p className="text-xs text-gray-200">
                                            {tour.tour_destination?.split(' ').slice(0, 3).join(' ')}
                                        </p>
                                        <h3 className="text-lg font-semibold">{tour.package_name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
