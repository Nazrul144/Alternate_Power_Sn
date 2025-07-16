'use client'
import React, { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const Banner = () => {
  const [service, setService] = useState('');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_ID);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!service) {
      Swal.fire({
        title: "Please select a service!",
        icon: "warning",
      });
      return;
    }

    const formElement = e.target;

    const formData = new FormData(formElement);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_SERVICE_TEMPLATE_ID,  
        formElement
      )
      .then(() => {
        Swal.fire({
          title: "Your message has been sent successfully!",
          icon: "success"
        });
        formElement.reset();
        setService('');
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        Swal.fire({
          title: "Failed to send message.",
          text: error.text,
          icon: "error"
        });
      });
  };

  return (
    <div className="mt-[75px]">
      <div className="carousel w-full rounded-xl rounded-t-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/${index + 1}.jpeg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat"
          >
            <div className="lg:flex lg:gap-44 items-center">
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <div className="h-full w-full flex items-center lg:pl-36">
                  <div className="px-2">
                    <h1 className=" text-2xl mt-6 lg:mt-0 lg:text-4xl font-bold text-white">{slide.title}</h1>
                    <p className="text-white mb-2 lg:w-[500px] text-justify lg:mt-3 mt-0 px-6 lg:px-0">{slide.description}</p>
                    <div className="lg:mt-6">
                      <div className="lg:text-4xl text-yellow-500 flex gap-2 lg:mb-6 mb-2">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <Link href={'/blog'} className="btn btn-primary  text-white">Discover More</Link>
                      <Link href={'/contact'} className="btn btn-outline text-white ml-4">Contact Us</Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <div className="bg-transparent border-[1px] border-sky-200 shadow-xl lg:p-12 p-4 mt-2 lg:my-12 rounded-lg lg:px-32 ">
                  <form onSubmit={sendEmail}>
                    <div className="w-full flex flex-col space-y-4">

                      <div className="w-full">
                        <label htmlFor="first_name" className="block text-sm font-medium text-white">First Name</label>
                        <input
                          className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                          name="first_name"
                          id="first_name"
                          type="text"
                          placeholder="Your First Name"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="last_name" className="block text-sm font-medium text-white">Last Name</label>
                        <input
                          className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                          name="last_name"
                          id="last_name"
                          type="text"
                          placeholder="Your Last Name"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email *</label>
                        <input
                          className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                          name="from_email"
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="phone" className="block text-sm font-medium text-white">Phone *</label>
                        <input
                          className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                          name="phone"
                          id="phone"
                          type="tel"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-4 ">
                      <h1 className="mb-2 font-semibold text-white">What service would you like?</h1>
                      <RadioGroup value={service} onValueChange={setService}>
                        <div className="flex items-center gap-3 text-white">
                          <RadioGroupItem value="Electrical Installations & 24/7 Call-Outs" id="r1" name="service" />
                          <Label htmlFor="r1">Electrical Installations & 24/7 Call-Outs</Label>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <RadioGroupItem value="Solar & Battery Backup Systems" id="r2" name="service" />
                          <Label htmlFor="r2">Solar & Battery Backup Systems</Label>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <RadioGroupItem value="Waterproofing & Roof Repairs" id="r3" name="service" />
                          <Label htmlFor="r3">Waterproofing & Roof Repairs</Label>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <RadioGroupItem value="White Boxing & Commercial Painting" id="r4" name="service" />
                          <Label htmlFor="r4">White Boxing & Commercial Painting</Label>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <RadioGroupItem value="Plumbing Services" id="r5" name="service" />
                          <Label htmlFor="r5">Plumbing Services</Label>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                          <RadioGroupItem value="Carpentry & Property Maintenance" id="r6" name="service" />
                          <Label htmlFor="r6">Carpentry & Property Maintenance</Label>
                        </div>
                      </RadioGroup>
                      {/* Hidden input to make sure service is included in form data */}
                      <input type="hidden" name="service" value={service} />
                    </div>

                    <div className="relative">
                      <input
                        className="btn btn-primary text-white w-full mt-6"
                        type="submit"
                        value="Get 100% Free Quote Now"
                      />
                      <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
            <div className="absolute flex bottom-12 right-12 space-x-4 ">
              <a href={slide.prev} className="btn btn-circle bg-primary outline-none text-white">❮</a>
              <a href={slide.next} className="btn btn-circle bg-primary outline-none text-white">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const slides = [
  {
    title: 'Looking for a trusted electrician in Cape Town?',
    description: 'Our services include 24/7 emergency electrical call-outs, as well as professional installation of inverters and solar panels.',
    next: '#slide2',
    prev: '#slide4',
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide3',
    prev: '#slide1',
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide4',
    prev: '#slide2',
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide1',
    prev: '#slide3',
  },
];

export default Banner;
