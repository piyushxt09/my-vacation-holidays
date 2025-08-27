'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState, useEffect } from 'react';

export default function TestimonialSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [videos, setVideos] = useState([]);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('https://my-vacation-backend.onrender.com/api/testimonials');
        const data = await res.json();

        if (Array.isArray(data)) {
          setVideos(data.map((t) => t.video_url)); // only store video_url
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="pb-12 bg-white">
      <div className="m-auto px-4 xl:max-w-[1300px] md:max-w-[1100px]">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 text-center">
          Client's Testimonials
        </h2>

        {videos.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={!isHovered ? { delay: 3000, disableOnInteraction: false } : false}
            loop
            onSwiper={(swiper) => {
              swiper.el.addEventListener('mouseenter', () => {
                setIsHovered(true);
                swiper.autoplay.stop();
              });
              swiper.el.addEventListener('mouseleave', () => {
                setIsHovered(false);
                swiper.autoplay.start();
              });
            }}
            className="testimonial-swiper"
          >
            {videos.map((url, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <div className="relative w-full pb-[56.25%]">
                    <iframe
                      src={url}
                      className="absolute inset-0 w-full h-full"
                      title={`Testimonial ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center text-gray-500">No testimonials available.</p>
        )}
      </div>
    </section>
  );
}
