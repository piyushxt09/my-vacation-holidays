import Header from '../tour/header';
import Footer from '../home/footer';
import Banner from './banner';
import ContactForm from './contact-form';


export const metadata = {
    title: 'Contact Us',
    description: 'Learn more about our team and vision.',
};


export default function page() {

    return (
        <>
            <Header />
            <Banner />
            <ContactForm />
            <Footer />

        </>
    );
}
