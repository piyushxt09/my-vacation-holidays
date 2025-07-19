
import Header from './home/header';
import WhyChooseUs from './home/whyChooseUs';
import Discount from './home/discount';
import International from './home/international';
import Domestic from './home/domestic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ThemeDestinations from './home/themeDestination';
import WeekendTrips from './home/weekandTrips';
import PromoBanner from './home/banner';
import TestimonialSlider from './home/testimonials';
import Footer from './home/footer';
import './globals.css'

import {
  faMapMarkerAlt,
  faCalendarAlt,
  faGlobe,
  faArrowRight,

} from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  return (
    <>
      <div className="relative min-h-screen bg-[url('/bg.png')] bg-cover bg-center text-white">
        <div className="absolute inset-0  z-0"></div>

        <Header />

        <section className="relative  flex justify-center md:mt-20 mt-5 px-4 ">
          <div className="bg-white justify-around md:rounded-full rounded shadow-lg p-4 flex flex-col md:flex-row md:items-center items-start space-y-4 md:space-y-0 md:space-x-6 w-full max-w-4xl text-black">
            {/* Where */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary border rounded p-3" />
              <div>
                <p className="text-xs font-medium text-gray-400">Where</p>
                <input type="text" placeholder="Search destinations" className="text-sm outline-none w-full md:w-auto" />
              </div>
            </div>

            {/* When */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-primary border rounded p-3" />
              <div>
                <p className="text-xs font-medium text-gray-400">When</p>
                <p className="text-sm">Feb 05 - March 14</p>
              </div>
            </div>

            {/* Tour Type */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <FontAwesomeIcon icon={faGlobe} className="text-primary border rounded p-3" />
              <div>
                <p className="text-xs font-medium text-gray-400">Tour Type</p>
                <p className="text-sm">All tours</p>
              </div>
            </div>

            {/* Submit */}
            <button className="bg-primary hover:bg-blue-700 text-white p-3 cursor-pointer rounded-full md:w-25 w-80">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </section>
        <section className="relative  text-center mt-12 px-6">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-md">Find Next Place To Visit</h1>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Discover amazing places at exclusive deals. Eat, Shop, Visit <br className="hidden md:block" />
            interesting places around the world.
          </p>
        </section>
      </div>

      < WhyChooseUs />

      <Discount />

      < Domestic />

      <International />

      <ThemeDestinations />

      <WeekendTrips />

      <PromoBanner />

      <TestimonialSlider />

      <Footer />

    </>
  );
}
