import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto mt-40 mb-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-2'>
                <div className='relative'>
                    <div>
                        <Image className='rounded-lg' src='/assets/images/about_us/person.jpg' alt='Person' width={400} height={500} />
                    </div>
                    <div className='absolute top-20 left-36'>
                        <Image className='border-8 border-white rounded-lg top-20' src='/assets/images/about_us/parts.jpg' alt='Parts' width={300} height={300} />
                    </div>
                </div>
                <div className='text-justify'>
                    <h1 className='text-primary mb-2 font-bold mt-8 lg:mt-0 text-2xl text-red-600'>About Us</h1>
                    <h1 className='font-bold text-xl w-96 mb-2'>We are experienced and skilled in delivering quality solutions in this field.</h1>
                    <p className='text-sm text-gray-500'>At APS (Alternate Power Solutions), we provide high-quality property solutions, including solar installations, electrical services, waterproofing, plumbing, and carpentry. With over 30 years of experience, we deliver reliable, cost-effective services that enhance the value of your property. We offer turnkey solutions for commercial, residential, and industrial projects, ensuring long-term results for our clients.</p>
                    <button className="btn btn-primary  text-white mt-20">Discover More</button>
                </div>
            </div>
        </div>
    );
}

export default About;
