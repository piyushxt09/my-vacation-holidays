'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar, faHotel, faUtensils, faBinoculars, faShuttleVan, faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function PackageCard() {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        async function fetchPackages() {
            try {
                const res = await fetch('https://my-vacation-backend.onrender.com/api/international-tours');
                const data = await res.json();
                setPackages(data);
            } catch (error) {
                console.error('Error fetching packages:', error);
            }
        }
        fetchPackages();
    }, []);

    return (
        <>
            {packages.map((pkg) => (
                <div
                    key={pkg.id}
                    className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition mb-4"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="w-full md:w-60 h-48 md:h-auto relative rounded-lg overflow-hidden">
                            <Image
                                src={
                                    pkg.image?.startsWith('http')
                                        ? pkg.image
                                        : `/galleryimg/${pkg.image}`
                                }
                                alt={pkg.name}
                                fill
                                className="object-cover"
                            />

                        </div>

                        {/* Content */}
                        <div className="flex-1 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-medium text-gray-800">{pkg.package_name}</h2>
                                <p className="text-sm text-gray-500 mb-2">📍 {pkg.tour_destination}</p>

                                {/* Rating */}
                                <div className="flex items-center text-yellow-500 mb-2">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                                    ))}
                                    <span className="text-gray-700 ml-2 text-sm">(4.5 reviews)</span>
                                </div>

                                {/* Duration */}
                                <p className="text-sm font-semibold mb-3">🕒 {pkg.tour_duration}</p>

                                {/* Inclusions */}
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <div className="flex items-center flex-col gap-1  text-sm">
                                        <FontAwesomeIcon className='text-white bg-primary p-2 rounded text-2xl' icon={faHotel} /> <span>Hotel</span>
                                    </div>
                                    <div className="flex items-center gap-1 flex-col  text-sm">
                                        <FontAwesomeIcon icon={faUtensils} className='text-white bg-primary p-2 rounded text-2xl' /> <span>Meals</span>
                                    </div>
                                    <div className="flex items-center gap-1 flex-col  text-sm">
                                        <FontAwesomeIcon icon={faBinoculars} className='text-white bg-primary p-2 rounded text-2xl' /> <span>Sightseeing</span>
                                    </div>
                                    <div className="flex items-center gap-1  flex-col  text-sm">
                                        <FontAwesomeIcon icon={faShuttleVan} className='text-white bg-primary p-2 rounded text-2xl' /> <span>Transfer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price + CTA */}
                        <div className="mt-4 md:mt-0 flex flex-col md:flex-col md:items-center md:justify-between gap-4">
                            <div className='text-center'>
                                <p className="text-sm text-gray-400 line-through">₹{pkg.tour_price}</p>
                                <p className="text-lg font-medium text-gray-800">₹{pkg.tour_price} <span className="text-sm text-gray-500">/ Per Person</span></p>
                            </div>
                            <div className="flex flex-wrap md:flex-nowrap flex-col gap-2">
                                <Link href="/contact-us">
                                    <button className="w-full px-4 py-2 cursor-pointer  bg-primary text-white rounded hover:bg-blue-600">
                                        Enquiry Now
                                    </button>
                                </Link>
                                <div className="flex justify-between gap-3">
                                    <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-20">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </button>
                                    <button className="p-2 bg-primary text-white rounded hover:bg-blue-600 w-20">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </button>
                                </div>
                                <Link href={`/tour/${pkg.url}`}>
                                    <button className="w-full px-4 py-2 cursor-pointer border border-blue-500 text-primary rounded hover:bg-blue-50">
                                        View Details →
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
