'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Itinerary() {
    const itinerary = [
        {
            day: "Day 1: Airport Pick Up",
            description:
                "We can collect you from the airport when you land and take you directly to your hotel. The first day is just a check-in day so you can explore the city and get settled in.",
        },
        {
            day: "Day 2: Temples & River Cruise",
            description:
                "Explore the beautiful temples and enjoy a relaxing river cruise to see the city's landmarks from the water.",
        },
        {
            day: "Day 3: Massage & Overnight Train",
            description:
                "Relax with a traditional Thai massage before boarding your overnight train to the next adventure.",
        },
        {
            day: "Day 4: Khao Sok National Park",
            description:
                "Visit one of Thailand’s most stunning national parks with limestone cliffs, lakes, and lush jungle.",
        },
        {
            day: "Day 5: Travel to Koh Phangan",
            description:
                "Travel to the beautiful island of Koh Phangan, famous for its beaches and laid-back vibe.",
        },
        {
            day: "Day 6: Morning Chill & Muay Thai Lesson",
            description:
                "Enjoy a relaxing morning and take a Muay Thai class to learn the basics of Thailand’s national sport.",
        },
        {
            day: "Day 7: Island Boat Trip",
            description:
                "Take a scenic boat trip around the islands, with plenty of opportunities for swimming and snorkeling.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl  pt-10">
            <h2 className="text-2xl md:text-3xl font-bold border-t pt-10  pb-3 mb-8 text-black">
                Itinerary
            </h2>

            <div className="relative border-l-4 border-blue-300 pl-8">
                {itinerary.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="relative mb-10 group">
                            {/* Dot */}
                            <span
                                className={`absolute -left-[42px] top-1 w-4 h-4 rounded-full border-2 border-blue-500 transition-all duration-300 ${isOpen || index === 0 || index === itinerary.length - 1
                                        ? "bg-primary"
                                        : "bg-white"
                                    }`}
                            />

                            {/* Day header */}
                            <button
                                onClick={() => toggleItem(index)}
                                className="text-left w-full flex items-center justify-between focus:outline-none"
                            >
                                <h3
                                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? "text-primary" : "text-primary"
                                        } group-hover:text-primary`}
                                >
                                    {item.day}
                                </h3>
                                <span
                                    className={`transform transition-transform duration-300 cursor-pointer ${isOpen ? "rotate-90 text-primary" : "rotate-0 text-primary"
                                        }`}
                                >
                                    ▶
                                </span>
                            </button>

                            {/* Animated description */}
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0.2, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden mt-4 bg-white border border-blue-100 rounded-lg shadow-sm p-4 text-gray-700 text-sm md:text-base leading-relaxed"
                                    >
                                        {item.description}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
