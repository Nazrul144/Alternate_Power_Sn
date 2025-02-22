import React from 'react';

const ContactForm = () => {
    return (
        <div>
            {/*Container Box*/}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className=" w-96 h-44  flex flex-col justify-center items-center bg-black/30 border-[1px] shadow-xl border-white rounded-lg">
            <h1 className="text-white text-4xl font-extrabold">CONTACT US</h1>
            <p className="text-white mt-2 text-xl font-bold">Get in Touch for Car Services</p>
          </div>
        </div>
        </div>
    );
}

export default ContactForm;
