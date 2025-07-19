
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const inclusions = [
    'Beverages, drinking water, morning tea and buffet lunch',
    'Local taxes',
    'Hotel pickup and drop-off by air-conditioned minivan',
    'InsuranceTransfer to a private pier',
    'Soft drinks',
    'Tour Guide',
];

const exclusions = [
    'Towel',
    'Tips',
    'Alcoholic Beverages',
];

export default function InclusionsExclusions() {
    return (
        <section className="bg-white py-10 ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8   border-t pt-10 text-black">Inclusions / Exclusions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Inclusions */}
                <ul className="space-y-4">
                    {inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-800">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 mr-3" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Exclusions */}
                <ul className="space-y-4">
                    {exclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-800">
                            <FontAwesomeIcon icon={faTimesCircle} className="text-red-400 mt-1 mr-3" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
}
