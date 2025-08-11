'use client';

import { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import AdminSidebar from '../sidebar';
import AdminHeader from '../header';

export default function Tour() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const res = await fetch('/api/tours');
                const data = await res.json();

                if (Array.isArray(data)) {
                    setTours(data);
                } else {

                    setTours([]);
                }
            } catch (error) {
                console.error('Failed to fetch tour packages:', error);
            }
        };

        fetchTours();
    }, []);



    const handleDelete = async (id) => {
        const confirmDelete = confirm('Are you sure you want to delete this tour package?');
        if (!confirmDelete) return;

        try {
            const res = await fetch(`/api/tour-packages/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setTours((prev) => prev.filter((tour) => tour.id !== id));
            } else {
                console.error('Delete failed:', await res.text());
                alert('Failed to delete tour package.');
            }
        } catch (error) {
            console.error('Error deleting tour package:', error);
            alert('Error deleting tour package.');
        }
    };




    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 ml-64">
                <AdminHeader />

                <main className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Tour Packages</h2>
                        <a
                            href="/admin/tour/add"
                            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded inline-flex items-center gap-2 shadow"
                        >
                            <MdAdd className="text-lg" /> ADD NEW TOUR
                        </a>
                    </div>

                    <div className="bg-white rounded-lg shadow">
                        <div className="border-b p-4 text-lg font-medium text-gray-700">
                            All Tour Packages
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-gray-100 border-b text-gray-600">
                                    <tr>
                                        <th className="px-4 py-3">#</th>
                                        <th className="px-4 py-3">Package Name</th>
                                        <th className="px-4 py-3">Theme Name</th>
                                        <th className="px-4 py-3">Destination</th>
                                        <th className="px-4 py-3">Price</th>
                                        <th className="px-4 py-3">Duration</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {tours.map((tour, index) => (
                                        <tr key={tour.id} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                                            <td className="px-4 py-3">{index + 1}</td>
                                            <td className="px-4 py-3">{tour.package_name}</td>
                                            <td className="px-4 py-3">{tour.theme_name}</td>
                                            <td className="px-4 py-3">{tour.tour_destination}</td>
                                            <td className="px-4 py-3">{tour.tour_price}</td>
                                            <td className="px-4 py-3">{tour.tour_duration}</td>
                                            <td className="px-4 py-3 space-y-2">
                                                <a
                                                    href={`/admin/tour/edit/${tour.id}`}
                                                    className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded w-full text-xs"
                                                >
                                                    <FaEdit /> Edit
                                                </a>
                                                <a
                                                    href={`/admin/tour/seo/${tour.id}`}
                                                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded w-full text-xs"
                                                >
                                                    <FaSearch /> Edit SEO
                                                </a>
                                                <button
                                                    onClick={() => handleDelete(tour.id)}
                                                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded w-full text-xs"
                                                >
                                                    <FaTrash /> Delete
                                                </button>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
