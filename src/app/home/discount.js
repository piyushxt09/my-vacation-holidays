'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Discount() {
    const offers = [
        {
            image: '/offer1.jpg',
            title: 'Enjoy Upto',
            highlight: '60% OFF',
            subtitle: 'on Your Booking',
        },
        {
            image: '/offer2.png',
            title: '80% Discount',
            highlight: 'Are You Ready To Turkey Tour',
            subtitle: '',
        },
        {
            image: '/offer3.jpg',
            title: 'Discover The Wow',
            highlight: 'Of Europe',
            subtitle: '60% Only This Week',
        },
        {
            image: '/offer2.png',
            title: '80% Discount',
            highlight: 'Are You Ready To Turkey Tour',
            subtitle: '',
        },
    ];

    return (
        <section className="bg-blue-50 py-12 px-4 ">
            <div className='m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]'>


                <h2 className="text-3xl font-medium text-gray-800 mb-6  md:text-start md:ms-0 ">
                    Special Offers
                </h2>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="max-w-7xl mx-auto"
                >

                    {offers.map((offer, index) => (
                        <SwiperSlide key={index}>
                            <div className="rounded-xl overflow-hidden shadow-md bg-white relative">
                                <div className="relative w-full h-48 md:h-45 xl:h-55">
                                    <Image
                                        src={offer.image}
                                        alt={offer.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl"
                                    />

                                    {/* Text Overlay */}
                                    <div className="absolute inset-0 bg-black/20 flex flex-col justify-center p-4 text-white">
                                        <p className="text-sm font-semibold text-orange-300">{offer.title}</p>
                                        <h3 className="text-lg font-medium">{offer.highlight}</h3>
                                        {offer.subtitle && (
                                            <p className="mt-1 text-xs text-gray-200">{offer.subtitle}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
