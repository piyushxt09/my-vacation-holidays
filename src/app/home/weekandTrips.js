'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const trips = [
    {
        image: '/kedarnath.jpg',
        title: 'Kedarnath Luxury Package',
        badge: 'Group Trip',
        duration: '3N & 4D',
        date: '18 Jun',
        price: '₹17,999/-',
        oldPrice: '',
    },
    {
        image: '/yulla-kanda.jpg',
        title: 'Yulla Kanda Trek',
        badge: 'Group Trip',
        duration: '3N & 4D',
        date: '27 Jun',
        price: '₹8,999/-',
        oldPrice: '',
    },
    {
        image: '/manali-solang.jpg',
        title: 'Manali-Solang',
        badge: 'Customized Trip',
        duration: '2N & 3D',
        date: 'Contact Us',
        price: '₹7,499/-',
        oldPrice: '₹7,499/-',
    },
    {
        image: '/manali-sissu.jpg',
        title: 'Manali-Sissu',
        badge: 'Customized Trip',
        duration: '2N & 3D',
        date: 'Contact Us',
        price: '₹7,999/-',
        oldPrice: '₹8,499/-',
    },
];

export default function WeekendTrips() {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-cyan-500 pl-2">
                        Weekend Trips
                    </h2>
                    <button className="text-sm text-white bg-primary px-4 py-1 rounded-full hover:bg-cyan-600">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
                    {trips.map((trip, index) => (
                        <div key={index} className="rounded-xl overflow-hidden shadow-md relative">
                            <Image
                                src={trip.image}
                                alt={trip.title}
                                width={400}
                                height={300}
                                className="w-full h-[400px] md:h-[300px] xl:h-[400px] object-cover"
                            />

                            {/* Badge */}
                            <div className="absolute top-3 right-3 bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full">
                                {trip.badge}
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4">
                                <p className="text-white text-xs">{trip.duration}</p>
                                <h3 className="text-white font-semibold">{trip.title}</h3>

                                <div className="flex items-center text-white text-sm mt-1 gap-1">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-xs" />
                                    <span>{trip.date}</span>
                                </div>

                                <div className="mt-1 text-white font-bold text-lg">
                                    {trip.price}{' '}
                                    {trip.oldPrice && (
                                        <span className="text-sm line-through text-red-300 ml-2">
                                            {trip.oldPrice}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
