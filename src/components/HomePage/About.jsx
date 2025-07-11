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
import Link from 'next/link';

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
                className='grid grid-cols-1 lg:grid-cols-2 px-4'>
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
                        <Image className='rounded-lg max-w-full' src='/assets/images/about_us/person.jpg' alt='Person' width={600} height={800} />
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
                    <h1 className="font-extrabold text-2xl text-center mx-auto mt-2 mb-8 text-[#FF3811]">About Us</h1>
                    <h2 className="text-xl text-[#FF3811] italic text-center mt-2 mb-8">Your Partner in Power & Property Solutions</h2>

                    <p className="text-lg text-gray-600 mt-4">
                        Alternate Power Solutions (APS) is a Cape Town-based service provider offering comprehensive electrical, solar, property maintenance, plumbing, carpentry, roofing, and commercial painting solutions for residential, commercial, and industrial clients.
                    </p>

                    <h3 className="text-xl font-semibold text-[#FF3811] mt-8">Our Origins</h3>
                    <p className="text-lg text-gray-600">
                        Founded in 2015 as a family-run business, APS began with a focus on off-grid power, inverter backup systems, and solar installations. Over the past decade, we've built a solid reputation for delivering practical and affordable energy solutions.
                    </p>

                    <h3 className="text-xl font-semibold text-[#FF3811] mt-8">How We’ve Grown</h3>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Electrical Installations & 24/7 Call-Outs</li>
                        <li>Solar & Battery Backup Systems</li>
                        <li>Waterproofing & Roof Repairs</li>
                        <li>White Boxing & Commercial Painting</li>
                        <li>Plumbing Services</li>
                        <li>Carpentry & Property Maintenance</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#FF3811] mt-8">Who We Work With</h3>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>Property Developers</li>
                        <li>Commercial & Retail Landlords</li>
                        <li>Facilities Managers</li>
                        <li>Industrial Sites & Warehouses</li>
                        <li>Residential Clients</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#FF3811] mt-8">Why APS?</h3>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li>One contractor for all your needs</li>
                        <li>Fast, responsive, and professional</li>
                        <li>Hands-on leadership and skilled teams</li>
                        <li>Cost-effective and future-ready solutions</li>
                        <li>Proudly based in Cape Town, serving the Western Cape</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#FF3811] mt-8">Let’s Work Together</h3>
                    <p className="text-lg text-gray-600 mb-4">Whether you're planning a solar installation, preparing a site for leasing, or fixing a leaking roof — APS has the skills, tools, and track record to get it done right.</p>
                    <Button  as="a"
                        variant="outline"
                        className="bg-[#ff3811] text-white hover:bg-[#e04a10] rounded-md">
                        <Link href="/contact">Get A Free Quote</Link>
                    </Button>

                    <div className="mt-6">
                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-[#ff3811] text-white hover:bg-[#e04a10] rounded-md">Get A Free Quote</Button>
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
                                            <div>
                                                {/* Form*/}
                                                <div className="bg-transparent border-[1px] border-sky-200 shadow-xl p-12 my-12 rounded-lg lg:px-32">
                                                    <form onSubmit={handleFormSubmit}>
                                                        <div className="w-full flex flex-col space-y-4">
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
                                                            <input className="btn btn-primary text-white w-full mt-6" type="submit" value="Get 100% Free Quote Now" />
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

                    <h1 className="mt-2 font-bold">Or call us</h1>
                    <a href="tel:+0683193323" className="font-bold text-sky-600 text-xl">068 319 3323</a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;
