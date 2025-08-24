
import Image from 'next/image';
import Link from 'next/link';
import Header from './header';
import Banner from './banner';
import Footer from '../home/footer';
import "../globals.css";


export const metadata = {
    title: 'Fixed Tour',
    description: 'Learn more about our team and vision.',
};



export default function Page() {
    return (
        <main>
            < Header />
            <Banner />
            < Footer />
        </main>

    );
}
