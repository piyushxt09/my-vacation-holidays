'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faHotel,
    faUtensils,
    faBinoculars,
    faShuttleVan,
    faStar,
} from '@fortawesome/free-solid-svg-icons';

import Itinerary from './Itinerary';
import InclusionsExclusions from './inclusions';

export default function PackageDetails({ tour, itinerary }) {
    return (
        <>
            <div className="max-w-4xl mb-3 border-blue-300 p-4 md:p-8 bg-white rounded-lg shadow">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 xl:gap-15 md:gap-5 ">
                    {/* Left: Rating and Icons */}
                    <div className="flex flex-col gap-4">
                        {/* Rating */}
                        <div className="flex items-center text-yellow-500">
                            <FontAwesomeIcon icon={faStar} className="mr-1" />
                            <span className="text-sm font-medium">(4.5 reviews)</span>
                        </div>

                        {/* Duration */}
                        <div className="flex items-center gap-2 text-gray-700">
                            <FontAwesomeIcon icon={faClock} className="text-primary p-3 border rounded font-medium" />
                            <span className="font-medium">Duration</span>
                            <span className="text-sm text-gray-500">{tour.tour_duration}</span>
                        </div>
                    </div>
                    {/* Icons Row */}
                    <div className="flex flex-wrap gap-4 xl:gap-8 md:gap-4 mt-2">
                        <div className="flex flex-col items-center text-center">
                            <FontAwesomeIcon icon={faHotel} className="text-white border p-2 bg-primary rounded text-2xl" />
                            <span className="text-sm font-medium">Hotel</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FontAwesomeIcon icon={faUtensils} className="text-white border p-2 bg-primary rounded text-2xl" />
                            <span className="text-sm font-medium">Meals</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FontAwesomeIcon icon={faBinoculars} className="text-white border p-2 bg-primary rounded text-2xl" />
                            <span className="text-sm font-medium">Sightseeing</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FontAwesomeIcon icon={faShuttleVan} className="text-white border p-2 bg-primary rounded text-2xl" />
                            <span className="text-sm font-medium">Transfer</span>
                        </div>
                    </div>


                    {/* Right: Price */}
                    <div className="mt-6 md:mt-0">
                        <div className="text-2xl md:text-2xl font-medium text-blue-900">
                            ₹ {tour.tour_price} <span className="text-sm font-medium">-/ PP</span>
                        </div>
                    </div>
                </div>

               

                <Itinerary tourItinerary={itinerary} />

                <InclusionsExclusions tourInclusion={tour} />

                {/* <TourMap /> */}
            </div>
        </>

    );
}
