'use client';

import { useRouter } from 'next/navigation';

export default function AdminHeader() {
    const router = useRouter();

    function handleLogout() {
        // 🔑 Remove JWT from sessionStorage
        sessionStorage.removeItem("token");

        // Redirect to login
        router.push("/login");
    }

    return (
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
            >
                Logout
            </button>
        </header>
    );
}
