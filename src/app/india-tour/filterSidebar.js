'use client';

import { useState } from 'react';

export default function FilterSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(5000); // Default price

    const filterSections = [
        {
            title: 'Tour Type',
            options: [
                'Nature Tours',
                'Adventure Tours',
                'Cultural Tours',
                'Food Tours',
                'City Tours',
                'Cruises Tours',
            ],
        },
        {
            title: 'Filter Price',
            custom: (
                <div className="space-y-2">
                    <input
                        type="range"
                        min="1000"
                        max="10000"
                        step="500"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full text-primary"
                    />
                    <p className="text-sm text-gray-600">Up to ₹{price}</p>
                </div>
            ),
        },
        {
            title: 'Duration',
            options: [
                '1-3 Days',
                '4-7 Days',
                '8-14 Days',
                '15+ Days',
            ],
            type: 'radio',
        },
        {
            title: 'Language',
            options: ['English', 'Hindi', 'French', 'German', 'Spanish'],
        },
        {
            title: 'Rating',
            options: ['1 Star & Up', '2 Stars & Up', '3 Stars & Up', '4 Stars & Up', '5 Stars'],
        },
        {
            title: 'Specials',
            options: ['Free Cancellation', 'Private Tour', 'Instant Confirmation'],
        },
    ];

    const renderOptions = (section, isMobile = false) => {
        const inputPrefix = isMobile ? 'mobile-' : '';

        if (section.custom) return section.custom;

        return (
            <ul className="space-y-2 text-sm text-gray-700">
                {section.options?.map((opt) => (
                    <li key={opt} className="flex items-center space-x-2">
                        {section.type === 'radio' ? (
                            <input
                                type="radio"
                                name={`${inputPrefix}${section.title}`}
                                id={`${inputPrefix}${opt}`}
                                className="accent-blue-500"
                            />
                        ) : (
                            <input
                                type="checkbox"
                                id={`${inputPrefix}${opt}`}
                                className="accent-blue-500"
                            />
                        )}
                        <label htmlFor={`${inputPrefix}${opt}`}>{opt}</label>
                    </li>
                ))}
                {section.title === 'Tour Type' && (
                    <li>
                        <button className="text-blue-400 text-sm hover:underline">
                            See More
                        </button>
                    </li>
                )}
            </ul>
        );
    };

    return (
        <>
            {/* MOBILE Filter button */}
            <div className="md:hidden p-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-primary text-white px-4 py-2 rounded"
                >
                    Filter
                </button>
            </div>

            {/* DESKTOP Sidebar */}
            <aside className="hidden md:block w-80 shadow rounded-lg overflow-hidden">
                <div className="bg-primary text-white px-4 py-3 font-semibold">Filter By</div>
                <div className="p-4 space-y-6">
                    {filterSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-sm text-gray-800 mb-2">
                                {section.title}
                            </h3>
                            {renderOptions(section)}
                            <hr className="my-4 border-gray-200" />
                        </div>
                    ))}
                </div>
            </aside>

            {/* MOBILE Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center md:hidden">
                    <div className="bg-white rounded-lg w-11/12 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center bg-blue-500 text-white px-4 py-3 rounded-t-lg">
                            <h2 className="font-semibold">Filter By</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white text-xl"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-4 space-y-6">
                            {filterSections.map((section) => (
                                <div key={`mobile-${section.title}`}>
                                    <h3 className="font-semibold text-sm text-gray-800 mb-2">
                                        {section.title}
                                    </h3>
                                    {renderOptions(section, true)}
                                    <hr className="my-4 border-gray-200" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
