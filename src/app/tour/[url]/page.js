import Header from '../header';
import Footer from '../../home/footer';
import Banner from '../banner';
import ImageGallery from '../gallery';
import WeekendTrips from '../similarTour';
import PackageDetails from '../desctiption';
import BookingForm from '../bookingForm';
import "../../globals.css";
import { getDBConnection } from '../../../pages/api/db';

export async function generateMetadata({ params }) {
    const { url } = params;
    const db = await getDBConnection();

    // Fetch tour package first
    const [packageRows] = await db.query(
        'SELECT * FROM tour_packages WHERE url = ?',
        [url]
    );

    if (!packageRows.length) {
        return {
            title: 'Tour Not Found',
            description: 'This tour could not be found.',
        };
    }

    const tour = packageRows[0];

    return {
        title: `${tour.package_name} – Book Your Adventure`,
        description: `Discover ${tour.package_name} with our exclusive package. ${tour.tour_destination} awaits with unforgettable experiences, scenic beauty, and seamless travel arrangements.`,
    };
}

export default async function Page({ params }) {
    const { url } = params;
    const db = await getDBConnection();

    // Fetch tour package
    const [packageRows] = await db.query(
        'SELECT * FROM tour_packages WHERE url = ?',
        [url]
    );

    if (!packageRows.length) {
        return <div>Tour not found</div>;
    }

    const tour = packageRows[0];

    // Fetch itinerary
    const [itineraryRows] = await db.query(
        'SELECT * FROM tour_itinerary WHERE tour_package_url = ?',
        [url]
    );

    const [similarToursRows] = await db.query(
        'SELECT * FROM tour_packages WHERE theme_name = ? AND id != ? LIMIT 4',
        [tour.theme_name, tour.id]
    );

    const similarTours = similarToursRows;



    return (
        <main>
            <Header />
            <Banner tour={tour} />
            <ImageGallery tour={tour} />
            <div className='xl:max-w-[1250px] md:max-w-[1100px] m-auto flex flex-col md:flex-row gap-5'>
                <PackageDetails tour={tour} itinerary={itineraryRows} />
                <BookingForm />
            </div>
            <WeekendTrips similarTourss={similarTours} />

            <Footer />
        </main>
    );
}
