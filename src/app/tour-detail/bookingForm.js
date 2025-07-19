import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function BookingForm() {
    return (
        <div className=''>
            <div className="md:w-[350px]  p-6 max-h-[560px] border border-blue-300 rounded-xl shadow-sm bg-white">
                <h2 className="text-xl font-bold text-center text-gray-900 mb-6">Book This Tour Now</h2>

                <form className="space-y-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Mobile Number"
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="message"
                            placeholder="Write Something..."
                            rows={4}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200"
                        >
                            Book Now
                        </button>
                    </div>
                </form>
            </div>

            <div className="max-w-md mx-auto p-5 border border-blue-300 rounded-xl shadow-sm bg-white mt-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h2>

                <div className="w-full border border-blue-300 rounded-lg text-center py-2 mb-4">
                    <span className="text-primary font-medium">Call Now +91-2323423232</span>
                </div>

                <div className="flex justify-between gap-4">
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/912323423232"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 p-2"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className='text-2xl' />
                        WhatsApp
                    </a>

                    {/* Call Button */}
                    <a
                        href="tel:+912323423232"
                        className="flex-1 bg-primary hover:bg-blue-600 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2"
                    >
                        <FontAwesomeIcon icon={faPhone} />
                        Call
                    </a>
                </div>
            </div>

        </div>
    );
}
