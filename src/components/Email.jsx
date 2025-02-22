import Script from 'next/script';
import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';


const Email = () => {

    useEffect(()=>{
        emailjs.init({
            publicKey: 'EyGO7y0039nyztZLQ'
        })
    },[])
    return (
        <div>
            <Script
            src='https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
            strategy='afterInteractive'
            />
        </div>
    );
}

export default Email;
