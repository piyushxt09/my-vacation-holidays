'use client';

import { useState } from 'react';
import {
    FaTachometerAlt,
    FaUsers,
    FaSuitcaseRolling,
    FaChevronDown,
    FaChevronUp,
} from 'react-icons/fa';

export default function AdminSidebar() {
    const [showTourDropdown, setShowTourDropdown] = useState(false);

    return (
        <aside className="w-64 bg-primary text-white fixed top-0 left-0 h-full shadow-lg">
            <div className="p-6 font-medium text-lg border-b border-indigo-700">
                Admin Panel
            </div>

            <nav className="mt-4 space-y-2 px-4 text-sm">
                {/* Dashboard */}
                <a
                    href="/admin"
                    className="flex items-center gap-2 py-2 px-4 rounded hover:bg-indigo-700"
                >
                    <FaTachometerAlt />
                    Dashboard
                </a>
                {/* Tours Dropdown */}
                <div>
                    <button
                        onClick={() => setShowTourDropdown(!showTourDropdown)}
                        className="w-full flex items-center justify-between py-2 px-4 rounded hover:bg-indigo-700"
                    >
                        <span className="flex items-center gap-2">
                            <FaSuitcaseRolling />
                            Packages
                        </span>
                        {showTourDropdown ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {showTourDropdown && (
                        <div className="ml-6 mt-1 space-y-1">
                            <a
                                href="/admin/tour"
                                className="block px-2 py-1 rounded hover:bg-indigo-600"
                            >
                                All Tours
                            </a>
                            <a
                                href="/admin/tour/add"
                                className="block px-2 py-1 rounded hover:bg-indigo-600"
                            >
                                Add Tour
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </aside>
    );
}
