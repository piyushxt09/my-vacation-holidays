'use client';

import AdminSidebar from "./sidebar";
import AdminHeader from "./header";

export default function AdminPage() {


    return (
        <div className="flex min-h-screen bg-gray-100">

            <AdminSidebar />
            {/* Main Content */}
            <div className="flex-1 ml-64">

                <AdminHeader />

                {/* Page Content */}
                <main className="p-6">
                    <p className="text-gray-700">Welcome to the admin panel.</p>

                </main>
            </div>
        </div>
    );
}
