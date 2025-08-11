'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Itinerary({ tourItinerary }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl pt-10">
            <h2 className="text-2xl md:text-3xl font-medium pb-3 mb-8 text-black">
                Itinerary
            </h2>

            <div className="relative border-l-4 border-blue-300 pl-8">
                {tourItinerary.map((item, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={index} className="relative mb-10 group">
                            {/* Dot */}
                            <span
                                className={`absolute -left-[42px] top-1 w-4 h-4 rounded-full border-2 border-blue-500 transition-all duration-300 ${
                                    isOpen || index === 0 || index === tourItinerary.length - 1
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
                                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                                        isOpen ? "text-primary" : "text-primary"
                                    } group-hover:text-primary`}
                                >
                                    {item.title}
                                </h3>
                                <span
                                    className={`transform transition-transform duration-300 cursor-pointer ${
                                        isOpen ? "rotate-90 text-primary" : "rotate-0 text-primary"
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
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: item.description
                                            }}
                                        />
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
