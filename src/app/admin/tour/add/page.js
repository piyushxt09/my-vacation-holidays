'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminSidebar from '../../sidebar';
import AdminHeader from '../../header';
import LexicalEditor from '../../../../components/LexicalEditor';


export default function EditTourPage() {
    const [form, setForm] = useState({
        package_name: '',
        tour_duration: '',
        tour_destination: '',
        tour_price: '',
        theme: '',
        indian: 'No',
        international: 'No',
        fixed_departure: 'No'
    });



    const [image, setImage] = useState(null);
    const [inclusions, setInclusions] = useState('');
    const [exclusions, setExclusions] = useState('');

    const [itineraryDays, setItineraryDays] = useState([
        { title: '', description: '' },
    ]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) setImage(file);
    };

    const addItineraryDay = () => {
        setItineraryDays((prev) => [...prev, { title: '', description: '' }]);
    };

    const updateItineraryDay = (index, field, value) => {
        const updated = [...itineraryDays];
        updated[index][field] = value;
        setItineraryDays(updated);
    };

    const removeItineraryDay = (index) => {
        setItineraryDays((prev) => prev.filter((_, i) => i !== index));
    };


    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: checked ? 'Yes' : 'No'
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('package_name', form.package_name);
        formData.append('tour_duration', form.tour_duration);
        formData.append('tour_destination', form.tour_destination);
        formData.append('tour_price', form.tour_price);
        formData.append('theme', form.theme);
        formData.append('indian', form.indian || 'No');
        formData.append('international', form.international || 'No');
        formData.append('fixed_departure', form.fixed_departure || 'No');

        formData.append('inclusions', inclusions);
        formData.append('exclusions', exclusions);
        formData.append('itinerary', JSON.stringify(itineraryDays));

        if (image) {
            formData.append('image', image);
        }

        try {
            const res = await fetch('/api/add-tour', {
                method: 'POST',
                body: formData,
            });

            const result = await res.json();
            if (res.ok) {
                alert('Tour added successfully!');
                window.location.href="/admin/tour";
            } else {
                console.error(result);
                alert('Failed to add tour.');
            }
        } catch (err) {
            console.error('Submit Error:', err);
            alert('Error submitting tour.');
        }
    };




    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 ml-64">
                <AdminHeader />

                <main className="p-6">

                    <form className="bg-white shadow p-6 rounded-lg space-y-6 ">
                        <h2 className="text-2xl font-medium text-gray-800">ADD Tour Package</h2>

                        <div>
                            <label className="block mb-1 font-medium">Package Name</label>
                            <input
                                type="text"
                                name="package_name"
                                value={form.package_name}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Duration</label>
                            <input
                                type="text"
                                name="tour_duration"
                                value={form.tour_duration}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Destination</label>
                            <input
                                type="text"
                                name="tour_destination"
                                value={form.tour_destination}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Inclusions</label>
                            <LexicalEditor value={inclusions} onChange={setInclusions} />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Exclusions</label>
                            <LexicalEditor value={exclusions} onChange={setExclusions} />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Price</label>
                            <input
                                type="text"
                                name="tour_price"
                                value={form.tour_price}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Image</label>
                            <input className='border px-2 rounded' type="file" onChange={handleImageChange} />
                        </div>

                        {['indian', 'international', 'fixed_departure'].map((key) => (
                            <label key={key} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name={key}
                                    checked={form[key] === 'Yes'}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="capitalize">{key.replace('_', ' ')}</span>
                            </label>
                        ))}



                        <div>
                            <label className="block mb-1 font-medium">Theme</label>
                            <select
                                name="theme"
                                value={form.theme}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded">
                                <option value="">Select a theme</option>
                                {['Honeymoon', 'Hill Station', 'Religious', 'Leisure', 'Trekking', 'Adventure'].map((theme) => (
                                    <option key={theme} value={theme}>{theme}</option>
                                ))}
                            </select>
                        </div>


                        <div>
                            <label className="block mb-2 font-medium">Itinerary Days</label>
                            {itineraryDays.map((day, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 mb-4 rounded shadow-sm relative">
                                    <p className="font-semibold mb-2">Day {idx + 1}</p>

                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={day.title}
                                        onChange={(e) => updateItineraryDay(idx, 'title', e.target.value)}
                                        className="w-full border mb-2 px-3 py-2 rounded"
                                    />

                                    <LexicalEditor
                                        value={day.description}
                                        onChange={(value) => updateItineraryDay(idx, 'description', value)}
                                    />

                                    {itineraryDays.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeItineraryDay(idx)}
                                            className="absolute top-2 right-2 text-red-600 hover:underline text-sm"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={addItineraryDay}
                                className="bg-blue-100 text-blue-800 px-4 py-2 rounded mt-2"
                            >
                                + Add Day
                            </button>
                        </div>
                        <button type="submit" onClick={handleSubmit} className=" bg-primary cursor-pointer text-white px-6 py-2 rounded shadow">
                            Submit Tour
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}
