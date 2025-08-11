'use client';

export default function about() {
    return (
        <div>


            <section className="py-10 px-4 md:px-12 bg-white text-black">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    {/* Left: Images and Boxes */}
                    <div className="relative flex justify-center items-center">
                        {/* Main Image */}
                        <img
                            src="/img-1.jpg"
                            alt="Scenic Beach"
                            className="rounded-3xl w-full max-w-md"
                        />

                        {/* 25 Years Box */}
                        <div className="absolute top-0 right-[86px] bg-[#0a98d2] text-white text-center px-6 py-4 rounded-tr-xl rounded-bl-[80px] shadow-lg">
                            <p className="text-xl font-medium">25 Years</p>
                            <p className="text-sm font-medium">Of Experience</p>
                        </div>

                        <div className="absolute bottom-[-50px] left-[100px] transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-4 border-white w-50 h-50 shadow-xl">
                            <img
                                src="/img-1-2.jpg"
                                alt="Traveler"
                                className="w-full h-full object-cover"
                            />
                        </div>


                        {/* 20,000+ Box */}
                        <div className="absolute bottom-0 right-[86px] bg-[#00332d] text-white text-center px-6 py-4 rounded-tl-[100px] rounded-br-xl shadow-lg">
                            <p className="text-xl font-medium">20,000+</p>
                            <p className="text-sm font-medium">Happy Clients</p>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div>
                        <p className="text-[#0a98d2] font-semibold mb-2">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-medium mb-4">Welcome to my vacation holidays</h2>
                        <p className="text-gray-600 mb-4">
                            Welcome to my vacation holidays, your trusted partner in creating unforgettable travel experiences!
                            We specialize in planning both national and international tours tailored to your preferences.
                            Whether you’re organizing a corporate trip, a family vacation, a group adventure, or an educational tour,
                            we ensure every detail is taken care of for a hassle-free journey.
                        </p>
                        <p className="text-gray-600 mb-6">
                            At my vacation holidays, we combine expertise with passion to design memorable itineraries that suit your needs and budget.
                            Let us make your travel dreams a reality..!!
                        </p>

                        <p className="text-[#0a98d2] font-semibold mb-1">Our Motto</p>
                        <p className="text-gray-600 mb-6">
                            Customer satisfaction: It’s the prime motto of our business, which has helped us to build a good network with travelers
                            from the farthest corners of the world. my vacation holidays today holds more than 1200 satisfied travelers and is still framing
                            the travel diaries of fresh clients.
                        </p>

                        <button className="bg-[#0a98d2] text-white px-6 py-2 rounded-md font-medium hover:bg-[#087cb0] transition-all duration-200">
                            VIEW MORE
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}
