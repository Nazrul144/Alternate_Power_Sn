'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const About = () => {

    const [service, setService] = useState(null)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!service) {
            toast.error("Please Select a service")
            return; // Prevent form submission
        }

        const formData = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.from_email.value,
            phone: e.target.phone.value,
            service: service
        }
        setService(formData)
        toast.success('Successfully submitted your details!')


    }

    console.log(service)

    return (
        <div className='container mx-auto mt-28 mb-14'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.3 }}
                className='grid grid-cols-1 lg:grid-cols-2  px-2 '>
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
                    className='relative mt-24'>
                    <div>
                        <Image className='rounded-lg' src='/assets/images/about_us/person.jpg' alt='Person' width={600} height={800} />
                    </div>
                    <div className='absolute top-40 left-[380px]'>
                        <Image className='border-8 border-white rounded-lg top-20' src='/assets/images/about_us/parts.jpg' alt='Parts' width={300} height={300} />
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



                    className='text-justify'>
                    <h1 className="font-extrabold text-2xl mx-auto mt-2 mb-8 text-[#FF3811]">About Us</h1>
                    <p className='text-xl text-gray-500'>We are a trusted electrical services provider based in Cape Town, specializing in a wide range of electrical and solar solutions for residential, commercial, and industrial customers. <br />
                        Founded in 2015, Alternate Power Solutions (APS) started as a family-owned business focusing on off-the-grid power solutions, electrical backup systems, and solar energy solutions. <br />
                        With over 9 years of experience, we are proud of our reputation for delivering practical, affordable, and sustainable energy solutions. Whether it's providing solar panel installations, solar battery backups, or solar-powered solutions, we ensure that our clients enjoy reliable and cost-effective power without the need for additional financial burdens. <br />
                        Our goal is to help you switch to a more sustainable and eco-friendly energy source, all while keeping the cost manageable. Additionally, we offer expert waterproofing & roof repair services to safeguard your property from leaks and damage, and provide plumbing services for installations, repairs, and maintenance, ensuring that your home or business runs smoothly.
                    </p>
                    <div className='mt-6'>
                        <Dialog >
                            <form>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-[#ff3811] text-white">Get A Free Quote</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[775px] max-h-[80vh] overflow-y-auto bg-sky-900">
                                    <DialogHeader>
                                        <DialogTitle>
                                            <h1 className='text-center text-2xl font-bold'>Get Free Quote Now:</h1>
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4">
                                        <div className="grid gap-3">
                                            {/*Contact Form*/}
                                            <div >
                                                {/* Form*/}
                                                <div className="bg-transparent border-[1px] border-sky-200 shadow-xl p-12 my-12 rounded-lg lg:px-32 ">
                                                    <form onSubmit={handleFormSubmit}>
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
                                                                    <Label htmlFor="r1" >24/7 Electrical Call Out</Label>
                                                                </div>
                                                                <div className="flex items-center gap-3 text-white">
                                                                    <RadioGroupItem value="inverter_installtion" id="r2" name="service" />
                                                                    <Label htmlFor="r2">Inverter Installation</Label>
                                                                </div>
                                                                <div className="flex items-center gap-3 text-white">
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
                                    </div>
                                
                                </DialogContent>
                            </form>
                        </Dialog>
                    </div>
                    <h1 className='mt-2 font-bold'>Or call us</h1>
                    <h1 className='font-bold text-sky-600 text-xl'>068 319 3323</h1>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;
