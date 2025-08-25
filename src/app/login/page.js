'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaLock } from 'react-icons/fa'; // Font Awesome Icons

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();

        const res = await fetch("https://my-vacation-backend.onrender.com/api/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // 👈 super important for cookies
        });

        if (res.ok) {
            router.push("/admin"); // ✅ redirect works after cookie is set
        } else {
            alert("Login failed");
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-sm p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-medium mb-6 text-center border-b-2 border-indigo-600 inline-block">
                    Admin Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-3.5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FaLock className="absolute left-3 top-3.5 text-gray-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-primary cursor-pointer text-white font-semibold rounded hover:bg-indigo-900 transition"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
