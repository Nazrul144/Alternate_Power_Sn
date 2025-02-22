'use client'
import { useSession } from "next-auth/react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const {data} = useSession();

    {/*Send Email function*/}
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a5654uh', 'template_je41myo', form.current, {
        publicKey: 'EyGO7y0039nyztZLQ',
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-center text-xl text-[#D1A054]">~~~~ Send Us a Message ~~~~</h1>
      <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl mx-auto mt-2 ">
      CONTACT FORM
      </h1>

      {/*Contact Form*/}
      <div >
      {/* Form*/}
      <div className="bg-[#F3F3F3] p-12 my-12 rounded-lg lg:px-32 ">
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-2 gap-5 w-full">
            
            <input className="px-4 py-2 rounded-lg outline-none" name="user_name" type="text" defaultValue={data?.user?.name} placeholder="Your Name" />
          
            <input className="px-4 py-2 rounded-lg outline-none" name="user_email" type="text" defaultValue={data?.user?.email} placeholder="Your Email" />
            <input className="px-4 py-2 rounded-lg outline-none" type="number" name="user_phone" placeholder="Your Phone" />
            <input className="px-4 py-2 rounded-lg outline-none" type="text" name="user_address" placeholder="Present Address" />
          </div>
          <textarea className="w-full rounded-lg mt-6 text-stone-500 pl-2 pt-2 h-44" name="Message" id="" defaultValue="Message" placeholder="Message"></textarea>
          <input className="btn btn-primary text-white w-full" type="submit" value="Send Message" />
        </form>
      </div>
    </div>

    </div>
  );
};

export default ContactForm;
