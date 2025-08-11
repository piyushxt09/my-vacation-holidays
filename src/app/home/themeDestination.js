'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ThemeDestinations() {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        async function fetchThemes() {
            try {
                const res = await fetch('/api/theme-destinations');
                if (!res.ok) throw new Error('Failed to fetch themes');
                const data = await res.json();
                setThemes(data);
            } catch (error) {
                console.error('Error fetching themes:', error);
            }
        }
        fetchThemes();
    }, []);

    return (
        <section className="bg-blue-50 py-12 px-4">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
                    THEME BASED DESTINATIONS
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                    {themes.map((theme, idx) => (
                        <Link
                            key={idx}
                            href={`tour/${theme.url || theme.id}`}
                            className={`relative rounded-xl overflow-hidden block
                                ${idx === 1
                                    ? 'lg:col-span-3 lg:row-span-2 h-[250px] sm:h-[300px] md:h-[415px] xl:h-[520px]'
                                    : 'h-[250px] sm:h-[200px] md:h-[250px]'}`
                            }
                        >
                            <Image
                                src={`/galleryimg/${theme.image || 'default-tour.jpg'}`}
                                alt={theme.theme_name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                                <h3 className="text-white text-sm sm:text-base font-medium">
                                    {theme.theme_name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
