
export default function TourMap() {
    return (
        <section className="bg-white py-10 ">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900  border-t pt-10 mb-6">Tour Map</h2>

            <div className="w-full h-[450px] rounded-md overflow-hidden shadow-lg border">
                <iframe
                    title="Delhi Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392415386!2d77.0688992!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36eced6fecd%3A0x797b762cbab1f3cb!2sDelhi!5e0!3m2!1sen!2sin!4v1627903959871!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}
