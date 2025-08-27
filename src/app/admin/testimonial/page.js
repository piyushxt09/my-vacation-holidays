'use client';

import { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import AdminSidebar from '../sidebar';
import AdminHeader from '../header';

export default function TestimonialPage() {
    const [testimonials, setTestimonials] = useState([]);

    // ✅ Fetch Testimonials
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('https://my-vacation-backend.onrender.com/api/testimonials');
                const data = await res.json();

                if (Array.isArray(data)) {
                    setTestimonials(data);
                } else {
                    setTestimonials([]);
                }
            } catch (error) {
                console.error('Failed to fetch testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    // ✅ Delete Testimonial
    const handleDelete = async (id) => {
        const confirmDelete = confirm('Are you sure you want to delete this testimonial?');
        if (!confirmDelete) return;

        try {
            const res = await fetch(`https://my-vacation-backend.onrender.com/api/delete-testimonial/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                alert('Testimonial Deleted Successfully');
                // ✅ update state instead of reloading
                setTestimonials((prev) => prev.filter((t) => t._id !== id));
            } else {
                console.error('Delete failed:', await res.text());
                alert('Failed to delete testimonial.');
            }
        } catch (error) {
            console.error('Error deleting testimonial:', error);
            alert('Error deleting testimonial.');
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 ml-64">
                <AdminHeader />

                <main className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800">All Testimonials</h2>
                        <a
                            href="/admin/testimonial/add"
                            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded inline-flex items-center gap-2 shadow"
                        >
                            <MdAdd className="text-lg" /> Add New Testimonial
                        </a>
                    </div>

                    <div className="bg-white rounded-lg shadow">
                        <div className="border-b p-4 text-lg font-medium text-gray-700">
                            Testimonials List
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-gray-100 border-b text-gray-600">
                                    <tr>
                                        <th className="px-4 py-3">#</th>
                                        <th className="px-4 py-3">Video URL</th>
                                        <th className="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {testimonials.map((t, index) => (
                                        <tr key={t._id} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                                            <td className="px-4 py-3">{index + 1}</td>
                                            <td className="px-4 py-3">{t.video_url}</td>
                                            <td className="px-4 py-3">
                                                <button
                                                    onClick={() => handleDelete(t._id)}
                                                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                                                >
                                                    <FaTrash /> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {testimonials.length === 0 && (
                                <p className="p-4 text-gray-500 text-center">No testimonials found.</p>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
