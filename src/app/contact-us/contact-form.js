'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faInstagram,
    faYoutube,
    faLinkedinIn,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactForm() {
    return (
        <>
            <section className="py-16 px-4 md:px-12 bg-white text-black">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Left: Contact Info */}
                    <div>
                        <h4 className="text-[#0a98d2] font-semibold text-sm uppercase mb-2">Contact Us</h4>
                        <h2 className="text-3xl md:text-4xl font-medium mb-6">Get In Touch With Us</h2>

                        <p className="text-base mb-6">
                            <span className="font-medium text-orange-500">Address:</span> 610 Jaina Tower II, Janakpuri, District Centre, New Delhi - 110058
                        </p>

                        {/* Phone */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#0a98d2] rounded-full p-4 text-white text-lg shadow-md">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </div>
                            <div>
                                <p className="font-semibold">Phone:</p>
                                <p className="text-gray-700">+91- 9650216055, 9971176943</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-[#0a98d2] rounded-full p-4 text-white text-lg shadow-md">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p className="font-semibold">E-mail:</p>
                                <p className="text-gray-700">info@myvacationholidays.com</p>

                            </div>
                        </div>

                        {/* Social */}
                        <div className="pt-4 border-t mt-6">
                            <p className="font-semibold mb-2">Follow us:</p>
                            <div className="flex space-x-4 text-[#0a98d2] text-lg">
                                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
                                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            required
                            className="w-full bg-[#fef8f3] p-4 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-[#0a98d2]"
                        />
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your Email*"
                                required
                                className="w-full bg-[#fef8f3] p-4 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-[#0a98d2]"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone*"
                                required
                                className="w-full bg-[#fef8f3] p-4 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-[#0a98d2]"
                            />
                        </div>
                        <textarea
                            rows="5"
                            placeholder="Your Message..."
                            className="w-full bg-[#fef8f3] p-4 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-[#0a98d2]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#0a98d2] text-white px-8 py-3 cursor-pointer rounded-full font-semibold hover:bg-[#087cb0] transition-all duration-200"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>
            <div>
                <div className="w-full h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0111840975765!2d77.0821234!3d28.629426900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05cddbe8b8db%3A0x162744fb6e4c116!2sJaina%20Tower%20-2%20Commerical%20Complex!5e0!3m2!1sen!2sin!4v1754560350814!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}
