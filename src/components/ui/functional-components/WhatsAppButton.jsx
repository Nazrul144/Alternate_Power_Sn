import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '8801758752528'; // Your number with country code if needed, e.g. '8801758752528'
  const message = encodeURIComponent('Hello APS, I would like to request a quote.');
  

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      {/* WhatsApp Icon SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.785 11.785 0 0012 0C5.372 0 0 5.372 0 12c0 2.107.549 4.142 1.59 5.932L0 24l6.312-1.62A11.865 11.865 0 0012 24c6.627 0 12-5.373 12-12 0-3.208-1.256-6.22-3.48-8.52zm-8.46 17.793a9.52 9.52 0 01-5.13-1.503l-.364-.23-3.743.961.998-3.647-.238-.375a9.547 9.547 0 11%2012.6%2012.601zM16.17 15.3c-.262-.131-1.55-.763-1.79-.851-.24-.088-.415-.131-.59.131-.175.262-.675.85-.828 1.025-.152.175-.304.197-.566.066-.262-.131-1.105-.406-2.106-1.3-.778-.694-1.3-1.55-1.452-1.812-.152-.263-.016-.405.115-.537.118-.117.262-.304.393-.456.131-.152.175-.262.262-.438.088-.175.044-.33-.022-.46-.066-.131-.59-1.425-.808-1.95-.213-.512-.43-.443-.59-.45l-.507-.009c-.175 0-.46.065-.7.33s-.918.9-.918 2.2.94 2.55 1.07 2.73c.13.175 1.85 2.82 4.49 3.955.628.27 1.117.43 1.5.55.63.21 1.2.18 1.65.11.503-.08 1.55-.63 1.77-1.24.22-.61.22-1.135.154-1.25-.066-.113-.24-.18-.5-.31z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
