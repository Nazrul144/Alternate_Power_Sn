'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Link from 'next/link';

const About = () => {

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
                        <Link href="/contact">Contact for Quote & Visit</Link>
                    </Button>


                    <h1 className="mt-2 font-bold">Or call us</h1>
                    <a href="tel:+0683193323" className="font-bold text-sky-600 text-xl">068 319 3323</a>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default About;
