import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto mt-40 mb-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-2 '>
                <div className='relative mt-24'>
                    <div>
                        <Image className='rounded-lg' src='/assets/images/about_us/person.jpg' alt='Person' width={500} height={500} />
                    </div>
                    <div className='absolute top-32 left-64'>
                        <Image className='border-8 border-white rounded-lg top-20' src='/assets/images/about_us/parts.jpg' alt='Parts' width={300} height={300} />
                    </div>
                </div>
                <div className='text-justify'>
                    <h1 className='text-primary mb-2 font-bold mt-8 lg:mt-0 text-2xl text-red-600'>About Us</h1>
                    <p className='text-xl text-gray-500'>We are a trusted electrical services provider based in Cape Town, specializing in a wide range of electrical and solar solutions for residential, commercial, and industrial customers. <br />
                     Founded in 2015, Alternate Power Solutions (APS) started as a family-owned business focusing on off-the-grid power solutions, electrical backup systems, and solar energy solutions. <br />
                     With over 9 years of experience, we are proud of our reputation for delivering practical, affordable, and sustainable energy solutions. Whether it's providing solar panel installations, solar battery backups, or solar-powered solutions, we ensure that our clients enjoy reliable and cost-effective power without the need for additional financial burdens. <br />
                      Our goal is to help you switch to a more sustainable and eco-friendly energy source, all while keeping the cost manageable. Additionally, we offer expert waterproofing & roof repair services to safeguard your property from leaks and damage, and provide plumbing services for installations, repairs, and maintenance, ensuring that your home or business runs smoothly.
                    </p>
                    <button className="btn btn-primary  text-white mt-4">Get A Free Quote</button>
                    <h1 className='mt-2 font-bold'>Or call us</h1>
                    <h1 className='font-bold text-sky-600 text-xl'>068 319 3323</h1>
                </div>
            </div>
        </div>
    );
}

export default About;
