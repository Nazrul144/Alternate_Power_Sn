import React from 'react';
import Banner from './contact/Banner';
import Location from './contact/Location';
import ContactForm from './contact/ContactForm';


const Contact = () => {
    return (
        <div>
            <h1>This is contact page</h1>
            <Banner/>
            <Location/>
            <ContactForm/>
        </div>
    );
}

export default Contact;
