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
import TourMap from './tourMap';

export default function PackageDetails() {
    return (
        <>
            <div className="max-w-4xl mb-3 p-4 md:p-8 bg-white rounded-lg shadow">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 mb-6">
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
                            <span className="text-sm text-gray-500">3 days</span>
                        </div>
                    </div>
                    {/* Icons Row */}
                    <div className="flex flex-wrap gap-8 mt-2">
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
                        <div className="text-2xl md:text-3xl font-bold text-blue-900">
                            $11,000 <span className="text-sm font-medium">-/ PP</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">Description</h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day. Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and Maya Bay, immortalized in "The Beach." Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup and drop-off all included.
                    </p>
                </div>

                {/* Tour Highlights */}
                <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-black">Tour Highlights</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Experience the thrill of a speedboat to the stunning Phi Phi Islands</li>
                        <li>Be amazed by the variety of marine life in the archipelago</li>
                        <li>Enjoy relaxing in paradise with white sand beaches and azure turquoise water</li>
                        <li>Feel the comfort of a tour limited to 35 passengers</li>
                        <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
                    </ul>
                </div>

                <Itinerary />

                <InclusionsExclusions />

                <TourMap />
            </div>
        </>

    );
}
