'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminSidebar from '../../../sidebar';
import AdminHeader from '../../../header';

export default function EditTourPage() {
    const { id } = useParams();
    const router = useRouter();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const res = await fetch(`/api/tour-packages/${id}`);
                const data = await res.json();
                setTour(data.tour || data); // Fallback for old format
            } catch (error) {
                console.error('Failed to fetch tour:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTour((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/tour-packages/${id}/seo`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    seo_title: tour.seo_title || '',
                    seo_description: tour.seo_description || '',
                    seo_keyword: tour.seo_keyword || '',
                }),
            });

            if (res.ok) {
                alert('SEO data updated successfully!');
                router.push('/admin/tour');
            } else {
                const errorText = await res.text();
                console.error('Update failed:', errorText);
                alert('Failed to update SEO data');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
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
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit SEO Details</h2>

                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
                        {/* SEO Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
                            <input
                                type="text"
                                name="seo_title"
                                value={tour.seo_title || ''}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </div>

                        {/* SEO Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                            <textarea
                                name="seo_description"
                                value={tour.seo_description || ''}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                                rows={3}
                            />
                        </div>

                        {/* SEO Keywords */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
                            <input
                                type="text"
                                name="seo_keyword"
                                value={tour.seo_keyword || ''}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
                        >
                            Update SEO
                        </button>
                    </form>
                </main>
            </div>
        </div>
    );
}
