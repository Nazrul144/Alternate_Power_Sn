'use client'
import React, { useState } from 'react';
import { Button } from '../button';
import { ImWhatsapp } from "react-icons/im";

const WhatsAppButton = () => {
    const [visible, setVisible] = useState(true);
    const phoneNumber = '8801886531287';
    const message = encodeURIComponent('Hello APS, I would like to request a quote.');

    if (!visible) return null;

    return (
        <div className="fixed bottom-5 right-5 flex items-center space-x-2 z-50">
            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${phoneNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
            >
                <ImWhatsapp />
            </a>

            {/* Close Button */}
            <div className="fixed bottom-5 right-5 z-50">
                <div className="relative inline-block">
                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${message}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
                    >
                        <ImWhatsapp />
                    </a>

                    {/* Close Button */}
                    <Button
                        onClick={() => setVisible(false)}
                        aria-label="Close WhatsApp button"
                        className="absolute -top-2 -right-4 bg-white text-red-700 text-xl w-7 h-7 rounded-full shadow-md hover:bg-gray-100 focus:outline-none flex items-center justify-center"
                    >
                        &times;
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default WhatsAppButton;
