'use client';

import { useState } from 'react';
import AdminSidebar from '../../sidebar';
import AdminHeader from '../../header';

export default function AddTestimonialPage() {
    const [videoUrl, setVideoUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!videoUrl.trim()) {
            alert('Video URL is required');
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("https://my-vacation-backend.onrender.com/api/add-testimonial", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ video_url: videoUrl }), // ✅ must be JSON string
            });


            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to add testimonial');
            }

            alert('Testimonial added successfully!');
            window.location.href = '/admin/testimonial'; // redirect to list page
        } catch (error) {
            console.error('Error adding testimonial:', error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <AdminSidebar />
            <div className="flex-1 ml-64">
                <AdminHeader />

                <main className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Testimonial</h2>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg shadow p-6 space-y-4 width-500"
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Video URL
                            </label>
                            <input
                                type="url"
                                value={videoUrl}
                                onChange={(e) => setVideoUrl(e.target.value)}
                                className="w-full border px-4 py-2 rounded"
                                placeholder="Enter video URL"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-primary cursor-pointer hover:bg-blue-700 text-white px-6 py-2 rounded shadow disabled:opacity-50"
                        >
                            {loading ? 'Saving...' : 'Save Testimonial'}
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}
