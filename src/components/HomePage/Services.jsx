'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"; // Fixed motion import from "motion/react" to "framer-motion"
import { Button } from '../ui/button';
import Link from 'next/link';

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/services.json');
      const data = await res.json();
      setServices(data);
    };
    loadData();
  }, []); // No need for window check here


  return (
    <div className='container mx-auto mt-[100px] mb-16'>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-48 text-2xl mx-auto mt-2 mb-8">
        OUR SERVICES
      </motion.h1>
      <div className='grid lg:grid-cols-3 gap-6'>
        {
          services?.map((service) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.3 }}
              key={service.id} className="card bg-base-100 shadow-sm border-[1px] border-sky-300 hover:bg-sky-100 ease-in duration-500 text-gray-500">
              <figure className="px-10 pt-10">
                {/* Display default image if no image is provided */}
                <Image
                  src={service.image || '/assets/default.jpg'}
                  alt="Services_image"
                  width={500}
                  height={500}
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{service.name}</h2>
                <p className='text-justify'>{service.description.substring(0, 110)+"....."}</p>
              </div>
              <Button className='bg-[#ff3811] text-white px-4 py-2 rounded-md transition-all ease-in-out duration-500 hover:bg-[#ff5722]'>
                <Link href={`/services/${service.id}`}>View Details</Link>
              </Button>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
