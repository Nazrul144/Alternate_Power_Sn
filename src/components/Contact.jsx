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
            <h1>I frame</h1>
           
        </div>
    );
}

export default Contact;
