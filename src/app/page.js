'use client';

import Header from './home/header';
import { useEffect, useState } from 'react';
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
import './globals.css';
import dynamic from 'next/dynamic';

const DatePickerWrapper = dynamic(() => import('../components/DatePickerWrapper'), { ssr: false });

import {
  faMapMarkerAlt,
  faCalendarAlt,
  faGlobe,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [startDate, setStartDate] = useState(null);
  const [tourType, setTourType] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <>
      <div className="relative min-h-screen bg-[url('/bg.png')] bg-cover bg-center text-white">
        <div className="absolute inset-0 z-0"></div>

        <Header />

        {/* Search Bar */}
        <section className="relative flex justify-center md:mt-20 mt-5 px-4">
          <div className="bg-white justify-around md:rounded-full rounded shadow-lg p-4 flex flex-col md:flex-row md:items-center items-start space-y-4 md:space-y-0 md:space-x-6 w-full max-w-4xl text-black">

            {/* Where */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary border rounded p-3" />
              <div>
                <p className="text-xs font-medium">Where</p>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="text-sm outline-none text-black w-full md:w-auto"
                />
              </div>
            </div>

            {/* When */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-primary border rounded p-3" />
              <div>
                <p className="text-xs font-medium">When</p>
                <DatePickerWrapper
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>

            {/* Tour Type */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <FontAwesomeIcon icon={faGlobe} className="text-primary border rounded p-3" />
              <div>
                <p className="text-xs font-medium mb-1">Tour Type</p>
                <div className="relative">
                  <select
                    value={tourType}
                    onChange={(e) => setTourType(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 text-sm text-gray-700 rounded-lg px-4 py-1 pr-8 shadow-sm focus:outline-none"
                  >
                    <option value="">All tours</option>
                    <option value="adventure">Adventure</option>
                    <option value="family">Family</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="cultural">Cultural</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button className="bg-primary hover:bg-blue-700 text-white p-3 cursor-pointer rounded-full md:w-25 w-80">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </section>

        {/* Hero Text */}
        <section className="relative text-center mt-12 px-6">
          <h1 className="text-3xl md:text-5xl font-medium drop-shadow-md">Find Next Place To Visit</h1>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Discover amazing places at exclusive deals. Eat, Shop, Visit <br className="hidden md:block" />
            interesting places around the world.
          </p>
        </section>
      </div>

      {/* Other sections */}
      <WhyChooseUs />
      <Discount />
      <Domestic />
      <International />
      <ThemeDestinations />
      <WeekendTrips />
      <PromoBanner />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
