import Header from '../header';
import Footer from '../../home/footer';
import Banner from '../banner';
import ImageGallery from '../gallery';
import WeekendTrips from '../similarTour';
import PackageDetails from '../desctiption';
import BookingForm from '../bookingForm';
import "../../globals.css";

export async function generateMetadata({ params }) {
    const { url } = await params;
    const res = await fetch(`http://localhost:5000/api/tour/${url}`);
    if (!res.ok) {
        return { title: "Tour Not Found", description: "This tour could not be found." };
    }
    const tour = await res.json();

    return {
        title: `${tour.package_name} – Book Your Adventure`,
        description: `Discover ${tour.package_name} in ${tour.tour_destination}. Enjoy unforgettable experiences, scenic beauty, and seamless travel arrangements.`,
    };
}

export default async function Page({ params }) {
    const { url } = await params;

    // Fetch tour (with itinerary inside)
    const tourRes = await fetch(`http://localhost:5000/api/tour/${url}`, { cache: "no-store" });
    if (!tourRes.ok) return <div>Tour not found</div>;
    const tour = await tourRes.json();

    // Fetch similar tours
    const similarRes = await fetch(`http://localhost:5000/api/tour/${url}/similar`, { cache: "no-store" });
    const similarTours = await similarRes.json();

    return (
        <main>
            <Header />
            <Banner tour={tour} />
            <ImageGallery tour={tour} />
            <div className="xl:max-w-[1250px] md:max-w-[1100px] m-auto flex flex-col md:flex-row gap-5">
                <PackageDetails tour={tour} itinerary={tour.itinerary} /> {/* ✅ itinerary directly from tour */}
                <BookingForm />
            </div>
            <WeekendTrips similarTourss={similarTours} />
            <Footer />
        </main>
    );
}
