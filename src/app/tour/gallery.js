'use client'

import Image from 'next/image';
import Link from 'next/link';


export default function ImageGallery({ tour }) {
    return (
        <div className="xl:max-w-[1250px] md:max-w-[1100px] m-auto px-4 md:px-0 py-6">
            <a href={`/galleryimg/${tour.image}`} target="_blank" rel="noopener noreferrer">
                <div className="relative h-[500px] w-full overflow-hidden rounded-lg transition-transform duration-300">
                    <Image
                        src={
                            tour.image?.startsWith('http')
                                ? tour.image
                                : `/galleryimg/${tour.image || 'default-tour.jpg'}`
                        }
                        alt={tour.package_name}
                        fill
                        className="object-cover"
                        priority
                    />

                </div>
            </a>
        </div>
    );

}
