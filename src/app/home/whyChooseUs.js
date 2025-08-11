'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faTicket,
    faGem,
    faAward,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';


export default function whyChooseUs() {

    const features = [
        {
            icon: faTicket,
            title: 'Ultimate flexibility',
            description:
                'You’re in control, with free cancellation and payment options to satisfy any plan or budget.',
        },
        {
            icon: faGlobe,
            title: 'Memorable experiences',
            description:
                "Browse and book tours and activities so incredible, you'll want to tell your friends.",
        },
        {
            icon: faGem,
            title: 'Quality at our core',
            description:
                'High-quality standards. Millions of reviews. A tourz company.',
        },
        {
            icon: faAward,
            title: 'Award-winning support',
            description:
                'New price? New plan? No problem. We’re here to help, 24/7.',
        },
    ];


    return (
        <>

            <section className="py-16 bg-white text-start max-w-7xl m-auto">

                <h2 className="text-3xl font-medium text-gray-900 mb-10 ps-20">Why choose Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-20">
                    {features.map((item, index) => (
                        <div key={index} className="flex flex-col items-start text-start space-y-4 shadow p-5">
                            <FontAwesomeIcon icon={item.icon} className="text-primary text-4xl" />
                            <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}

