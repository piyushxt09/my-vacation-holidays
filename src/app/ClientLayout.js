'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Loader from '../components/Loader'; // adjust path

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 800); // small delay for smoothness
        return () => clearTimeout(timeout);
    }, [pathname]); // runs on every route change

    return loading ? <Loader /> : children;
}
