'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const destinations = [
    {
        image: '/spiti.jpg',
        label: '',
        subtitle: 'The Middle Land',
        title: 'Spiti Valley',
    },
    {
        image: '/himachal.jpg',
        label: '',
        subtitle: "Nature's Paradise",
        title: 'Himachal',
    },
    {
        image: '/uttrakhand.jpg',
        label: '',
        subtitle: 'The Land of Gods',
        title: 'Uttarakhand',
    },
    {
        image: '/kashmir.jpg',
        label: '',
        subtitle: 'The Crown of India',
        title: 'Kashmir',
    },
    {
        image: '/ladakh.jpg',
        label: '',
        subtitle: 'Adventure Awaits',
        title: 'Ladakh',
    },
    {
        image: '/meghalya.jpg',
        label: '',
        subtitle: 'The Abode of Clouds',
        title: 'Meghalaya',
    },
];

export default function Domestic() {
    return (
        <section className="pb-6 pt-10 px-4 bg-white">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">DOMESTIC DESTINATIONS</h2>
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
                    {destinations.map((dest, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative rounded-xl overflow-hidden shadow-md group">
                                <Image
                                    src={dest.image}
                                    alt={dest.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-[220px] md:h-[180px] xl:h-[220px] object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 text-white flex flex-col justify-end p-4">
                                    {dest.label && (
                                        <span className="absolute top-3 left-3 bg-white text-teal-600 text-xs px-2 py-1 rounded">
                                            {dest.label}
                                        </span>
                                    )}
                                    <p className="text-xs text-gray-200">{dest.subtitle}</p>
                                    <h3 className="text-lg font-semibold">{dest.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
