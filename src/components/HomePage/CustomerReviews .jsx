'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight, FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "motion/react"

const CustomerReviews = () => {
  return (
    <div
      className="relative rounded-sm"
      style={{
        backgroundImage: 'url(/ratting.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        overflow: 'hidden',
      }}
    >
      {/* Heading positioned on top of the background image */}
      <h1 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-3xl text-center font-bold hidden lg:block">
        CUSTOMER REVIEWS
      </h1>

      {/* Container for Cards, centered */}
      <div className="absolute top-[3%] lg:top-[15%] lg:top-1/5 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row gap-6 w-4/5 lg:w-2/3 space-y-0 lg:space-y-0 max-w-full ">

        {/* First Card */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="bg-transparent border-[0.1px] border-orange-950 p-2 rounded-lg shadow-xl w-full lg:w-1/2 h-auto lg:h-80 flex flex-col items-center justify-center">
          <h2 className=" text-sm lg:text-xl lg:mb-2 text-center text-black">Excellent electrician. Installed an inverter for me in under 2 days that works perfectly and subsequently did other perfect electrical work for me. Highly recommended</h2>
          <h4 className='flex gap-1 mb-4'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h4>
          <div className=" w-12 h-12 lg:w-24 lg:h-24 rounded-full overflow-hidden">
            <Image className="object-cover w-full h-full" src="/ratting_p1.jpg" alt="ratting" width={100} height={100} />
          </div>
          <p className="text-black mt-2 text-center">Martine Cuper</p>
        </motion.div>

        {/* Second Card */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="bg-transparent border-[0.1px] border-orange-950 p-2 rounded-lg shadow-xl w-full lg:w-1/2 h-auto lg:h-80 flex flex-col items-center justify-center">
          <h2 className="text-sm lg:text-xl lg:mb-2 text-center">Excellent electrician. Installed an inverter for me in under 2 days that works perfectly and subsequently did other perfect electrical work for me. Highly recommended</h2>
          <h4 className='flex gap-1 mb-4'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </h4>
          <div className=" w-12 h-12 lg:w-24 lg:h-24 rounded-full overflow-hidden">
            <Image className="object-cover w-full h-full" src="/ratting_p2.avif" alt="ratting" width={100} height={100} />
          </div>
          <p className="text-black mt-2 text-center">Olivia</p>
        </motion.div>
      </div>
      <div className="absolute bottom-2 lg:bottom-6 left-1/2 transform -translate-x-1/2 w-72">
        <Link href={'/'} className="btn btn-primary text-white mt-4 w-full">
          Get Free Quote
          <FaLongArrowAltRight />
        </Link>
      </div>
    </div>
  );
}

export default CustomerReviews;
