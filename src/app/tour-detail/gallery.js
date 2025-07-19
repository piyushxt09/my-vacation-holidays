import Image from 'next/image';
import Link from 'next/link';

const images = [
    {
        id: 1,
        src: '/img1.jpg',
        alt: 'Beach boats',
        href: '/img1.jpg'
    },
    {
        id: 2,
        src: '/img-2.jpg',
        alt: 'Tropical beach',
        href: '/img1.jpg'
    },
    {
        id: 3,
        src: '/img-3.jpg',
        alt: 'Swing on beach',
        href: '/img1.jpg'
    },
    {
        id: 4,
        src: '/img-4.jpg',
        alt: 'Windmill',
        href: '/img1.jpg'
    },
];

export default function ImageGallery() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Big left image */}
                <Link href={images[0].href} className="md:col-span-2">
                    <div className="relative h-64 md:h-full w-full overflow-hidden rounded-lg hover:scale-101 transition">
                        <Image
                            src={images[0].src}
                            alt={images[0].alt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </Link>

                {/* Right-side images stacked */}
                <div className="grid grid-cols-1  gap-4">
                    <Link href={images[1].href}>
                        <div className="relative h-40 md:h-48 md:w-full w-42 overflow-hidden rounded-lg hover:scale-101 transition">
                            <Image
                                src={images[1].src}
                                alt={images[1].alt}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Link>
                    <div className='flex gap-4 flex-row'>

                        <Link href={images[2].href}>
                            <div className="relative h-40 md:h-48 md:w-50 w-42 overflow-hidden rounded-lg hover:scale-101 transition">
                                <Image
                                    src={images[2].src}
                                    alt={images[2].alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <Link href={images[3].href}>
                            <div className="relative h-40 md:h-48 md:w-50 w-43 overflow-hidden rounded-lg hover:scale-101 transition">
                                <Image
                                    src={images[3].src}
                                    alt={images[3].alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
