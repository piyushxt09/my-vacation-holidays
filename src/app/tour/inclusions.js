import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default function InclusionsExclusions({ tourInclusion }) {
    const wrapList = (html, icon, colorClass) => {
        const cleanHtml = html.replace(/<\/?[^>]+(>|$)/g, "\n"); // replace all tags with line breaks
        const items = cleanHtml
            .split(/\n+/) // split on multiple new lines
            .map(line => line.trim())
            .filter(Boolean);

        return (
            <ul className="space-y-2">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                        <FontAwesomeIcon icon={icon} className={`${colorClass} mr-2 mt-1`} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        );
    };


    return (
        <section className="bg-white py-10">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 border-t pt-10 text-black">
                Inclusions / Exclusions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {wrapList(tourInclusion.inclusions, faCheckCircle, 'text-blue-500')}
                {wrapList(tourInclusion.exclusions, faTimesCircle, 'text-red-500')}
            </div>
        </section>
    );
}
