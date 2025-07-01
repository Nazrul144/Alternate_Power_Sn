import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "@shadcn/ui";

const Banner = () => {
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
              <div className="flex">
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
                    <form >
                      <div className="w-full flex flex-col space-y-4"> {/* Using flex column to stack inputs */}

                        {/* First Name */}
                        <div className="w-full">
                          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            className="px-4 py-2 rounded-lg outline-none w-[400px] mt-1"
                            name="user_name"
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
                          />
                        </div>
                      </div>
                      {/*Radio Group*/}
                      <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="default" id="r1" />
                          <Label htmlFor="r1">Default</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="comfortable" id="r2" />
                          <Label htmlFor="r2">Comfortable</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="compact" id="r3" />
                          <Label htmlFor="r3">Compact</Label>
                        </div>
                      </RadioGroup>
                      <input className="btn btn-primary text-white w-full mt-6" type="submit" value="Send Message" />
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
