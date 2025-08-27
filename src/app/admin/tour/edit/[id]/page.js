'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminSidebar from '../../../sidebar';
import AdminHeader from '../../../header';
import LexicalEditor from '../../../../../components/LexicalEditor';

export default function EditTourPage() {
    const { id } = useParams();
    const router = useRouter();
    const [tour, setTour] = useState(null);
    const [itinerary, setItinerary] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const res = await fetch(`https://my-vacation-backend.onrender.com/api/tour-packages/${id}`);
                const data = await res.json();
                setTour(data.tour);
                setItinerary(data.itinerary || []);
            } catch (error) {
                console.error('Failed to fetch tour:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [id]);

    const slugify = (text) => {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTour((prev) => ({
            ...prev,
            [name]: value,
            url: name === 'package_name' ? slugify(value) : prev.url,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setImageFile(file);
    };

    const handleItineraryChange = (index, field, value) => {
        const updated = [...itinerary];
        updated[index][field] = value;
        setItinerary(updated);
    };

    const addItineraryDay = () => {
        setItinerary([...itinerary, { title: '', description: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            for (const key in tour) {
                formData.append(key, tour[key]);
            }
            if (imageFile) {
                formData.append('image', imageFile);
            }

            // Properly serialize the itinerary data
            const serializedItinerary = itinerary.map(day => ({
                title: day.title,
                description: day.description
            }));

            formData.append('itinerary', JSON.stringify(serializedItinerary));

            const res = await fetch(`https://my-vacation-backend.onrender.com/api/tour-packages/${id}`, {
                method: 'PUT',
                body: formData,
            });
            if (res.ok) {
                alert('Tour updated successfully!');
                router.push('/admin/tour');
            } else {
                const error = await res.text();
                console.error('Update failed:', error);
                alert('Failed to update tour');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    if (loading) return <p className="p-6">Loading...</p>;
    if (!tour) return <p className="p-6">Tour not found</p>;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 ml-64">
                <AdminHeader />
                <main className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Tour Package</h2>
                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">

                        {/* Package Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Package Name</label>
                            <input type="text" name="package_name" value={tour.package_name || ''} onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
                        </div>

                        {/* URL Slug */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                            <input type="text" name="url" value={tour.url || ''} readOnly className="w-full border px-4 py-2 rounded" />
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                            <input type="text" name="tour_duration" value={tour.tour_duration || ''} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
                        </div>

                        {/* Destination */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                            <input type="text" name="tour_destination" value={tour.tour_destination || ''} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
                        </div>



                        {/* Indian / International / Fixed Departure */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Indian</label>
                                <select name="indian" value={tour.indian || 'No'} onChange={handleChange} className="w-full border px-4 py-2 rounded">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">International</label>
                                <select name="international" value={tour.international || 'No'} onChange={handleChange} className="w-full border px-4 py-2 rounded">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fixed Departure</label>
                                <select name="fixed_departure" value={tour.fixed_departure || 'No'} onChange={handleChange} className="w-full border px-4 py-2 rounded">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>

                        {/* Inclusions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Inclusions</label>
                            <LexicalEditor value={tour.inclusions || ''} onChange={(value) => setTour((prev) => ({ ...prev, inclusions: value }))} />
                        </div>

                        {/* Exclusions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Exclusions</label>
                            <LexicalEditor value={tour.exclusions || ''} onChange={(value) => setTour((prev) => ({ ...prev, exclusions: value }))} />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                            <input type="text" name="tour_price" value={tour.tour_price || ''} onChange={handleChange} className="w-full border px-4 py-2 rounded" />
                        </div>

                        {/* Itinerary Days */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Itinerary</label>
                            {itinerary.map((day, idx) => (
                                <div key={idx} className="border p-4 mb-2 rounded">
                                    <input
                                        type="text"
                                        placeholder={`Day ${idx + 1} Title`}
                                        value={day.title}
                                        onChange={(e) => handleItineraryChange(idx, 'title', e.target.value)}
                                        className="w-full mb-2 px-3 py-1 border rounded"
                                    />
                                    <LexicalEditor
                                        value={day.description}
                                        onChange={(value) => handleItineraryChange(idx, 'description', value)}
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={addItineraryDay} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
                                + Add Day
                            </button>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Image</label>
                            {tour.image && <img src={`${tour.image}`} alt="Current" className="w-40 h-auto border rounded mb-2" />}
                            <input type="file" name="image" onChange={handleImageChange} />
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
                            Update Tour
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );

}