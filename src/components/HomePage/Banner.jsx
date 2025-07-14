'use client'
import React, { useRef, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import Link from "next/link";
import { motion } from "motion/react"
import Swal from "sweetalert2";

const Banner = () => {

  const [service, setService] = useState()

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_ID);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current
      )
      .then(
        () => {
          Swal.fire({
            title: "Your message has been sent successfully!",
            text: "You clicked the button!",
            icon: "success"
          });

          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  };


  return (
    <div className="mt-[75px]">
      <div className="carousel w-full rounded-xl rounded-t-none">
        {
          slides.map((slide, index) => (
            <div key={index} id={`slide${index + 1}`}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${index + 1}.jpeg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}


              className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat">
              {/*Button and form on slider*/}
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
                      <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
                      <p className="text-white mb-2 lg:w-[500px] text-justify mt-3">{slide.description}</p>
                      <div className="mt-6">
                        <div className="text-4xl text-yellow-500 flex gap-2 mb-6">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <Link href={'/blog'} className="btn btn-primary  text-white">Discover More</Link>
                        <Link href={'/contact'} className="btn btn-outline text-white ml-4">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/*Contact Form*/}
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
                  {/* Form*/}
                  <div className="bg-transparent border-[1px] border-sky-200 shadow-xl p-12 my-12 rounded-lg lg:px-32 ">
                    <form ref={form} onSubmit={sendEmail} >
                      <div className="w-full flex flex-col space-y-4"> {/* Using flex column to stack inputs */}

                        {/* First Name */}
                        <div className="w-full">
                          <label htmlFor="user_name" className="block text-sm font-medium text-white">First Name</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                            name="first_name"
                            id="user_name"
                            type="text"
                            placeholder="Your First Name"
                          />
                        </div>

                        {/* Last Name */}
                        <div className="w-full">
                          <label htmlFor="last_name" className="block text-sm font-medium text-white">Last Name</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1 bg-transparent border-[1px] border-sky-200 text-white"
                            name="last_name"
                            id="last_name"
                            type="text"
                            placeholder="Your Last Name"
                          />
                        </div>

                        {/* Email */}
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

                        {/* Phone */}
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
                      {/*Radio Group*/}
                      <div className="mt-4">
                        <h1 className="mb-2 font-semibold text-white">What service would you like?</h1>
                        <RadioGroup value={service} onValueChange={setService}>
                          <div className="flex items-center gap-3 text-white">
                            <RadioGroupItem value="electrical_call" id="r1" name="service" />
                            <Label htmlFor="r1" >Electrical Installations & 24/7 Call-Outs </Label>
                          </div>
                          <div className="flex items-center gap-3 text-white">
                            <RadioGroupItem value="inverter_installtion" id="r2" name="service" />
                            <Label htmlFor="r2">Solar & Battery Backup Systems </Label>
                          </div>
                          <div className="flex items-center gap-3 text-white">
                            <RadioGroupItem value="solar_installation" id="r3" name="service" />
                            <Label htmlFor="r3">Waterproofing & Roof Repairs</Label>
                          </div>
                          <div className="flex items-center gap-3 text-white">
                            <RadioGroupItem value="white_boxing" id="r3" name="service" />
                            <Label htmlFor="r3">White Boxing & Commercial Painting</Label>
                          </div>
                          <div className="flex items-center gap-3 text-white">
                            <RadioGroupItem value="plumbing_service" id="r3" name="service" />
                            <Label htmlFor="r3">Plumbing Services</Label>
                          </div>
                          <div className="flex items-center gap-3 text-white">
                            <RadioGroupItem value="carpentry" id="r3" name="service" />
                            <Label htmlFor="r3">Carpentry & Property Maintenance</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="relative">
                        <input className="btn btn-primary text-white w-full mt-6 " type="submit" value="Get 100% Free Quote Now" />
                        <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
                      </div>
                    </form>
                  </div>
                </motion.div>
              </div>
              <div className="absolute flex bottom-12 right-12 space-x-4 ">
                <a href={slide.prev} className="btn btn-circle bg-primary outline-none text-white">
                  ❮
                </a>
                <a href={slide.next} className="btn btn-circle bg-primary outline-none text-white">
                  ❯
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};




const slides = [
  {
    title: 'Looking for a trusted electrician in Cape Town?',
    description: 'Our services include 24/7 emergency electrical call-outs, as well as professional installation of inverters and solar panels.',
    next: '#slide2',
    prev: '#slide4'
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide3',
    prev: '#slide1'
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide4',
    prev: '#slide2'
  },
  {
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
    next: '#slide1',
    prev: '#slide3'
  },
]

export default Banner;
