
import Image from 'next/image';
import Link from 'next/link';
import Header from '../tour/header';
import Footer from '../home/footer';
import Banner from './banner';
import "../globals.css";

import ImageGallery from './gallery';

import WeekendTrips from './similarTour';

import PackageDetails from './desctiption';
import BookingForm from './bookingForm';


export const metadata = {
    title: 'Tour Destinations',
    description: 'Learn more about our team and vision.',
};




export default function Page() {
    return (
        <main>
            < Header />
            <Banner />
            <ImageGallery />
            <div className='xl:max-w-[1250px] md:max-w-[1100px] m-auto flex flex-col md:flex-row gap-5'>
                <PackageDetails />
                <BookingForm />
            </div>
            <WeekendTrips />

            < Footer />
        </main>

    );
}
