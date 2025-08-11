import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#0b0b3a] text-gray-300 text-sm relative">
            {/* Top Bar */}
            <div className="border-b border-gray-600 px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
                <p className="text-center md:text-left mb-4 md:mb-0">
                    Speak to our expert at <a href="tel:1-800-453-6744" className="text-primary hover:underline">1-800-453-6744</a>
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Book Now
                </button>
            </div>

            {/* Main Footer */}
            <div className="px-4 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <img src="/logo.png" alt="My Vacation Holidays" className="mb-4 w-32" />
                    <p className="mb-2">Subscribe to the free newsletter and stay up to date</p>
                    <input
                        type="email"
                        placeholder="Email"
                        className="px-3 py-2 rounded text-black w-full mb-2"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition">
                        Subscribe
                    </button>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">India Tour</a></li>
                        <li><a href="#" className="hover:text-white">International Tour</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <p className="mb-2">
                        4th Floor, Suraj Tower 2, 405, District Centre,<br />Delhi, 110058
                    </p>
                    <a href="tel:9652018055" className="text-primary hover:underline">96520 18055</a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-600 px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl mx-auto">
                <p className="text-center md:text-left mb-2 md:mb-0">© Copyright myvacationholidays</p>
                <img
                    src="/payment-icons.png"
                    alt="Payment Methods"
                    className="mx-auto md:mx-0 w-48 rounded"
                />
            </div>

            {/* Floating Icons with Wave Animation */}
            <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50 items-center">
                {/* WhatsApp */}
                <a
                    href="https://wa.me/919652018055"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
                >
                    <span className="absolute w-full h-full rounded-full border-2 border-green-400 animate-ping"></span>
                    <FaWhatsapp className="text-white text-4xl relative z-10" />
                </a>

                {/* Call */}
                <a
                    href="tel:9652018055"
                    className="relative flex items-center justify-center bg-primary p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                    <span className="absolute w-full h-full rounded-full border-2 border-blue-400 animate-ping"></span>
                    <FaPhoneAlt className="text-white text-2xl relative z-10" />
                </a>
            </div>
        </footer>
    );
}
