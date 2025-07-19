'use client';

import Image from 'next/image';

export default function ThemeDestinations() {
    return (
        <section className="bg-blue-50 py-12 px-4">
            <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    THEME BASED DESTINATIONS
                </h2>

                <div className="grid grid-cols-6 gap-4">
                    {/* Row 1 */}
                    <div className="col-span-1 h-[250px] md:h-[200px] xl:h-[250px] relative rounded-xl overflow-hidden">
                        <Image
                            src="/honeymoon.jpg"
                            alt="Honeymoon Tour"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <h3 className="text-white text-sm sm:text-base font-medium">Honeymoon Tour</h3>
                        </div>
                    </div>

                    <div className="col-span-3 row-span-2 h-[520px] md:h-[415px] xl:h-[520px] relative rounded-xl overflow-hidden">
                        <Image
                            src="/leisure.jpg"
                            alt="Leisure"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <h3 className="text-white text-sm sm:text-base font-medium">Leisure</h3>
                        </div>
                    </div>

                    <div className="col-span-2 h-[250px] md:h-[200px] xl:h-[250px]    relative rounded-xl overflow-hidden">
                        <Image
                            src="/trekking.jpg"
                            alt="Trekking"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <h3 className="text-white text-sm sm:text-base font-medium">Trekking</h3>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="col-span-1 h-[250px] md:h-[200px] xl:h-[250px] relative rounded-xl overflow-hidden">
                        <Image
                            src="/adventure.jpg"
                            alt="Adventure"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <h3 className="text-white text-sm sm:text-base font-medium">Adventure</h3>
                        </div>
                    </div>

                    <div className="col-span-1 h-[250px] md:h-[200px] xl:h-[250px] relative rounded-xl overflow-hidden">
                        <Image
                            src="/religious.jpg"
                            alt="Religious"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <h3 className="text-white text-sm sm:text-base font-medium">Religious</h3>
                        </div>
                    </div>

                    <div className="col-span-1 h-[250px] md:h-[200px] xl:h-[250px] relative rounded-xl overflow-hidden">
                        <Image
                            src="/hillstation.jpg"
                            alt="Hill Station"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                            <h3 className="text-white text-sm sm:text-base font-medium">Hill Station</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
