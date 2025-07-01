'use client'
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {

  const [service, setService] = useState('Comfortable')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.from_email.value,
      phone: e.target.phone.value,
      service: service

    }
    console.log(formData);
  }

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
              <div className="flex justify-between">
                <div>
                  <div className="h-full w-full flex items-center lg:pl-36">
                    <div className="px-2">
                      <h1 className="text-4xl font-bold text-white">{slide.title}</h1>
                      <p className="text-white mb-2 lg:w-[500px] text-justify mt-3">{slide.description}</p>
                      <button className="btn btn-primary  text-white">Discover More</button>
                      <button className="btn btn-outline text-white ml-4">Latest Project</button>
                    </div>
                  </div>
                </div>
                {/*Contact Form*/}
                <div >
                  {/* Form*/}
                  <div className="bg-[#F3F3F3] p-12 my-12 rounded-lg lg:px-32 ">
                    <form onSubmit={handleFormSubmit}>
                      <div className="w-full flex flex-col space-y-4"> {/* Using flex column to stack inputs */}

                        {/* First Name */}
                        <div className="w-full">
                          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1"
                            name="first_name"
                            id="user_name"
                            type="text"
                            placeholder="Your First Name"
                          />
                        </div>

                        {/* Last Name */}
                        <div className="w-full">
                          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1"
                            name="last_name"
                            id="last_name"
                            type="text"
                            placeholder="Your Last Name"
                          />
                        </div>

                        {/* Email */}
                        <div className="w-full">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1"
                            name="from_email"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="w-full">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone *</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1"
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
                        <h1 className="mb-2 font-bold">What service would you like?</h1>
                        <RadioGroup value={service} onValueChange={setService}>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="electrical_call" id="r1" name="service" />
                            <Label htmlFor="r1">24/7 Electrical Call Out</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="inverter_installtion" id="r2" name="service" />
                            <Label htmlFor="r2">Inverter Installation</Label>
                          </div>
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="solar_installation" id="r3" name="service" />
                            <Label htmlFor="r3">Solar Installation</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="relative">
                        <input className="btn btn-primary text-white w-full mt-6 " type="submit" value="Get 100% Free Quote Now" />
                        <FaLongArrowAltRight className="absolute top-[41px] right-24 text-white" />
                      </div>
                    </form>
                  </div>
                </div>
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
    title: 'Affordable, Comprehensive Property Solutions',
    description: 'From solar installations to plumbing and electrical support, APS delivers high-quality, cost-effective services to enhance your property.',
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
