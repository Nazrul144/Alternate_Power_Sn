// WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/YourNumberHere"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    aria-label="Chat with us on WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {/* WhatsApp icon SVG path here */}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M..." />
    </svg>
  </a>
);

export default WhatsAppButton;
