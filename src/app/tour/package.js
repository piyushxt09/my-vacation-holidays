'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar,
    faHotel,
    faUtensils,
    faBinoculars,
    faShuttleVan,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';

export default function PackageCard() {
    return (
        <>
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition mb-4">
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-60 h-48 md:h-auto relative rounded-lg overflow-hidden">
                        <Image
                            src="/manali.png"
                            alt="Manali Tour"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h2 className="text-lg font-bold text-gray-800">Manali Tour Package</h2>

                            {/* Location */}
                            <p className="text-sm text-gray-500 mb-2">📍 Manali, Himachal Pradesh</p>

                            {/* Rating */}
                            <div className="flex items-center text-yellow-500 mb-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                                ))}
                                <span className="text-gray-700 ml-2 text-sm">(4.5 reviews)</span>
                            </div>

                            {/* Duration */}
                            <p className="text-sm font-semibold mb-3">🕒 2 Days 1 Night</p>

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

                        {/* Price + CTA section */}

                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col md:flex-col md:items-center md:justify-between gap-4">
                        <div className='text-center'>
                            <p className="text-sm text-gray-400 line-through">₹12,000</p>
                            <p className="text-lg font-bold text-gray-800">₹11,000 <span className="text-sm text-gray-500">/ Per Person</span></p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap flex-col gap-2">
                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Enquiry Now</button>
                            <div className='flex justify-between  gap-3'>
                                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-20">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                                <button className="p-2 bg-primary text-white rounded hover:bg-blue-600 w-20">
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </div>
                            <button className="px-4 py-2 border border-blue-500 text-primary rounded hover:bg-blue-50">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition mb-4">
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-60 h-48 md:h-auto relative rounded-lg overflow-hidden">
                        <Image
                            src="/manali.png"
                            alt="Manali Tour"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h2 className="text-lg font-bold text-gray-800">Manali Tour Package</h2>

                            {/* Location */}
                            <p className="text-sm text-gray-500 mb-2">📍 Manali, Himachal Pradesh</p>

                            {/* Rating */}
                            <div className="flex items-center text-yellow-500 mb-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                                ))}
                                <span className="text-gray-700 ml-2 text-sm">(4.5 reviews)</span>
                            </div>

                            {/* Duration */}
                            <p className="text-sm font-semibold mb-3">🕒 2 Days 1 Night</p>

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

                        {/* Price + CTA section */}

                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col md:flex-col md:items-center md:justify-between gap-4">
                        <div className='text-center'>
                            <p className="text-sm text-gray-400 line-through">₹12,000</p>
                            <p className="text-lg font-bold text-gray-800">₹11,000 <span className="text-sm text-gray-500">/ Per Person</span></p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap flex-col gap-2">
                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Enquiry Now</button>
                            <div className='flex justify-between  gap-3'>
                                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-20">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                                <button className="p-2 bg-primary text-white rounded hover:bg-blue-600 w-20">
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </div>
                            <button className="px-4 py-2 border border-blue-500 text-primary rounded hover:bg-blue-50">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition mb-4">
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-60 h-48 md:h-auto relative rounded-lg overflow-hidden">
                        <Image
                            src="/manali.png"
                            alt="Manali Tour"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h2 className="text-lg font-bold text-gray-800">Manali Tour Package</h2>

                            {/* Location */}
                            <p className="text-sm text-gray-500 mb-2">📍 Manali, Himachal Pradesh</p>

                            {/* Rating */}
                            <div className="flex items-center text-yellow-500 mb-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                                ))}
                                <span className="text-gray-700 ml-2 text-sm">(4.5 reviews)</span>
                            </div>

                            {/* Duration */}
                            <p className="text-sm font-semibold mb-3">🕒 2 Days 1 Night</p>

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

                        {/* Price + CTA section */}

                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col md:flex-col md:items-center md:justify-between gap-4">
                        <div className='text-center'>
                            <p className="text-sm text-gray-400 line-through">₹12,000</p>
                            <p className="text-lg font-bold text-gray-800">₹11,000 <span className="text-sm text-gray-500">/ Per Person</span></p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap flex-col gap-2">
                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Enquiry Now</button>
                            <div className='flex justify-between  gap-3'>
                                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-20">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                                <button className="p-2 bg-primary text-white rounded hover:bg-blue-600 w-20">
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </div>
                            <button className="px-4 py-2 border border-blue-500 text-primary rounded hover:bg-blue-50">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition mb-4">
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-60 h-48 md:h-auto relative rounded-lg overflow-hidden">
                        <Image
                            src="/manali.png"
                            alt="Manali Tour"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h2 className="text-lg font-bold text-gray-800">Manali Tour Package</h2>

                            {/* Location */}
                            <p className="text-sm text-gray-500 mb-2">📍 Manali, Himachal Pradesh</p>

                            {/* Rating */}
                            <div className="flex items-center text-yellow-500 mb-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                                ))}
                                <span className="text-gray-700 ml-2 text-sm">(4.5 reviews)</span>
                            </div>

                            {/* Duration */}
                            <p className="text-sm font-semibold mb-3">🕒 2 Days 1 Night</p>

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

                        {/* Price + CTA section */}

                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col md:flex-col md:items-center md:justify-between gap-4">
                        <div className='text-center'>
                            <p className="text-sm text-gray-400 line-through">₹12,000</p>
                            <p className="text-lg font-bold text-gray-800">₹11,000 <span className="text-sm text-gray-500">/ Per Person</span></p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap flex-col gap-2">
                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Enquiry Now</button>
                            <div className='flex justify-between  gap-3'>
                                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-20">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                                <button className="p-2 bg-primary text-white rounded hover:bg-blue-600 w-20">
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </div>
                            <button className="px-4 py-2 border border-blue-500 text-primary rounded hover:bg-blue-50">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg p-4 bg-white shadow hover:shadow-lg transition mb-4">
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="w-full md:w-60 h-48 md:h-auto relative rounded-lg overflow-hidden">
                        <Image
                            src="/manali.png"
                            alt="Manali Tour"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-1 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between">
                        <div>
                            {/* Title */}
                            <h2 className="text-lg font-bold text-gray-800">Manali Tour Package</h2>

                            {/* Location */}
                            <p className="text-sm text-gray-500 mb-2">📍 Manali, Himachal Pradesh</p>

                            {/* Rating */}
                            <div className="flex items-center text-yellow-500 mb-2">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
                                ))}
                                <span className="text-gray-700 ml-2 text-sm">(4.5 reviews)</span>
                            </div>

                            {/* Duration */}
                            <p className="text-sm font-semibold mb-3">🕒 2 Days 1 Night</p>

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

                        {/* Price + CTA section */}

                    </div>

                    <div className="mt-4 md:mt-0 flex flex-col md:flex-col md:items-center md:justify-between gap-4">
                        <div className='text-center'>
                            <p className="text-sm text-gray-400 line-through">₹12,000</p>
                            <p className="text-lg font-bold text-gray-800">₹11,000 <span className="text-sm text-gray-500">/ Per Person</span></p>
                        </div>
                        <div className="flex flex-wrap md:flex-nowrap flex-col gap-2">
                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600">Enquiry Now</button>
                            <div className='flex justify-between  gap-3'>
                                <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-20">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </button>
                                <button className="p-2 bg-primary text-white rounded hover:bg-blue-600 w-20">
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </div>
                            <button className="px-4 py-2 border border-blue-500 text-primary rounded hover:bg-blue-50">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
