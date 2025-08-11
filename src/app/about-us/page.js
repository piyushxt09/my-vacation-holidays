
import '../globals.css'
import Header from '../tour/header';
import Banner from './banner';
import About from './about';
import PromoBanner from '../home/banner';
import TestimonialSlider from '../home/testimonials';
import Footer from '../home/footer';
import WhyChooseUs from '../home/whyChooseUs';

export const metadata = {
    title: 'About Us',
    description: 'Learn more about our team and vision.',
};


export default function page() {

    return (
        <>
            <Header />
            <Banner />
            <About />
            <WhyChooseUs />
            <PromoBanner />
            <TestimonialSlider />
            <Footer />

        </>
    );
}
