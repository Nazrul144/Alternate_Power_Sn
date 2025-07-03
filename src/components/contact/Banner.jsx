'use client'
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Banner = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="w-full h-96 relative mb-12 ">
        <Image
          className="rounded-lg rounded-t-none"
          src="/assets/images/banner/5.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          quality={100}

          style={{
            bbackgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}

        />
        {/*Container Box*/}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
          className="absolute inset-0 flex justify-center items-center">
          <div className=" w-96 h-44  flex flex-col justify-center items-center bg-black/30 border-[1px] shadow-xl border-white rounded-lg">
            <h1 className="text-white text-4xl font-extrabold">CONTACT US</h1>
            <p className="text-white mt-2 text-xl font-bold">Get in Touch for Car Services</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
