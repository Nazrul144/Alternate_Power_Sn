import React from 'react';
import Banner from './contact/Banner';
import Location from './contact/Location';
import ContactForm from './contact/ContactForm';
import CoverageMap from './ui/functional-components/CoverageMap';
import WhatsAppButton from './ui/functional-components/WhatsAppButton';


const Contact = () => {
    return (
        <div>
            <Banner/>
            <Location/>
            <CoverageMap/>
            <ContactForm/>
            <WhatsAppButton/>
        </div>
    );
}

export default Contact;
